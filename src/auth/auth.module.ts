import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthStrategy } from './auth.strategy';

@Module({
  imports: [PassportModule, JwtModule.register({
    secret: "12345",
    signOptions: { expiresIn :"24h"
  }
  }) ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AuthStrategy]
})
export class AuthModule {}
