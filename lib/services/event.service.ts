import { Event } from '@prisma/client';
import { EventRepository } from '../db/repositories';
import { NotFoundError, ValidationError } from './error';

export const EventService = {
  async createEvent(data: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>) {
    if (!data.title) {
      throw new ValidationError('Event title is required');
    }
    
    try {
      return await EventRepository.create(data);
    } catch (error) {
      throw new Error('Failed to create event');
    }
  },

  async updateEvent(id: string, data: Partial<Omit<Event, 'id' | 'createdAt' | 'updatedAt'>>) {
    const event = await EventRepository.findById(id);
    if (!event) {
      throw new NotFoundError('Event');
    }

    try {
      return await EventRepository.update(id, data);
    } catch (error) {
      throw new Error('Failed to update event');
    }
  },

  async deleteEvent(id: string) {
    const event = await EventRepository.findById(id);
    if (!event) {
      throw new NotFoundError('Event');
    }

    try {
      await EventRepository.delete(id);
    } catch (error) {
      throw new Error('Failed to delete event');
    }
  },

  async getEvent(id: string) {
    const event = await EventRepository.findById(id);
    if (!event) {
      throw new NotFoundError('Event');
    }
    return event;
  },

  async getAllEvents() {
    try {
      return await EventRepository.findAll();
    } catch (error) {
      throw new Error('Failed to fetch events');
    }
  },
};