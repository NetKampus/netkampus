// constants/categories.ts
import eventsAnimation from "@/public/animations/Events.json";
import groupsAnimation from "@/public/animations/Groups.json";

export interface Category {
  id: string;
  label: string;
  icon: unknown;
}

export const CategoriesTabs: Category[] = [
  {
    id: "events",
    label: "Eventos",
    icon: eventsAnimation,
  },
  {
    id: "groups",
    label: "Grupos",
    icon: groupsAnimation,
  },
];


export interface SearchField {
  id: string;
  label: string;
  placeholder: string;
}

export const SEARCH_BAR_CONFIG: Record<string, SearchField[]> = {
  events: [
    { id: "donde", label: "Dónde", placeholder: "Explora lugares" },
    { id: "fechas", label: "Fechas", placeholder: "Agrega fechas" },
    { id: "modalidad", label: "Modalidad", placeholder: "Cualquier modalidad" },
  ],
  groups: [
    { id: "buscar", label: "Buscar", placeholder: "Nombre del grupo" },
    { id: "donde", label: "Dónde", placeholder: "Facultad, campus.." },
    { id: "estado", label: "Estado", placeholder: "Cualquier estado" },
  ],
};