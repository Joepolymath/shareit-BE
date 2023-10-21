import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto, UpdateInfoDto } from './dto/createInfo.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';

@Controller('info')
@UseGuards(AuthGuard)
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post()
  @UseGuards(new RoleGuard(['user']))
  create(@Body() createInfoDto: CreateInfoDto, @Req() req: any) {
    createInfoDto.userUid = req.user.userUid as string;
    return this.infoService.createInfo(createInfoDto);
  }

  @Get()
  @UseGuards(new RoleGuard(['admin']))
  find() {
    return this.infoService.findAllInfo();
  }

  @Patch()
  @UseGuards(new RoleGuard(['admin']))
  update(@Body() updateInfoDto: UpdateInfoDto) {
    return this.infoService.updateInfo(updateInfoDto);
  }

  @Get(':id')
  @UseGuards(new RoleGuard(['admin']))
  findOne(@Param('id') id: string) {
    return this.infoService.findOneInfo(Number(id));
  }
}
