import { prisma } from '../client';
import type { ClubLeader } from '@prisma/client';

export const ClubLeaderRepository = {
  create: async (data: Omit<ClubLeader, 'id' | 'createdAt' | 'updatedAt'>) => {
    return prisma.clubLeader.create({ data });
  },

  update: async (id: string, data: Partial<Omit<ClubLeader, 'id' | 'createdAt' | 'updatedAt'>>) => {
    return prisma.clubLeader.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return prisma.clubLeader.delete({
      where: { id },
    });
  },

  findById: async (id: string) => {
    return prisma.clubLeader.findUnique({
      where: { id },
    });
  },

  findAll: async () => {
    return prisma.clubLeader.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },
};