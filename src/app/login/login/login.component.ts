import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Use 'styleUrls' instead of 'styleUrl'
})
export class LoginComponent {

  title = 'Login';

  utente: any = { name: "", password: "" }; // Use 'name' instead of 'nome' to match the server's JSON structure
  logged: any;

  // No need to declare 'username' and 'password' again if they are not being used

  urlPost: string = 'http://localhost:8080/MyREST/myapplication/login/login';
  urlGet: string = '';

  constructor(private httpService: HttpService,
    // Inject the globalService created
    public globalService: GlobalService) { }

  loginPost() {
    // Here we connect
    const datiJSON = {
      name: this.utente.name,
      password: this.utente.password,
    };

    const datiStringa = JSON.stringify(datiJSON);
    this.httpService.postData(this.urlPost, datiStringa)
      .subscribe({
        next: (response: any) => {
          console.log('Response: ' + JSON.stringify(response));
          // Use globalService to store user information
          this.globalService.loggedUser = response;
          console.log(this.globalService.loggedUser);
        },
        error: (errore: any) => console.log('error: ' + errore),
        complete: () => console.log('complete')
      });
  }
}