import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private spotifyService:SpotifyService) { }
  
  artistas:any[]=[]; 

  buscar(termino:string){

    this.spotifyService.getArtista(termino).subscribe( (data:any)=>{
      console.log(data.artists.items)
      this.artistas = data.artists.items;
    })

  }


}
