import { InputType, Int, Field } from '@nestjs/graphql';

@InputType() // สำหรับรับค่าจาก client ต้องเป็น @InputType
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
