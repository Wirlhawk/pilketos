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
    `id` BIGINT NOT NULL,
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
CREATE TABLE `Perolehan` (
    `id_dpt` BIGINT NOT NULL,
    `id_paslon` INTEGER NULL,
    `id_bilik` INTEGER NOT NULL,

    UNIQUE INDEX `Perolehan_id_dpt_key`(`id_dpt`),
    PRIMARY KEY (`id_dpt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Status_Pemilihan` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `selesai` BOOLEAN NOT NULL DEFAULT false,
    `authorization_key` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Status_Pemilihan_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Dpt` ADD CONSTRAINT `Dpt_id_kelas_fkey` FOREIGN KEY (`id_kelas`) REFERENCES `Kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Perolehan` ADD CONSTRAINT `Perolehan_id_paslon_fkey` FOREIGN KEY (`id_paslon`) REFERENCES `Paslon`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Perolehan` ADD CONSTRAINT `Perolehan_id_dpt_fkey` FOREIGN KEY (`id_dpt`) REFERENCES `Dpt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Perolehan` ADD CONSTRAINT `Perolehan_id_bilik_fkey` FOREIGN KEY (`id_bilik`) REFERENCES `Bilik`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
