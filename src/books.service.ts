import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getHiData() {
    return {
      data: "Books 4 life",
      message:"success" 
    }
  }
}
