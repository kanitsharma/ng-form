import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MdToolbarModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { DatepickerModule } from 'angular2-material-datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MdCheckboxModule} from '@angular/material';
import {MdRadioModule} from '@angular/material';
import {MdSlideToggleModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    DatepickerModule,
    ReactiveFormsModule,
    MdCheckboxModule,
    MdRadioModule,
    MdSlideToggleModule,
    MdTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
