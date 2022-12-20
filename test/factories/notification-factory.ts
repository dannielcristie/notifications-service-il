import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notification';


type Override = Partial<NotificationProps>;

export function makeNotification (override: Override = {}) {
  return new Notification({
    category: 'Social',
    content: new Content('this is a notification'),
    recipientId: 'recipiendId-01',
    ...override,
  });
}