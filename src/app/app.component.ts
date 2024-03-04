import { Component } from '@angular/core';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';

  usuarios: Usuario[] = [
    {name: "Rodrigo", lastName: "Barbosa"},
    {name: "Lola", lastName: "Alves"},
    {name: "George", lastName: "Rof"}
  ]
}
