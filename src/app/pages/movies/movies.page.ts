import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MoviesPage implements OnInit {

  constructor(private _movieService: MovieService
  ) {

  }

  ngOnInit(): void {
    this._movieService.getPopularMovies().subscribe((result) => {
      console.log(result)
    })
  }

}
