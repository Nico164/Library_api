import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateBookDTO, EditBookDTO } from './Books.dto';
import { BookService } from './books.service';

@Controller()
@ApiTags('Books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get("/books")
  getHi(): {data: string, message: string} {
    return this.bookService.getHiData();
  }

  @Post("/books")
  postHi(@Body() createBookDto: CreateBookDTO):string {
    return "hi";
  }

  @Put("/books/:id")
  @ApiParam({
    name: "id",
    type: String
  })
  putHi(@Param('id') id:string | number): string {
    return "hi";
  }

  @Delete("/books/:id")
  @ApiParam({
    name: "id",
    type: String
})
  deleteHi(): string {
    
    return "hi";
  }

  

}
