import React, { useState } from "react";
import "./ColorPicker.css";

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  const divStyle = {
    backgroundColor: selectedColor,
    width: "75%",
    height: "75vh",
    padding: "30px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "20vh",
  };

  return (
    <div style={divStyle}>
      {showColorList && (
        <div style={listStyle}>
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorClick(color)}
              style={{
                backgroundColor: color,
                width: "50px",
                height: "50px",
                margin: "5px",
                border: "1px solid white",
                cursor: "pointer",
              }}
            >
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => {
          setShowColorList(!showColorList);
        }}
      >
        Pick a color
      </button>
    </div>
  );
}

export default ColorPicker;
