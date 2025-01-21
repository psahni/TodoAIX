'use client';

import Task from "./task";
import { checkUncheckTask } from "@/actions/db/task";
import { ITask } from "@/types/task";

export function Tasks({ items, isCompleted }: { items: ITask[]; isCompleted: boolean }) {
  const handleOnChange = (task: ITask) => {
    console.log("handleOnChange()");
    checkUncheckTask(task.id, !task.completed);
  }

  return (
    <div className="flex flex-col gap-1 py-4">
        <div className="">
          {
            items.map((task: ITask) => (
              <Task
                id={task.id}
                handleOnChange={() => handleOnChange(task)}
                key={task.id}
                taskName={task.title}
                isCompleted={isCompleted}
              />))
          }
        </div>
      </div>
  );
}
