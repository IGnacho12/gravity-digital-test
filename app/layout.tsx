import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gravity Digital — Apoyo informático donde sea",
  description:
    "Asesoramiento informático, soporte técnico remoto, capacitación personalizada y automatización de tareas para personas y PyMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
