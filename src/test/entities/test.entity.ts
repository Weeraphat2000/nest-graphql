import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field(() => Int)
  exampleField: number;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  exampleField2: number;
}
