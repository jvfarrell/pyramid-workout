import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { firebase } from '@angular/fire/app';
import { switchMap, map } from 'rxjs/operators';
// import { Board, Task } from './board.model';
import { workout, pyramidUser } from './pyramid-user.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  /**
   * Creates a new board for the current user
   */
  async createWorkout(data: workout) {
    const user = await this.afAuth.currentUser;
    return this.db.collection('workouts').add({
      ...data,
      uid: user.uid,
      exercises: data.exercises,
      nickname: data.nickname,
      repHigh: data.repHigh,
      restSec: data.restSec,
    });
  }

  /**
   * Delete board
   */
  deleteBoard(boardId: string) {
    return this.db.collection('workouts').doc(boardId).delete();
  }

  /**
   * Updates the tasks on board
   */
  // updateTasks(boardId: string, tasks: Task[]) {
  //   return this.db.collection('boards').doc(boardId).update({ tasks });
  // }

  /**
   * Remove a specifc task from the board
   */
  removeTask(boardId: string, exercise: string) {
    return this.db
      .collection('workouts')
      .doc(boardId)
      .update({
        exercises: firebase.firestore.FieldValue.arrayRemove(exercise),
      });
  }

  /**
   * Get all boards owned by current user
   */
  getUserWorkouts() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<workout>('workouts', (ref) =>
              ref.where('uid', '==', user.uid)
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  /**
   * Run a batch write to change the priority of each board for sorting
   */
  // sortBoards(boards: Board[]) {
  //   const db = firebase.firestore();
  //   const batch = db.batch();
  //   const refs = boards.map((b) => db.collection('boards').doc(b.id));
  //   refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
  //   batch.commit();
  // }
}
