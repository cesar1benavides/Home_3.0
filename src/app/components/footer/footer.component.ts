import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // Enlaces de "Acerca de nosotros"
  aboutLinks = [
    { text: 'Quiénes somos', url: 'https://www.segurosbolivar.com/' },
    { text: 'Gobierno Corporativo', url: 'https://www.segurosbolivar.com/' },
    { text: 'Documentos del Sistema de Gobierno Corporativo', url: 'https://www.segurosbolivar.com/' },
    { text: 'Sobre el Buen Gobierno', url: 'https://www.segurosbolivar.com/' },
    { text: 'Junta Directiva', url: 'https://www.segurosbolivar.com/' },
    { text: 'Superintendencia Financiera', url: 'https://www.segurosbolivar.com/' },
    { text: 'Sistema de atención al consumidor financiero', url: 'https://www.segurosbolivar.com/' },
    { text: 'Defensor del consumidor financiero', url: 'https://www.segurosbolivar.com/' },
    { text: 'Educación financiera', url: 'https://www.segurosbolivar.com/' },
    { text: 'Nuestros asesores', url: 'https://www.segurosbolivar.com/' },
    { text: 'Modelo de Sostenibilidad', url: 'https://www.segurosbolivar.com/' },
    { text: 'Canales de atención', url: 'https://www.segurosbolivar.com/' },
    { text: 'Atención ARL y Centros médicos', url: 'https://www.segurosbolivar.com/' },
    { text: 'Elija sus canales de contacto', url: 'https://www.segurosbolivar.com/' },
    { text: 'Mapa del sitio', url: 'https://www.segurosbolivar.com/' },
    { text: 'SUCIS - Superintendencia Financiera', url: 'https://www.segurosbolivar.com/' }
  ];

  // Enlaces de "Informes"
  reportLinks = [
    { text: 'Informes Financieros', url: 'https://www.segurosbolivar.com/' },
    { text: 'Informes de Sostenibilidad', url: 'https://www.segurosbolivar.com/' }
  ];

  // Enlaces de la fila inferior
  bottomLinks = [
    { text: 'Grupo Bolívar', url: 'https://www.segurosbolivar.com/' },
    { text: 'Asistencia Bolívar', url: 'https://www.segurosbolivar.com/' },
    { text: 'Ciencuadras', url: 'https://www.segurosbolivar.com/' },
    { text: 'Reaseguradores', url: 'https://www.segurosbolivar.com/' },
    { text: 'Desarrolladores', url: 'https://www.segurosbolivar.com/' },
    { text: 'Proveedores', url: 'https://www.segurosbolivar.com/' },
    { text: 'Avalúos de crédito', url: 'https://www.segurosbolivar.com/' },
    { text: 'Trabaje con nosotros', url: 'https://www.segurosbolivar.com/' }
  ];

  // Información de contacto
  contactInfo = {
    whatsapp: '322 332 2322',
    celular: '#322',
    lineaNacional: '018000 123 322',
    lineaBogota: '601 3122122',
    direccion: 'Av. Dorado No. 68B - 31, Bogotá.',
    email: 'notificaciones@segurosbolivar.com'
  };

  openLink(url: string) {
    window.open(url, '_blank');
  }

  openWhatsApp() {
    window.open(`https://wa.me/57${this.contactInfo.whatsapp.replace(/\s/g, '')}`, '_blank');
  }

  openEmail() {
    window.open(`mailto:${this.contactInfo.email}`, '_blank');
  }
}









