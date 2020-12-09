import React, { useState } from "react";
import "./styles.css";
var menuList = {
  breakfast: ["chapati", "alludam", "kulcha", "naan"],
  lunch: ["daal", "paneer", "rice", "fish", "chapati"],
  dinner: ["daal", "chicken", " fried-rice", "soya-beans", "chapati"]
};
export default function App() {
  const [meaning, setMeaning] = useState([""]);
  var objectKeys = Object.keys(menuList);

  function menuClickHandler(option) {
    var meaning = menuList[option];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>my menu list</h1>
      {objectKeys.map(function (option, index) {
        return (
          <button key={index} onClick={() => menuClickHandler(option)}>
            {option}
          </button>
        );
      })}
      <ul>
        {meaning.map((items) => {
          return <li> {items}</li>;
        })}
      </ul>
    </div>
  );
}
