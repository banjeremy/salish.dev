import Image from 'next/image';
import portraitImage from '@/images/portrait.jpg';
import { Container } from '@/components/Container';
import AboutMe from '@/components/AboutMe.mdx';

export default function Home() {
  return (
    <Container className="mt-8 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-[300px]">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl backdrop-blur object-cover contrast-125"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&rsquo;m Jeremy Jones. I build fine apps for the web and iOS.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <AboutMe />
          </div>
        </div>
      </div>
    </Container>
  );
}
