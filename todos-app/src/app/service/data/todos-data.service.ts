import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from '../../list-to-dos/list-to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string) {

    return this.http.get<ToDo[]>(`http://localhost:9090/todos-app/users/${username}/todos`);
  }

}
