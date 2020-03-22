import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import {  Todo } from '../models/todo.model';
import * as firebase from 'firebase/app'
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoRef: AngularFireList<Todo> = null
  dbRef

  constructor(
    private db: AngularFireDatabase,
    private shared: SharedService
  ) {
    this.todoRef = db.list('todo')
    this.dbRef = firebase.database().ref()
  }

  //note list


  listTodo(): Observable<Todo[]> {
    return this.todoRef.valueChanges().pipe(map(arr => arr.map(e => new Todo(e))))
  }

  listTodoforToday(): Observable<Todo[]> {
    let today = new Date()
    let start = today.setHours(0,0,0,0)
    let end = today.setHours(23,59,59,59)
    return this.db.list('todo',
      ref => ref.orderByChild('date').startAt(Number(start)).endAt(Number(end))
    ).valueChanges().pipe(map(arr => arr.map(e => new Todo(e)).filter(e => !e.success)))
  }
  listTodoforIncoming(): Observable<Todo[]> {
    let today = new Date()
    let start = today.setHours(24,0,0,0)
    return this.db.list('todo',
      ref => ref.orderByChild('date').startAt(Number(start))
    ).valueChanges().pipe(map(arr => arr.map(e => new Todo(e)).filter(e => !e.success)))
  }
  listTodoforDone(): Observable<Todo[]> {
    let today = new Date()
    let start = today.setHours(24,0,0,0)
    return this.db.list('todo',
      ref => ref.orderByChild('success').equalTo(true)
    ).valueChanges().pipe(map(arr => arr.map(e => new Todo(e))))
  }
  listTodoforOverDue(): Observable<Todo[]> {
    let today = new Date()
    let start = today.setHours(0,0,0,0)
    return this.db.list('todo',
      ref => ref.orderByChild('date').endAt(Number(start))
    ).valueChanges().pipe(map(arr => arr.map(e => new Todo(e)).filter(e => !e.success)))
  }
  listTodoByRangeDate(startDate:Date,endDate:Date): Observable<Todo[]> {
    let start = startDate.setHours(0,0,0,0)
    let end = endDate.setHours(23,59,59,59)
    return this.db.list('todo',
      ref => ref.orderByChild('date').startAt(Number(start)).endAt(Number(end))
    ).valueChanges().pipe(map(arr => arr.map(e => new Todo(e))))
  }



  //note set

  setTodo(todo: Todo): Observable<Todo> {
    this.todoRef.update(todo.key, this.shared.toSaveData(todo))
    return this.getTodoByKey(todo.key)
  }

  //note get

  getTodoByKey(key: string): Observable<Todo> {
    return this.db.object(`todo/${key}`).valueChanges().pipe(map(e => new Todo(e)))
  }


  //note delete

  deleteTodoByKey(key: string): Promise<any> {
    return this.todoRef.remove(key)
  }

}
