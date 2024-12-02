import { Blog } from '@prisma/client';
import { BlogRepository } from '../db/repositories';
import { NotFoundError, ValidationError } from './error';

export const BlogService = {
  async createBlog(data: Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>) {
    if (!data.title || !data.content) {
      throw new ValidationError('Blog title and content are required');
    }

    try {
      return await BlogRepository.create(data);
    } catch (error) {
      throw new Error('Failed to create blog');
    }
  },

  async updateBlog(id: string, data: Partial<Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>>) {
    const blog = await BlogRepository.findById(id);
    if (!blog) {
      throw new NotFoundError('Blog');
    }

    try {
      return await BlogRepository.update(id, data);
    } catch (error) {
      throw new Error('Failed to update blog');
    }
  },

  async deleteBlog(id: string) {
    const blog = await BlogRepository.findById(id);
    if (!blog) {
      throw new NotFoundError('Blog');
    }

    try {
      await BlogRepository.delete(id);
    } catch (error) {
      throw new Error('Failed to delete blog');
    }
  },

  async getBlog(id: string) {
    const blog = await BlogRepository.findById(id);
    if (!blog) {
      throw new NotFoundError('Blog');
    }
    return blog;
  },

  async getAllBlogs() {
    try {
      return await BlogRepository.findAll();
    } catch (error) {
      throw new Error('Failed to fetch blogs');
    }
  },
};