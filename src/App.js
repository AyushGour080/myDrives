import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { FileData } from "./components/FileData";
import { SideBar } from "./components/SideBar";

function App() {
  const [files, setFiles] = useState([
    { file1: "abc", file2: "efg" },
    { file1: "abc", file2: "efg" },
    { file1: "abc", file2: "efg" },
    { file1: "abc", file2: "efg" },
  ]);
  return (
    <>
      <NavBar />
      <div className="data">
        <SideBar files={files} />

        <FileData files={files} />
      </div>
    </>
  );
}

export default App;
