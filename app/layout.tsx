import "./../styles/globals.css";
import "./../styles/layout.css";
import ContactFormModal from "./components/contactformmodal/ContactFormModal";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import Call from "./home/components/call/Call";
import Whatsapp from "./home/components/whatsapp/Whatsapp";
import type { Metadata } from "next";
import withBasePath from "./utils/withBasePath"; // Ensure this exists
import Broucher from "./home/components/Broucher/Broucher";

export const metadata: Metadata = {
  title: "MG Elevators",
  description:
    "Elevating Comfort, Safety & Innovation for Homes, Apartments, and Hospitals",
  icons: {
    icon: withBasePath("./assets/favicon.png"), // Updated with base path
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
        <Broucher />
        <Footer />
        <ContactFormModal />
      </body>
    </html>
  );
}
