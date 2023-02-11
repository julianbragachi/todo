import Task from "../Task/Task";
import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const TaskList = ({
  color,
  title,
  tasks = [],
  handleClick,
  id,
  className,
  expanded,
  handleClose
}) => {
  return (
    <motion.div
      layoutId={id}
      // className={`flex-shrink-0 min-w-[80vw] z-50 max-h-full overflow-y-auto snap-center text-white p-8 pr-0 rounded-xl ${color} ${className}`}
      className={`flex-shrink-0 w-[80vw] z-50 max-h-full overflow-y-auto overflow-x-hidden snap-center text-white bg-black border border-gray-600 p-8 pr-0 rounded-xl ${className} ${
        expanded ? "h-full !w-full rounded-none" : ""
      }`}
      onClick={handleClick}
    >
      <motion.div
        initial={{
          opacity: 1
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 1
        }}
        className={`h-full flex flex-col`}
      >
        <h2
          className={`flex justify-between text-xl font-medium pb-4 border-b border-gray-600 mb-4 tracking-tighter ${
            expanded ? "!text-3xl pb-6 mb-6" : ""
          }`}
        >
          {title}

          {expanded && (
            <motion.button
              initial={{
                opacity: 0,
                scale: 0
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.3
                }
              }}
              className="mr-8"
              onClick={handleClose}
            >
              <BiX size={32} />
            </motion.button>
          )}
        </h2>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className={`flex-1 flex-shrink-0 overflow-y-auto flex flex-col justify-start scrollbar-hidden ${
            expanded ? "gap-6" : "gap-4"
          }`}
        >
          {tasks.length ? (
            tasks.map((task) => (
              <Task
                key={task.title}
                title={task.title}
                completed={task.completed}
                expanded={expanded}
              />
            ))
          ) : (
            <span className="text-gray-600">No tasks, pfft.</span>
          )}
        </motion.ul>
        {expanded && (
          <motion.div
            initial={{
              y: 20,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              delay: 0.3,
              type: "spring",
              mass: 0.01,
              damping: 10
            }}
            className="pr-8"
          >
            <input
              type="text"
              placeholder="What do you have to do?"
              className="w-full bg-black mt-6 border border-gray-600 rounded-lg p-4"
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TaskList;
