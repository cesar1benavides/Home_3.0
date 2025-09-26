import { Component, OnInit } from '@angular/core';
import { FEATURED_INSURANCES, FeaturedInsurance } from '../../data/featured-insurances';

@Component({
  selector: 'app-featured-insurances',
  templateUrl: './featured-insurances.component.html',
  styleUrls: ['./featured-insurances.component.scss']
})
export class FeaturedInsurancesComponent implements OnInit {
  activeTab = 'autos';
  featuredInsurances = FEATURED_INSURANCES;
  currentInsurance: FeaturedInsurance = FEATURED_INSURANCES['autos'];

  tabs = [
    { id: 'autos', label: 'Carros', icon: 'fas fa-car' },
    { id: 'salud', label: 'Salud', icon: 'fas fa-heartbeat' },
    { id: 'vida', label: 'Vida', icon: 'fas fa-user-shield' },
    { id: 'hogar', label: 'Hogar', icon: 'fas fa-home' }
  ];

  ngOnInit() {
    this.updateCurrentInsurance();
  }

  selectTab(tabId: string) {
    this.activeTab = tabId;
    this.updateCurrentInsurance();
  }

  updateCurrentInsurance() {
    this.currentInsurance = this.featuredInsurances[this.activeTab];
  }

  onKnowMore() {
    console.log('Conocer más sobre:', this.currentInsurance.title);
    // Aquí se puede implementar la lógica para redirigir a la página de detalles
  }
}









