import "rsuite/dist/rsuite.min.css";
import "./globals.css";

export const metadata = {
  title: "Midjourney Assistant",
  description: "Midjourney creator assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
