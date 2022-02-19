import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './auth.dto';
import { LoginResponse } from './auth.entity';
import { AuthService } from './auth.service';

@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiCreatedResponse({type: LoginResponse})
  async login(
    @Body() body: LoginDto
  ) {
    return this.authService.login(body)
  }
  
  @Post("register")
  async register(
    @Body() body: RegisterDto
  ) {
    return this.authService.register(body);
  }
}


