import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInfoDto } from './dto/createInfo.dto';
import { Info } from './entity/info.entity';
import serverResponseStatus from 'src/configs/serverResponseStatus';
import { UpdateInfoDto } from './dto/createInfo.dto';
import { successResponse } from 'src/common/utils/responses.utils';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info) private readonly infoRepository: Repository<Info>,
  ) {}

  async createInfo(createInfoDto: CreateInfoDto) {
    try {
      const foundInfo = await this.infoRepository.findOne({
        where: {
          userUid: createInfoDto.userUid,
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
      info.userUid = createInfoDto.userUid;
      const data = await this.infoRepository.save(info);
      return successResponse('Information Saved', data);
    } catch (error) {
      throw new HttpException(
        { message: 'Failed to save Info', error },
        serverResponseStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAllInfo() {
    try {
      const info = await this.infoRepository.find({});
      if (!info) {
        throw new HttpException('Info not found', 404);
      }
      return successResponse('Data retrieved', info);
    } catch (error) {
      throw new HttpException('Unable to fetch info', 500);
    }
  }

  async updateInfo(updateInfoDto: UpdateInfoDto) {
    try {
      const foundInfo = await this.infoRepository.findOne({
        where: { id: updateInfoDto.id },
      });
      if (!foundInfo) {
        throw new Error('Info not found');
      }

      const data = await this.infoRepository.update(
        { id: foundInfo.id },
        updateInfoDto,
      );
      return successResponse('Updated Successfully', data);
    } catch (error) {
      return new HttpException('Unable to update Info', 500);
    }
  }
  async findOneInfo(id: number) {
    try {
      const foundInfo = await this.infoRepository.findOne({
        where: { id },
      });
      if (!foundInfo) {
        throw new Error('Info not found');
      }

      return successResponse('Retrieved Successfully', foundInfo);
    } catch (error) {
      return new HttpException('Unable to fetch Info', 500);
    }
  }
}
