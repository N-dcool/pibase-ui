import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBaaS",
  description: "PostgreSQL Database as a Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background text-foreground">
          <header className="border-b border-border">
            <div className="container h-16 flex items-center justify-between">
              <h1 className="font-bold text-xl">DBaaS</h1>

              <nav className="flex gap-6 text-sm">
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/profile">Profile</a>
              </nav>
            </div>
          </header>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
