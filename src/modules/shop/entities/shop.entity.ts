import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shop {
    @ApiProperty()
    @PrimaryGeneratedColumn()//для уникального значения обязательно, id
    id: number;
  
    @ApiProperty()
    @Column()
    category: string;

    @ApiProperty()
    @Column()
    title: string;
  
    @ApiProperty()
    @Column()
    details: string;
  
    @ApiProperty()
    @Column()
    discription: string;
  
    @ApiProperty()
    @Column()
    images: string;

    @ApiProperty()
    @Column()
    idGoods: number;
  
    @ApiProperty()
    @Column("float")
    price: number;
  
    @ApiProperty()
    @Column()
    superPrice: string;
}