import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity('comment')
export class Coment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  message: string;

  @ManyToOne(() => Task, (task) => task.coments)
  @JoinColumn({
    name: 'idTask',
    referencedColumnName: 'id',
  })
  task: Task;
}
