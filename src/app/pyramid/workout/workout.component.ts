import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchService } from '../stopwatch.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  totalTime = 0;
  restTimeAllowed = 60;

  restTime = this.restTimeAllowed;
  resting = false;
  goingUp = true;
  done = false;
  started = false;

  curRep = 1;
  maxRep = 8;
  timeTaken = 0;
  restAudioTimer: any;
  alertSound: any;
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
    this.maxRep = 8;
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
    this.playDone();
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
    this.restAudioTimer = setInterval(() => this.playAlert(), 1000*this.restTimeAllowed);
  }

  restCountdown() {
    this.restTime--;
    if (this.restTime == 0) {
      this.resting = false;
    }
  }

  playAlert() {
    console.log("playing sound");
    let alertSound = new Audio();
    alertSound.src = "../../../assets/alert.mp3";
    alertSound.load();
    alertSound.play();
    clearInterval(this.restAudioTimer);
  }

  playDone() {
    console.log("playing celebration sound");
    let success = new Audio();
    success.src = "../../../assets/success.mp3";
    success.load();
    success.play();
  }
}
