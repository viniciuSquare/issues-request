/*
  Warnings:

  - You are about to drop the column `isItDone` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `isItResolution` on the `IssueAction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Issue` DROP COLUMN `isItDone`,
    ADD COLUMN `isDone` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `IssueAction` DROP COLUMN `isItResolution`,
    ADD COLUMN `isResolution` BOOLEAN NOT NULL DEFAULT false;
