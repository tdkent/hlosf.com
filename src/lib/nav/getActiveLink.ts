export function getActiveLink(pathname: string, href: string) {
  if (pathname === "/" || href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}
