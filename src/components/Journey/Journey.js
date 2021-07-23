import React, { useState } from "react";
import "./Journey.css";

export default function Journey({ steps, activeStep }) {
  const [currentStep, setCurrentStep] = useState(activeStep - 1);

  const stepArray = Array(steps);
  stepArray.fill(0);
  stepArray[currentStep] = 1;

  return (
    <div className="journey-container">
      <div className="journey-flex">
        {stepArray.map((item) => {
          console.log(item);
          if (item === 1) {
            return <div className="journey-step journey-step-active" />;
          } else return <div className="journey-step" />;
        })}
      </div>
    </div>
  );
}
