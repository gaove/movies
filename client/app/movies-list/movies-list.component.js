"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movies_service_1 = require("./movies.service");
var MoviesList = (function () {
    function MoviesList(service) {
        var _this = this;
        this.movies = [];
        service
            .movies()
            .subscribe(function (movies) {
            _this.movies = movies;
        }, function (erro) { return console.log(erro); });
    }
    return MoviesList;
}());
MoviesList = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'movies-list',
        templateUrl: './movies-list.component.html',
        styleUrls: ['./movies-list.component.css'],
        providers: [movies_service_1.MoviesService]
    }),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesList);
exports.MoviesList = MoviesList;
//# sourceMappingURL=movies-list.component.js.map