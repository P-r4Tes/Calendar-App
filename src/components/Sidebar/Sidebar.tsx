"use client";
import React, { MouseEventHandler, useState } from "react";
import Group from "@/components/Sidebar/Group";
import AddGroup from "@/components/Sidebar/AddGroup";

type SidebarProps = {
  groups: (group & id)[];
};
const Sidebar = ({ groups }: SidebarProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const height = groups.length * 80 + 80;

  return (
    <div className="flex h-screen">
      <aside className={"flex items-center w-20 bg-[#383A57] rounded-l-3xl"} style={{ height: height }}>
        <div className="flex flex-col items-center space-y-4 p-4">
          {groups.map((group, idx) => {
            const onSelect: MouseEventHandler<HTMLAnchorElement> = e => {
              setSelectedIdx(idx);
            };
            return (
              <Group
                key={group.id}
                name={group.name}
                href={group.id}
                selected={idx === selectedIdx}
                onSelect={onSelect}
              />
            );
          })}
          <AddGroup href="." />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
