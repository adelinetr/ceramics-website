import { useState } from "react";
import Button from "../../../Header/Button";
import { PriceOptions, Prices } from "../../DataClasses";
import Selector, { Option } from "../../Selector";
import CalendarButton from "./CalendarIcon";
import Calendar from "./CalendarIcon.svg";


interface EventInputsProps {
  onPriceChange: (selectedOption: Prices) => void;
}
export default function EventInputs({ onPriceChange }: EventInputsProps) {
  const handleSelectingPrice = (selectedOption: Option | null) => {
    if (selectedOption) {
      const selectedPrice = PriceOptions.find(option => option.value === selectedOption.value);
      if (selectedPrice) {
        onPriceChange(selectedPrice);
      }
    } else {
      // Handle the case when no option is selected
      onPriceChange({ maxValue: 0, label: 'FREE', value: 'Free' });
    }
  };
  return (
    <div className="flex mt-6 relative lg:justify-center items-center w-full">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#FCFCFC] hidden lg:flex px-3 w-[80vw] h-7 py-4 outline-none rounded-md border lg:w-full"
      />
      <Selector
        placeholder="Price"
        className="w-[70vw] lg:w-[32vw] lg:mx-5"
        options={PriceOptions}
        onChange={handleSelectingPrice}
      />
      <Button
        icon={Calendar}
        iconClass="mr-2"
        name="Choose a Date"
        className="bg-[#BBA081] hidden lg:flex lg:text-base lg:w-[430px] hover:bg-[#b09576] duration-200 px-6 text-white"
      />
      <CalendarButton />
    </div>
  );
}
