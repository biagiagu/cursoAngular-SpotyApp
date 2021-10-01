import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Spotify Service Listo')

  }

  getSpotifyToken(){
    
    
    const body : any = {
      'grant_type':'client_credentials',
      'idClient' :  '7e7034426bdc4b81abb19d1c95701441',
      'idSecret' :  '9fe0933f0c9b487e93d1b35b15d4204f'
      
     }
    

    this.http.post('https://accounts.spotify.com/api/token', {body} ).subscribe(data =>{ console.log(data)})

  }

  getNewReleases(){

    this.getSpotifyToken()
    //console.log(token);

    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQD5SdgswWxyddXXDn-hflnwYt-O0CR9LDlgdcUcMYwl9OI31a0lPnj_54smYF1_34Amd7fhlfsOPxjlPxc'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }

  getArtista( termino:string ){

    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQD5SdgswWxyddXXDn-hflnwYt-O0CR9LDlgdcUcMYwl9OI31a0lPnj_54smYF1_34Amd7fhlfsOPxjlPxc'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});

  }
}