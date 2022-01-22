import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDTO {
    @ApiProperty({
        description: "nama buku",
        default: "MobyDick"
    })
    title: string;

    @ApiProperty()
    numberpages: number;

    @ApiProperty({
        type: String,
        default : "John"
    })
    author: string;
}

export class EditBookDTO {
    @ApiProperty({
        description: "nama buku",
        default: "MobyDick"
    })
    title: string;

    @ApiProperty()
    numberpages: number;

    @ApiProperty({
        type: String,
        default : "John"
    })
    author: string;
}