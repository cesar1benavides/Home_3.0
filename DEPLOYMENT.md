# 🚀 Deployment Guide - Seguros Bolívar Clone

Este proyecto Angular está configurado para múltiples opciones de deployment. Puedes elegir cualquiera de las siguientes opciones según tus preferencias.

## 📋 Prerrequisitos

Asegúrate de tener instalado:
- Node.js 18+
- npm

## 🛠️ Construcción del Proyecto

```bash
# Construcción para desarrollo
npm run build

# Construcción para producción (optimizada)
npm run build:prod

# Tests automatizados
npm run test:headless
```

## 🌐 Opciones de Deployment

### 1. 🟢 Vercel (Recomendado)

**Configuración inicial:**
```bash
npm install -g vercel
vercel login
```

**Deploy:**
```bash
npm run deploy:vercel
```

**Preview:**
```bash
npm run preview:vercel
```

**Características:**
- ✅ Deploy automático desde Git
- ✅ HTTPS gratuito
- ✅ CDN global
- ✅ Configuración en `vercel.json`

### 2. 🟡 Netlify

**Configuración inicial:**
```bash
npm install -g netlify-cli
netlify login
```

**Deploy:**
```bash
npm run deploy:netlify
```

**Preview:**
```bash
npm run preview:netlify
```

**Características:**
- ✅ Deploy automático desde Git
- ✅ Forms handling
- ✅ Configuración en `netlify.toml` y `_redirects`

### 3. 🔥 Firebase Hosting

**Configuración inicial:**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

**Edita `.firebaserc` y cambia `your-firebase-project-id` por tu Project ID**

**Deploy:**
```bash
npm run deploy:firebase
```

**Características:**
- ✅ Integración con otros servicios Firebase
- ✅ CDN global
- ✅ Configuración en `firebase.json`

### 4. 📄 GitHub Pages

**El archivo `.github/workflows/deploy.yml` está configurado para:**
- ✅ Deploy automático en push a `main`
- ✅ Tests automatizados
- ✅ Build optimizado

**Para habilitar GitHub Pages:**
1. Ve a Settings > Pages en tu repositorio
2. Selecciona "GitHub Actions" como source
3. Push tu código y el deploy será automático

### 5. ⚡ CI/CD Automático

Los workflows de GitHub Actions incluyen:

- **Build y Test automático** en cada PR
- **Deploy automático** a GitHub Pages en push a `main`
- **Deploy a Vercel** (requiere secrets configurados)
- **Deploy a Firebase** (requiere secrets configurados)

## 🔧 Scripts Disponibles

```json
{
  "start": "ng serve",                    // Servidor de desarrollo
  "build": "ng build",                    // Build desarrollo
  "build:prod": "ng build --prod",        // Build producción
  "test": "ng test",                      // Tests interactivos
  "test:headless": "ng test --headless",  // Tests para CI
  "deploy:vercel": "vercel --prod",       // Deploy a Vercel
  "deploy:netlify": "netlify deploy --prod", // Deploy a Netlify
  "deploy:firebase": "firebase deploy",   // Deploy a Firebase
  "preview:vercel": "vercel",             // Preview en Vercel
  "preview:netlify": "netlify deploy"     // Preview en Netlify
}
```

## 🔐 Variables de Entorno / Secrets

### Para GitHub Actions:

**Vercel:**
- `VERCEL_TOKEN`: Token de tu cuenta Vercel
- `ORG_ID`: ID de tu organización
- `PROJECT_ID`: ID del proyecto

**Firebase:**
- `FIREBASE_SERVICE_ACCOUNT`: Service account JSON

### Para builds locales:
Crea un archivo `.env` (no incluido en el repositorio):
```bash
# Ejemplo de variables de entorno
API_URL=https://api.example.com
```

## 🚦 Estado del Build

Puedes monitorear el estado de tus deployments:

- **Vercel:** Dashboard en vercel.com
- **Netlify:** Dashboard en netlify.com
- **Firebase:** Console de Firebase
- **GitHub Pages:** Actions tab en GitHub

## ⚠️ Notas Importantes

1. **Angular Router:** Todas las configuraciones incluyen redirects para SPA routing
2. **Assets:** Fuentes y imágenes están optimizadas con cache headers
3. **HTTPS:** Todos los servicios incluyen HTTPS por defecto
4. **Tailwind CSS:** Ya está configurado e instalado

## 📞 Soporte

Si tienes problemas con el deployment:

1. Revisa los logs en la plataforma elegida
2. Verifica que el build local funcione: `npm run build:prod`
3. Confirma que todos los archivos estén en `dist/seguros-bolivar-clone/`

---

¡Feliz deployment! 🎉

