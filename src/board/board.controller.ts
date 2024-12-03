import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  ParseUUIDPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Board } from './entities/board.entity';

@ApiTags('board')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Board was created', type: Board })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  async create(
    @Param('id') id: string,
    @Body() createBoardDto: CreateBoardDto,
  ) {
    return await this.boardService.create(id, createBoardDto);
  }

  @ApiResponse({ status: 201, description: 'All board', type: Board })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related' })
  @Get()
  async findAll() {
    return await this.boardService.findAll();
  }
}
