import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"

const Layout = ({ children }) => (
  <html>
    <body>
    <Navbar />
    <main>{children}</main>
    <Footer />
    </body>
  </html>
);

export default Layout;
