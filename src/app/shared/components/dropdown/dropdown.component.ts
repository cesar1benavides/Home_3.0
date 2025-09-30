import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnInit, 
  OnDestroy, 
  HostListener,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

export interface DropdownItem {
  id: string | number;
  label: string;
  value?: any;
  icon?: string;
  badge?: string;
  disabled?: boolean;
  divider?: boolean;
  action?: () => void;
}

export type DropdownIcon = 'chevron' | 'arrow' | 'none';
export type DropdownPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit, OnDestroy {
  
  // Inputs requeridos
  @Input() label: string = '';
  @Input() items: DropdownItem[] = [];
  
  // Inputs opcionales
  @Input() buttonClass: string = 'dropdown-btn-default';
  @Input() icon: DropdownIcon = 'chevron';
  @Input() position: DropdownPosition = 'bottom-left';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'Seleccionar...';
  @Input() maxHeight: string = '300px';
  @Input() width: string = 'auto';
  // Iconos con imágenes personalizadas
  @Input() leftIconSrc?: string;   // Ruta a imagen izquierda
  @Input() rightIconSrc?: string;  // Ruta a imagen derecha
  
  // Outputs
  @Output() itemSelected = new EventEmitter<DropdownItem>();
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();
  
  // Estado interno
  isOpen: boolean = false;
  selectedItem: DropdownItem | null = null;

  constructor() {}

  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  ngOnDestroy(): void {
    this.close();
  }

  // Listener global para cerrar dropdown al hacer clic fuera
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdownElement = target.closest('.dropdown-container');
    
    if (!dropdownElement && this.isOpen) {
      this.close();
    }
  }

  // Listener para teclado
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isOpen) {
      this.close();
    }
  }

  /**
   * Alternar estado del dropdown
   */
  toggle(): void {
    if (this.disabled) return;
    
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Abrir dropdown
   */
  open(): void {
    if (this.disabled || this.isOpen) return;
    
    this.isOpen = true;
    this.opened.emit();
  }

  /**
   * Cerrar dropdown
   */
  close(): void {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    this.closed.emit();
  }

  /**
   * Seleccionar un item del dropdown
   */
  selectItem(item: DropdownItem): void {
    if (item.disabled) return;

    this.selectedItem = item;
    this.itemSelected.emit(item);
    
    // Ejecutar acción del item si existe
    if (item.action) {
      item.action();
    }
    
    this.close();
  }

  /**
   * TrackBy function para ngFor
   */
  trackByFn(index: number, item: DropdownItem): any {
    return item.id;
  }

  /**
   * Obtener clases CSS para el menú
   */
  getMenuClasses(): string[] {
    const classes = ['dropdown-menu'];
    
    if (this.isOpen) {
      classes.push('show');
    }
    
    classes.push(`position-${this.position}`);
    
    return classes;
  }

  /**
   * Obtener estilos dinámicos para el menú
   */
  getMenuStyles(): any {
    return {
      'max-height': this.maxHeight,
      'width': this.width
    };
  }
}