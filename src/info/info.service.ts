import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInfoDto } from './dto/createInfo.dto';
import { Info } from './entity/info.entity';
import serverResponseStatus from 'src/configs/serverResponseStatus';
import { UpdateInfoDto } from './dto/updateInfo.dto';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info) private readonly infoRepository: Repository<Info>,
  ) {}

  async createInfo(createInfoDto: CreateInfoDto): Promise<Info> {
    try {
      const foundInfo = await this.infoRepository.findOne({
        where: {
          userId: createInfoDto.userId,
        },
      });

      if (foundInfo) {
        throw new HttpException(
          { message: 'Info for user exists already' },
          400,
        );
      }
      const info: Info = new Info();
      info.companyName = createInfoDto.companyName;
      info.usersQuantity = createInfoDto.usersQuantity;
      info.productsQuantity = createInfoDto.productsQuantity;
      info.percentage = createInfoDto.percentage;
      info.userId = createInfoDto.userId;
      return await this.infoRepository.save(info);
    } catch (error) {
      throw new HttpException(
        { message: 'Failed to save Info', error },
        serverResponseStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  updateInfo(updateInfoDto: UpdateInfoDto) {
    console.log(updateInfoDto);
  }
}
