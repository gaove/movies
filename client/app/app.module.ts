import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesList } from './movies-list/movies-list.component';
import { routing } from './app.routes';
import 'rxjs/add/operator/map';
import { popularity } from './movie/movie.pipes';

@NgModule({
    imports: [ BrowserModule, HttpModule, routing ],
    declarations: [ AppComponent, MovieComponent, MoviesList, popularity ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}