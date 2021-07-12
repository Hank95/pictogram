import React, { useState } from "react";
import "./App.css";
import StyleBar from "./Components/StyleBar";
import SketchPad from "./Components/SketchPad";
import Pictures from "./Components/Pictures";

function App() {
  const [pictures, setPictures] = useState([]);

  const [formData, setFormData] = useState({
    color: "",
    stroke: 3,
  });

  const handleData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    const pic = e.target.previousSibling.toDataURL();
    setPictures([...pictures, pic]);
  };
  return (
    <div className="App">
      <StyleBar handleData={handleData} />
      <SketchPad handleSave={handleSave} formData={formData} />
      <Pictures pictures={pictures} />
    </div>
  );
}

export default App;
