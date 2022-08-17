import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { pyramidUser } from '../pyramid-user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StopwatchService } from '../stopwatch.service';

@Component({
  selector: 'app-workout-setup',
  templateUrl: './workout-setup.component.html',
  styleUrls: ['./workout-setup.component.scss'],
})
export class WorkoutSetupComponent implements OnInit {
  user$: Observable<any>;
  title = 'Pyramid Workout';
  constructor(
    firestore: AngularFirestore,
    public afAuth: AngularFireAuth,
    private router: Router,
    private sw: StopwatchService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        console.log('switchmap');
        console.log(user);
        // Logged in
        if (user) {
          console.log('user found');
          this.user$ = firestore
            .doc<pyramidUser>(`users/${user.uid}`)
            .valueChanges();
          return firestore.doc<pyramidUser>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
    console.log(this.user$);

    // let user = afAuth.currentUser;
    // console.log(user);
    // this.pyramidUser = firestore.collection('users').get(user.uid);
    // this.users = firestore.collection('users').valueChanges();
    // this.pyramidUser = .firestore.collection('users').doc(userID)
    // this.users.workouts.forEach((workout) => {
    //   this.workouts.push(workout.nickname);
    // });
  }
  ngOnInit(): void {}

  goToWorkout() {
    this.router.navigate(['/pyramid/go']);
  }
}
