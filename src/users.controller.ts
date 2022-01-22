import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO, EditUserDTO } from './users.dto';
import { UserService } from './users.service';

@Controller()
@ApiTags("User")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/users")
  getHi(): any {
    return this.userService.getUser();
  }

  @Post("/users")
  postHi(@Body() createUserDto: CreateUserDTO): any {
    return this.userService.createUser(createUserDto);
  }

  @Put("/users/:id")
  @ApiParam({
      name: "id",
      type: String
  })
  putHi(@Param('id') id:string | number, @Body() editUserDto: EditUserDTO): string {
    return id.toString();
  }

  @Delete("/users/:id")
  @ApiParam({
    name: "id",
    type: Number
})
  deleteHi(@Param('id') id:number): any {
    return this.userService.deleteUser(id);
  }
  
}

