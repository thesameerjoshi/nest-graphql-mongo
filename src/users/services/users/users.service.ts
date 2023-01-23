import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'SameerJ',
      password: 'password',
      email: 'sameer@sameer.com',
    },
    {
      id: 2,
      username: 'JohnD',
      password: 'password',
      email: 'john@sameer.com',
    },
    {
      id: 3,
      username: 'GuestUser',
      password: 'password',
      email: 'guest@sameer.com',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUsersById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createuser(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
  }
}
