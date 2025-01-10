import Task from "./task";
import { getTasks, getCompletedTasks } from "@/actions/db/task";

export default async function TaskList() {
  const tasks = await getTasks();
  const completedTasks = await getCompletedTasks();

  return (
    <div className="xl:px-40">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inbox</h1>
      </div>
      <div className="flex flex-col gap-1 py-4">
        <div className="">
          {tasks.map((task) => ( <Task key={task.id} taskName={task.title} id={task.id} isCompleted={false}/>))}
        </div>
      </div>

      <div className="flex flex-col gap-1 py-4">
        <div className="">
          {completedTasks.map((task) => ( <Task key={task.id} taskName={task.title} id={task.id} isCompleted={true}/>))}
        </div>
      </div>
    </div>
  );
}
