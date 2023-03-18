import { Component } from '@angular/core';
import { PostDTO } from 'src/app/Models/post.dto';
import { PostService } from 'src/app/Services/post.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  posts?: PostDTO[];

  totalLikes: number;
  totalDisLikes: number;

  constructor(
    private postService: PostService,
    private sharedService: SharedService
  ) {
    this.totalLikes = 0;
    this.totalDisLikes = 0;
    this.loadPosts();
  }

  private async loadPosts(): Promise<void> {
    let errorResponse: any;
    try {
      this.posts = await this.postService.getPosts();
      this.posts.forEach((element) => {
        this.totalLikes += element.num_likes;
        this.totalDisLikes += element.num_dislikes;
      });
    } catch (error: any) {
      errorResponse = error.error;
      this.sharedService.errorLog(errorResponse);
    }
  }
}
