import { Body, Controller, Post } from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto } from './dto/createInfo.dto';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post()
  create(@Body() createInfoDto: CreateInfoDto) {
    createInfoDto.userId = 1;
    return this.infoService.createInfo(createInfoDto);
  }
}
