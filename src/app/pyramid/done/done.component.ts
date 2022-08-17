import { Component, OnInit } from '@angular/core';
import { StopwatchService } from '../stopwatch.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  constructor(public sw: StopwatchService) {}
  completeTime = 0;

  ngOnInit(): void {
    this.completeTime = this.sw.timeTaken;
  }
}
