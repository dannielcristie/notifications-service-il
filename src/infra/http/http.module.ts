import { DatabaseModule } from './../database/database.module';
import { SendNotification } from '@application/use-cases/send-notification';
import { Module } from "@nestjs/common";
import { NotificationsController } from "./controller/notifications.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification]
})
export class HttpModule { }