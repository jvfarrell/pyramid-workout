import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookbookRoutingModule } from './cookbook-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

// 1. Import the libs you need
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CookbookRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
  ],
})
export class CookbookModule {}
