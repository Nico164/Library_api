import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma.service';
import { CreateCommentDTO } from './comment.dto';

@Injectable()
export class CommentService {
    constructor(private prismaService: PrismaService) {}
    async getComments(): Promise<any> {
        return await this.prismaService.comment.findMany({
            include: {
                user: true,
                feed: {
                    include :{
                        user: true,
                    }
                },
            }
        }
        )
    }

    async createComment(data: CreateCommentDTO): Promise<any> {
        console.log(data)
        return await this.prismaService.comment.create({
            data,

    
        })
    }


    


}
