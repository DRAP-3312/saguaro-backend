import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Responder la pagina 5 del libro',
    description: 'title of task',
    nullable: false,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Responder los ejercicios a y b',
    description: 'description of task',
    nullable: true,
  })
  @IsString()
  @IsOptional()
  @MaxLength(250)
  description: string;

  @IsString()
  @IsNotEmpty()
  idTask: string
}
