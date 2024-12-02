import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateBoardDto {
  @ApiProperty({
    example: 'Tareas matematicas',
    description: 'name of Board',
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @ApiProperty({
    example: 'tareas de la semana 2',
    description: 'description of Board',
    nullable: true,
  })
  @IsString()
  @MaxLength(250)
  @IsOptional()
  description: string;

  @ApiProperty({
    example: true,
    description: 'state of Board',
    nullable: false,
  })
  @IsBoolean()
  state: boolean;
}
