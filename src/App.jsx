import React, { useState } from "react";
import ColoerFulMessage from "./components/ColorFulMesseage";
const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoerFulMessage color="blue" message="お元気ですか？" />
      <ColoerFulMessage color="pink" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
