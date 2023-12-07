import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  constructor( private paisService: PaisService ) {}

  regiones: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  activarRegion( region: string ) {
    if (region === this.regionActiva){ return;}

    this.regionActiva = region;
    this.paisService.buscarRegion( region )
      .subscribe( paises => this.paises = paises )
  }

  /**
   * Con esta funcion vamos agregar algunas clases a los botones
   * por ahora no vamos a enfocarnos en explicar mucho esta parte
   * @param region 
   * @returns 
   */
  getClaseCSS( region: string ): string {
    return ( region === this.regionActiva ) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
