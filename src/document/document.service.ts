import { Injectable } from '@nestjs/common';

import { Document } from './models/document.model';
import { PrismaService } from '../prisma';

@Injectable()
export class DocumentService {
  constructor(private readonly prismaService: PrismaService) {}

  findByUserID(userId: number) {
    return this.prismaService.document.findMany({
      where: {
        userId: userId
      }
    });
  }

  addDocument(userId: number, title: string, body: string) {
    // TODO limit size of body
    return this.prismaService.document.create({
      data: {
        userId: userId,
        title: title,
        body: body
      }
    })
  }
}
