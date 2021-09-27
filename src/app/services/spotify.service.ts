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
      'Authorization': 'Bearer BQAJWRfc15GomV_j8Vr6fl3MOTiZpgJ8icwhH4_721acmBlE9Hz66Ye72YIuUM3eCzYAjGLYgffR8TwIK5A'
    })

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe( data =>{
      console.log(data);
    })

  }
}