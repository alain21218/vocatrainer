import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { PostHeaderComponent } from './post-header/post-header.component';
import { PostContentComponent } from './post-content/post-content.component';
import { PostFooterComponent } from './post-footer/post-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentComponent, 
    CategoryComponent, 
    PostComponent, 
    PostHeaderComponent, 
    PostContentComponent, 
    PostFooterComponent
  ],
  exports: [
    ContentComponent,
    CategoryComponent,
    PostComponent
  ]
})
export class ContentModuleModule { }
