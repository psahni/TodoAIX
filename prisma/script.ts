import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  console.log(user)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function createDefaultProject() {
 const project = await prisma.project.create({
    data: {
      name: 'Default Project',
    }
 });

  console.log(project);
}


async function createTasks() {
  const user = await prisma.user.findUnique({ where: { email: 'prashant.sahni@codeandtheory.com'} });
  if (!user) {
    throw new Error('User not found');
  }

  const defaultProject = await prisma.project.findFirst({ where: { name: "Default Project" } });

  const task1 = await prisma.task.create({
    data: {
      title: 'Task 1',
      description: 'This is the first task',
      completed: false,
      ownerId: user.id,
      priority: 3,
      dueDate: new Date("01/30/2025").toISOString(),
      projectID: defaultProject?.id
    }
  });

  console.log(task1);

  const task2 = await prisma.task.create({
    data: {
      title: 'Task 2',
      description: 'This is the second task',
      completed: false,
      ownerId: user.id,
      priority: 3,
      dueDate: new Date("01/30/2025").toISOString(),
      projectID: defaultProject?.id
    }
  });

  console.log(task2);

  const task3 = await prisma.task.create({
    data: {
      title: 'Task 3',
      description: 'This is the third task',
      completed: false,
      ownerId: user.id,
      priority: 3,
      dueDate: new Date("01/30/2025").toISOString(),
      projectID: defaultProject?.id
    }
  });

  console.log(task3);
}


createTasks()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
