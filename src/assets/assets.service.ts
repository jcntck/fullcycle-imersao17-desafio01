import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
  ) {}

  async create(createAssetDto: CreateAssetDto) {
    const asset = this.assetRepository.create(createAssetDto);
    return this.assetRepository.save(asset);
  }

  async findAll() {
    return this.assetRepository.find();
  }
}
