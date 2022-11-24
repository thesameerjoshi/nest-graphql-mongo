import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { User } from 'src/users/types/User';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'Sameer Joshi',
      password: 'password',
      email: 'sameer@sameer.com',
    },
    {
      id: 2,
      username: 'John Doe',
      password: 'password',
      email: 'john@sameer.com',
    },
    {
      id: 3,
      username: 'Guest User',
      password: 'password',
      email: 'guest@sameer.com',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUsersById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createuser(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
  }
}
