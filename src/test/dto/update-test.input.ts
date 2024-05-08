import { CreateTestInput } from './create-test.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTestInput extends PartialType(CreateTestInput) {
  @Field(() => Int)
  id?: number;

  @Field(() => String)
  name?: string;

  @Field(() => String)
  description?: string;

  @Field(() => String)
  password?: string;
}
