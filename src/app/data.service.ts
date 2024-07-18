import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async getAllTasks() {
    const url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/";
    const data = await fetch(url);
    return data;
  }
}
