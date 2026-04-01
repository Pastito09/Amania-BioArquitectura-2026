import Navbar from '@/components/ui/navbar/Navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <div className='mt-24 flex-1'>{children}</div>
    </main>
  );
}
