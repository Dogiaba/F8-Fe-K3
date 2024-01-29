import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";

import Image from "next/image";
import avata from "@/app/assets/images/code-icon-png-0.png";
import styles from "@/app/assets/flow.module.css";
import ActionButton from "@/app/components/ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaPlus } from "react-icons/fa";
// import { IoSave } from "react-icons/io5";
// import { IoIosShareAlt } from "react-icons/io";

export default function layoutItemMindMap({ children, email, id, serverData  }) {
  
  return (
    <>
      <div className="flex gap-x-3 items-center justify-between w-full h-16 border-b bg-background dark:bg-slate-900  px-4">
        <div className="flex gap-x-3">
          <a
            href="#"
            className="font-extrabold text-xl text-violet-500 items-center hidden lg:flex"
          >
            Mindmap Flow
          </a>
          <button className="bg-blue-500 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">
            <FontAwesomeIcon icon={FaPlus} /> Create
          </button>
        </div>
        <div className="flex space-x-3 items-center">
          <ThemeSwitcher />
          <Image
            className="w-8 h-8 rounded-full"
            src={avata}
            alt="user photo"
          />
        </div>
      </div>
      {/* <ActionButton serverData={serverData} email={email} id={id} /> */}

      <main> {children}</main>
    </>
  );
}
