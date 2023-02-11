import { useState } from "react";
import TaskList from "./components/TasksList/TasksList";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const TASKS_LISTS = [
  {
    title: "Work",
    color: "bg-red-700",
    tasks: [
      {
        title: "Fix i18n implementation",
        completed: true
      },
      {
        title: "Company page layout",
        completed: false
      },
      {
        title: "Responsive nits on homepage layout",
        completed: false
      }
    ]
  },
  {
    title: "Home",
    color: "bg-indigo-700",
    tasks: [
      {
        title: "Buy laundry soap",
        completed: true
      },
      {
        title: "Do the laundry",
        completed: true
      },
      {
        title: "Read that book",
        completed: false
      },
      {
        title: "Replace kitchen light bulb",
        completed: false
      },
      {
        title:
          "Clean the desktop because I've just dropped some spaghetti code",
        completed: false
      }
    ]
  },
  {
    title: "Tu vieja",
    color: "bg-teal-700"
  }
];

function App() {
  const [selectedTaskList, setSelectedTaskList] = useState(null);
  const [emblaRef] = useEmblaCarousel();

  const closeTaskList = () => {
    setSelectedTaskList(null);
  };

  return (
    <main className="h-screen flex flex-col bg-black text-white">
      <div className="p-6">
        <h1 className="text-4xl text-center py-16 tracking-tighter">
          <span className="font-extrabold">Fucking</span>{" "}
          <span className="text-gray-600">Tasks</span>
        </h1>

        <div className="text-center">
          <button className="border rounded-lg py-2 px-4 block mx-auto mb-2">
            +
          </button>
          <span className="text-gray-400 font-medium">Add List</span>
        </div>
      </div>

      <div className={`flex-1 overflow-hidden`} ref={emblaRef}>
        <div className={`flex items-end gap-4 p-6 h-full`}>
          {TASKS_LISTS.map((taskList, i) => {
            return (
              <TaskList
                key={taskList.title}
                title={taskList.title}
                color={taskList.color}
                tasks={taskList.tasks}
                className={`${
                  selectedTaskList !== null && selectedTaskList !== i
                    ? "!opacity-0"
                    : ""
                }`}
                id={`taskList-${i}`}
                handleClick={() => setSelectedTaskList(i)}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedTaskList !== null && (
          <motion.div className="fixed w-screen h-screen z-20 p-4">
            <TaskList
              expanded
              handleClose={closeTaskList}
              id={`taskList-${selectedTaskList}`}
              title={TASKS_LISTS[selectedTaskList].title}
              color={TASKS_LISTS[selectedTaskList].color}
              tasks={TASKS_LISTS[selectedTaskList].tasks}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
