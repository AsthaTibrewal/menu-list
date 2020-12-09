import React, { useState } from "react";
import "./styles.css";
var menuList = {
  breakfast: ["chapati", "alludam", "kulcha", "naan"],
  lunch: ["daal", "paneer", "rice", "fish", "chapati"],
  dinner: ["daal", "paneer", "rice", "fish", "chapati"]
};
export default function App() {
  const [meaning, setMeaning] = useState("");
  var objectKeys = Object.keys(menuList);
  console.log(objectKeys);
  function menuClickHandler(option) {
    var meaning = menuList(option);
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>my menu list</h1>
      {objectKeys.map(function (option) {
        return (
          <button onClick={() => menuClickHandler(option)}> {option}</button>
        );
      })}
    </div>
  );
}
