import React, { useEffect, useRef, useState } from "react";
import StyleBar from "./StyleBar";
const SketchPad = ({ handleSave }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvas, setCanvas] = useState(null);
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState([]);
  const [pathAry, setPathAry] = useState([]);

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
    setPoints([]);
  };
  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    setPathAry([...pathAry, points]);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setPoints([...points, { offsetX, offsetY }]);
  };

  const drawPaths = () => {
    // delete everything
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    // draw all the paths in the paths array
    pathAry.forEach((path) => {
      contextRef.current.beginPath();
      contextRef.current.moveTo(path[0].offsetX, path[0].offsetY);
      for (let i = 1; i < path.length; i++) {
        contextRef.current.strokeStyle = path[i].formData.color;
        contextRef.current.lineWidth = path[i].formData.stroke;

        contextRef.current.lineTo(path[i].offsetX, path[i].offsetY);
      }
      contextRef.current.stroke();
    });
  };

  const Undo = () => {
    // remove the last path from the paths array
    pathAry.splice(-1, 1);
    // draw all the paths in the paths array
    drawPaths();
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
      <label className="title" for="title">
        Title:
      </label>
      <input
        className="inputField"
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Your Masterpiece"
      />
      <canvas
        className="canvas"
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <button className="saveBtn" onClick={(e) => handleSave(e, title)}>
        Save
      </button>
      <button className="clearBtn" onClick={clearCanvas}>
        Clear
      </button>
      <button className="undoBtn" onClick={Undo}>
        Undo
      </button>
    </div>
  );
};

export default SketchPad;
