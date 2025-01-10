-- AlterTable
ALTER TABLE "SubTask" ALTER COLUMN "dueDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "dueDate" DROP NOT NULL;
