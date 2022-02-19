import { Module } from '@nestjs/common';
import { UserController } from "./users.controller"
import { UserService } from './users.service';
import {BookController} from "./books.controller"
import {BookService} from "./books.service"
import { PrismaService } from './prisma.service';
import { FeedController } from './feed/feed.controller';
import { FeedService } from './feed/feed.service';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [UserController, BookController, FeedController, CommentController],
  providers: [ UserService, BookService, PrismaService, FeedService, CommentService]
})
export class AppModule {}
