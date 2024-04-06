import React from "react";
import "./FileData.css";
import { popUp } from "./popUp";
export const FileData = (props) => {
  const data = props.files.map((f) => (
    <div className="out">
      <img
        className=" fileImage h-21 w-20 "
        src="https://th.bing.com/th/id/OIP.yl502gIVfOAR4EzgTGkFbgAAAA?pid=ImgDet&w=176&h=238&c=7&dpr=1.7"
      />
      <p>filename -{f.file1}</p>
    </div>
  ));
  return (
    <>
      <div className="FileData">
        <div className="grid-col">{data}</div>
        <div className="grid-col">{data}</div>
        <div className="grid-col">{data}</div>
        <div className="grid-col">{data}</div>
      </div>

      <popUp />
    </>
  );
};
