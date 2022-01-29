import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateFeedDTO } from './feed.dto';

@Injectable()
export class FeedService {
    constructor(private prismaService: PrismaService) { }

    async getFeeds(): Promise<any> {
        return await this.prismaService.feed.findMany({
            where: {
                status: true,
            },
            include: {
                user: true
            }
        })
    }

    async getFeedById(id: number): Promise<any> {
        return await this.prismaService.feed.findUnique({
            where: {
                id: Number(id)
            },
            include: {
                user: true
            }
        })
    }

    async createFeed(data: CreateFeedDTO ) : Promise<any> {
        return await this.prismaService.feed.create({
            data,
        })

    }

    async deleteFeed(id: number): Promise<any> {
        return await this.prismaService.feed.update({
            where: {
                id: Number(id)
            },
            data: {
                status: false
            }
        })
    }
}
