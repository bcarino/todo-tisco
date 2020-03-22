import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { TodoService } from 'src/app/services/todo.service';
import { map, flatMap, switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { combineLatest, forkJoin, of } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  todo$ = of([])
  tab = 'TODAY'

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private service: TodoService, private _dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.listToday()
  }
  
  listToday(){
    this.todo$ = this.service.listTodoforToday()
    this.tab = 'TODAY'
  }
  listIncoming(){
    this.todo$ = this.service.listTodoforIncoming()
    this.tab = 'INCOMING'
  }
  listDone(){
    this.todo$ = this.service.listTodoforDone()
    this.tab = 'DONE'
  }
  listOverDue(){
    this.todo$ = this.service.listTodoforOverDue()
    this.tab = 'OVERDUE'
  }

  addTodoDialog() {
    let dl = this._dialog.open(AddTodoComponent, {
      width: '600px'
    })
    dl.afterClosed().subscribe(res => {
      if (res) {
        this.service.setTodo(res)
      }
    })
  }
  updateTodo(todo){
    this.service.setTodo(todo)
  }

  editTodoDialog(todo) {
    let dl = this._dialog.open(AddTodoComponent, {
      width: '600px'
    })
    let ins = dl.componentInstance
    ins.todo = new Todo(todo)
    dl.afterClosed().subscribe(res => {
      if (res) {
        this.service.setTodo(res)
      }

    })
  }

  deleteTodo(todo) {
    this.service.deleteTodoByKey(todo.key)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



}
