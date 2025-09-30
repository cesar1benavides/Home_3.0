export interface FeaturedInsurance {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  buttonText: string;
  imageUrl: string;
  icon: string;
}

export const FEATURED_INSURANCES: { [key: string]: FeaturedInsurance } = {
  autos: {
    id: 'autos',
    title: 'Seguro para Carros',
    subtitle: 'Para cada conductor, tenemos un seguro a la medida',
    features: [
      'Proteja su carro contra daños, robo y responsabilidad civil',
      'Reciba protección las 24 horas con asistencia en carretera',
      'Gestione su seguro desde la app Bolívar Conmigo'
    ],
    buttonText: 'Conozca nuestros planes',
    imageUrl: '/lovable-uploads/7814c6f3-09dd-464f-96c7-50c18f920fed.png',
    icon: 'fas fa-car'
  },
  salud: {
    id: 'salud',
    title: 'Seguro de Salud a su Medida',
    subtitle: 'Es el momento de elegir cómo cuidar su salud y la de su familia.',
    features: [
      'Reciba servicios médicos de alta calidad',
      'Cuente con atención especializada y emergencias',
      'Auxilio económico por incapacidad',
      'Servicio de traslado médico cuando lo necesite'
    ],
    buttonText: 'Conozca nuestros planes',
    imageUrl: '/lovable-uploads/d84c02eb-89c1-402e-8982-d14959653b3d.png',
    icon: 'fas fa-heartbeat'
  },
  vida: {
    id: 'vida',
    title: 'Seguros de Vida',
    subtitle: 'Disfrute productos para cada integrante de su familia',
    features: [
      'Seguro de Vida Inversión: Mientras se cuida, reciba un porcentaje de lo que pagó por su seguro.',
      'Seguro de Vida Integral: Protejemos a su familia mientras cuida de su bolsillo.',
      'Seguro Tranquilidad Adulto Mayor: Lo protegemos desde los 65 años ante una situación inesperada.'
    ],
    buttonText: 'Conozca el portafolio',
    imageUrl: 'assets/Image/seguros_destacados/vida_desktop.webp',
    icon: 'fas fa-shield-heart'
  },
  hogar: {
    id: 'hogar',
    title: 'Seguro de Hogar',
    subtitle: 'Conozca el seguro que se ajusta a las necesidades de su familia.',
    features: [
      'Cubra su hogar ante incendios, lluvias, granizo o vientos fuertes.',
      'Proteja sus bienes contra daños o hurtos dentro y fuera de su hogar.',
      'Cuente con asistencias adicionales cómo: cerrajería, plomería, reparaciones y demás.'
    ],
    buttonText: 'Conozca este seguro',
    imageUrl: 'assets/Image/seguros_destacados/hogar_desktop.webp',
    icon: 'fas fa-home'
  }
};













