/*
  Warnings:

  - The primary key for the `perolehan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `perolehan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `perolehan` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`id_dpt`);
