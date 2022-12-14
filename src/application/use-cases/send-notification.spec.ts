import { SendNotification } from "./send-notification";

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification;

    const { notification } = await sendNotification.execute({
      content: 'this is a notification',
      category: 'Social',
      recipientId: 'example recipiendId'
    });

    expect(notification).toBeTruthy();
  });
});