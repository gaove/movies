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
var movies_service_1 = require("../movies-list/movies.service");
var router_1 = require("@angular/router");
var MovieComponent = (function () {
    function MovieComponent(service, route) {
        var _this = this;
        this.movie = {};
        this.service = service;
        this.route = route;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            service
                .movie(id)
                .subscribe(function (movie) {
                _this.movie = movie;
            }, function (erro) { return console.log(erro); });
        });
    }
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'movie',
        templateUrl: './movie.component.html',
        styleUrls: ['./movie.component.css'],
        providers: [movies_service_1.MoviesService]
    }),
    __metadata("design:paramtypes", [movies_service_1.MoviesService, router_1.ActivatedRoute])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map