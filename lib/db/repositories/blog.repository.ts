import { prisma } from '../client';
import type { Blog } from '@prisma/client';

export const BlogRepository = {
  create: async (data: Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>) => {
    return prisma.blog.create({ data });
  },

  update: async (id: string, data: Partial<Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>>) => {
    return prisma.blog.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return prisma.blog.delete({
      where: { id },
    });
  },

  findById: async (id: string) => {
    return prisma.blog.findUnique({
      where: { id },
    });
  },

  findAll: async () => {
    return prisma.blog.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },
};