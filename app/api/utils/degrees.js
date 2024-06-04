import { sql } from '@vercel/postgres';

export async function getDegrees() {
    const degrees = await sql`SELECT degreeid, degreename FROM Degrees;`;
    return degrees.rows
}

export async function getMajors(degreeID) {
    const majors  = await sql`SELECT majorid, majorname from Majors where degreeid=${degreeID}`
    return majors.rows
}
