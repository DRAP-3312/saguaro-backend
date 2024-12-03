import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { List } from './list.entity';

@Entity('board')
export class Board {
  @ApiProperty({
    example: '',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Tareas matemáticas',
  })
  @Column('text', { unique: true })
  name: string;

  @ApiProperty({
    example: 'Aquí las tareas pendientes de la materia matemáticas',
  })
  @Column('text')
  description?: string;

  @ApiProperty({
    example: true,
  })
  @Column('bool')
  state: boolean;

  @OneToMany(() => List, (list) => list.board)
  lists?: string[];

  @ManyToOne(() => User, (user) => user.board)
  @JoinColumn({
    name: 'idOwner',
  })
  createdBy: User;

  @Column('simple-array', { default: [] })
  guest?: string[];
}
