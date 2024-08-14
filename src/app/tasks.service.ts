import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private host = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  //
  addTask(todo: string): Observable<any> {
    return this.http.post(`${this.host}/todos`, {
      name: todo,
      completed: false,
    });
  }

  // Read (Get all tasks)
  getTasks(): Observable<any> {
    return this.http.get(`${this.host}/todos`).pipe(map((res) => res));
  }

  // Update (Update an existing task)
  updateTask(id: number, updatedTask: { name: string; completed: boolean }): Observable<any> {
    return this.http.put(`${this.host}/todos/${id}`, updatedTask);
  }

  // Delete (Delete a task)
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.host}/tasks/${id}`);
  }
}
