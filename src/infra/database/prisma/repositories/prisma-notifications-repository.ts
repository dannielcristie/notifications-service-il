import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notifications-repository";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }

  async create (notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data: raw
    });
  }

  async findById (notification: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }
  
  async save (notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }

}