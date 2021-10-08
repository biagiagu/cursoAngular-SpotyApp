import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent  {

  artista: any = {};
  loading: boolean = true;
  topTracks: any[]=[];

  constructor( private router: ActivatedRoute, private spotifyService : SpotifyService ) { 

    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
      //this.getTopTracks(params['id']);
    })
  }

  getArtista( id : string ){
    this.loading=true;
    this.spotifyService.getArtista(id)
      .subscribe( artista => { 
      
      this.artista = artista;
      this.loading = false;
    });
    this.getTopTracks(id);
  }

  getTopTracks( id:string){
    this.loading=true;
    this.spotifyService.getTopTracks(id)
      .subscribe( topTracks => {
        this.topTracks=topTracks;
        console.log(topTracks);
        this.loading=false;
      })

  }

}
