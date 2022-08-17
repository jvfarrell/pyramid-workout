import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PyramidRoutingModule } from './pyramid-routing.module';
import { WorkoutSetupComponent } from './workout-setup/workout-setup.component';

// 1. Import the libs you need
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { WorkoutComponent } from './workout/workout.component';
import { DoneComponent } from './done/done.component';
import { WorkoutDemoComponent } from './workout-demo/workout-demo.component';

@NgModule({
  declarations: [WorkoutSetupComponent, WorkoutComponent, DoneComponent, WorkoutDemoComponent],
  imports: [
    CommonModule,
    PyramidRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
})
export class PyramidModule {}
