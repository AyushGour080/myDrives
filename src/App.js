import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { FileData } from "./components/FileData";
import { SideBar } from "./components/SideBar";

function App() {
  const [files, setFiles] = useState([
    { f1: "abc", f2: "efg" },
    { f1: "abc", f2: "efg" },
    { f1: "abc", f2: "efg" },
    { f1: "abc", f2: "efg" },
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
