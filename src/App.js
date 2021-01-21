import "./App.css";
import React, { useState } from "react";
import NameForm from "./components/NameForm";
import AddedPersons from "./components/AddedPersons";
import SendButton from "./components/SendButton";
import axios from "axios";
import * as _ from "lodash";

function App() {
  const [names, setNames] = useState([]);
  const [typedPerson, setTypedPerson] = useState({
    name: "",
    email: "",
  });

  const onChange = (e) => {
    setTypedPerson({
      ...typedPerson,
      [e.target.id]: e.target.value,
    });
  };

  const addName = (e) => {
    e.preventDefault();
    setNames([...names, typedPerson]);
    setTypedPerson({
      name: "",
      email: "",
    });
  };

  const sendNames = (e) => {
    e.preventDefault();

    if (names.length > 1) {
      const body = randomizePairs();

      axios
        .post("/api/sendmail", {
          names: body,
        })
        .then(function (response) {
          setNames([]);
          setTypedPerson({
            name: "",
            email: "",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Addj meg legalább két nevet a sorsoláshoz!");
    }
  };

  const randomizePairs = () => {
    let arr1 = [...names];
    let arr2 = _.shuffle([...arr1]);
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.length === 1 && arr1[i] === _.last(arr2)) {
        i = 0;
        arr2 = _.shuffle([...arr1]);
      }
      while (arr1[i] === _.last(arr2)) {
        arr2 = _.shuffle(arr2);
      }
      let added = arr2.pop();
      newArr.push({
        giftTo: added.name,
        email: arr1[i].email,
      });
    }

    return newArr;
  };

  return (
    <div className="App">
      <h1>Karácsonyi ajándékozó sorsolás</h1>

      <NameForm
        onChange={onChange}
        addName={addName}
        typedPerson={typedPerson}
      />
      <AddedPersons names={names} />
      <SendButton sendNames={sendNames} />
    </div>
  );
}

export default App;
