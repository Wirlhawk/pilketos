-- CreateTable
CREATE TABLE `Paslon` (
    `id` INTEGER NOT NULL,
    `nama_ketos` VARCHAR(191) NOT NULL,
    `nama_waketos` VARCHAR(191) NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kelas` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dpt` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `id_kelas` INTEGER NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `antrian` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bilik` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `perolehan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_paslon` INTEGER NOT NULL,
    `id_dpt` INTEGER NOT NULL,
    `id_bilik` INTEGER NOT NULL,
    `aktif` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Dpt` ADD CONSTRAINT `Dpt_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `Kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `perolehan` ADD CONSTRAINT `perolehan_id_paslon_fkey` FOREIGN KEY (`id_paslon`) REFERENCES `Paslon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `perolehan` ADD CONSTRAINT `perolehan_id_dpt_fkey` FOREIGN KEY (`id_dpt`) REFERENCES `Dpt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `perolehan` ADD CONSTRAINT `perolehan_id_bilik_fkey` FOREIGN KEY (`id_bilik`) REFERENCES `Bilik`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
