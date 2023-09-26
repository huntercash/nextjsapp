"use client";
import React from "react";

const ErrorPage = (props) => {
  const { error, reset } = props;
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error has occured</div>
      <button className="btn" onClick={() => reset}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
