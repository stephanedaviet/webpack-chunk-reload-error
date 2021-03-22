import React, { useEffect } from "react";

import { callWorker } from "./sampleReducer";

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(callWorker()), [dispatch]);

  console.log("Worker called");

  return <div>Sample app</div>;
};

export { App };
