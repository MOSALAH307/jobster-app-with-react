import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";

export const Links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "/allJobs",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add job",
    path: "/addJob",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "profile",
    path: "/profile",
    icon: <ImProfile />,
  },
];
