import { Commissioner } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { GlobalProvider } from "./context/global";

const commisioner = Commissioner({ subsets: ['latin'], weight: ['400','500', '700'], display: 'swap', variable: '--font-cm'})

export const metadata = {
  title: "Crowfunding Page",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={commisioner.variable}>
          <GlobalProvider>
            <Header />
            {children}
          </GlobalProvider>
      </body>
    </html>
  );
}
