import React from "react";

const TextBlock = ({ text, color }) => {
  return (
    <div className="showcase__item">
      <div
        style={{
          background: color || "#fff",
        }}
        className={"legacy-text intro"}
      >
        {text && (
          <div
            className="card__title"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TextBlock;
