import { INestApplication, Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

// Why are we extending the PrismaClient? Are these hooks not already there?
@Injectable()
export class PrismaService extends PrismaClient {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
