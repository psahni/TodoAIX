/*
  Warnings:

  - You are about to drop the column `published` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "published",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
