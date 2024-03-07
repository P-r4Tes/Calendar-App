import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { MouseEventHandler } from "react";

// 임시 이미지
const tempSrc = "https://avatars.githubusercontent.com/u/161491870?s=200&v=4";

type GroupProps = Pick<group, "name"> & {
  href: string;
  selected: boolean;
  onSelect?: MouseEventHandler<HTMLAnchorElement>;
};
const Group = ({ name, href, selected, onSelect }: GroupProps) => {
  return (
    <Link
      href={href}
      className={clsx("", {
        "border-2 border-slate-100": selected,
      })}
      onClick={onSelect}
    >
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
  );
};

export default Group;
