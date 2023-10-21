import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInfoDto } from './dto/createInfo.dto';
import { Info } from './entity/info.entity';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info) private readonly infoRepository: Repository<Info>,
  ) {}

  createInfo(createInfoDto: CreateInfoDto): Promise<Info> {
    try {
      const info: Info = new Info();
      info.companyName = createInfoDto.companyName;
      info.usersQuantity = createInfoDto.usersQuantity;
      info.productsQuantity = createInfoDto.productsQuantity;
      info.percentage = createInfoDto.percentage;
      info.userId = createInfoDto.userId;
      return this.infoRepository.save(info);
    } catch (error) {
      console.log();
    }
  }
}
