import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDTO {
    @ApiProperty({
        description: "write a comment",
        default: "....."
    })
    commentar: string;

    @ApiProperty()
    userId: number;

    @ApiProperty()
    feedId: number;
}

