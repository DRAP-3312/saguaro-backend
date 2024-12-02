import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from './board.entity';
import { Task } from 'src/task/entities/task.entity';

@Entity()
export class List {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  tittle: string;

  @ManyToOne(() => Board, (board) => board.lists)
  @JoinColumn({
    name: 'idBoard',
    referencedColumnName: 'id',
  })
  board: Board;

  @OneToMany(() => Task, (task) => task.list)
  tasks: Task[];
}
