import Link from "next/link";
import React from "react";

type ButtonIteratorProps = {
  IterateData: string[];
};

function ButtonIterator({ IterateData }: ButtonIteratorProps) {
  return (
    <React.Fragment>
      {IterateData.map(value => (
        <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer" value={value} key={value}>
          <Link href={`/?view=${value}`}>{value.toUpperCase()}</Link>
        </button>
      ))}
    </React.Fragment>
  );
}

export default ButtonIterator;
