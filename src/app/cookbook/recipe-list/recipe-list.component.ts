import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  title = 'firestarter';
  recipes: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.recipes = firestore.collection('recipes').valueChanges();
  }
  ngOnInit(): void {}
}
