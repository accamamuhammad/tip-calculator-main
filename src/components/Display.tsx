"use client";
import React from "react";

interface DisplayProps {
  bill: number;
  tipAmount: number;
  people: number;
  onReset: () => void;
}

const Display: React.FC<DisplayProps> = ({
  bill,
  tipAmount,
  people,
  onReset,
}) => {
  // calculate values
  const tipPerPerson = people > 0 ? (bill * tipAmount) / 100 / people : 0;
  const totalPerPerson = people > 0 ? bill / people + tipPerPerson : 0;

  return (
    <section className="w-full h-full md:h-[22rem] border px-7 py-7 space-y-8 bg-[#00494d] rounded-2xl flex flex-col justify-between">
      <div className="space-y-5">
        {/* Tip Amount */}
        <section className="w-full flex flex-row items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-sm text-white">Tip Amount</h2>
            <p className="text-xs text-[rgb(96,140,148)]">/ person</p>
          </div>
          <h1 className="text-4xl text-[rgb(95,187,173)]">
            ${tipPerPerson.toFixed(2)}
          </h1>
        </section>

        {/* Total */}
        <section className="w-full flex flex-row items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-sm text-white">Total</h2>
            <p className="text-xs text-[rgb(96,140,148)]">/ person</p>
          </div>
          <h1 className="text-4xl text-[rgb(95,187,173)]">
            ${totalPerPerson.toFixed(2)}
          </h1>
        </section>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="bg-[rgb(59,116,123)] hover:bg-[rgb(175,230,220)] text-[rgb(40,92,98)] w-full py-2 mt-4 text-lg rounded-md cursor-pointer"
      >
        RESET
      </button>
    </section>
  );
};

export default Display;
