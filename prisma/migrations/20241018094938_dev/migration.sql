/*
  Warnings:

  - You are about to drop the `perolehan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "perolehan" DROP CONSTRAINT "perolehan_id_bilik_fkey";

-- DropForeignKey
ALTER TABLE "perolehan" DROP CONSTRAINT "perolehan_id_dpt_fkey";

-- DropForeignKey
ALTER TABLE "perolehan" DROP CONSTRAINT "perolehan_id_paslon_fkey";

-- DropTable
DROP TABLE "perolehan";

-- CreateTable
CREATE TABLE "Perolehan" (
    "id" SERIAL NOT NULL,
    "id_paslon" INTEGER NOT NULL,
    "id_dpt" INTEGER NOT NULL,
    "id_bilik" INTEGER NOT NULL,
    "aktif" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Perolehan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Perolehan" ADD CONSTRAINT "Perolehan_id_paslon_fkey" FOREIGN KEY ("id_paslon") REFERENCES "Paslon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perolehan" ADD CONSTRAINT "Perolehan_id_dpt_fkey" FOREIGN KEY ("id_dpt") REFERENCES "Dpt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perolehan" ADD CONSTRAINT "Perolehan_id_bilik_fkey" FOREIGN KEY ("id_bilik") REFERENCES "Bilik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
