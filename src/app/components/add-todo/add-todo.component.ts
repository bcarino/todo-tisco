import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormArray, FormBuilder, Form } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { IconsDialogComponent } from '../icons-dialog/icons-dialog.component';
import { ColorsDialogComponent } from '../colors-dialog/colors-dialog.component';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  todo: Todo = new Todo({ date: new Date })



  constructor(
    private _dialogRef: MatDialogRef<AddTodoComponent>,
    private _dialog: MatDialog,
    private service: TodoService
  ) {

  }

  ngOnInit() {

  }

  iconDialog() {
    let dl = this._dialog.open(IconsDialogComponent, {
      width: '600px'
    })
    let ins = dl.componentInstance
    dl.afterClosed().subscribe(res => {
      if (res) {
        if(res == 'none'){
          res = null
        }
        this.todo.icon = res
      }

    })
  }

  colorDialog() {
    let dl = this._dialog.open(ColorsDialogComponent, {
      width: '600px'
    })
    let ins = dl.componentInstance
    dl.afterClosed().subscribe(res => {
      if (res) {
        this.todo.color = res
      }

    })
  }


  submit() {
    this._dialogRef.close(this.todo)
  }

  close() {
    this._dialogRef.close()
  }

}
