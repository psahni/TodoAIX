import prisma from "@/prisma/client";

interface Task {
  title: string;
  completed: boolean;
  description: string;
}

async function getTasks() {
  const tasks = await prisma.task.findMany({ where: { completed: false } });

  return tasks
}

//------------------------------------------------------------------------------


async function getCompletedTasks() {
  const tasks = await prisma.task.findMany({ where: { completed: true } });

  return tasks
}

//------------------------------------------------------------------------------

async function createTask(task: Task) {
  const newTask = await prisma.task.create({
    data: task
  });

  return newTask
}

async function checkUncheckTask(taskId: number) {
  const task = await prisma.task.update({
    where: { id: taskId },
    data: { completed: true }
  });

  return task
}

export {
  getTasks,
  getCompletedTasks,
  createTask,
  checkUncheckTask
}
