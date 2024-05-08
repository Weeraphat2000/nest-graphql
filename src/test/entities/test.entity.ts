import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType() // ต้องมี ObjectType ด้วย output ของ entity
// สำหรับส่งค่ากลับไปให้ client ต้องเป็น @ObjectType
export class Test {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  userId: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  amount: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => User, { description: 'Example field (placeholder)' }) // Field type is User คือ ต้องมี entity ของ User อยู่ด้วย
  userid: User;
}

@ObjectType()
export class CreateTypeOutput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  password: string;
}
