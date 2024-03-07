"use client";

import React from "react";
import ButtonIterator from "../ButtonIterator/ButtonIterator";

const Header = () => {
  const selectViewButton = ["month", "week", "day"];

  return (
    <header className="flex flex-col justify-center items-center bg-yellow-200">
      <section>
        <ButtonIterator IterateData={selectViewButton} />
      </section>
      <section className="flex w-full">
        <h1>2024 년 03월</h1>
      </section>
    </header>
  );
};

export default Header;
