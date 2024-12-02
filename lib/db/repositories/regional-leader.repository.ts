import { prisma } from '../client';
import type { RegionalLeader } from '@prisma/client';

export const RegionalLeaderRepository = {
  create: async (data: Omit<RegionalLeader, 'id' | 'createdAt' | 'updatedAt'>) => {
    return prisma.regionalLeader.create({ data });
  },

  update: async (id: string, data: Partial<Omit<RegionalLeader, 'id' | 'createdAt' | 'updatedAt'>>) => {
    return prisma.regionalLeader.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return prisma.regionalLeader.delete({
      where: { id },
    });
  },

  findById: async (id: string) => {
    return prisma.regionalLeader.findUnique({
      where: { id },
    });
  },

  findAll: async () => {
    return prisma.regionalLeader.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },
};