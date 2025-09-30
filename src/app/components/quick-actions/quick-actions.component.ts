import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickActionsComponent {

  constructor() { }

  // Función para manejar el reporte de emergencia
  onEmergencyReport(): void {
    console.log('Reporte de emergencia solicitado');
    // Aquí se puede agregar la lógica para reportar emergencias
    // Por ejemplo: redirigir a una página específica o abrir un modal
    window.open('tel:*1122', '_self'); // Ejemplo: llamar al número de emergencias
  }

  // Función para manejar la solicitud de indemnización
  onIndemnityRequest(): void {
    console.log('Solicitud de indemnización iniciada');
    // Aquí se puede agregar la lógica para solicitar indemnización
    // Por ejemplo: redirigir a un formulario o portal de clientes
    window.open('https://clientes.segurosbolivar.com/login', '_blank');
  }

  // Función para manejar la cotización de seguros
  onInsuranceQuote(): void {
    console.log('Cotización de seguro solicitada');
    // Aquí se puede agregar la lógica para cotizar seguros
    // Por ejemplo: abrir el cotizador o redirigir a una página específica
    window.open('https://www.segurosbolivar.com/', '_blank');
  }
}