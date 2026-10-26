import "./globals.css";
import { AuthProvider } from "@/lib/auth-context"; //
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "SGA · Gestão de Estoque",
  description: "Sistema de gestão de estoque e produção",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}