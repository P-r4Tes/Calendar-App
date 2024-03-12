"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import { Icon } from "@/assets/Icons";
// import ButtonIterator from "../ButtonIterator/ButtonIterator";

type HeaderPropsType = {
  inputText: string;
  onChangeInputText: () => void;
};

const Header = ({ inputText, onChangeInputText }: HeaderPropsType) => {
  const [focused, setFocused] = useState<boolean>(false);
  // const selectViewButton = ["month", "week", "day"];
  let month = useSearchParams()?.get("month");
  let year = useSearchParams()?.get("year");

  if (!month || !year) {
    const now = new Date();
    year = String(now.getFullYear());
    month = String(now.getMonth() + 1);
  }

  const onBlurInput = () => setFocused(false);
  const onFocusInput = () => setFocused(true);

  return (
    <header className="flex flex-col justify-center items-center bg-[#2C2F48] w-full py-2.5">
      <section
        className={`flex flex-row px-1 items-center  border rounded w-96 h-6 box-border overflow-hidden bg-gradient-to-t from-[#1C1B33] to-[#2E335A] ${focused ? "border-gray-300" : "border-gray-600"}`}
      >
        <Icon.Search className={`${focused ? "ml-0" : "ml-36"}`} alt={"search Icon"} width={24} height={24} />
        <input
          className="bg-transparent focus:outline-none border-none"
          value={inputText}
          onChange={onChangeInputText}
          placeholder="Search"
          onBlur={onBlurInput}
          onFocus={onFocusInput}
        />
      </section>
      {/* <section>
        <ButtonIterator IterateData={selectViewButton} />
      </section> */}
    </header>
  );
};

export default Header;
