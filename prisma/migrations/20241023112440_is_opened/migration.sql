-- AlterTable
ALTER TABLE `status_pemilihan` ADD COLUMN `isOpened` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `selesai` BOOLEAN NOT NULL DEFAULT false;
