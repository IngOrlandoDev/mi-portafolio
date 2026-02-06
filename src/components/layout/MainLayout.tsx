import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="container mx-auto px-6">{children}</main>

      <Footer />
    </div>
  );
}
