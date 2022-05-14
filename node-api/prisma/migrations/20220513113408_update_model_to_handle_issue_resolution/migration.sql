/*
  Warnings:

  - You are about to drop the column `userId` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `isItDone` on the `IssueAction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Issue` DROP FOREIGN KEY `Issue_userId_fkey`;

-- AlterTable
ALTER TABLE `Issue` DROP COLUMN `userId`,
    ADD COLUMN `isItDone` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `responsibleUserId` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `IssueAction` DROP COLUMN `isItDone`,
    ADD COLUMN `isItResolution` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_responsibleUserId_fkey` FOREIGN KEY (`responsibleUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
