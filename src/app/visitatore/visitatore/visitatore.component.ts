import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-visitatore',
  templateUrl: './visitatore.component.html',
  styleUrl: './visitatore.component.css'
})
export class VisitatoreComponent {
 
  title='Benvenuto, ecco le mostre del mese'
  visitatori:any;
  public urlVisitatori: string = 'http://localhost:8080/MyREST/myapplication/visitatore/getall';

  constructor(public globalService: GlobalService){}

  ngOnInit(){
    this.globalService.getData(this.urlVisitatori)
    .subscribe({
      next: (response: any) => {
       this.visitatori = response;
       console.log(this.visitatori); 
       
     },
     error: (errore: any) => console.log('error: ' + errore),
     complete: () => console.log('complete' )
   });

    }
}
