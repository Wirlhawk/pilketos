import { PrismaClient } from '@prisma/client';
import XLSX from "xlsx";

const prisma = new PrismaClient();

async function main() {
    // Read the Excel file
    const workbook = XLSX.readFile('./seeds.xlsx');

    // Seed Kelas
    const kelasSheet = workbook.Sheets['kelas'];
    const kelasData = XLSX.utils.sheet_to_json(kelasSheet);
    await prisma.kelas.createMany({ data: kelasData });
    console.log('Kelas seeded successfully!');

    // Seed Dpt
    const dptSheet = workbook.Sheets['dpt'];
    const dptData = XLSX.utils.sheet_to_json(dptSheet);
    await prisma.dpt.createMany({ data: dptData });
    console.log('Dpt seeded successfully!');

    // Seed Paslon
    const paslonSheet = workbook.Sheets['paslon'];
    const paslonData = XLSX.utils.sheet_to_json(paslonSheet);
    await prisma.paslon.createMany({ data: paslonData });
    console.log('Paslon seeded successfully!');

    // Seed Bilik
    const bilikSheet = workbook.Sheets['bilik'];
    const bilikData = XLSX.utils.sheet_to_json(bilikSheet);
    await prisma.bilik.createMany({ data: bilikData });
    console.log('Bilik seeded successfully!');
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});
