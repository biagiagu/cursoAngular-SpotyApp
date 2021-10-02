import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	constructor(private http: HttpClient) {
		console.log('Spotify Service Listo')
	}

	// getSpotifyToken() {
	// 	const body: any = {
	// 		'grant_type': 'client_credentials',
	// 		'idClient': '7e7034426bdc4b81abb19d1c95701441',
	// 		'idSecret': '9fe0933f0c9b487e93d1b35b15d4204f'

	// 	}
	// 	this.http.post('https://accounts.spotify.com/api/token', { body }).subscribe(data => { console.log(data) })
	// }

	getQuery(query: string) {
		const url = `https://api.spotify.com/v1/${query}`;
		const headers = new HttpHeaders({
			'Authorization': 'Bearer BQB6Va7NGN8-O6gV2Hb_2nMnuu5ShXwVIPiqJ-IjNnJXPSU32ARJFMQTaWaRZ38EMnK4Dbzink-HvbAOraI'
		})
		return this.http.get(url,{headers});
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases?limit=20').pipe(map((data:any) => data['albums'].items));
	}

	getArtista(termino: string) {
		return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data['artists'].items));
	}
}