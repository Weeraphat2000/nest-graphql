import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestResolver } from './test.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [TestResolver, TestService],
  imports: [PrismaModule],
})
export class TestModule {}
