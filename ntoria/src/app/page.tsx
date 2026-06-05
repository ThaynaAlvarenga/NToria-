
import { Hero }    from "./(sections)/Hero";
import { About }   from "./(sections)/About";
import { Services } from "./(sections)/Services";
import { Contact } from "./(sections)/Contact";
import { Footer }  from "./(sections)/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}