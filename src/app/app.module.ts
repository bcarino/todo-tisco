import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMatrialModule } from './shared/angular.material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import { MainComponent } from './components/main/main.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { IconsDialogComponent } from './components/icons-dialog/icons-dialog.component';
import { ColorsDialogComponent } from './components/colors-dialog/colors-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddTodoComponent,
    IconsDialogComponent,
    ColorsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMatrialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    AddTodoComponent,
    IconsDialogComponent,
    ColorsDialogComponent
  ]
})
export class AppModule { }
