import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent {

	nuevasCanciones	: any[] = [];
	loading			: boolean;
	error 			: boolean = false;
	mensajeError	: string = "";


	constructor( private spotifyService:SpotifyService) {
		
		this.loading=true;
		this.error= false;
		
		this.spotifyService.getNewReleases().subscribe( (data: any) =>{

			this.nuevasCanciones = data;
			this.loading=false;
		
		}, (errorServicio)=>{

			this.loading=false;
			this.error=true;
			this.mensajeError = errorServicio.error.error.message;
					
			console.log(errorServicio);
		
		});

   }

  

}
