import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    title: new FormControl(""),
    desc: new FormControl(""),
    details: new FormControl("")
  })
}
