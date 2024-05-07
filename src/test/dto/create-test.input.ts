import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField2: number;
}
