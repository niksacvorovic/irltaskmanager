import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphContainerComponent } from '../paragraph-container/paragraph-container.component';
import { ParagraphText } from '../paragraphtext';
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
  newtextlist:ParagraphText[] = [];
  gettext:DataService = inject(DataService);
  constructor() {
    this.newtextlist = this.gettext.getAllTasks();
  }
}