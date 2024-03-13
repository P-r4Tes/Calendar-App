import Link from "next/link";
import PlusIcon from "@/components/Sidebar/PlusIcon";
import { motion } from "framer-motion";

type GroupProps = {
  href: string;
};
const AddGroup = ({ href }: GroupProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="w-12 h-12 rounded-full bg-slate-800 p-2"
    >
      <Link href={href}>
        <PlusIcon className="text-white" />
      </Link>
    </motion.div>
  );
};

export default AddGroup;
