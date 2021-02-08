import { ApiProperty } from "@nestjs/swagger";

export class NotFoundResponse {
    @ApiProperty({
        default: 404
    })
    statusCode: number;
    @ApiProperty({
        default: `Goods with id=% not exists`
    })
    message: string
}