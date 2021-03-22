import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const callWorker = createAsyncThunk("sample/call-worker", () => {
  const workerCall = new Promise((resolve, reject) => {
    const worker = new Worker(new URL("sample.worker.js", import.meta.url));
    worker.postMessage("Hello");
    console.log("Test");
    resolve();
  });
  return workerCall;
});

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: {
    [callWorker.pending]: (state, action) => {
      state.status = "loading";
    },
    [callWorker.status]: (state, { payload: words }) => {
      state.status = "succeeded";
    },
    [callWorker.rejected]: (state, { error: { message } }) => {
      state.status = "failed";
    },
  },
});

export { callWorker };

export default sampleSlice.reducer;
