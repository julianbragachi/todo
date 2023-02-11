import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Task = ({ title, completed, expanded }) => {
  return (
    <motion.li
      variants={item}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
      key={title}
      className="flex-shrink-0 pr-8"
    >
      <label
        className={`flex items-start justify-between font-regular ${
          completed ? "line-through text-gray-600" : ""
        } ${expanded ? "text-xl" : ""}`}
      >
        <span
          className={`tracking-tight ${
            expanded
              ? "whitespace-normal"
              : "whitespace-nowrap text-ellipsis overflow-hidden"
          }`}
        >
          {title}
        </span>

        {expanded && completed && (
          <BiCheck size={expanded ? 32 : 24} className="flex-shrink-0 ml-2" />
        )}
      </label>
    </motion.li>
  );
};

export default Task;
