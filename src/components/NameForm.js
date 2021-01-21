import React from "react";

function NameForm({ onChange, addName, typedPerson }) {
  return (
    <div>
      <h2>Add hozzá a résztvevőket és az email címüket!</h2>
      <form onSubmit={addName}>
        <input
          className="input-field"
          type="text"
          name="name"
          id="name"
          onChange={onChange}
          value={typedPerson.name}
          placeholder="Név"
        />
        <input
          className="input-field"
          type="email"
          name="email"
          id="email"
          onChange={onChange}
          value={typedPerson.email}
          placeholder="email cím"
        />
        <br />
        <button className="myButton" type="submit">
          Hozzáadás
        </button>
      </form>
    </div>
  );
}

export default NameForm;
