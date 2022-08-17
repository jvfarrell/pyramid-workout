import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneComponent } from './done/done.component';
import { WorkoutSetupComponent } from './workout-setup/workout-setup.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  { path: '', component: WorkoutSetupComponent },
  { path: 'go', component: WorkoutComponent },
  { path: 'done', component: DoneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PyramidRoutingModule {}
