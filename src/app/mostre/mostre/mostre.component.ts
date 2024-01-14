import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-mostre',
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {
  title='Benvenuto, ecco le mostre del mese'
  mostre:any;
  public urlMostre: string = 'http://localhost:8080/MyREST/myapplication/mostra/getall';
  public urlBiglietto: string = 'http://localhost:8080/MyREST/myapplication/biglietto/addbiglietto';


  constructor(public globalService: GlobalService){}

  ngOnInit(){
    this.globalService.getData(this.urlMostre)
    .subscribe({
      next: (response: any) => {
       this.mostre = response;
       console.log(this.mostre); 
       
     },
     error: (errore: any) => console.log('error: ' + errore),
     complete: () => console.log('complete' )
   });

    }

 
}

