import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"

const Layout = ({ children }) => (
  <html>
    <body>
    <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
    </body>
  </html>
);

export default Layout;
