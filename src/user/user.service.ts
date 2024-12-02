import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  private readonly logger = new Logger('UserService')

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepo.create(createUserDto)
      await this.userRepo.save(user)
      return user
    } catch (error) {
      this.errors(error)
    }
  }

  private errors(error: any) {
    if (error.code === '23505')
      throw new BadRequestException(error.detail)
    this.logger.error(error)
    throw new InternalServerErrorException('Error interno, check logs')
  }
}
