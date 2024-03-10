"use client";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

// 임시 이미지
const tempSrc = "https://avatars.githubusercontent.com/u/161491870?s=200&v=4";

type GroupProps = Pick<group, "name"> & {
  href: string;
  selected: boolean;
  onSelect?: MouseEventHandler<HTMLAnchorElement>;
};
const Group = ({ name, href, selected, onSelect }: GroupProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={clsx("", {
        "border-2 border-slate-300 rounded-full": selected,
      })}
    >
      <Link href={href} onClick={onSelect}>
        <Image
          className="rounded-full"
          src={tempSrc}
          alt={`그룹 ${name}`}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={360}
          height={360}
        />
      </Link>
    </motion.div>
  );
};

export default Group;
