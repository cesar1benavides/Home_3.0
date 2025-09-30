export interface Product {
  id: number;
  title: string;
  description: string;
  keywords: string[];
  isHighlighted: boolean;
  category: string;
  imageUrl?: string;
  price?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Seguro de Auto Todo Riesgo",
    description: "Protección completa para tu vehículo con cobertura amplia",
    keywords: ["auto", "carro", "vehículo", "seguro", "todo riesgo", "protección"],
    isHighlighted: true,
    category: "autos",
    price: "Desde $150.000/mes"
  },
  {
    id: 2,
    title: "Seguro de Salud Integral",
    description: "Cobertura médica completa para ti y tu familia",
    keywords: ["salud", "médico", "hospital", "cobertura", "familia", "atención"],
    isHighlighted: true,
    category: "salud",
    price: "Desde $200.000/mes"
  },
  {
    id: 3,
    title: "Seguro de Vida",
    description: "Protección financiera para tu familia",
    keywords: ["vida", "familia", "protección", "financiera", "futuro"],
    isHighlighted: false,
    category: "vida",
    price: "Desde $80.000/mes"
  },
  {
    id: 4,
    title: "Seguro de Hogar",
    description: "Protege tu casa y tus bienes más valiosos",
    keywords: ["hogar", "casa", "bienes", "protección", "inmueble"],
    isHighlighted: false,
    category: "hogar",
    price: "Desde $120.000/mes"
  },
  {
    id: 5,
    title: "Seguro ARL",
    description: "Protección laboral para tus empleados",
    keywords: ["arl", "laboral", "empleados", "trabajo", "riesgos"],
    isHighlighted: false,
    category: "arl",
    price: "Desde $50.000/mes"
  },
  {
    id: 6,
    title: "Seguro para Pymes",
    description: "Protección integral para tu negocio",
    keywords: ["pymes", "negocio", "empresa", "protección", "digital"],
    isHighlighted: true,
    category: "pymes",
    price: "Desde $300.000/mes"
  },
  {
    id: 7,
    title: "Seguro de Moto",
    description: "Protección para tu motocicleta",
    keywords: ["moto", "motocicleta", "vehículo", "protección"],
    isHighlighted: false,
    category: "autos",
    price: "Desde $80.000/mes"
  },
  {
    id: 8,
    title: "Seguro de Viaje",
    description: "Protección durante tus viajes nacionales e internacionales",
    keywords: ["viaje", "turismo", "nacional", "internacional", "protección"],
    isHighlighted: false,
    category: "viajes",
    price: "Desde $30.000/viaje"
  }
];














