import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UserNotFoundException } from 'src/users/exceptions/UseNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  // To use a custom serializer
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  // To use a custom serializer
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  // To use a custom  exception filter
  @UseFilters(HttpExceptionFilter)
  getUsersById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.getUsersById(id);
    if (user) return new SerializedUser(user);
    else throw new UserNotFoundException();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createuser(createUserDto);
  }
}
