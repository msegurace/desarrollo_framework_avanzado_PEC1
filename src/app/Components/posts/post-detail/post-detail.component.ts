import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDTO } from 'src/app/Models/post.dto';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent implements OnInit {
  @Input() post?: PostDTO;

  @Output() private changeObjectLike: EventEmitter<string>;
  @Output() private changeObjectDislike: EventEmitter<string>;

  showButtons: boolean;

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {
    this.changeObjectLike = new EventEmitter<string>();
    this.changeObjectDislike = new EventEmitter<string>();
    this.showButtons = false;
    const userId = this.localStorageService.get('user_id');
    if (userId) {
      this.showButtons = true;
    }
  }

  ngOnInit(): void {}

  likePush(event: any) {
    this.changeObjectLike.emit(this.post?.postId);
  }

  dislikePush(event: any) {
    this.changeObjectDislike.emit(this.post?.postId);
  }
}
