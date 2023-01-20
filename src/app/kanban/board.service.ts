import { Injectable } from '@angular/core';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { switchMap, map } from 'rxjs/operators';
import { Board, Task } from './board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  /**
   * Creates a new board for the current user
   */
  async createBoard(data: Board){
    const user = await this.afAuth.currentUser;
    console.log(user);
    return this.db.collection('boards').add({
      ...data,
      uid: user?.uid,
      tasks: [{description: 'Hello!', label: 'yellow'}]
    })

  }

  /**
   * Delete board
   */
  deleteBoard(boardId:string) {
    return this.db.collection('boards')
    .doc(boardId)
    .delete();
  }

  /**
   * Updates the tasks on board
   */
  updateTasks(boardId: string, tasks: Task[]){
    return this.db.collection('boards')
    .doc(boardId)
    .update({tasks});
  }

  /**
   * Remove a specific task from the board
   */
  removeTask(boardId: string, task: Task){
    return this.db.collection('boards')
    .doc(boardId)
    .update({
      tasks: firebase.firestore.FieldValue.arrayRemove(task)
    });
  }

  /**
   * Get all boards owned by current user
   */
  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db
            .collection<Board>('boards', ref =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    )
  }

  /**
   * Run a batch write to change the priority of each board for sorting
   *
   * if any write fails then all rollback so that they stay in order
   * basically all succeed or all fail doing a batch call
   */
  sortBoards(boards: Board[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection('boards').doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    batch.commit();
  }
}
