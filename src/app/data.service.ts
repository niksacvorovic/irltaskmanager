import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/data.json";

  constructor() { }

  getAllTasks() {
    return fetch(this.url)
    .then(response => response.json());
  }

  getTaskDetails(index:string) {
    return fetch(this.url)
    .then(response => response.json())
    .then(arr => arr[index]);
  }
  
  async createNewTask(arg1:string, arg2:string, arg3:string) {
    const url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/data.json";
    const response = await fetch(this.url, {method:"POST", body: JSON.stringify({title:arg1, text:arg2, details:arg3, pending:true})});
  }
}
