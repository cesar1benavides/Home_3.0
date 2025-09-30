import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Punto 36: Iconografía SVG (tamaños 16px)
@Injectable({
  providedIn: 'root'
})
export class IconService {
  private icons: { [key: string]: string } = {
    // Credit card icon (16px)
    'credit-card': `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 14H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zM1 7v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7H1zm3 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 4 10z"/>
      </svg>
    `,
    
    // User icon (16px)
    'user': `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
      </svg>
    `,
    
    // Chevron down icon (6-8px como especifica punto 18)
    'chevron-down': `
      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
        <path d="M1.5 2.5L4 5l2.5-2.5"/>
      </svg>
    `,
    
    // Chevron right icon (16px)
    'chevron-right': `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
    `,
    
    // Wallet icon (para el botón Pagos)
    'wallet': `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H2a1 1 0 0 0-1 1v8.5H14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2.5a.5.5 0 0 1 0-1H14a3 3 0 0 1 3 3v6.5a3 3 0 0 1-3 3H2a2 2 0 0 1-2-2V3z"/>
        <path d="M9.5 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/>
      </svg>
    `
  };

  constructor(private sanitizer: DomSanitizer) {}

  getIcon(name: string): SafeHtml {
    const iconSvg = this.icons[name];
    return iconSvg ? this.sanitizer.bypassSecurityTrustHtml(iconSvg) : '';
  }

  hasIcon(name: string): boolean {
    return !!this.icons[name];
  }

  getAllIconNames(): string[] {
    return Object.keys(this.icons);
  }
}










