import React from "react";
import { useDispatch } from "react-redux";
import { playPause } from "./store";

const BouttonPlayPauseRedux = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => dispatch(playPause())}
        >
          Play / Stop
        </button>
      </div>
    </>
  );
};

export default BouttonPlayPauseRedux;
