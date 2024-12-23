import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface BlogItem {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  name: string;
}