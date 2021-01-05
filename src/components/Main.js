import React, { useState, useContext } from "react";
import { DataContext } from "./Context";

const Main = () => {
  const countries = useContext(DataContext)[0];

  return (
    <>
      <h1>Test</h1>
      {console.log(countries)}
    </>
  );
};

export default Main;
