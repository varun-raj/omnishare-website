import { LucideIcon } from 'lucide-react';

export interface Provider {
  name: string;
  view: boolean;
  upload: boolean;
  password: boolean;
  exif: 'Full' | 'Partial';
  video: boolean;
  color: string;
  icon?: LucideIcon;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Persona {
  role: string;
  description: string;
  icon: LucideIcon;
}