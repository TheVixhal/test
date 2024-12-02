import { prisma } from '../client';
import type { Event } from '@prisma/client';

export const EventRepository = {
  create: async (data: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>) => {
    return prisma.event.create({ data });
  },

  update: async (id: string, data: Partial<Omit<Event, 'id' | 'createdAt' | 'updatedAt'>>) => {
    return prisma.event.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return prisma.event.delete({
      where: { id },
    });
  },

  findById: async (id: string) => {
    return prisma.event.findUnique({
      where: { id },
    });
  },

  findAll: async () => {
    return prisma.event.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },
};