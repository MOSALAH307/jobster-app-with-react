import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import { useSelector } from "react-redux";
import StatsItem from "./StatsItem.js";
import Wrapper from "../assets/wrappers/StatsContainer.js";

const StatsContainer = () => {
  const { stats } = useSelector((state) => state.allJobs);
  const defaultStats = [
    {
      id: 1,
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      id: 2,
      title: "interviews schedualed",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      id: 3,
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item) => (
        <StatsItem key={item.id} {...item} />
      ))}
    </Wrapper>
  );
};

export default StatsContainer;
