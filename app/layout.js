import './globals.scss';
import { Open_Sans, Poppins } from "next/font/google";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600','700'],
  variable: '--font-open-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Air",
  description: "Strategic Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
