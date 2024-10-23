"use server";
import prisma from "@/lib/db";

// export const countDptStatus = async () => {
//     const counts = await prisma.dpt.groupBy({
//         by: ["status"], // Group by the status field
//         _count: {
//             id: true, // Count the number of records for each status
//         },
//     });

//     // Format the results into a more readable structure if needed
//     const formattedCounts = counts.map((count) => ({
//         status: count.status,
//         count: count._count.id,
//     }));
//     console.log(formattedCounts)
//     return formattedCounts;
// };

export const countDptStatus = async () => {
    const totalDpt = await prisma.dpt.count();
    const dptMemilih = await prisma.dpt.count({
        where: {
            status: 3,
        },
    });

    return {
        totalDpt,
        dptMemilih,
    };
};
