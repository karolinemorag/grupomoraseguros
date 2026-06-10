export type AdapterStep = 1 | 2 | 3 | 4;

export type QuienOption =
  | "yo_mismo"
  | "mi_pareja"
  | "mis_hijos"
  | "mis_padres";

export type QueProtegerOption =
  | "gastos_funerarios"
  | "futuro_familia"
  | "mascotas"
  | "tranquilidad";

export interface AdvisorState {
  currentStep: AdapterStep;
  paraQuien: QuienOption | null;
  queProteger: QueProtegerOption | null;
}

export interface Recommendation {
  title: string;
  description: string;
  suggestedProducts: string[];
  ctaLabel: string;
  ctaHref: string;
}