import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-paragraph-container',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './paragraph-container.component.html',
  styleUrl: './paragraph-container.component.css'
})
export class ParagraphContainerComponent {
  @Input() data!:any;
  @Input() id!:any;
}
