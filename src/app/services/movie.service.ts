import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment as env } from 'src/environments/environment';
import {EMPTY, map, Observable, tap} from "rxjs";
import {TmdbApiResult} from "../models/api-movie.model";
import {Movie} from "../models/movie.model";
import {MovieDetails} from "../models/movie-details.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _API_MOVIE_BASE_URL: string = 'https://api.themoviedb.org/3';

  constructor(private _httpClient: HttpClient) {

  }

  public getPopularMovies(page = 1): Observable<Movie[]> {
    return this._httpClient
      .get<TmdbApiResult>(`${this._API_MOVIE_BASE_URL}/movie/popular?page=${page}&api_key=${env.tmdbApi.key}`)
      .pipe(
        map((apiResponse) => apiResponse.results),
        tap((result) => console.log(result))
      );
  }

  public getMovieDetails(movieId: string): Observable<MovieDetails> {
    if (!movieId) {
      return EMPTY;
    }
    return this._httpClient
      .get<any>(`${this._API_MOVIE_BASE_URL}/movie/${movieId}?api_key=${env.tmdbApi.key}`)
      .pipe(
        map((apiResponse) => apiResponse),
        tap((result) => console.log(result))
      );
  }
}
