import { List } from 'src/board/entities/list.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Coment } from './comment.entity';
import { Img } from './image.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @ManyToOne(() => List, (list) => list.tasks)
  @JoinColumn({
    name: 'idList',
    referencedColumnName: 'id',
  })
  list: List;

  @OneToMany(() => Coment, (coment) => coment.task)
  coments: Coment[];

  @OneToMany(() => Img, (img) => img.task)
  imgs: Img[];
}
