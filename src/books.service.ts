import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from './prisma.service'



@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  getHiData() {
    return {
      data: "Books 4 life",
      message:"success" 
    }
  }
  async getBooks() : Promise<any> {
    return await this.prisma.book.findMany()
  }

  async getBooksById(id: number) : Promise<any> {
    return await this.prisma.book.findUnique({where: {id: +id}})
  }
  
  async addBook(data: Prisma.BookCreateInput) : Promise<any> {
    return await this.prisma.book.create({
      data,
    })
  }

  async deleteBook(id: number): Promise<any> {
    return this.prisma.book.delete({
      where: {
        id: Number(id)
      }
    })
  }
}
