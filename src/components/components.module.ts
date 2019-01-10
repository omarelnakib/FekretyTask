import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';
import { SignUpAvatarComponent } from './sign-up-avatar/sign-up-avatar';
import { RegisterFormComponent } from './register-form/register-form';
import { DoctorListItemComponent } from './doctor-list-item/doctor-list-item';
import {StarRatingModule} from'ionic3-star-rating';

@NgModule({
	declarations: [SignUpAvatarComponent,
    RegisterFormComponent,
    DoctorListItemComponent,
    ],
	imports: [
		IonicPageModule.forChild(SignUpAvatarComponent),StarRatingModule,
	],
	exports: [SignUpAvatarComponent,
    RegisterFormComponent,
    DoctorListItemComponent,
]
})
export class ComponentsModule {}
