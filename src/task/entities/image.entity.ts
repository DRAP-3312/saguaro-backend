import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity('image')
export class Img {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  path: string;

  @ManyToOne(() => Task, (task) => task.imgs)
  @JoinColumn({
    name: 'idTask',
    referencedColumnName: 'id',
  })
  task: Task;
}
