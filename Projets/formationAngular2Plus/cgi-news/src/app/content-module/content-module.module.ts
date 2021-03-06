import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { PostFooterComponent } from './post-footer/post-footer.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { WithCommentsDirective } from './with-comments.directive';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  declarations: [
    ContentComponent, 
    CategoryComponent, 
    PostComponent, 
    PostFooterComponent, WithCommentsDirective, CommentComponent
  ],
  exports: [
    ContentComponent,
    CategoryComponent,
    PostComponent,
  ],
  entryComponents: [CommentComponent]
})
export class ContentModuleModule { }
