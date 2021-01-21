import React from "react";

function SendButton({ sendNames }) {
  return (
    <div>
      <h3>
        A "varázslat" gombra kattintva megtörténik a sorsolás. A hozzáadottak
        egy-egy nevet fognak kapni emailben. Mindenkit hozzáadtál? Magadat sem
        felejtetted ki? Akkor nyomd meg a gombot! Boldog karácsonyt!
      </h3>
      <button className="myButton" onClick={sendNames}>
        Varázslat!
      </button>
    </div>
  );
}

export default SendButton;
