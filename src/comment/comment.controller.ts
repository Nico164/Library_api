import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentDTO } from './comment.dto';
import { CommentService } from './comment.service';

@Controller('comment')
@ApiTags("comment")
export class CommentController {
    constructor(private commentService: CommentService ) {}

    @Get()
    getComments(): Promise<any> {
        return this.commentService.getComments();
    }

    @Post()
    CreateComment(@Body() body: CreateCommentDTO): Promise<any> {
        return this.commentService.createComment(body);
    }


}
