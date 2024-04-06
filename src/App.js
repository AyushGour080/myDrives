import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/LoginFolder/Login";
import * as Realm from "realm-web"

export const app = new Realm.App("mainapp-xjkcs")


function App() {
  
  
  return (

    <Login/>
  )
}

export default App;
