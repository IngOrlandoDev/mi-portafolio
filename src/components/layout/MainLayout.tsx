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

      <main className="">{children}</main>

      <Footer />
    </div>
  );
}
