import { Injectable } from '@nestjs/common';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  alluser: CreateTestInput[] = [
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
  // create(createTestInput: CreateTestInput) {
  //   return 'This action adds a new test';
  // }

  findAll() {
    return this.alluser;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} test`;
  // }

  // update(id: number, updateTestInput: UpdateTestInput) {
  //   return `This action updates a #${id} test`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} test`;
  // }
}
