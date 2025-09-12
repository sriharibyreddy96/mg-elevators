// import "./../styles/globals.css";
// import "./../styles/layout.css";
// import Footer from "./components/footer/Footer";
// import Navbar from "./components/Navbar";
// import Call from "./home/components/call/Call";
// import Whatsapp from "./home/components/whatsapp/Whatsapp";

// export const metadata = {
//   title: "My Next.js App",
//   description: "Next.js App with TypeScript and CSS",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar /> {/* client component */}
//         <main className="main-content">{children}</main>
//         <Whatsapp />
//         <Call />
//         <Footer />
//         {/* <footer className="footer">
//           <p>© 2025 My Next.js App. All rights reserved.</p>
//         </footer> */}
//       </body>
//     </html>
//   );
// }

import "./../styles/globals.css";
import "./../styles/layout.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import Call from "./home/components/call/Call";
import Whatsapp from "./home/components/whatsapp/Whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MG Elevators",
  description: "Elevating Comfort, Safety & Innovation for Homes, Apartments, and Hospitals",
  icons: {
    icon: "/assets/favicon.png",
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
      </body>
    </html>
  );
}
