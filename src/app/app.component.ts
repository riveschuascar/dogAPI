import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaletaColorService } from './servicios/paleta-color.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dogAPI';
  color = '';
  servicioPaletaColor: PaletaColorService = inject(PaletaColorService);
  paletaColor: any;

  obtenerPaletaColor() {
    this.servicioPaletaColor.obtenerPaletasColor().subscribe(
      data => this.paletaColor = data);
    console.log(this.paletaColor);
  }
}
