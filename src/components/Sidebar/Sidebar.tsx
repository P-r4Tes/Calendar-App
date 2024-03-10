"use client";
import React, { MouseEventHandler, useState } from "react";
import Group from "@/components/Sidebar/Group";
import AddGroup from "@/components/Sidebar/AddGroup";
import Pointer from "@/components/Sidebar/Pointer";

type SidebarProps = {
  groups: (group & id)[];
};
const Sidebar = ({ groups }: SidebarProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const height = groups.length * 80 + 80;
  const pointerY = selectedIdx * 64 + 24 - 4;

  return (
    <div className="flex h-screen">
      <aside className={"flex items-center w-20 bg-[#383A57] rounded-l-3xl"} style={{ height: height }}>
        <div className="relative flex flex-col items-center space-y-4 p-4">
          {groups.map((group, idx) => {
            const onSelect: MouseEventHandler<HTMLAnchorElement> = () => {
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
          <Pointer top={pointerY} />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
