import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevTrack AI",
  description: "Plataforma de gestão de projetos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
