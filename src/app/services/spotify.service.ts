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
			'Authorization': 'Bearer BQD5VdftM3q7KDSItEW_m3Je1LXhLcjrssuKiY-7G7_HqPsS00d0ihXaLa5yykPXtHK6DPFIN-Owr4wW0KU'
		})
		return this.http.get(url,{headers});
	}

	getNewReleases() {
		return this.getQuery('browse/new-releases?limit=20').pipe(map((data:any) => data['albums'].items));
	}

	getArtistas(termino: string) {
		return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data['artists'].items));
	}

	getArtista(id: string) {
		return this.getQuery(`artists/${id}`);//.pipe(map((data: any) => data['artist'].items));
	}

	getTopTracks(id: string) {
		return this.getQuery(`artists/${id}/top-tracks?market=es`).pipe(map((data: any) => data['tracks']));
	}

}