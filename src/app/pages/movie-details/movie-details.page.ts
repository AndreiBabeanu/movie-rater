import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Movie} from "../../models/movie.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MovieDetailsPage implements OnInit {
  private MOVIE_ID_KEY: string = 'id';
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  public movie$: Observable<Movie> = new Observable<Movie>();

  constructor(private _movieService: MovieService,
              private _route: ActivatedRoute,
              private _router: Router
  ) {

  }

  ngOnInit(): void {
    this.movie$ = this._movieService.getMovieDetails(this.getMovieId());
  }

  private getMovieId(): string {
    const movieId = this._route.snapshot.paramMap.get(this.MOVIE_ID_KEY)
    if (!movieId) {
      this._router.navigateByUrl('/movies');
      return '';
    }
    return <string>movieId;
  }

}
