import React from 'react'
import { useSelector } from "react-redux";

const CounterRedux = () => {
    const selector = useSelector((state) => state.playing);

    let playgame = null;

    if (selector) {
        playgame = (
            <div className="alert alert-success mt-5" role="alert">
                <strong>Le jeu a démarré</strong>
            </div>
        );
    } else {
        playgame = (
            <div className="alert alert-danger mt-5" role="alert">
                <strong>Le jeu a été arrêté</strong>
            </div>
        );
    }

    return (
        <div>
            {playgame}
        </div>
    );

}

export default CounterRedux
