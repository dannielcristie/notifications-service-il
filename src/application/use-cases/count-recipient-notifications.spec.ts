import { CountRecipientNotifications } from './count-recipient-notifications';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notifications', () => {

  it('should be able to count recipient  notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const countRecipientlNotifications = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipiendId-01' })
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipiendId-01' })
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipiendId-02' })
    );

    const { count } = await countRecipientlNotifications.execute({
      recipientId: "recipiendId-01"
    })

    expect(count).toEqual(2);

  });
});
