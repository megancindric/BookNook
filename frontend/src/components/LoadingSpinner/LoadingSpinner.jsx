import React from "react";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center m-auto">
      <Spinner className="fill-[#0f4c5c] animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
