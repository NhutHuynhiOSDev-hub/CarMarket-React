import React from "react";

function Button({ className, onClick, title }) {
  return (
    <div className={className} onClick={onClick}>
      {title}
    </div>
  );
}
export default Button;
