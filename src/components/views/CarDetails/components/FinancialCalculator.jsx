import { Button } from "@/components/Button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
function FinancialCalculator({ carDetails }) {
  const [carPrice, setCarPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPaymen, setMonthlyPaymen] = useState(0);

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
      <div className="flex flex-row gap-5 mt-5">
        <div className="w-full">
          <label>Price $</label>
          <Input
            type={"number"}
            onChange={(e) => setCarPrice(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label>Interest Rate</label>
          <Input
            type={"number"}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="w-full">
          <label>Loan Term (Months)</label>
          <Input
            type={"number"}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label>Down Payment</label>
          <Input
            type={"number"}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
      </div>
      <h2 className="font-bold text-xl mt-5">
        Your monthly payment: <span>{monthlyPaymen}</span>
      </h2>
      <Button onClick={onCalculate} className={"w-full mt-5"} size={"lg"}>
        Calculate
      </Button>
    </div>
  );
}

export default FinancialCalculator;
