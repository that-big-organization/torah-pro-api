import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SpeakerModule } from './speaker/speaker.module';

@Module({
  imports: [UserModule, SpeakerModule],
})
export class AppModule {}
