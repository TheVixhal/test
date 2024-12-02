import { NextResponse } from 'next/server';
import { createRecord, getAllRecords, updateRecord, deleteRecord } from '@/lib/utils/crud';

export async function GET() {
  try {
    const teams = getAllRecords('teams');
    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch teams' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const team = createRecord('teams', data);
    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create team' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...data } = await request.json();
    const team = updateRecord('teams', id, data);
    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update team' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    deleteRecord('teams', id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete team' }, { status: 500 });
  }
}