import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { HenderErros } from 'src/common/utils/error';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
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

  async findone(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user)
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return user;
  }

}
