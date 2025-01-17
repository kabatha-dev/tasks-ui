import { Component } from '@angular/core';
import { TaskService } from "./tasks.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    FormsModule,
    NgForOf
  ]
})
export class AppComponent {
  tasks: Task[];
  task: string;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private taskService: TaskService,
  ) {
    this.tasks = [];
    this.task = '';
  }
  title = 'task-ui';
  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data as Task[];
    });
  }

  addTask(task: string) {
    this.taskService.addTask(task).subscribe();
    this.task ='';
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((data) => {
      console.log(data);
    });
  }
}
