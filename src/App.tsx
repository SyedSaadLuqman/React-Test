import Heading from "./Heading";
import Alert from "./Alert";
import { useState } from "react";
import "./App.css";
import UserCard from "./UserCard";
import ExpandableText from "./ExpendableText";
import UpdateLogic from "./UpdateLogic";
import NavBar from "./StateSharing/NavBar";
import Cart from "./StateSharing/Cart";
import F from "./formProject/refHookForm";
import SF from "./formProject/stateHookForm";

const App = () => {
  return (
    <div className="container">
      <SF />
    </div>
  );
};

export default App;
