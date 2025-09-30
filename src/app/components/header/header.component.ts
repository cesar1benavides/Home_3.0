import { Component, ChangeDetectionStrategy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from '../../shared/components/dropdown/dropdown.component';

export type SegmentType = 'persona' | 'empresa' | 'intermediario' | 'proveedor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  
  // Inputs requeridos
  @Input() activeSegment: SegmentType = 'persona';
  @Input() disabled = false;

  // Outputs requeridos
  @Output() segmentChange = new EventEmitter<string>();
  @Output() loginClick = new EventEmitter<void>();

  // Items para dropdown de Pagos
  pagosMenuItems: DropdownItem[] = [
    { 
      id: 'pago-polizas',
      label: 'Pago de pólizas', 
      icon: 'credit-card', 
      action: () => window.open('https://recaudos.segurosbolivar.com/login', '_blank')
    },
    { 
      id: 'consultar-pagos',
      label: 'Consultar pagos', 
      icon: 'user', 
      action: () => window.open('https://clientes.segurosbolivar.com/login', '_blank')
    },
    { 
      id: 'historial-pagos',
      label: 'Historial de pagos', 
      icon: 'shield', 
      action: () => console.log('Historial de pagos')
    }
  ];

  // Items para dropdown de Ingrese
  ingreseMenuItems: DropdownItem[] = [
    { 
      id: 'cliente-natural',
      label: 'Cliente persona natural', 
      icon: 'user',
      action: () => window.open('https://clientes.segurosbolivar.com/login', '_blank')
    },
    { 
      id: 'cliente-empresa',
      label: 'Cliente empresa', 
      icon: 'shield',
      action: () => window.open('https://clientes.segurosbolivar.com/login-empresa', '_blank')
    },
    { 
      id: 'intermediario',
      label: 'Intermediario', 
      icon: 'credit-card',
      action: () => window.open('https://intermediarios.segurosbolivar.com/login', '_blank')
    }
  ];

  // Segmentos de navegación
  segments = [
    { key: 'persona', label: 'Soy persona natural' },
    { key: 'empresa', label: 'Soy empresa' },
    { key: 'intermediario', label: 'Soy intermediario' },
    { key: 'proveedor', label: 'Soy proveedor' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Inicialización del componente
  }

  // Navegación por segmentos con redirecciones a URLs oficiales
  onSegmentClick(segment: string): void {
    const segmentType = segment as SegmentType;
    
    // Redirecciones a las URLs oficiales de Seguros Bolívar
    const redirectUrls = {
      'persona': 'https://www.segurosbolivar.com/',
      'empresa': 'https://www.segurosbolivar.com/empresas',
      'proveedor': 'https://www.segurosbolivar.com/proveedores',
      'intermediario': 'https://stgfuerzaventas.bolnet.com.co/'
    };
    
    // Redirigir a la URL correspondiente
    const url = redirectUrls[segmentType as keyof typeof redirectUrls];
    if (url) {
      window.open(url, '_blank');
    }
    
    // Cambiar el segmento activo para efectos visuales
    if (segmentType !== this.activeSegment) {
      this.segmentChange.emit(segmentType);
    }
  }

  // Handler para items del dropdown de Pagos
  onPagosItemSelected(item: DropdownItem): void {
    console.log('Pago seleccionado:', item);
    
    // El dropdown component ya ejecuta la acción automáticamente
    // Aquí podemos agregar lógica adicional si es necesaria
    
    // Emitir evento si es necesario
    // this.pagosItemSelected.emit(item);
  }

  // Handler para items del dropdown de Ingrese
  onIngreseItemSelected(item: DropdownItem): void {
    console.log('Ingrese seleccionado:', item);
    
    // El dropdown component ya ejecuta la acción automáticamente
    // Aquí podemos agregar lógica adicional si es necesaria
    
    // También emitir el evento de login para compatibilidad
    this.loginClick.emit();
  }

  // Mobile drawer
  isMobileMenuOpen = false;
  toggleMobileMenu(): void { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
  closeMobileMenu(): void { this.isMobileMenuOpen = false; }

  // Ejecutar acción de items de Pagos/Ingrese desde el drawer
  triggerAction(item: DropdownItem): void {
    try {
      if (item && typeof item.action === 'function') {
        item.action();
        this.closeMobileMenu();
      }
    } catch (error) {
      console.error('Error al ejecutar la acción del item:', error);
    }
  }
}
