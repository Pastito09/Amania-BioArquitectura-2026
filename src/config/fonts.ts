import {
  Montserrat as MontserratFont,
  Inter,
} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const montserrat = MontserratFont({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
