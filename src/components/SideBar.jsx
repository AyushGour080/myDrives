import React from "react";
import "./FileData.css";
import "./SideBar.css";

export const SideBar = (props) => {
  const data = props.files.map((f) => (
    <div className=" sider-option flex mx-8 my-6 ">
      folderName - {f.file2}
      <img
        className="h-8 w-8 mx-2"
        src="https://th.bing.com/th/id/OIP.5DEFJ19gCTvlUyaQ4f70MAHaHa?rs=1&pid=ImgDetMain"
      />
    </div>
  ));
  return (
    <>
      <div className="SideBar">
        <div className="search_folder ">
          {/* search logo */}
          <img
            className="h-6 w-6"
            src="https://th.bing.com/th?id=OIP._RTO9yp1xH5aQA0vS7fpHAHaHW&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
            alt=""
          />
          <input
            className="mx-3 border border-gray-800 "
            type="text"
            placeholder="  Search Folder"
          />
        </div>

        <div className=" sider my-10">
          <div className="">{data}</div>
        </div>
      </div>
    </>
  );
};
