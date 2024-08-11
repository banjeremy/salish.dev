import { Container } from '@/components/Container';

export function Header() {
  return (
    <header className="flex flex-row justify-end items-end">
      <Container className="h-16 pt-6 w-full text-white">
        <nav>
          <ul className="flex flex-row space-x-6 justify-end">
            <li>About</li>
            <li>Blog</li>
            <li>Projects</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
