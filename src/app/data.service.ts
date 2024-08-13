import { Injectable } from '@angular/core';
import { ParagraphText } from './paragraphtext';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAllTasks() {
    const url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/data.json";
    let dataArray:ParagraphText[] = [];
    const data = fetch(url)
    .then(response => response.json())
    .then(data => {
      for(var i in data){
        dataArray.push(data[i] as ParagraphText)
      }
    });
    return dataArray;
  }

  getTaskDetails(index:number) {
    const url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/details.json"
    return fetch(url)
    .then(response => response.json())
    .then(arr => arr[index]);
  }
  
}
