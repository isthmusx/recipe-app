import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./styles/globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400", 
  style: "normal", // or "italic"
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  style: "normal", // or "italic"
});


export const metadata = {
  title: "Crave",
  description: "All your favorite recipes in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.className} ${sourceSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
