"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var movie_component_1 = require("./movie/movie.component");
var movies_list_component_1 = require("./movies-list/movies-list.component");
var appRoutes = [
    { path: '', component: movies_list_component_1.MoviesList },
    { path: 'movie/:id', component: movie_component_1.MovieComponent },
    { path: '**', component: movies_list_component_1.MoviesList }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map