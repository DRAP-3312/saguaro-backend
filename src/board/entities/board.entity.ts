import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { List } from './list.entity';

@Entity('board')
export class Board {
  @ApiProperty({
    example: '',
    description: 'Board id',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Tareas matematicas',
    description: 'Board name',
    uniqueItems: true,
    required: true,
  })
  @Column('text', { unique: true })
  name: string;

  @ApiProperty({
    example: 'Aca las tareas pendientes de la materia matematicas',
    description: 'Board description',
  })
  @Column('text')
  description: string;

  @ApiProperty({
    example: true,
    description: 'Board state',
  })
  @Column('bool')
  state: boolean;

  @ManyToMany(() => User, (user) => user.boards)
  users: User[];

  @OneToMany(() => List, (list) => list.board)
  lists: List[];
}
