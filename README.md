# Seguros Bolívar - Clon de Interfaz Web

Una aplicación web desarrollada en Angular que replica fielmente la interfaz de usuario de Seguros Bolívar, con diseño responsive y funcionalidades interactivas.

## 🚀 Características

- **Diseño Responsive**: Adaptable a diferentes tamaños de pantalla
- **Búsqueda Inteligente**: Sistema de filtrado con algoritmo de puntuación
- **Navegación por Pestañas**: Sistema dinámico de pestañas para seguros
- **Componentes Modulares**: Arquitectura limpia y mantenible
- **Paleta de Colores Consistente**: Verde oscuro, amarillo vibrante y tonos de gris
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos

## 🛠️ Tecnologías Utilizadas

- **Angular 17**: Framework principal
- **TypeScript**: Lenguaje de programación
- **SCSS**: Preprocesador de CSS
- **HTML5**: Estructura semántica
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía (Inter)

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd seguros-bolivar-clone
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── header/                 # Barra de navegación superior
│   │   ├── hero-section/          # Sección principal con buscador
│   │   ├── featured-insurances/   # Pestañas de seguros destacados
│   │   ├── pyme-section/          # Sección promocional para Pymes
│   │   └── footer/                # Pie de página
│   ├── data/
│   │   ├── products.ts            # Datos de productos para búsqueda
│   │   └── featured-insurances.ts # Datos de seguros destacados
│   ├── app.component.*
│   └── app.module.ts
├── styles.scss                    # Estilos globales
└── index.html
```

## 🎯 Funcionalidades Principales

### Header Component
- Navegación principal con enlaces externos
- Botones de acción (Pagos, Ingrese)
- Efecto de scroll con barra fija
- Diseño responsive

### Hero Section Component
- Buscador inteligente con filtrado en tiempo real
- Algoritmo de puntuación basado en palabras clave
- Spinner de carga durante búsquedas
- Acciones rápidas (Reporte, Cotizar)
- Imagen promocional

### Featured Insurances Component
- Sistema de pestañas dinámico (Autos, Salud, Vida, Hogar)
- Contenido específico para cada tipo de seguro
- Transiciones suaves entre pestañas
- Botón de ayuda flotante

### Pyme Section Component
- Diseño promocional con fondo amarillo
- Información sobre seguros para Pymes
- Botón de acción para cotización

### Footer Component
- Tres columnas de información
- Enlaces de navegación
- Información de contacto
- Enlaces a redes sociales y servicios

## 🎨 Paleta de Colores

- **Verde Primario**: #1B4D3E
- **Amarillo Acento**: #FFD700
- **Verde Claro**: #E8F5E8
- **Gris Oscuro**: #666
- **Gris Claro**: #F5F5F5
- **Blanco**: #FFFFFF

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 768px

## 🔧 Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run watch`: Construye y observa cambios
- `npm test`: Ejecuta las pruebas unitarias

## 📄 Licencia

Este proyecto es un clon educativo de la interfaz de Seguros Bolívar para fines de aprendizaje y demostración.

## 👨‍💻 Autor

Desarrollado como proyecto de práctica en Angular y diseño web responsive.














