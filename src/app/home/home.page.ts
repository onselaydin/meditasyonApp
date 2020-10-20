import { Component } from '@angular/core';
//import { HTTP } from '@ionic-native/http/ngx';
import { Meditasyon } from '../../entities/meditasyon';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  sayfa?: any;
  meditasyonlar: Meditasyon[];
  constructor(
     //private http:HTTP 
     private http:HttpClient
     ) {
  }
  
    getMeditasyon(): Observable<Meditasyon[]> {
        return this.http.get<Meditasyon[]>("http://mistikyol.com/mistikmobil/mobiljson.php");
          //.map(res => res.);
          //.then(res=>{ return JSON.parse(res.data)}, res=> console.log(res.data));
      }

   getDataFromWeb(){
     this.getMeditasyon().subscribe(p=> {
       this.meditasyonlar = p["meditasyonlar"];
       console.log(this.meditasyonlar);
     });
   }

   ionViewDidEnter() {
     this.getDataFromWeb();
     //this.getMeditasyon();
     console.log("test");
   }

}