import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphContainerComponent } from '../paragraph-container/paragraph-container.component';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParagraphContainerComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataObject:any = null;
  gettext:DataService = inject(DataService);
  switch:boolean = false;
  buttonText:string = "Prikažite sve zadatke";
  constructor() {
    this.gettext.getAllTasks().then(data => this.dataObject = data);
  }
  toggle() {
    this.switch = !this.switch;
    if (this.switch){
      this.buttonText = "Sakrijte urađene zadatke";
    }else{
      this.buttonText = "Prikažite sve zadatke";
    }
  }
}