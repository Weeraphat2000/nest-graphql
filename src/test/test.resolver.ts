import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TestService } from './test.service';
import { CreateTypeOutput, Test } from './entities/test.entity';
import { CreateTestInput } from './dto/create-test.input';
// import { UpdateTestInput } from './dto/update-test.input';

//
// @InputType()
// export class Create {
//   // @Field(() => Int, { description: 'Example field (placeholder)' })
//   // id: number;

//   @Field(() => String, { description: 'Example field (placeholder)' })
//   name: string;

//   @Field(() => String, { description: 'Example field (placeholder)' })
//   description: string;

//   @Field(() => String, { description: 'Example field (placeholder)' })
//   password: string;
// }

//

@Resolver(() => Test)
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  @Mutation(() => CreateTypeOutput, { name: 'createTest' })
  async createTest(
    @Args('createTestInput')
    createTestInput: CreateTestInput,
  ) {
    console.log(createTestInput.description, 'createTestInput');
    const data = await this.testService.create(createTestInput);
    return data;
  }

  @Query(() => [Test], { name: 'tests' })
  findAll() {
    return this.testService.findAll();
  }

  @Query(() => Test, { name: 'test' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    console.log(id, 'id');
    return this.testService.findOne(id);
  }

  // @Mutation(() => Test)
  // updateTest(@Args('updateTestInput') updateTestInput: UpdateTestInput) {
  //   return this.testService.update(updateTestInput.id, updateTestInput);
  // }

  // @Mutation(() => Test)
  // removeTest(@Args('id', { type: () => Int }) id: number) {
  //   return this.testService.remove(id);
  // }
}
