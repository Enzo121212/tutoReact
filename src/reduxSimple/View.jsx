import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { playStop, restartGame, pointScored } from "./store";

const View = () => {
  const pointPlayer1 = useSelector((state) => state.player1);
  const pointPlayer2 = useSelector((state) => state.player2);
  const winner = useSelector((state) => state.winner);
  const playing = useSelector((state) => state.playing);
  const dispatch = useDispatch();

  let bgPlaying = "";
  let textPlaying = "";
  if (playing) {
    bgPlaying = "bg-success text-white";
    textPlaying = "Le jeux est en cours";
  } else {
    bgPlaying = "bg-danger text-white ";
    textPlaying = "Le jeux a été arreté";
  }
  let textWinner = "EGALITE";
  switch (winner) {
    case "egalite":
      textWinner = "EGALITE";
      break;

    case "player1":
      textWinner = "Player1 Gagne";
      break;

    case "player2":
      textWinner = "Player2 Gagne";
      break;

    default:
      textWinner = "EGALITE";
      break;
  }

  return (
    <>
      <div className="container text-white">
        <div className="row  d-flex justify-content-center align-items-center">
          <div
            className={
              bgPlaying +
              " col-sm-12  d-flex justify-content-center align-items-center my-3"
            }
            onClick={() => dispatch(playStop())}
          >
            <div className="  p-3 ">{textPlaying}</div>
          </div>
          <button
            className="col-sm-6 bg-warning  p-3"
            onClick={() => dispatch(pointScored("player1"))}
            disabled={!playing}
          >
            <div className="mt-2">Player 1</div>
            <div className="">{pointPlayer1}</div>
          </button>
          <button
            className="col-sm-6 bg-primary  p-3"
            onClick={() => dispatch(pointScored("player2"))}
            disabled={!playing}
            
          >
            <div className="mt-2">Player 2</div>
            <div className="">{pointPlayer2}</div>
          </button>
          <div
            className="bg-info col-sm-12  d-flex justify-content-center align-items-center my-3"
            onClick={() => dispatch(restartGame())}
          >
            <div className="  p-3 ">{textWinner}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
