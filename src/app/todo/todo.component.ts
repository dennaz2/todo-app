import { Component, OnInit } from '@angular/core';
import { Todo } from "../interfaces/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    { task: "Go buy milk", completed: false },
    { task: "Feed dog", completed: true },
    { task: "Eat", completed: true },
    { task: "Workout", completed: false },
    { task: "Homework", completed: false },
    { task: "Clean", completed: false }
  ];

  newTask: Todo = {
    task: '',
    completed: false
  };

  filterText: string = '';

  addTask() {
    this.todoList.push(this.newTask);
    this.newTask = {
      task: '',
      completed: false
    };
  }


  constructor() { }

  ngOnInit(): void {
  }

}
