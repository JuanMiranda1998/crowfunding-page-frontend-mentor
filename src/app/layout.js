import { Commissioner } from "next/font/google";
import "./globals.css";

const commisioner = Commissioner({ subsets: ['latin'], weight: ['400','500', '700'], display: 'swap', variable: '--font-cm'})

export const metadata = {
  title: "Crowfunding Page",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={commisioner.variable}>
          {children}
      </body>
    </html>
  );
}
