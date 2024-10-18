-- CreateTable
CREATE TABLE "Paslon" (
    "id" INTEGER NOT NULL,
    "nama_ketos" TEXT NOT NULL,
    "nama_waketos" TEXT NOT NULL,
    "gambar" TEXT NOT NULL,

    CONSTRAINT "Paslon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dpt" (
    "id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "id_kelas" INTEGER NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "antrian" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Dpt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bilik" (
    "id" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Bilik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perolehan" (
    "id" SERIAL NOT NULL,
    "id_paslon" INTEGER NOT NULL,
    "id_dpt" INTEGER NOT NULL,
    "id_bilik" INTEGER NOT NULL,
    "aktif" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "perolehan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dpt" ADD CONSTRAINT "Dpt_id_kelas_fkey" FOREIGN KEY ("id_kelas") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perolehan" ADD CONSTRAINT "perolehan_id_paslon_fkey" FOREIGN KEY ("id_paslon") REFERENCES "Paslon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perolehan" ADD CONSTRAINT "perolehan_id_dpt_fkey" FOREIGN KEY ("id_dpt") REFERENCES "Dpt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perolehan" ADD CONSTRAINT "perolehan_id_bilik_fkey" FOREIGN KEY ("id_bilik") REFERENCES "Bilik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
