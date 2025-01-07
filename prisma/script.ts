import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  console.log(user)
}

async function createTasks() {
  const user = await prisma.user.findUnique({ where: { email: 'alice@prisma.io'} });
  if (!user) {
    throw new Error('User not found');
  }

  const task1 = await prisma.task.create({
    data: {
      title: 'Task 1',
      description: 'This is the first task',
    }
  });

  console.log(task1);

  const task2 = await prisma.task.create({
    data: {
      title: 'Task 2',
      description: 'This is the second task',
    }
  });

  console.log(task2);

  const task3 = await prisma.task.create({
    data: {
      title: 'Task 3',
      description: 'This is the second task',
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
