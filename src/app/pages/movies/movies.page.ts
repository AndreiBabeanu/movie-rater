import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MovieService} from "../../services/movie.service";
import {BehaviorSubject} from "rxjs";
import {Movie} from "../../models/movie.model";
import {image} from "ionicons/icons";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class MoviesPage implements OnInit {
  public popularMovies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public filteredPopularMovies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  public searchBarFormControl: FormControl = new FormControl(null);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  constructor(private _movieService: MovieService) {

  }

  public ngOnInit(): void {
    this.initMovies();
    this.initSearchBarValueChanges();
  }

  private initMovies(): void {
    this._movieService.getPopularMovies()
      .subscribe((movies: Movie[]): void => {
        this.popularMovies$.next(movies);
        this.filteredPopularMovies$.next(movies);
      });
  }

  private initSearchBarValueChanges(): void {
    this.searchBarFormControl
      .valueChanges
      .subscribe((query): void => {
        this.filteredPopularMovies$.next(this.filterMovies(query));
      });
  }

  private filterMovies(query: string): Movie[] {
    const lowerCaseQuery = query.toLowerCase();
    return this.popularMovies$.value.filter((movie) => movie.title.indexOf(lowerCaseQuery) > -1);
  }

  protected readonly image = image;
}
