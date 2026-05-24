export const metadata = {
  title: "JM Garage",
  description: "BMW G80 M3 Gallery",
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
