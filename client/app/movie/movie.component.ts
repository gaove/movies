import { Component } from '@angular/core';
import { MoviesService } from '../movies-list/movies.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
    providers: [ MoviesService ]
})

export class MovieComponent{
        movie: Object = {};
        route: ActivatedRoute;
        service: MoviesService;

        constructor(service: MoviesService, route:ActivatedRoute){
            this.service = service;
            this.route = route;

            this.route.params.subscribe(params =>{
                let id = params['id'];    
                service
                .movie(id)
                .subscribe(movie =>{
                    this.movie = movie;
                },erro => console.log(erro))
            })
        }
}