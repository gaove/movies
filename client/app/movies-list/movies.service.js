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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var MoviesService = (function () {
    function MoviesService(http) {
        this.http = http;
    }
    MoviesService.prototype.movies = function () {
        return this.http
            .get('https://api.themoviedb.org/3/discover/movie?api_key=e97eaa02e82340186f1b34ada44c901f&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=2017&page=1')
            .map(function (res) { return res.json().results; });
    };
    MoviesService.prototype.movie = function (id) {
        return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=e97eaa02e82340186f1b34ada44c901f&language=pt-BR')
            .map(function (res) { return res.json(); });
    };
    return MoviesService;
}());
MoviesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map