import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { LoginDto, RegisterDto } from './auth.dto';
import { LoginResponse } from './auth.entity';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService,
    ) {}
    async login(data: LoginDto): Promise<LoginResponse> {
        const user = await this.prismaService.user.findUnique(
            {
                where: {
                    email: data.email,
                }
            }
        )

        if (!user) {
            throw new NotFoundException("user not found")
        }
        const checkPassword = await bcrypt.compare(data.password, user.password)
        if (!checkPassword) {
            throw new UnauthorizedException("wrong password")
        }

        const token = await this.jwtService.sign(
            {
                userid:user.id,

            }
        )
        return {
            accessToken: token
        }
    } 


    async register(data: RegisterDto): Promise<any> {
        const hashing = await bcrypt.hash(data.password, 10);
        return await this.prismaService.user.create({
            data: {
                email: data.email,
                password: hashing,
                name: data?.name || ''
            }

        })
    }

    async validateUser(payload: any): Promise<any> {
        return await this.prismaService.user.findUnique(
            {
                where: {
                    id:payload.userId,
                }
            }
        )
    }
}
