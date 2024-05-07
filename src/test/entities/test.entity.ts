import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
export class Test {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  userId: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  amount: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => User, { description: 'Example field (placeholder)' })
  userid: User;
}
