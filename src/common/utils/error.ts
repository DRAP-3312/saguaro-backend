import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

export class HenderErros {
  private serv = '';
  constructor(param: string) {
    this.serv = param;
  }
  readonly logger = new Logger(this.serv);
  errors(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    this.logger.error(error);
    return new InternalServerErrorException('Error interno, check logs');
  }
}
