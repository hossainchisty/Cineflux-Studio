import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Process from './components/Process';
import RecentWork from './components/RecentWork';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background-dark">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <RecentWork />
      <Process />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  )
}