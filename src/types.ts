export type TabType = 
  | 'home' 
  | 'tratamentos' 
  | 'sobre' 
  | 'estrutura' 
  | 'localizacao' 
  | 'agendamento' 
  | 'faq';

export interface Treatment {
  id: string;
  name: string;
  category: 'implantodontia' | 'ortodontia' | 'estetica' | 'clinica' | 'cirurgia';
  shortDescription: string;
  fullDescription: string;
  indications: string[];
  benefits: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  highlight?: boolean;
  durationApprox: string;
}

export interface Dentist {
  name: string;
  cro: string;
  role: string;
  specialties: string[];
  bio: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  treatment: string;
  preferredPeriod: 'manha' | 'tarde' | 'sabado' | 'qualquer';
  preferredDate?: string;
  isFirstVisit: 'sim' | 'nao';
  notes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  name: string;
  neighborhood: string;
  text: string;
  treatment: string;
  rating: number;
}
