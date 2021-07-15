import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
