import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphContainerComponent } from '../paragraph-container/paragraph-container.component';
import { ParagraphText } from '../paragraphtext';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParagraphContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newtextlist:ParagraphText[] = [
    {
      title: "Novi naslov",
      text: "Novi sadržaj",
    },
    {
      title: "Noviji naslov",
      text: "Noviji sadržaj"
    }
  ];
  gettext:DataService = inject(DataService);
  /*constructor() {
    this.gettext.getAllTasks()
    .then(data => data.json())
    .then(json => this.newtextlist = json.data)
  }*/
}