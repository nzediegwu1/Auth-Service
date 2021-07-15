import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { AuthenticationMiddleware } from './common/auth.middleware';

@Module({
  imports: [AuthModule, ProfileModule],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: '/api/me', method: RequestMethod.GET }); 
  }
}
