import { Injectable } from '@nestjs/common';
import {
  User,
  Prisma
} from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  getHiData() {
    return {
      data: "Halo Nico¨",
      message:"success" 
    }
  }

  async getUser(): Promise<User[]> {
    return await this.prisma.user.findMany(); 
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async deleteUser(id: number): Promise<any> {
    return this.prisma.user.delete({
      where: {
        id: Number(id)
      }
    })
  }

}

