import { Notification } from '@application/entities/notification';
import { Content } from '../entities/content';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'Social',
      content: new Content('this is a notification'),
      recipientId: 'example recipiendId',
    });

    await notificationsRepository.create(notification)

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date))
  });

  it('should not to be able to cancel a non existing notification', async () => {

    const notificationsRepository = new InMemoryNotificationRepository
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: "Fake-notification-id"
      });
    }).rejects.toThrow(NotificationNotFound)
  });

});