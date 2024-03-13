"use client";
import React, { MouseEventHandler, useState } from "react";
import Group from "@/components/Sidebar/Group";
import AddGroup from "@/components/Sidebar/AddGroup";
import Pointer from "@/components/Sidebar/Pointer";

type SidebarProps = {
  groups: (group & id)[];
};

const ASIDE_WIDTH = 80;
const ASIDE_PADDING = 16;
const GROUP_HEIGHT = ASIDE_WIDTH - ASIDE_PADDING * 2; // 48
const GROUP_REDIUS = GROUP_HEIGHT / 2; // 24
const POINTER_REDIUS = 4;

const Sidebar = ({ groups }: SidebarProps) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const height = groups.length * (GROUP_HEIGHT + ASIDE_PADDING) + 80;
  const pointerY = selectedIdx * (GROUP_HEIGHT + ASIDE_PADDING) + GROUP_REDIUS - POINTER_REDIUS;

  return (
    <div className="flex h-screen">
      <aside className="flex items-center  bg-[#383A57] rounded-l-3xl" style={{ height: height, width: ASIDE_WIDTH }}>
        <div className="relative flex flex-col items-center space-y-4" style={{ padding: ASIDE_PADDING }}>
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
          <Pointer top={pointerY} style={{ width: POINTER_REDIUS * 2, height: POINTER_REDIUS * 2 }} />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
