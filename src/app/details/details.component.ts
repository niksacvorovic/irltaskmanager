import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent{
  route:ActivatedRoute = inject(ActivatedRoute);
  getdetails:DataService = inject(DataService);
  details:string = "";
  constructor() {
    this.getdetails.getTaskDetails(this.route.snapshot.params['id'])
    .then(retval => {this.details = retval.details});
  }
}
