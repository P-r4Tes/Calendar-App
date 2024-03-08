import Link from "next/link";
import PlusIcon from "@/components/Sidebar/PlusIcon";

type GroupProps = {
  href: string;
};
const AddGroup = ({ href }: GroupProps) => {
  return (
    <Link href={href} className="w-full h-auto rounded-full bg-slate-800 p-2">
      <PlusIcon className="text-white" />
    </Link>
  );
};

export default AddGroup;
