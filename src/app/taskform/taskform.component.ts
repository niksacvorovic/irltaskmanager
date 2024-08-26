import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskFormComponent {
  setdata:DataService = inject(DataService);
  router:Router = new Router();
  taskForm = new FormGroup({
    title: new FormControl(""),
    desc: new FormControl(""),
    details: new FormControl("")
  })
  onSubmit() {
    this.setdata.createNewTask(this.taskForm.value.title as string, this.taskForm.value.desc as string, this.taskForm.value.details as string);
    this.router.navigate(["/"]);
  }
}
