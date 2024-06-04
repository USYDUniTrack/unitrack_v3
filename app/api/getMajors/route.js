import { NextResponse } from 'next/server';
import { getMajors } from '../utils/degrees';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request) {
    // Prevents Caching
    noStore();

    const majors = await getMajors(parseInt(request.nextUrl.searchParams.get("degreeID")))
    return NextResponse.json({ data: majors }, { status: 200 });
}
