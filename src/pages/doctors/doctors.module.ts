import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorsPage } from './doctors';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DoctorsPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorsPage),
    ComponentsModule,
  ],
})
export class DoctorsPageModule {}
