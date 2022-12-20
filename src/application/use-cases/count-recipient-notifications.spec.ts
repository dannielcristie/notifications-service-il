import { CountRecipientNotifications } from './count-recipient-notifications';
import { Notification } from '@application/entities/notification';
import { Content } from '../entities/content';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';

describe('Count recipients notifications', () => {

  it('should be able to count recipient  notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const countRecipientlNotifications = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(
      new Notification({
        category: 'Social',
        content: new Content('this is a notification'),
        recipientId: 'recipiendId-01',
      })
    )

    await notificationsRepository.create(
      new Notification({
        category: 'Social',
        content: new Content('this is a notification'),
        recipientId: 'recipiendId-01',
      })
    )

    await notificationsRepository.create(
      new Notification({
        category: 'Social',
        content: new Content('this is a notification'),
        recipientId: 'recipiendId-02',
      })
    )

    const { count } = await countRecipientlNotifications.execute({
      recipientId: "recipiendId-01"
    })

    expect(count).toEqual(2);

  });
});
