import "./../styles/globals.css";
import "./../styles/layout.css";
import ContactFormModal from "./components/contactformmodal/ContactFormModal";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import Call from "./home/components/call/Call";
import Whatsapp from "./home/components/whatsapp/Whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MG Elevators",
  description: "Elevating Comfort, Safety & Innovation for Homes, Apartments, and Hospitals",
  icons: {
    icon: "./assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* client component */}
        <main className="main-content">{children}</main>
        <Whatsapp />
        <Call />
        <Footer />
        <ContactFormModal />
      </body>
    </html>
  );
}
