import { Component } from "react"

export class Movie {

    ID: Number;
    Title: string;
    PosterPath: string;
    Overview: string;
    ReleaseDate: string;
    Rating: Number

    constructor(id = 0, title = "", posterpath = "", overview = "", releaseDate = Date.now.toString(), rating = 0) {

        this.ID = id;
        this.Title = title;
        this.PosterPath = posterpath;
        this.Overview = overview;
        this.ReleaseDate = releaseDate;
        this.Rating = rating;
    }

}
