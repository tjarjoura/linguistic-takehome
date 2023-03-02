import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
  exports: [UserResolver],
})
export class UserModule {}
