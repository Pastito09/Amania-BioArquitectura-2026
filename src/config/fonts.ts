import {
  Comfortaa,
  Inter,
  Montserrat_Alternates,
} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const titleFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '700'],
});
export const regularFont = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '500'],
});
