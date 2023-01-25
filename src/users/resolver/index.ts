import { Query, Resolver } from '@nestjs/graphql';
import { UserType } from '../types';

@Resolver((of) => UserType)
export class UserResolver {
  @Query((returns) => UserType)
  user() {
    return {
      id: '1',
      name: 'Sameer Joshi',
      email: 'sameer@sameer.com',
      password: 'password',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}
