import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',

})
export class SearchComponent {
	
	artistas		: any[] = [];
	loading			: boolean = false;
	error 			: boolean = false;
	mensajeError 	: string = "";

	constructor(private spotifyService: SpotifyService) { }


	buscar(termino: string) {
		this.loading = true;
		this.spotifyService.getArtistas(termino).subscribe((data: any) => {
			this.artistas = data;
			this.loading = false;
		}, (errorServicio)=>{

			this.loading=false;
			this.error=true;
			this.mensajeError = errorServicio.error.error.message;
					
			console.log(errorServicio);
		
		})

	}


}
