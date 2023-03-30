import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import {
  MdOutlineSpaceDashboard,
  MdOutlineEditCalendar,
  MdSettingsApplications,
} from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import { BiCodeBlock } from "react-icons/bi";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GrTask } from "react-icons/gr";

function Sidebar() {
  const menus = [
    {
      name: "Class",
      link: "Class",
      icon: SiGoogleclassroom,
      margin: true,
    },
    {
      name: "Dashboard",
      link: "Dashboard",
      icon: MdOutlineSpaceDashboard,
      margin: true,
    },
    {
      name: "Tasks",
      link: "Task Submissions",
      icon: FaTasks,
      margin: true,
    },
    {
      name: "Webcode",
      link: "Webcode",
      icon: BiCodeBlock,
      margin: true,
    },
    {
      name: "Capstone",
      link: "Capstone",
      icon: BiCodeBlock,
      margin: true,
    },
    {
      name: "Queries",
      link: "Queries",
      icon: RiQuestionnaireFill,
      margin: true,
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className=" flex flex-row gap-6 font-Poppins ">
      <div
        className={`bg-white  absolute left-0 top-0 ${
          open ? "w-48 h-full" : "w-16 h-full"
        } duration-500 border shadow-2xl text-gray-500 `}
      >
        <div className="py-3 flex justify-start">
          <img
            src="https://yt3.googleusercontent.com/Is9F_rHoviIkWIyL2DnxmXSyRuSSnauV5OMGokD3jq9wLJZgxh27_zP20Q0xVhzTNgsREcmpoYc=s900-c-k-c0x00ffffff-no-rj"
            className="w-20"
          />
        </div>
        <div className="flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer m-1  "
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <div className="mt-0 flex flex-col gap-4 relative ">
          {menus?.map((menu, i) => (
            <Link
              to={`/portal/${menu?.link}`}
              key={i}
              className={` ${
                menu?.margin && "mt-3"
              } group flex items-center text-sm gap-5 font-medium p-2 hover:text-violet-800 focus:shadow-outline active:bg-purple-700 `}
            >
              <div className="">
                {React.createElement(menu?.icon, { size: "26" })}
              </div>
              <h2
                style={{
                  transitionDelay: `${i + 2}00ms`,
                }}
                className={`whitespace-pre duration-500 hover:text-idigo-700 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-20 bg-none font-semibold whitespace-pre text-gray-900 w-0 overflow-hidden rounded-md 
                drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-10 group-hover:duration-300
                group-hover:w-fit hover:text-idigo-700`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
