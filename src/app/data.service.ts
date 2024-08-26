import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllTasks() {
    const url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/data.json";
    return fetch(url)
    .then(response => response.json());
  }

  getTaskDetails(index:string) {
    const url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/data.json"
    return fetch(url)
    .then(response => response.json())
    .then(arr => arr[index]);
  }
  
  async createNewTask(arg1:string, arg2:string, arg3:string) {
    const url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/data.json";
    const response = await fetch(url, {method:"POST", body: JSON.stringify({title:arg1, text:arg2, details:arg3})});
  }
}
