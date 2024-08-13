import { ContainerInner, ContainerOuter } from '@/components/Container';

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t pb-16 pt-10 border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-200">
                {/* {navigationLinks.map(({ title, href }) => (
                  <NavLink key={href} href={href}>
                    {title}
                  </NavLink>
                ))} */}
              </div>
              {/* <p className="text-sm ext-zinc-500">
                &copy; {new Date().getFullYear()} {companyName}. All rights
                reserved.
              </p> */}
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
