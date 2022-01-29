import { ApiProperty } from "@nestjs/swagger";

export class CreateFeedDTO {
    @ApiProperty({
        description: "nama buku",
        default: "MobyDick"
    })
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    userId: number;
}

