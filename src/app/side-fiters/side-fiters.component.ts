import { Component } from '@angular/core';

@Component({
  selector: 'app-side-fiters',
  templateUrl: './side-fiters.component.html',
  styleUrls: ['./side-fiters.component.css']
})
export class SideFitersComponent {

  filmGenres: string[] = [
    "Comedy", "War", "Drama" 
  ]

  filmYears: number[] = [
    1990, 2000, 2010, 2020, 2023
  ]


}
