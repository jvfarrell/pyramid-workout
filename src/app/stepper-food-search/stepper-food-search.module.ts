import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperFoodSearchRoutingModule } from './stepper-food-search-routing.module';
import { StepperComponent } from './stepper/stepper.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StepperComponent],
  imports: [
    CommonModule,
    StepperFoodSearchRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class StepperFoodSearchModule {}
