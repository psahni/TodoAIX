/*
  Warnings:

  - Added the required column `priority` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectID` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "priority" INTEGER NOT NULL,
ADD COLUMN     "projectID" TEXT NOT NULL;
