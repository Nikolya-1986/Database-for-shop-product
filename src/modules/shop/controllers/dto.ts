import { ApiProperty } from "@nestjs/swagger";

export class CreateDto {
    @ApiProperty({ 
        required: false 
    })
    category?: string;
    @ApiProperty({ 
        required: false 
    })
    details?: string;
    @ApiProperty({ 
        required: false 
    })
    discription?: string;
    @ApiProperty({ 
        required: false 
    })
    idGoods?: number;
    @ApiProperty({ 
        required: false 
    })
    images?: string;
    @ApiProperty({ 
        required: false 
    })
    price?: number;
    @ApiProperty({ 
        required: false 
    })
    superPrice?: string;
    @ApiProperty({ 
        required: false 
    })
    title?: string
}

export class UpdateDto {
    @ApiProperty({ 
        required: false 
    })
    category?: string;
    @ApiProperty({ 
        required: false 
    })
    details?: string;
    @ApiProperty({ 
        required: false 
    })
    discription?: string;
    @ApiProperty({ 
        required: false 
    })
    idGoods?: number;
    @ApiProperty({ 
        required: false 
    })
    images?: string;
    @ApiProperty({ 
        required: false 
    })
    price?: number;
    @ApiProperty({ 
        required: false 
    })
    superPrice?: string;
    @ApiProperty({ 
        required: false 
    })
    title?: string
}