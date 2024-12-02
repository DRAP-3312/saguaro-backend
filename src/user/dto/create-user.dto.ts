import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'name of user',
    nullable: false,
    minLength: 2,
    maxLength: 50,
    example: 'paco beto',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @ApiProperty({
    description: 'lastname of user',
    nullable: false,
    minLength: 2,
    maxLength: 50,
    example: 'ayala chan',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  lastname: string;

  @ApiProperty({
    description: 'email of user',
    nullable: false,
    example: 'pacob@google.com',
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'description of user',
    nullable: true,
    maxLength: 250,
    example: 'me gustan los video juegos y deportes',
  })
  @IsString()
  @IsOptional()
  @MaxLength(250)
  description: string;

  @ApiProperty({
    description: 'picture of user',
    nullable: true,
    example: 'picture.jpg',
  })
  @IsString()
  @IsOptional()
  picture: string;

  @ApiProperty({
    description: 'gender of user',
    nullable: false,
    example: 'male',
  })
  @IsIn(['male', 'female', 'notSay'])
  gender: string;

  @ApiProperty({
    description: 'phone of user',
    nullable: false,
    minLength: 4,
    maxLength: 10,
    example: '9977553322',
  })
  @IsString()
  @MaxLength(10)
  @MinLength(4)
  phone: string;

  @ApiProperty({
    description: 'lada of user',
    nullable: false,
    minLength: 2,
    maxLength: 4,
    example: '+52',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(4)
  lada: string;

  @ApiProperty({
    description: 'state of user',
    nullable: false,
    example: true,
  })
  @IsBoolean()
  state: boolean;
}
