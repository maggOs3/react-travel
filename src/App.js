import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Content key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <div className="countru--container">{cards}</div>
    </div>
  );
}
