import React from "react";
import Group from "@/components/Sidebar/Group";
import { headers } from "next/headers";

type SidebarProps = { groups: group[] };
const Sidebar = ({ groups }: SidebarProps) => {
  const height = groups.length * 80 + 80;

  const isServer = typeof window === "undefined";
  let headerPathname = "";

  if (isServer) {
    const headersList = headers();
    headerPathname = headersList.get("x-pathname") || "";
  } else {
    headerPathname = window.location.pathname;
  }
  return (
    <div className="flex h-screen">
      <aside className={"flex items-center w-20 bg-[#383A57] rounded-l-3xl"} style={{ height: height }}>
        <div className="flex flex-col items-center space-y-4 p-4">
          {groups.map(group => {
            const selected = headerPathname.includes(group.name);
            return <Group name={group.name} href={`${group.name}`} selected={selected} />;
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
