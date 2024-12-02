import { prisma } from '../db/client';
import { DatabaseError, NotFoundError } from '../services/error';

export interface BaseRecord {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const tableMap = {
  events: prisma.event,
  blogs: prisma.blog,
  teams: prisma.team,
  club_leaders: prisma.clubLeader,
  regional_leaders: prisma.regionalLeader,
} as const;

export async function createRecord<T extends BaseRecord>(table: keyof typeof tableMap, data: any): Promise<T> {
  try {
    const model = tableMap[table];
    const result = await model.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return result as T;
  } catch (error) {
    throw new DatabaseError(`Failed to create record in ${table}`);
  }
}

export async function updateRecord<T extends BaseRecord>(table: keyof typeof tableMap, id: string, data: any): Promise<T> {
  try {
    const model = tableMap[table];
    const result = await model.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
    return result as T;
  } catch (error) {
    if (error.code === 'P2025') {
      throw new NotFoundError(`Record in ${table}`);
    }
    throw new DatabaseError(`Failed to update record in ${table}`);
  }
}

export async function deleteRecord(table: keyof typeof tableMap, id: string): Promise<void> {
  try {
    const model = tableMap[table];
    await model.delete({
      where: { id },
    });
  } catch (error) {
    if (error.code === 'P2025') {
      throw new NotFoundError(`Record in ${table}`);
    }
    throw new DatabaseError(`Failed to delete record in ${table}`);
  }
}

export async function getRecord<T>(table: keyof typeof tableMap, id: string): Promise<T | null> {
  try {
    const model = tableMap[table];
    const result = await model.findUnique({
      where: { id },
    });
    return result as T;
  } catch (error) {
    throw new DatabaseError(`Failed to fetch record from ${table}`);
  }
}

export async function getAllRecords<T>(table: keyof typeof tableMap): Promise<T[]> {
  try {
    const model = tableMap[table];
    const results = await model.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return results as T[];
  } catch (error) {
    throw new DatabaseError(`Failed to fetch records from ${table}`);
  }
}