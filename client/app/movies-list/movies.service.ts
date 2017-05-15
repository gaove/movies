import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

    http: Http;

    constructor(http: Http){ 
        this.http =  http;
    }

    movies(): Observable<Object[]>{
        return this.http
            .get('https://api.themoviedb.org/3/discover/movie?api_key=e97eaa02e82340186f1b34ada44c901f&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2017&page=1')
            .map(res => res.json().results);
    }

    movie(id):Observable<Object[]>{
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=e97eaa02e82340186f1b34ada44c901f&language=pt-BR')
            .map(res => res.json());        
    }

}
