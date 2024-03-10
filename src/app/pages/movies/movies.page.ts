import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";
import {Movie} from "../../models/movie.model";
import {image} from "ionicons/icons";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MoviesPage implements OnInit {
  public popularMovies$: Observable<Movie[]> = new Observable<Movie[]>();

  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  constructor(private _movieService: MovieService
  ) {

  }

  public ngOnInit(): void {
    this.popularMovies$ = this._movieService.getPopularMovies();
  }

  protected readonly image = image;
}
