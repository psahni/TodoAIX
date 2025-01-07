import prisma from "@/prisma/client";
import Task from "./task";

export default async function Tasks() {
  const data = await prisma.task.findMany();
  console.log(data);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        { data.map((task) => <Task key={task.id} title={task.title} description={task.description as string} />) }
      </main>
    </div>
  );
}
