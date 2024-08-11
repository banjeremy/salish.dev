import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import ShaderCanvas from '@/components/ShaderCanvas';
import fragShader from '@/components/frag.glsl';
import vertShader from '@/components/vert.glsl';

const ShaderTest = () => {
  return (
    <ShaderCanvas
      className="-z-10 w-full h-full opacity-10 absolute"
      width={1}
      height={1}
      fragShader={fragShader}
      vertShader={vertShader}
    />
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
}
