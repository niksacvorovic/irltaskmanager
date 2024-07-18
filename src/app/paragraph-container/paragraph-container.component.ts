import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphText } from '../paragraphtext';

@Component({
  selector: 'app-paragraph-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragraph-container.component.html',
  styleUrl: './paragraph-container.component.css'
})
export class ParagraphContainerComponent {
  @Input() data!:ParagraphText;
}
