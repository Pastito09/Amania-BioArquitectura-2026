import Footer from '@/components/ui/footer/Footer';
import Navbar from '@/components/ui/navbar/Navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <div className='px-0 sm:px-10 mt-24 flex-1'>{children}</div>
      <Footer />
    </main>
  );
}
