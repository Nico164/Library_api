import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
    
}
