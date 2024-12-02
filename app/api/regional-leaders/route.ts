import { NextResponse } from 'next/server';
import { createRecord, getAllRecords, updateRecord, deleteRecord } from '@/lib/utils/crud';

export async function GET() {
  try {
    const leaders = getAllRecords('regional_leaders');
    return NextResponse.json(leaders);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch regional leaders' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const leader = createRecord('regional_leaders', data);
    return NextResponse.json(leader);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create regional leader' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json();
    const leader = updateRecord('regional_leaders', id, data);
    return NextResponse.json(leader);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update regional leader' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    deleteRecord('regional_leaders', id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete regional leader' }, { status: 500 });
  }
}