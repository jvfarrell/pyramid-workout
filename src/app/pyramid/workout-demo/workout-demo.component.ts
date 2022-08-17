import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchService } from '../stopwatch.service';

@Component({
  selector: 'app-workout-demo',
  templateUrl: './workout-demo.component.html',
  styleUrls: ['./workout-demo.component.scss'],
})
export class WorkoutDemoComponent implements OnInit {
  totalTime = 0;
  restTimeAllowed = 3;

  restTime = this.restTimeAllowed;
  resting = false;
  goingUp = true;
  done = false;
  started = false;

  curRep = 1;
  maxRep = 8;
  timeTaken = 0;
  restTimer: any;
  ttimer: any;
  checkDone: any;

  constructor(public sw: StopwatchService, private router: Router) {
    this.reset();
  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.started = false;
    this.done = false;
    this.resting = false;
    this.goingUp = true;
    this.restTime = this.restTimeAllowed;
    this.totalTime = 0;
    this.timeTaken = 0;
    this.maxRep = 2;
    this.curRep = 1;
    clearInterval(this.restTimer);
    clearInterval(this.ttimer);
    clearInterval(this.checkDone);
  }

  start() {
    this.reset();
    this.ttimer = setInterval(() => this.totalTime++, 1000);
    this.started = true;
  }

  end() {
    this.timeTaken = this.totalTime;
    clearInterval(this.restTimer);
    clearInterval(this.ttimer);
    clearInterval(this.checkDone);
    this.sw.timeTaken = this.totalTime;
    this.started = false;
  }

  nextPage() {
    this.router.navigate(['/pyramid/done']);
  }

  repUpdate(rep: number, maxRep: number, goingUp: boolean) {
    let newRep = rep;
    if (rep < maxRep && goingUp) {
      console.log('increase');
      newRep = newRep + 1;
    } else {
      console.log('decrease rep');
      newRep = newRep - 1;
      if (newRep <= 1) {
        this.done = true;
      }
    }
    console.log(newRep);
    return newRep;
  }

  rest() {
    if (this.curRep == this.maxRep) {
      this.goingUp = false;
    }
    this.curRep = this.repUpdate(this.curRep, this.maxRep, this.goingUp);
    this.restTime = this.restTimeAllowed;
    this.resting = true;
    clearInterval(this.restTimer);
    this.restTimer = setInterval(() => this.restCountdown(), 1000);
  }

  restCountdown() {
    this.restTime--;
    if (this.restTime == 0) {
      this.resting = false;
    }
  }
}
