"use client";

import { CircleCheckBig } from "lucide-react";
import { getTasks, getCompletedTasks } from "@/actions/db/task";
import { Tasks } from "./tasks";
import { useEffect, useState } from "react";
import { ITask } from "@/types/task";


export default function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);


  useEffect(() => {
    async function fetchData() {
      let data = await getTasks();
      setTasks(data);
      data = await getCompletedTasks();
      setCompletedTasks(data);
    }
    fetchData();
  }, [tasks]);


  if (
    tasks === undefined ||
    completedTasks === undefined
  ) {
    return (<p>Loading...</p>);
  }

  return (
    <div className="xl:px-40">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inbox</h1>
      </div>
      <Tasks items={tasks} isCompleted={false}/>
      <Tasks items={completedTasks} isCompleted={true}/>
      <div className="flex items-center gap-1 border-b-2 p-2 border-gray-100 text-sm text-foreground/80">
        <>
          <CircleCheckBig/>
          <span>+ {completedTasks.length}</span>
          <span className="capitalize">Completed Tasks</span>
        </>
      </div>
    </div>
  );
}
