import { getAllGroups } from "@/api/groups";
import Sidebar from "@/components/Sidebar/Sidebar";

const SidebarContainer = async () => {
  const groups = await getAllGroups();
  return <Sidebar groups={groups} />;
};

export default SidebarContainer;
