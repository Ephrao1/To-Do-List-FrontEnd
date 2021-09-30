import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Tasks } from 'src/app/Todo-List-App/models/todo-interface';
const URL = 'http://127.0.0.1:5000/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService{  
  constructor(private http: HttpClient){}

  getTodo():Observable<Tasks[]>{
      console.log(URL)
      return this.http.get<Tasks[]>(URL)
  }

  addTask(task: Tasks):Observable<Tasks>{
      return this.http.post<Tasks>(URL, task, {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      })
  }

  editTodo(task: Tasks):Observable<Tasks[]>{
      return this.http
          .put(URL + '/' + task.id, task)
          .pipe(map((response: any) => response));
  }

  deleteTask(id:number){
      return this.http.delete(URL + '/' + id)
      .pipe(map((res:any) => res));
  }

}
