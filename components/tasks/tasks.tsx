'use client';

import Task from "./task";

export function Tasks({ items, isCompleted }: { items: any; isCompleted: boolean }) {
  const handleOnChange = (task: any) => {
    console.log("handleOnChange()");
  }

  return (
    <div className="flex flex-col gap-1 py-4">
        <div className="">
          {
            items.map((task) => (
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
