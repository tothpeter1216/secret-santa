import React from "react";

function AddedPersons({ names }) {
  return (
    <div>
      <h2>Hozzáadott személyek</h2>
      {names.map((name) => {
        return (
          <p className="added-person">
            <span className="added-name">{name.name}</span> {name.email}
          </p>
        );
      })}
    </div>
  );
}

export default AddedPersons;
