import React, { useEffect, useRef, useState } from "react";
import StyleBar from "./StyleBar";
const SketchPad = ({ handleSave }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvas, setCanvas] = useState(null);
  const [title, setTitle] = useState("");

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
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const newCanvas = canvasRef.current;
    newCanvas.width = 500;
    newCanvas.height = 500;
    newCanvas.style.width = `${500}px`;
    newCanvas.style.height = `${500}px`;
    newCanvas.style.border = "3px solid black";
    newCanvas.fillStyle = "white";
    setCanvas(newCanvas);
  }, []);
  useEffect(() => {
    if (canvas) {
      const context = canvas.getContext("2d");
      context.scale(1, 1);
      context.lineCap = "round";
      context.strokeStyle = formData.color;
      context.lineWidth = formData.stroke;
      context.fillStyle = "white";
      contextRef.current = context;
    }
  }, [canvas, formData.color, formData.stroke]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    console.log(offsetX, offsetY);
  };
  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    contextRef.current.save();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="sketch">
      <StyleBar handleData={handleData} formData={formData} />
      <label for="title">Title:</label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder=" Your Masterpiece"
      />
      <canvas
        className="canvas"
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <button onClick={(e) => handleSave(e, title)}>Save</button>
      <button onClick={clearCanvas}>Clear</button>
    </div>
  );
};

export default SketchPad;
