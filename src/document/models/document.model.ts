import { Field, ObjectType } from '@nestjs/graphql';

import type { Document as DocumentModel} from '@prisma/client';

@ObjectType()
export class Document implements DocumentModel {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  userId: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
