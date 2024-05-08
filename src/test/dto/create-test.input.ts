import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTestInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // id: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string;
}
