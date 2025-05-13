// HoverPreview.jsx
import React from "react";

const HoverPreview = ({ x, y, data, visible }) => {
  if (!visible || !data) return null;

  return (
    <div
      className="hover-preview-box"
      style={{
        top: y + 10,
        left: x + 10,
        position: "absolute",
        zIndex: 1000,
        background: "#fff",
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "8px",
        width: "250px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          style={{ width: "100%", borderRadius: "6px" }}
        />
      )}
      <h4 style={{ marginTop: "8px", fontSize: "16px", fontWeight: "bold" }}>{data.title}</h4>
      <p style={{ fontSize: "14px", color: "#555" }}>{data.description}</p>
    </div>
  );
};

export default HoverPreview;
