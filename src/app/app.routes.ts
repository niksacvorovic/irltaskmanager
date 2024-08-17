import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TaskFormComponent } from './taskform/taskform.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'IRL TASK MANAGER'
    },
    {
        path:'details/:id',
        component: DetailsComponent,
        title: 'DETAILS'
    },
    {
        path:'newtask',
        component: TaskFormComponent,
        title: 'NEWTASK'
    }
];
