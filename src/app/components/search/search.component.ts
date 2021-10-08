import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',

})
export class SearchComponent {
	
	artistas: any[] = [];
	loading: boolean = false;

	constructor(private spotifyService: SpotifyService) { }


	buscar(termino: string) {
		this.loading = true;
		this.spotifyService.getArtistas(termino).subscribe((data: any) => {
			this.artistas = data;
			this.loading = false;
		})

	}


}
