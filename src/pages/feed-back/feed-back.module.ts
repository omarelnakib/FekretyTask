import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedBackPage } from './feed-back';
import {StarRatingModule} from 'ionic3-star-rating'

@NgModule({
  declarations: [
    FeedBackPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedBackPage),
    StarRatingModule,
  ],
})
export class FeedBackPageModule {}
