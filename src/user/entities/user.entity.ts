import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @ApiProperty({
        example: '123e4567-e89b-12d3-a456-426655440000',
        description: 'User ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ApiProperty({
        example: 'Jose Marco',
        description: 'User name',
    })
    @Column('text')
    name: string

    @ApiProperty({
        example: 'Chan Moines',
        description: 'User lastname',
    })
    @Column('text')
    lastname: string

    @ApiProperty({
        example: 'jose@gmail.com',
        description: 'User email',
        uniqueItems: true
    })
    @Column('text')
    email: string

    @ApiProperty({
        example: 'megustan los video juegos',
        description: 'User description',
    })
    @Column('text')
    description: string

    @ApiProperty({
        example: 'mifoto.jpg',
        description: 'User picture',
        uniqueItems: true
    })
    @Column('text')
    picture: string

    @ApiProperty({
        example: 'male',
        description: 'User gender',
    })
    @Column('text')
    gender: string

    @ApiProperty({
        example: '4266554400',
        description: 'User phone',
        uniqueItems: true
    })
    @Column('text')
    phone: string
}
