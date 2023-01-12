import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UserNotFoundException } from 'src/users/exceptions/UseNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // Nest Way

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  getUsersById(@Param('id', ParseIntPipe) id: number) {
    try {
      const user = this.usersService.getUsersById(id);
      if (user) return user;
      else throw new UserNotFoundException();
    } catch (error) {}
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createuser(createUserDto);
  }
}
