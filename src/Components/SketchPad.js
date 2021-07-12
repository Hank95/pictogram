import React, { useEffect, useRef, useState } from "react";

const SketchPad = ({ formData, handleSave }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;
    canvas.style.width = `${500}px`;
    canvas.style.height = `${500}px`;
    canvas.style.border = "3px solid black";

    const context = canvas.getContext("2d");
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = formData.color;
    context.lineWidth = formData.stroke;
    contextRef.current = context;
  }, [formData.color, formData.stroke]);

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
    console.log(contextRef.current);
  };

  return (
    <div>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default SketchPad;
