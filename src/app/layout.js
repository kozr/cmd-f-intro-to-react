export const metadata = {
  title: "Coin Clicker",
  description: "Coin clicker game built with Next.js, for cmd-f 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: '#5DC5D7'}}>
        {children}
      </body>
    </html>
  );
}
