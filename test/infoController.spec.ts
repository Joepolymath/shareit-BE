import { Test, TestingModule } from '@nestjs/testing';
import { InfoController } from '../src/info/info.controller';
import { InfoService } from '../src/info/info.service';
import { CreateInfoDto, UpdateInfoDto } from '../src/info/dto/createInfo.dto';

describe('InfoController', () => {
  let infoController: InfoController;
  let infoService: InfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoController],
      providers: [InfoService],
    }).compile();

    infoController = module.get<InfoController>(InfoController);
    infoService = module.get<InfoService>(InfoService);
  });

  describe('create', () => {
    it('should create info', async () => {
      const createInfoDto: CreateInfoDto = {
        /* provide valid CreateInfoDto data */
        companyName: 'Google',
        productsQuantity: 5,
        usersQuantity: 42,
        userUid: '234324324',
        percentage: 87,
      };
      const req = { user: { userUid: 'userUid' } }; // Mock the request object

      jest
        .spyOn(infoService, 'createInfo')
        .mockImplementation(async () => 'createdInfo');

      const result = await infoController.create(createInfoDto, req);
      expect(result).toBe('createdInfo');
    });
  });

  describe('find', () => {
    it('should return all info for an admin', async () => {
      jest
        .spyOn(infoService, 'findAllInfo')
        .mockImplementation(async () => ['info1', 'info2']);

      const result = await infoController.find();
      expect(result).toEqual(['info1', 'info2']);
    });
  });

  describe('update', () => {
    it('should update info for an admin', async () => {
      const updateInfoDto: UpdateInfoDto = {
        /* provide valid UpdateInfoDto data */
        id: 2,
        companyName: 'Facebook',
        productsQuantity: 5,
        usersQuantity: 42,
        userUid: 'asdfhdjkljh',
        percentage: 87,
      };

      jest
        .spyOn(infoService, 'updateInfo')
        .mockImplementation(async () => 'updatedInfo');

      const result = await infoController.update(updateInfoDto);
      expect(result).toBe('updatedInfo');
    });
  });

  describe('findOne', () => {
    it('should find info by id for an admin', async () => {
      const id = '1';

      jest
        .spyOn(infoService, 'findOneInfo')
        .mockImplementation(async () => 'foundInfo');

      const result = await infoController.findOne(id);
      expect(result).toBe('foundInfo');
    });
  });
});
