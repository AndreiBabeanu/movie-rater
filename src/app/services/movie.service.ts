import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment as env } from 'src/environments/environment';
import {Observable} from "rxjs";
import {TmdbApiResult} from "../models/api-movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _API_MOVIE_BASE_URL: string = 'https://api.themoviedb.org/3';

  constructor(private _httpClient: HttpClient) {

  }

  public getPopularMovies(page = 1): Observable<TmdbApiResult> {
    return this._httpClient.get<TmdbApiResult>(`${this._API_MOVIE_BASE_URL}/movie/popular?page=${page}&api_key=${env.tmdbApi.key}`);
  }
}