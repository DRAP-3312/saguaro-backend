import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { HenderErros } from 'src/common/utils/error';
import { Board } from 'src/board/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Board)
    private readonly boardRepo: Repository<Board>,
  ) {}

  error = new HenderErros('UserService');

  async create(createUserDto: CreateUserDto) {
    try {
      const { state = true, ...data } = createUserDto;
      const user = this.userRepo.create({
        ...data,
        state,
      });
      await this.userRepo.save(user);
      return user;
    } catch (error) {
      error(error);
    }
  }

  async findOne(idUser: string): Promise<User> {
    const user = this.userRepo.findOne({
      where: { id: idUser, state: true },
      relations: { board: true },
    });

    if (!user) throw new NotFoundException(`Ùser with id ${idUser} not found`);
    return user;
  }
}
