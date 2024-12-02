import { prisma } from '../client';
import type { Team } from '@prisma/client';

export const TeamRepository = {
  create: async (data: Omit<Team, 'id' | 'createdAt' | 'updatedAt'>) => {
    return prisma.team.create({ data });
  },

  update: async (id: string, data: Partial<Omit<Team, 'id' | 'createdAt' | 'updatedAt'>>) => {
    return prisma.team.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return prisma.team.delete({
      where: { id },
    });
  },

  findById: async (id: string) => {
    return prisma.team.findUnique({
      where: { id },
      include: { members: true },
    });
  },

  findAll: async () => {
    return prisma.team.findMany({
      include: { members: true },
      orderBy: { createdAt: 'desc' },
    });
  },
};