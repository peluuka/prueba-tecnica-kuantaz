import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Formulario | Kuantaz",
  description: "Prueba técnica de Kuantaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Background />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
