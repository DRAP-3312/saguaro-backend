import { ApiProperty } from '@nestjs/swagger';
import { Board } from 'src/board/entities/board.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @ApiProperty({
    example: 'e1054272-7da4-4527-9358-662fd0552d5e',
    description: 'User ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Jose Marco',
    description: 'User name',
  })
  @Column('text')
  name: string;

  @ApiProperty({
    example: 'Chan Moines',
    description: 'User lastname',
  })
  @Column('text')
  lastname: string;

  @ApiProperty({
    example: 'jose@gmail.com',
    description: 'User email',
    uniqueItems: true,
  })
  @Column('text')
  email: string;

  @ApiProperty({
    example: 'me gustan los video juegos',
    description: 'User description',
  })
  @Column('text')
  description: string;

  @ApiProperty({
    example: 'mifoto.jpg',
    description: 'User picture',
    uniqueItems: true,
  })
  @Column('text')
  picture: string;

  @ApiProperty({
    example: 'male',
    description: 'User gender',
  })
  @Column('text')
  gender: string;

  @ApiProperty({
    example: '4266554400',
    description: 'User phone',
    uniqueItems: true,
  })
  @Column('text')
  phone: string;

  @ApiProperty({
    example: '+52',
    description: 'User lada',
    uniqueItems: false,
  })
  @Column('text')
  lada: string;

  @ApiProperty({
    example: true,
    description: 'User state',
  })
  @Column('bool')
  state: boolean;

  @ManyToMany(() => Board, (board) => board.users, { cascade: true })
  @JoinTable({
    name: 'user_board',
    joinColumn: {
      referencedColumnName: 'id',
    },
  })
  boards: Board[];
}
