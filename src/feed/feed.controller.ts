import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { brotliDecompressSync } from 'zlib';
import { CreateFeedDTO } from './feed.dto';
import { FeedService } from './feed.service';

@Controller('feed')
@ApiTags("feed")
export class FeedController {
    constructor(private feedService: FeedService) {}
    
    @Get()
    getFeeds(): Promise<any> {
        return this.feedService.getFeeds();
    }

    @Post()
    createFeed(@Body()  body : CreateFeedDTO): Promise <any> {
        return this.feedService.createFeed(body);

    }

    @Delete("/:id")
    @ApiParam({
        name: "id",
        type: String
      })
    deleteFeed(@Param("id") id: number): any {
        return this.feedService.deleteFeed(id)
    }
    
}
