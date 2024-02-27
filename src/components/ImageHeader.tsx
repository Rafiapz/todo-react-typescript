import React from "react";

function ImageHeader() {
  return (
    <div className="flex items-center mb-8">
      <img
        className="w-28 h-28 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/640px-React_Logo_SVG.svg.png"
        alt=""
      />
      <span className="mx-4"></span>
      <img
        className="w-28 h-28 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png"
        alt=""
      />
    </div>
  );
}

export default ImageHeader;
