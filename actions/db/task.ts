import prisma from "@/prisma/client";

async function getTasks() {
  const tasks = await prisma.task.findMany({ where: { completed: false } });

  return tasks
}

//------------------------------------------------------------------------------


async function getCompletedTasks() {
  const tasks = await prisma.task.findMany({ where: { completed: true } });

  return tasks
}


export {
  getTasks,
  getCompletedTasks
}
