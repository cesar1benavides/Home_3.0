/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // ===================================================
      // COLORES MAPEADOS A TECH-BLOCK-LIB
      // ===================================================
      colors: {
        // Colores Primarios (Verde)
        primaryD400: 'var(--c-lib-tb-primaryD400)',
        primaryD300: 'var(--c-lib-tb-primaryD300)',
        primaryD200: 'var(--c-lib-tb-primaryD200)',
        primaryD100: 'var(--c-lib-tb-primaryD100)',
        primaryBase: 'var(--c-lib-tb-primaryBase)',
        primaryL100: 'var(--c-lib-tb-primaryL100)',
        primaryL200: 'var(--c-lib-tb-primaryL200)',
        primaryL300: 'var(--c-lib-tb-primaryL300)',
        primaryL400: 'var(--c-lib-tb-primaryL400)',

        // Colores Secundarios (Amarillo)
        secondaryD400: 'var(--c-lib-tb-secondaryD400)',
        secondaryD300: 'var(--c-lib-tb-secondaryD300)',
        secondaryD200: 'var(--c-lib-tb-secondaryD200)',
        secondaryD100: 'var(--c-lib-tb-secondaryD100)',
        secondaryBase: 'var(--c-lib-tb-secondaryBase)',
        secondaryL100: 'var(--c-lib-tb-secondaryL100)',
        secondaryL200: 'var(--c-lib-tb-secondaryL200)',
        secondaryL300: 'var(--c-lib-tb-secondaryL300)',
        secondaryL400: 'var(--c-lib-tb-secondaryL400)',

        // Colores Terciarios
        tertiaryD400: 'var(--c-lib-tb-tertiaryD400)',
        tertiaryD300: 'var(--c-lib-tb-tertiaryD300)',
        tertiaryD200: 'var(--c-lib-tb-tertiaryD200)',
        tertiaryD100: 'var(--c-lib-tb-tertiaryD100)',
        tertiaryBase: 'var(--c-lib-tb-tertiaryBase)',
        tertiaryL100: 'var(--c-lib-tb-tertiaryL100)',
        tertiaryL200: 'var(--c-lib-tb-tertiaryL200)',
        tertiaryL300: 'var(--c-lib-tb-tertiaryL300)',
        tertiaryL400: 'var(--c-lib-tb-tertiaryL400)',

        // Colores Complementarios
        complementaryD400: 'var(--c-lib-tb-complementaryD400)',
        complementaryD300: 'var(--c-lib-tb-complementaryD300)',
        complementaryD200: 'var(--c-lib-tb-complementaryD200)',
        complementaryD100: 'var(--c-lib-tb-complementaryD100)',
        complementaryBase: 'var(--c-lib-tb-complementaryBase)',
        complementaryL100: 'var(--c-lib-tb-complementaryL100)',
        complementaryL200: 'var(--c-lib-tb-complementaryL200)',
        complementaryL300: 'var(--c-lib-tb-complementaryL300)',
        complementaryL400: 'var(--c-lib-tb-complementaryL400)',

        // Escala de Grises
        grayscaleBlack: 'var(--c-lib-tb-grayscaleBlack)',
        grayscaleD400: 'var(--c-lib-tb-grayscaleD400)',
        grayscaleD300: 'var(--c-lib-tb-grayscaleD300)',
        grayscaleD200: 'var(--c-lib-tb-grayscaleD200)',
        grayscaleD100: 'var(--c-lib-tb-grayscaleD100)',
        grayscaleBase: 'var(--c-lib-tb-grayscaleBase)',
        grayscaleL100: 'var(--c-lib-tb-grayscaleL100)',
        grayscaleL200: 'var(--c-lib-tb-grayscaleL200)',
        grayscaleL300: 'var(--c-lib-tb-grayscaleL300)',
        grayscaleL400: 'var(--c-lib-tb-grayscaleL400)',
        grayscaleWhite: 'var(--c-lib-tb-grayscaleWhite)',

        // Colores de Estado
        errorD400: 'var(--c-lib-tb-errorD400)',
        errorD300: 'var(--c-lib-tb-errorD300)',
        errorD200: 'var(--c-lib-tb-errorD200)',
        errorD100: 'var(--c-lib-tb-errorD100)',
        errorBase: 'var(--c-lib-tb-errorBase)',
        errorL100: 'var(--c-lib-tb-errorL100)',
        errorL200: 'var(--c-lib-tb-errorL200)',
        errorL300: 'var(--c-lib-tb-errorL300)',
        errorL400: 'var(--c-lib-tb-errorL400)',

        infoD400: 'var(--c-lib-tb-infoD400)',
        infoD300: 'var(--c-lib-tb-infoD300)',
        infoD200: 'var(--c-lib-tb-infoD200)',
        infoD100: 'var(--c-lib-tb-infoD100)',
        infoBase: 'var(--c-lib-tb-infoBase)',
        infoL100: 'var(--c-lib-tb-infoL100)',
        infoL200: 'var(--c-lib-tb-infoL200)',
        infoL300: 'var(--c-lib-tb-infoL300)',
        infoL400: 'var(--c-lib-tb-infoL400)',

        successD400: 'var(--c-lib-tb-successD400)',
        successD300: 'var(--c-lib-tb-successD300)',
        successD200: 'var(--c-lib-tb-successD200)',
        successD100: 'var(--c-lib-tb-successD100)',
        successBase: 'var(--c-lib-tb-successBase)',
        successL100: 'var(--c-lib-tb-successL100)',
        successL200: 'var(--c-lib-tb-successL200)',
        successL300: 'var(--c-lib-tb-successL300)',
        successL400: 'var(--c-lib-tb-successL400)',

        warningD400: 'var(--c-lib-tb-warningD400)',
        warningD300: 'var(--c-lib-tb-warningD300)',
        warningD200: 'var(--c-lib-tb-warningD200)',
        warningD100: 'var(--c-lib-tb-warningD100)',
        warningBase: 'var(--c-lib-tb-warningBase)',
        warningL100: 'var(--c-lib-tb-warningL100)',
        warningL200: 'var(--c-lib-tb-warningL200)',
        warningL300: 'var(--c-lib-tb-warningL300)',
        warningL400: 'var(--c-lib-tb-warningL400)',

        // Fondos Específicos
        bgGrayscaleBlack: 'var(--c-lib-tb-bgGrayscaleBlack)',
        bgGrayscaleD100: 'var(--c-lib-tb-bgGrayscaleD100)',
        bgGrayscaleBase: 'var(--c-lib-tb-bgGrayscaleBase)',
        bgGrayscaleL400: 'var(--c-lib-tb-bgGrayscaleL400)',
        bgGrayscaleWhite: 'var(--c-lib-tb-bgGrayscaleWhite)',

        bgPrimaryD100: 'var(--c-lib-tb-bgPrimaryD100)',
        bgPrimaryBase: 'var(--c-lib-tb-bgPrimaryBase)',
        bgPrimaryL400: 'var(--c-lib-tb-bgPrimaryL400)',

        bgSecondaryD100: 'var(--c-lib-tb-bgSecondaryD100)',
        bgSecondaryBase: 'var(--c-lib-tb-bgSecondaryBase)',
        bgSecondaryL400: 'var(--c-lib-tb-bgSecondaryL400)',

        bgTertiaryD100: 'var(--c-lib-tb-bgTertiaryD100)',
        bgTertiaryBase: 'var(--c-lib-tb-bgTertiaryBase)',
        bgTertiaryL400: 'var(--c-lib-tb-bgTertiaryL400)',

        bgComplementaryD100: 'var(--c-lib-tb-bgComplementaryD100)',
        bgComplementaryBase: 'var(--c-lib-tb-bgComplementaryBase)',
        bgComplementaryL400: 'var(--c-lib-tb-bgComplementaryL400)',
      },

      // ===================================================
      // TIPOGRAFÍA
      // ===================================================
      fontFamily: {
        'bolivar': ['var(--c-lib-tb-font-family)', 'Bolivar', 'Roboto', 'sans-serif'],
      },
      
      fontSize: {
        // Desktop Headings
        'h1': 'var(--c-lib-tb-fontsizeH1)',      // 2.25rem
        'h2': 'var(--c-lib-tb-fontsizeH2)',      // 2rem
        'h3': 'var(--c-lib-tb-fontsizeH3)',      // 1.75rem
        'h4': 'var(--c-lib-tb-fontsizeH4)',      // 1.5rem
        'h5': 'var(--c-lib-tb-fontsizeH5)',      // 1.25rem
        'h6': 'var(--c-lib-tb-fontsizeH6)',      // 1rem
        
        // Mobile Headings
        'mobile-h1': 'var(--c-lib-tb-fontsizeMobileH1)',   // 1.75rem
        'mobile-h2': 'var(--c-lib-tb-fontsizeMobileH2)',   // 1.5rem
        'mobile-h3': 'var(--c-lib-tb-fontsizeMobileH3)',   // 1.375rem
        'mobile-h4': 'var(--c-lib-tb-fontsizeMobileH4)',   // 1.25rem
        'mobile-h5': 'var(--c-lib-tb-fontsizeMobileH5)',   // 1.125rem
        'mobile-h6': 'var(--c-lib-tb-fontsizeMobileH6)',   // 1rem
        
        // Body, Labels, etc.
        'body': 'var(--c-lib-tb-fontsizeBody)',          // 1rem
        'label': 'var(--c-lib-tb-fontsizeLabel)',        // 0.875rem
        'caption': 'var(--c-lib-tb-fontsizeCaption)',    // 0.75rem
        'button': 'var(--c-lib-tb-fontsizeButton)',      // 1rem
      },

      // ===================================================
      // SOMBRAS
      // ===================================================
      boxShadow: {
        'xs': 'var(--c-lib-tb-shadowXS)',
        's': 'var(--c-lib-tb-shadowS)',
        'm': 'var(--c-lib-tb-shadowM)',
        'l': 'var(--c-lib-tb-shadowL)',
        'xl': 'var(--c-lib-tb-shadowXL)',
      },

      // ===================================================
      // GRADIENTES
      // ===================================================
      backgroundImage: {
        'gradient-primary-d4-d2': 'var(--c-lib-tb-gradientPrimaryD400D200)',
        'gradient-primary-d2-base': 'var(--c-lib-tb-gradientPrimaryD200Base)',
        'gradient-primary-l2-l4': 'var(--c-lib-tb-gradientPrimaryL200L400)',
        
        'gradient-secondary-d4-d2': 'var(--c-lib-tb-gradientSecondaryD400D200)',
        'gradient-secondary-d2-base': 'var(--c-lib-tb-gradientSecondaryD200Base)',
        'gradient-secondary-l2-l4': 'var(--c-lib-tb-gradientSecondaryL200L400)',
        
        'gradient-tertiary-d4-d2': 'var(--c-lib-tb-gradientTertiaryD400D200)',
        'gradient-tertiary-d2-base': 'var(--c-lib-tb-gradientTertiaryD200Base)',
        'gradient-tertiary-l2-l4': 'var(--c-lib-tb-gradientTertiaryL200L400)',
        
        'gradient-complementary-d4-d2': 'var(--c-lib-tb-gradientComplementaryD400D200)',
        'gradient-complementary-d2-base': 'var(--c-lib-tb-gradientComplementaryD200Base)',
        'gradient-complementary-l2-l4': 'var(--c-lib-tb-gradientComplementaryL200L400)',
      }
    },
  },
  plugins: [],
}
