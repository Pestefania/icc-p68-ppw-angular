import { Component } from '@angular/core';

import { AppHeroComponent } from '../../../components/app-hero/hero';

@Component({
  selector:'app-home-page',
  imports:[AppHeroComponent],
  templateUrl:'./home-page.html',
  styleUrl:'./home-page.css'
})
export class HomePage {

}