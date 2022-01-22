import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
    @ApiProperty({
        description: "isi dengan name lengkap",
        default: "john"
    })
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}

export class EditUserDTO {
    @ApiProperty({
        description: "isi dengan name lengkap",
        default: "john"
    })
    name?: string;

    @ApiProperty({
        type: Number,
        default : 12345
    })
    password: number;
}