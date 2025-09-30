import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  isMobile = false;
  openSections: Record<string, boolean> = {
    about: false,
    channels: false,
    links: false
  };
  private storageKey = 'footer-open-sections';

  // Enlaces de "Acerca de nosotros" - según la guía visual
  aboutLinks = [
    { text: 'Quiénes somos', url: 'https://www.segurosbolivar.com/' },
    { text: 'Gobierno Corporativo', url: 'https://www.segurosbolivar.com/' },
    { text: 'Junta Directiva', url: 'https://www.segurosbolivar.com/' },
    { text: 'Informes de Gestión y Financieros', url: 'https://www.segurosbolivar.com/' },
    { text: 'Sostenibilidad', url: 'https://www.segurosbolivar.com/' },
    { text: 'Mapa del sitio', url: 'https://www.segurosbolivar.com/' },
    { text: 'Actualice sus datos', url: 'https://www.segurosbolivar.com/' }
  ];

  // Enlaces de "Enlaces de interés" - según la guía visual
  interestLinks = [
    { text: 'Educación financiera', url: 'https://www.segurosbolivar.com/' },
    { text: 'Atención ARL y Centros médicos', url: 'https://www.segurosbolivar.com/' },
    { text: 'SUCIS - Superintendencia Financiera', url: 'https://www.segurosbolivar.com/' },
    { text: 'Sistema de atención al consumidor financiero', url: 'https://www.segurosbolivar.com/' },
    { text: 'Defensor del consumidor financiero', url: 'https://www.segurosbolivar.com/' },
    { text: 'Radicación de PQRS', url: 'https://www.segurosbolivar.com/' }
  ];

  // Enlaces de la fila inferior - según la guía visual
  bottomLinks = [
    { text: 'Términos y condiciones de uso', url: 'https://www.segurosbolivar.com/' },
    { text: 'Políticas de Seguridad', url: 'https://www.segurosbolivar.com/' },
    { text: 'Políticas de Privacidad', url: 'https://www.segurosbolivar.com/' },
    { text: 'Ley FACTA', url: 'https://www.segurosbolivar.com/' },
    { text: 'Proveedores', url: 'https://www.segurosbolivar.com/' }
  ];

  // Redes sociales
  socialNetworks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/segurosbolivar' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/segurosbolivar' },
    { name: 'Twitter/X', icon: 'fab fa-x-twitter', url: 'https://twitter.com/segurosbolivar' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/segurosbolivar' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/company/segurosbolivar' },
    { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@segurosbolivar' },
    { name: 'Spotify', icon: 'fab fa-spotify', url: 'https://open.spotify.com/user/segurosbolivar' }
  ];

  // Información de contacto - según la guía visual
  contactInfo = [
    { label: 'Celular:', value: '#322' },
    { label: 'WhatsApp:', value: '322 332 2322' },
    { label: 'Línea nacional:', value: '018000 123 322' },
    { label: 'Línea en Bogotá:', value: '601 3122122' },
    { label: 'Sede administrativa:', value: 'Av. Dorado No. 68B – 31, Bogotá.' },
    { label: 'Notificaciones judiciales:', value: 'notificaciones@segurosbolivar.com' },
    { label: 'Otros canales de atención', value: '' }
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }

  openWhatsApp() {
    const whatsappInfo = this.contactInfo.find(info => info.label === 'WhatsApp:');
    if (whatsappInfo) {
      window.open(`https://wa.me/57${whatsappInfo.value.replace(/\s/g, '')}`, '_blank');
    }
  }

  openEmail() {
    const emailInfo = this.contactInfo.find(info => info.label === 'Notificaciones judiciales:');
    if (emailInfo) {
      window.open(`mailto:${emailInfo.value}`, '_blank');
    }
  }

  openSocial(url: string) {
    window.open(url, '_blank');
  }

  constructor() {}

  ngOnInit(): void {
    this.updateIsMobile();
    // Restaurar estado guardado
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validar y fusionar con defaults
        this.openSections = {
          ...this.openSections,
          ...parsed
        };
      }
    } catch {
      // Ignorar errores de parseo
    }
    window.addEventListener('resize', this.updateIsMobileBinded);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateIsMobileBinded);
  }

  private updateIsMobile() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 768;
    // En mobile, colapsar por defecto
    if (this.isMobile && !wasMobile) {
      this.openSections = { about: false, channels: false, links: false };
    }
  }

  private updateIsMobileBinded = this.updateIsMobile.bind(this);

  toggleSection(section: 'about' | 'channels' | 'links') {
    if (!this.isMobile) return;
    this.openSections[section] = !this.openSections[section];
    // Guardar estado
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.openSections));
    } catch {
      // almacenar puede fallar en modo privado; ignorar
    }
  }
}













