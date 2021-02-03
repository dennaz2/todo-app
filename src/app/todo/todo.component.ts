import { Component, OnInit } from '@angular/core';
import { Todo } from "../interfaces/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    { task: "Add Task", completed: false },
    { task: "Complted Task", completed: true }
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

  removeTask(i:number){
    const index = this.todoList[i];
    this.todoList.splice(i, 1);
  }

  completeTask(i) {
    const task = this.todoList[i];
    task.completed = !task.completed;
  }

  getFilteredTodos(): Todo[] {
    if (!this.filterText.trim()) {
      return this.todoList;
    }

    const match = this.filterText.toLowerCase();
    return this.todoList.filter(todo =>
      todo.task.toLowerCase().includes(match));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
