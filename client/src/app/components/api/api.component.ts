import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  ngOnInit() {
    this.obtenerPokemon();
  }

  constructor(private homeService: HomeService) { }

  pokemons: any[] = [];

  obtenerPokemon() {

    for (let i = 1; i < 100; i++) {
      this.homeService.obtenerPokemon(i.toString()).subscribe((res: any) => {
          this.pokemons.push(res);
          console.log(res);
        }
      );
    }

  }

}
