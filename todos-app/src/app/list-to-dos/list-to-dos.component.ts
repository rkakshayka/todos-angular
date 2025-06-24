import { DatePipe, LowerCasePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodosDataService } from '../service/data/todos-data.service';

//Future
/*
 - No navigation Menu and footer
 - No Security for menus.
   - means we are directly clicking on the link without even login.
 - hardcoded logic in the todoList and login components
 - formatting - bootstrap
 - renaming functionality - Edit, Delete Add
 - Spring Boot
 - Spring Security
*/
export class ToDo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isDone: boolean
  ) { }
}

@Component({
  selector: 'app-list-to-dos',
  standalone: true,
  imports: [ NgFor, UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './list-to-dos.component.html',
  styleUrl: './list-to-dos.component.css'
})

export class ListToDosComponent implements OnInit {

  // we want to create a list of todos so an array is needed
  todos: ToDo[] = [];

  // SIngle todo
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance',
  //   targetDate: new Date(),
  //   isDone: false
  // }

  constructor(
    private todoService: TodosDataService
  ) { }

  ngOnInit() {
    this.todoService.retrieveAllTodos('akshay').subscribe(
      response => {
        console.log(response);
        this.todos = response;
        console.log(this.todos);
      }
    )
  }

}
// Note: The `todos` array is initialized with three `ToDo` objects.
// Each `ToDo` object has an `id`, `description`, `targetDate`, and `isDone` properties.