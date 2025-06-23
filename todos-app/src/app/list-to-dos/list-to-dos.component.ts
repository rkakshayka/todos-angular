import { DatePipe, LowerCasePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
  todos = [
    // this data is structured
    new ToDo(1, 'Learn to Dance', new Date(), false),
    new ToDo(2, 'Learn to Swim', new Date(), false),
    new ToDo(3, 'Learn to Fly', new Date(), false)
    
    // this is basically unstructured data format
    /*
    { id: 1, description: 'Learn to Dance', targetDate: new Date(), isDone: false },
    { id: 2, description: 'Learn to Swim', targetDate: new Date(), isDone: false },
    { id: 3, description: 'Learn to Fly', targetDate: new Date(), isDone: false }
    */
  ]

  // SIngle todo
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance',
  //   targetDate: new Date(),
  //   isDone: false
  // }

  constructor() { }

  ngOnInit() {
  }

}
// Note: The `todos` array is initialized with three `ToDo` objects.
// Each `ToDo` object has an `id`, `description`, `targetDate`, and `isDone` properties.