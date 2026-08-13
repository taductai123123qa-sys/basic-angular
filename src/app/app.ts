import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayout } from './shared/header-layout/header-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //text
  title = {
    name: 'Angular Basic Project',
    old: 2024
  }


  //Propoties
  isDisabled = false;

  //attributes

  contentImage = 'hello, day la image';
}
