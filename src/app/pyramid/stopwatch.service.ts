import { Injectable, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StopwatchService implements OnDestroy {
  totalTime = 0;
  restTimeAllowed = 60;

  restTime = this.restTimeAllowed;
  resting = false;
  goingUp = true;

  workoutRep = 1;
  workoutMaxRep = 8;
  timeTaken = 0;
  restTimer: any;
  // ttimer;
  // checkDone;

  constructor(private router: Router) {
    // this.workoutMaxRep = 8;
    // this.ttimer = setInterval(() => this.totalTime++, 1000);
    // this.checkDone = setInterval(() => {
    //   if (!this.goingUp && this.workoutRep == 0) {
    //     this.timeTaken = this.totalTime;
    //     clearInterval(this.ttimer);
    //     clearInterval(this.restTimer);
    //     this.router.navigate(['/pyramid/done']);
    //     clearInterval(this.checkDone);
    //   }
    // }, 1000);
  }

  // restStart() {
  //   this.resting = true;
  //   this.restTime = this.restTimeAllowed;
  //   this.restTimer = setInterval(() => this.rest(), 1000);
  // }

  // rest() {
  //   this.restTime--;
  //   if (this.restTime == 0) {
  //     this.resting = false;
  //   }
  // }

  // newWorkout() {
  //   this.workoutMaxRep = 8;
  //   this.ttimer = setInterval(() => this.totalTime++, 1000);
  //   this.checkDone = setInterval(() => {
  //     if (!this.goingUp && this.workoutRep == 0) {
  //       this.timeTaken = this.totalTime;
  //       clearInterval(this.ttimer);
  //       clearInterval(this.restTimer);
  //       this.router.navigate(['/pyramid/done']);
  //       clearInterval(this.checkDone);
  //     }
  //   }, 1000);
  // }

  // start() {}

  // repUpdate(rep: number, maxRep: number, goingUp: boolean) {
  //   if (rep < maxRep && goingUp) {
  //     return rep++;
  //   } else {
  //     return rep--;
  //   }
  // }

  ngOnDestroy() {
    // clearInterval(this.restTimer);
    // clearInterval(this.checkDone);
    // clearInterval(this.ttimer);
  }
}
