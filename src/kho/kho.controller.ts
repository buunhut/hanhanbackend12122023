import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards } from '@nestjs/common';
import { KhoService } from './kho.service';
import { CreateKhoDto } from './dto/create-kho.dto';
import { UpdateKhoDto } from './dto/update-kho.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/service';

@UseGuards(AuthGuard)
@ApiTags('kho')
@Controller('kho')
export class KhoController {
  constructor(private readonly khoService: KhoService) {}

  
 
}
