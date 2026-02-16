export interface MenuItem {
  id: string;
  name: string; // The creative name (e.g., "Tilda Swinton")
  description?: string; // The ingredients
  price: number;
  tags?: string[];
  isNew?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
  addons?: { name: string; price: number }[];
  note?: string;
}

export interface OpeningHours {
  weekdays: string;
  weekends: string;
}