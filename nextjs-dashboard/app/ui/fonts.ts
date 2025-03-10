// /app/ui/fonts.ts
import { Inter, Lusitana } from 'next/font/google';

// Load Inter for primary font
export const inter = Inter({ subsets: ['latin'] });

// Load Lusitana for secondary font
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });
