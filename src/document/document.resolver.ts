import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Document } from './models/document.model';
import { DocumentService } from './document.service';

@Resolver(() => Document)
export class DocumentResolver {
  constructor(private readonly documentService: DocumentService) {}

  @Query(() => [Document])
  documents(@Args('userId') userId: number) {
    return this.documentService.findByUserID(userId);
  }
  
  @Mutation(() => Document)
  addDocument(@Args('userId') userId: number, @Args('title') title: string, @Args('body') body: string) {
    return this.documentService.addDocument(userId, title, body);
  }
}
