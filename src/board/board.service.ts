import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { DataSource, Repository } from 'typeorm';
import { Board } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { HenderErros } from 'src/common/utils/error';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly repoBoard: Repository<Board>,
    @InjectRepository(User)
    private readonly repoUser: Repository<User>,
    private readonly dataSource: DataSource,
  ) {}

  private handlerError = new HenderErros('BoardService');
  async create(idUser:string, boardData: CreateBoardDto): Promise<Board> {
    try {
      const { createdBy, guest = [], ...restdata } = boardData;
      const owner = await this.repoUser.findOneBy({
        id: idUser,
        state: true,
      });
      if (!owner)
        throw new NotFoundException(
          `Usuario con id ${createdBy} no encontrado`,
        );
      const board = this.repoBoard.create({
        ...restdata,
        createdBy: { id: owner.id },
        guest,
      });

      await this.repoBoard.save(board);
      return board;
    } catch (error) {
      this.handlerError.errors(error);
    }
  }

  async findAll(): Promise<Board[]> {
    const allList = await this.repoBoard.find({});
    return allList ? allList : [];
  }
}
