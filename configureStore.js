import { configureStore } from "@reduxjs/toolkit";

import sampleReducer from "./sampleReducer";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: sampleReducer,
    preloadedState,
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./sampleReducer", () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
