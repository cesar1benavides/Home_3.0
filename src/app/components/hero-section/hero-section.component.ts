import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Product, PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  searchControl = new FormControl('');
  searchResults: Product[] = [];
  isLoading = false;
  showResults = false;
  allProducts = PRODUCTS;

  ngOnInit() {
    // Configurar el debounce para la búsqueda
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        if (value && value.trim().length > 0) {
          this.performSearch(value.trim());
        } else {
          this.showResults = false;
          this.searchResults = [];
        }
      });
  }

  performSearch(query: string) {
    this.isLoading = true;
    this.showResults = true;

    // Simular delay de carga
    setTimeout(() => {
      this.searchResults = this.filterProducts(query);
      this.isLoading = false;
    }, 800);
  }

  filterProducts(query: string): Product[] {
    const searchTerms = query.toLowerCase().split(' ');
    const scoredProducts = this.allProducts.map(product => {
      let score = 0;
      const title = product.title.toLowerCase();
      const description = product.description.toLowerCase();
      const keywords = product.keywords.join(' ').toLowerCase();

      // Puntuación por coincidencias en el título (mayor peso)
      searchTerms.forEach(term => {
        if (title.includes(term)) {
          score += 10;
        }
        if (description.includes(term)) {
          score += 5;
        }
        if (keywords.includes(term)) {
          score += 3;
        }
      });

      // Bonus por productos destacados
      if (product.isHighlighted) {
        score += 2;
      }

      return { ...product, score };
    });

    // Filtrar productos con score > 0 y ordenar por score
    const filteredProducts = scoredProducts
      .filter(product => product.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    // Si no hay coincidencias, mostrar los primeros 6 productos destacados
    if (filteredProducts.length === 0) {
      return this.allProducts
        .filter(product => product.isHighlighted)
        .slice(0, 6);
    }

    return filteredProducts;
  }

  onSearch() {
    const query = this.searchControl.value;
    if (query && query.trim().length > 0) {
      this.performSearch(query.trim());
    }
  }

  onVoiceSearch() {
    // Implementación de búsqueda por voz (punto 12)
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'es-ES';
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        this.searchControl.setValue(transcript);
        this.performSearch(transcript);
      };
      
      recognition.onerror = (event: any) => {
        console.log('Error en reconocimiento de voz:', event.error);
      };
      
      recognition.start();
    } else {
      console.log('Reconocimiento de voz no soportado en este navegador');
    }
  }

  onQuickAction(action: string) {
    if (action === 'reporte') {
      // Lógica para reporte y ayuda
      console.log('Reporte y reciba ayuda');
    } else if (action === 'cotizar') {
      // Lógica para cotizar seguro
      console.log('Cotice un seguro');
    }
  }

  selectProduct(product: Product) {
    console.log('Producto seleccionado:', product);
    this.showResults = false;
    this.searchControl.setValue('');
  }

  closeResults() {
    this.showResults = false;
    this.searchResults = [];
  }
}







