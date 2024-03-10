"use client";

import React from "react";
import ButtonIterator from "../ButtonIterator/ButtonIterator";
import { useSearchParams } from "next/navigation";

const Header = () => {
  const selectViewButton = ["month", "week", "day"];
  let month = useSearchParams()?.get("month");
  let year = useSearchParams()?.get("year");

  if (!month || !year) {
    const now = new Date();
    year = String(now.getFullYear());
    month = String(now.getMonth() + 1);
  }

  return (
    <header className="flex flex-col justify-center items-center bg-yellow-200">
      <section>
        <ButtonIterator IterateData={selectViewButton} />
      </section>
      <section className="flex w-full">
        <h1>
          {year} 년 {month}월
        </h1>
      </section>
    </header>
  );
};

export default Header;
