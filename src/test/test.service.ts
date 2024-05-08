import { Injectable } from '@nestjs/common';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { Test } from './entities/test.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestService {
  constructor(private readonly prismaService: PrismaService) {}
  alluser: { exampleField: number; name: string; exampleField2: number }[] = [
    {
      exampleField: 1,
      name: 'Ali',
      exampleField2: 1,
    },
    {
      exampleField: 2,
      name: 'Veli',
      exampleField2: 2,
    },
    {
      exampleField: 3,
      name: 'Deli',
      exampleField2: 3,
    },
  ];
  create(createTestInput: CreateTestInput) {
    console.log(createTestInput, 'createTestInput in service');
    return this.prismaService.user.create({
      data: createTestInput,
    });
  }

  findAll() {
    return this.prismaService.order.findMany({ include: { userid: true } });
  }

  findOne(id: number) {
    return this.prismaService.order.findFirst({
      where: { id },
      include: { userid: true },
    });
  }

  // update(id: number, updateTestInput: UpdateTestInput) {
  //   return `This action updates a #${id} test`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} test`;
  // }
}
