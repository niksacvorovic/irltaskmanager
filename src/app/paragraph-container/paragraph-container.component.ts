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
  @Input() showall!:boolean;
  async finish(id:string) {
    const url = "https://irltaskmanager-db-default-rtdb.firebaseio.com/data/"
    await fetch(url + id + ".json", {method:"PUT", body:JSON.stringify({title:this.data.title, text:this.data.text, details:this.data.details, pending:false})});
    this.data.pending = false;
  }

}
