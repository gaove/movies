import { Component } from '@angular/core';
import { MoviesService } from './movies.service'

@Component({
    moduleId: module.id,
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css'],
    providers: [MoviesService ]
})

export class MoviesList{
    
    movies: Object[] = [];

    constructor(service: MoviesService){
        service
        .movies()
        .subscribe(movies =>{
            this.movies = movies;
        },erro => console.log(erro))    
    }
}