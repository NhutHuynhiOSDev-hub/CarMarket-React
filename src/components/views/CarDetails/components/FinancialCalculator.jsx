import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function FinancialCalculator({ carDetails }) {
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyPaymen, setMonthlyPaymen] = useState(0);
  const [carPrice, setCarPrice] = useState(carDetails.price);

  const onCalculate = () => {
    const principal = carPrice - downPayment;
    const monthlyInterestRate = interestRate / 1200;

    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    setMonthlyPaymen(monthlyPayment.toFixed(2));
  };

  return (
    <div className="mt-10">
      <h2 className="font-medium text-2xl">Financial Calculator</h2>
      <div className="flex flex-row gap-5 mt-4">
        <div className="w-full">
          <Input
            type={"number"}
            value={carDetails.price}
            onChange={(e) => setCarPrice(e.target.value)}
            className={
              "h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
            }
          />
        </div>
        <div className="w-full">
          <Input
            type={"number"}
            placeholder="Interest Rate"
            onChange={(e) => setInterestRate(e.target.value)}
            className={
              "h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
            }
          />
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="w-full">
          <Input
            type={"number"}
            placeholder="Loan Term (Months)"
            onChange={(e) => setLoanTerm(e.target.value)}
            className={
              "h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
            }
          />
        </div>
        <div className="w-full">
          <Input
            type={"number"}
            placeholder="Down Payment"
            onChange={(e) => setDownPayment(e.target.value)}
            className={
              "h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900"
            }
          />
        </div>
      </div>
      <div className="flex flex-row gap-5">
        {monthlyPaymen > 0 && (
          <h2 className="font-bold mt-5">
            Your monthly payment: <span>${monthlyPaymen}</span>
          </h2>
        )}
        <Button
          onClick={onCalculate}
          className={
            "font-medium h-[40px] text-sm hover:bg-teal-900 transition-all duration-300 text-white bg-[#1a1a1a] my-10"
          }
        >
          Calculate
        </Button>
      </div>
    </div>
  );
}

export default FinancialCalculator;
