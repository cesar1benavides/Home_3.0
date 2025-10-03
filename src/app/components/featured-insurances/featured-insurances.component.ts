import { Component, OnInit } from '@angular/core';
import { FEATURED_INSURANCES, FeaturedInsurance } from '../../data/featured-insurances';

@Component({
  selector: 'app-featured-insurances',
  templateUrl: './featured-insurances.component.html',
  styleUrls: ['./featured-insurances.component.scss']
})
export class FeaturedInsurancesComponent implements OnInit {
  activeTab = 'carros';
  featuredInsurances = FEATURED_INSURANCES;
  currentInsurance: FeaturedInsurance = FEATURED_INSURANCES['carros'] || FEATURED_INSURANCES['autos'];
  showHelp = true; // Burbuja siempre visible
  showAlert = false;

  tabs = [
    { id: 'carros', label: 'Carros', imgSrc: 'assets/Image/Iconos/Seguros_destacados/Autos.png' },
    { id: 'salud', label: 'Salud', imgSrc: 'assets/Image/Iconos/Seguros_destacados/Salud (2).png' },
    { id: 'vida', label: 'Vida', imgSrc: 'assets/Image/Iconos/Seguros_destacados/Vida.png' },
    { id: 'hogar', label: 'Hogar', imgSrc: 'assets/Image/Iconos/Seguros_destacados/Hogar.png' }
  ];

  ngOnInit() {
    this.updateCurrentInsurance();
    // Burbuja siempre visible; mostrar alerta a los 3s y mantenerla hasta cierre manual (X)
    setTimeout(() => {
      this.showAlert = true;
    }, 3000);
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.updateCurrentInsurance();
  }

  updateCurrentInsurance() {
    this.currentInsurance = this.featuredInsurances[this.activeTab] || this.featuredInsurances['autos'];
  }

  onKnowMore() {
    console.log('Conocer más sobre:', this.currentInsurance.title);
    // Aquí se puede implementar la lógica para redirigir a la página de detalles
  }

  closeHelp() {
    this.showHelp = false;
  }

  closeAlert() {
    this.showAlert = false;
  }
}













