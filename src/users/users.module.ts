import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { ValidateUserMiddleware } from './middlewares/check-authorization.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UsersService,
    },
  ],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateUserMiddleware)
      // To Exclude a Route
      .exclude(
        { path: 'api/users', method: RequestMethod.GET },
        { path: 'api/users/:id', method: RequestMethod.GET },
      )
      .forRoutes(UsersController);

    // For Specific Routes
    // consumer.apply(ValidateUserMiddleware).forRoutes(
    //   {
    //     path: 'users/:id',
    //     method: RequestMethod.GET,
    //   },
    //   // For Additional Routes add them here
    //   // {
    //   //   path: 'users/:id',
    //   //   method: RequestMethod.GET,
    //   // },
    // );
  }
}
