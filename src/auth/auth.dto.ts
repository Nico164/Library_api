import { ApiProperty } from "@nestjs/swagger";
import { doesNotMatch } from "assert";
import { IsEmail, IsString } from "class-validator";
import { mainModule } from "process";


export class LoginDto {
    @IsEmail()
    @ApiProperty({
        description: "Enter a valid Email",
        default: "mail@mail.com",
    })
    email: string;

    @ApiProperty({
        description: "enter your password"
    })
    password: string;
}

export class RegisterDto extends LoginDto{
    @ApiProperty({
        description: "enter your name",
        default: "John Doe",
    })
    @IsString()
    name?: string;
}