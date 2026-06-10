export interface ContactFormData {
  nombre: string;
  telefono?: string;
  email: string;
  interes: "decesos" | "vida" | "mascotas" | "no_se";
  preferencia_contacto: "whatsapp" | "llamada" | "email" | "cita";
  mensaje?: string;
  privacidad: boolean;
}