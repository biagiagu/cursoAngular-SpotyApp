import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Spotify Service Listo')

  }

  getNewReleases(){

    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQAI9ylNTporK8IeK0esJBWdNbwxaMS0bIYm8WqDXvz4FXSCccAO8wfgsIQd_rAZmUEcpYFP-NL4WT1Beqk'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }
}