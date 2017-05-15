import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesList } from './movies-list/movies-list.component';


const appRoutes: Routes = [
    {path: '', component: MoviesList },
    {path: 'movie/:id', component: MovieComponent },
    {path: '**', component: MoviesList }
];


export const routing = RouterModule.forRoot(appRoutes);