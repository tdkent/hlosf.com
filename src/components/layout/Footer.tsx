export default function Footer() {
  return (
    <footer className="h-24 pt-6 pb-6 border-t border-slate-300 bg-slate-50 font-light text-center text-sm dark:bg-background">
      <span>© {new Date().getFullYear()}. All rights reserved.</span>
    </footer>
  );
}
