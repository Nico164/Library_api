import { Module } from '@nestjs/common';
import { UserController } from "./users.controller"
import { UserService } from './users.service';
import {BookController} from "./books.controller"
import {BookService} from "./books.service"
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [UserController, BookController],
  providers: [ UserService, BookService, PrismaService]
})
export class AppModule {}
