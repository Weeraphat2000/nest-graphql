import { CreateTestInput } from './create-test.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTestInput extends PartialType(CreateTestInput) {
  @Field(() => Int)
  exampleField: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  exampleField2: number;
}
