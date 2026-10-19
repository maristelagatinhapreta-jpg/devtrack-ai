import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevTrack AI",
  description: "Plataforma inteligente para acompanhar sua evolução",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
  