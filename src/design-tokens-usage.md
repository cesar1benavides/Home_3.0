# 🎨 Sistema de Design Tokens - Seguros Bolívar

## 📋 Resumen

Este sistema centraliza todas las variables CSS de Seguros Bolívar basado en **tech-block-lib**, proporcionando consistencia visual y facilidad de mantenimiento en todo el proyecto.

## 🎯 Variables Disponibles

### 🎨 **Colores Principales**
```css
/* Verde (Primario) */
var(--c-lib-tb-primaryBase)      /* #009056 - Color principal */
var(--c-lib-tb-primaryD100)      /* #038450 - Verde oscuro */
var(--c-lib-tb-primaryL400)      /* #f2f9f6 - Verde muy claro */

/* Amarillo (Secundario) */
var(--c-lib-tb-secondaryBase)    /* #ffe16f - Amarillo principal */
var(--c-lib-tb-secondaryD100)    /* #ffda55 - Amarillo oscuro */
var(--c-lib-tb-secondaryL400)    /* #fffcf0 - Amarillo muy claro */
```

### 🔲 **Escala de Grises**
```css
var(--c-lib-tb-grayscaleBlack)   /* #1b1b1b - Negro */
var(--c-lib-tb-grayscaleWhite)   /* #ffffff - Blanco */
var(--c-lib-tb-grayscaleD200)    /* #5b5b5b - Gris oscuro para texto */
var(--c-lib-tb-grayscaleL200)    /* #e1e1e1 - Gris claro para bordes */
```

### 🚨 **Colores de Estado**
```css
var(--c-lib-tb-errorBase)        /* #dc3545 - Rojo error */
var(--c-lib-tb-successBase)      /* #28a745 - Verde éxito */
var(--c-lib-tb-warningBase)      /* #ffc100 - Amarillo advertencia */
var(--c-lib-tb-infoBase)         /* #007eff - Azul información */
```

### ✨ **Sombras**
```css
var(--c-lib-tb-shadowXS)         /* Sombra muy pequeña */
var(--c-lib-tb-shadowS)          /* Sombra pequeña */
var(--c-lib-tb-shadowM)          /* Sombra mediana */
var(--c-lib-tb-shadowL)          /* Sombra grande */
var(--c-lib-tb-shadowXL)         /* Sombra extra grande */
```

### 📝 **Tipografía**
```css
var(--c-lib-tb-font-family)      /* 'Bolivar', 'Roboto', sans-serif */
var(--c-lib-tb-fontsizeH1)       /* 2.25rem - Título principal */
var(--c-lib-tb-fontsizeBody)     /* 1rem - Texto cuerpo */
var(--c-lib-tb-fontsizeLabel)    /* 0.875rem - Etiquetas */
```

## 📚 **Cómo Usar las Variables**

### ✅ **En componentes SCSS:**
```scss
.mi-componente {
  background-color: var(--c-lib-tb-primaryBase);
  color: var(--c-lib-tb-grayscaleWhite);
  border: 1px solid var(--c-lib-tb-grayscaleL200);
  box-shadow: var(--c-lib-tb-shadowM);
  font-family: var(--c-lib-tb-font-family);
}

.estado-error {
  background-color: var(--c-lib-tb-errorL400);
  border-color: var(--c-lib-tb-errorBase);
  color: var(--c-lib-tb-errorD100);
}
```

### ✅ **En HTML con clases Tailwind:**
```html
<!-- Usar variables de compatibilidad -->
<div class="bg-grayscaleWhite text-primaryBase border-grayscaleL200">
  Mi contenido
</div>
```

### ✅ **Para botones de tech-block-lib:**
```typescript
// Los botones automáticamente usan las variables correctas
btnPrimary: ILibTbButton = {
  label: 'Mi Botón',
  styleBtn: 'fill',        // Usa .lib-tb-button__primary
  typeBtn: 'primary',
  libTbClick: () => this.action()
};

btnSecondary: ILibTbButton = {
  label: 'Secundario',
  styleBtn: 'stroke',      // Usa .lib-tb-button__secondary.lib-tb-button__stroke
  typeBtn: 'secondary',
  libTbClick: () => this.action()
};
```

## 🔧 **Variables de Compatibilidad**

Para mantener compatibilidad con componentes existentes, se incluyen mapeos:

```css
/* Antes (código legacy) */
color: var(--green-700);        /* ✅ Mapea a --c-lib-tb-primaryBase */
background: var(--bg);          /* ✅ Mapea a --c-lib-tb-grayscaleWhite */
border: var(--border-light);   /* ✅ Mapea a --c-lib-tb-grayscaleL200 */
```

## 🎨 **Componentes con Variables Específicas**

Los siguientes componentes tienen variables específicas configuradas:

- **BUTTON** - `.lib-tb-button__primary`, `.lib-tb-button__secondary`
- **CHIP** - `--c-lib-tb-chip-*`
- **STEPPER** - `--c-lib-tb-stepper-*`
- **TABS** - `--c-lib-tb-tabs-*`
- **MODAL** - `--c-lib-tb-modal-*`
- **SEARCH** - `--c-lib-tb-search-*`
- Y muchos más...

## 🚫 **Qué NO Hacer**

```scss
/* ❌ NO usar valores hardcoded */
.componente {
  color: #009056;                    /* ❌ Usar var(--c-lib-tb-primaryBase) */
  background: #ffffff;               /* ❌ Usar var(--c-lib-tb-grayscaleWhite) */
  box-shadow: 0 2px 4px rgba(...);  /* ❌ Usar var(--c-lib-tb-shadowS) */
}

/* ❌ NO modificar variables de tech-block-lib */
::ng-deep lib-tb-button {
  background: red !important;        /* ❌ Los componentes ya tienen su diseño */
}
```

## 🎯 **Beneficios**

✅ **Consistencia Visual** - Todos los colores siguen el sistema de diseño  
✅ **Mantenimiento Fácil** - Cambios centralizados  
✅ **Tema Dinámico** - Soporte para cambios de tema  
✅ **Accesibilidad** - Contraste validado  
✅ **Performance** - Variables CSS nativas  

## 🔄 **Migración de Código Existente**

### Paso 1: Identificar colores hardcoded
```bash
# Buscar valores hex en el código
grep -r "#[0-9a-fA-F]\{6\}" src/
```

### Paso 2: Reemplazar con variables
```scss
/* Antes */
.card {
  background: #ffffff;
  border: 1px solid #e1e1e1;
  color: #1b1b1b;
}

/* Después */
.card {
  background: var(--c-lib-tb-grayscaleWhite);
  border: 1px solid var(--c-lib-tb-grayscaleL200);
  color: var(--c-lib-tb-grayscaleBlack);
}
```

## 📖 **Referencias**

- **Archivo principal**: `src/styles.scss`
- **Tech-block-lib**: Ver `package.json` versión 15.1.1
- **Documentación**: Ver carpeta `knowledge_base/tech_block_lib/`

---

**💡 Recuerda**: Siempre usa las variables CSS en lugar de valores hardcoded para mantener la consistencia del sistema de diseño de Seguros Bolívar.
