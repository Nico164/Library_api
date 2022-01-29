import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateBookDTO, EditBookDTO } from './Books.dto';
import { BookService } from './books.service';

@Controller()
@ApiTags('Books')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Get("/books")
  getBooks(): any {
    return this.bookService.getBooks();
  }

  @Get("/books/:id")
  @ApiParam({
    name: "id",
    type: String
  })
  getBooksById(@Param('id') id: number): any {
    return this.bookService.getBooksById(id);
  }

  @Post("/books")
  addBook(@Body() createBookDto: CreateBookDTO): any {
    return this.bookService.addBook(createBookDto);
  }

  @Put("/books/:id")
  @ApiParam({
    name: "id",
    type: String
  })
  putHi(@Param('id') id: string | number): string {
    return "hi";
  }

  @Delete("/books/:id")
  @ApiParam({
    name: "id",
    type: String
  })
  deleteHi(@Param("id") id: number): any {
    return this.bookService.deleteBook(id);
  }




}
