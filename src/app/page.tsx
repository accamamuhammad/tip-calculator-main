4"use client";
import React, { useState } from "react";
import Image from "next/image";
import Tips from "../components/Tips";
import Display from "@/components/Display";
import Logo from "../../public/images/logo.svg";
import dollarIcon from "../../public/images/icon-dollar.svg";
import peopleIcon from "../../public/images/icon-person.svg";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  const handleBillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(Number(e.target.value));
  };

  const handleTipInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipAmount(Number(e.target.value));
  };

  const handlePeopleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeople(Number(e.target.value));
  };

  return (
    <main className="w-full sm:w-[80%] h-fit pt-44 sm:pt-14 sm:pb-5 md:pb-0 gap-8 flex flex-col items-center justify-center">
      <Image width={75} height={50} alt="logo" src={Logo} />
      <section className="w-full md:w-[750px] h-fit p-6 md:p-7 gap-5 flex flex-col items-center justify-center md:flex-row bg-white rounded-2xl">
        <div className="w-full h-full px-0.5 space-y-7 rounded-2xl flex flex-col justify-between">
          {/* Bill input */}
          <section className="gap-2 flex flex-col items-start justify-center">
            <h2 className="text-[#00494d] opacity-70 text-[0.9rem]">Bill</h2>
            <div className="w-full h-fit relative rounded-sm bg-[#deebeb]">
              <input
                id="bill-input"
                type="number"
                onChange={handleBillInput}
                className="w-full h-full pr-4 py-1 px-0.5 text-2xl rounded-lg text-right"
              />
              <Image
                width={12}
                height={12}
                alt="dollar-icon"
                src={dollarIcon}
                className="absolute top-[12px] left-4"
              />
            </div>
          </section>

          {/* Select Tip */}
          <section className="space-y-2.5">
            <h2 className="text-[#00494d] opacity-70 text-[0.9rem]">
              Select Tip %
            </h2>
            <div className="w-full grid gap-4 grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2">
              <Tips amount={5} onSelect={setTipAmount} />
              <Tips amount={10} onSelect={setTipAmount} />
              <Tips amount={15} onSelect={setTipAmount} />
              <Tips amount={25} onSelect={setTipAmount} />
              <Tips amount={50} onSelect={setTipAmount} />

              {/* Custom input */}
              <div className="w-full h-12 rounded-md text-[rgb(98,115,117)] text-lg bg-[rgb(245,248,250)] flex items-center justify-center">
                <input
                  type="number"
                  placeholder="Custom"
                  onChange={(e) => setTipAmount(Number(e.target.value))}
                  className="w-full h-full text-right pr-3 placeholder:text-center bg-transparent outline-none"
                />
              </div>
            </div>
          </section>
          {/* Number of people input */}
          <section className="gap-2 flex flex-col items-start justify-center">
            <h2 className="text-[#00494d] opacity-70 text-[0.9rem]">
              Number of People
            </h2>
            <div className="w-full h-fit relative rounded-sm bg-[#deebeb]">
              <input
                id="people-input"
                type="number"
                onChange={handlePeopleInput}
                className="w-full h-full pr-4 py-1 px-0.5 text-[#00494d] text-2xl rounded-lg text-right"
              />
              <Image
                width={14}
                height={14}
                alt="people-icon"
                src={peopleIcon}
                className="absolute top-[14px] left-4"
              />
            </div>
          </section>
        </div>
        <Display
          bill={bill}
          tipAmount={tipAmount}
          people={people}
          onReset={() => {
            setBill(0);
            setTipAmount(0);
            setPeople(0);
          }}
        />
      </section>
    </main>
  );
}
