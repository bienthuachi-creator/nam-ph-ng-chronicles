import { Link, useRouterState } from "@tanstack/react-router";
import { LogIn, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const items = [
  ["01", "Trang chủ", "/"], ["02", "Thiên hạ", "/thien-ha"],
  ["03", "Hoàng thành", "/hoang-thanh"], ["04", "Thế lực", "/the-luc"],
  ["05", "Nhân vật", "/nhan-vat"], ["06", "Biên niên sử", "/bien-nien-su"],
  ["07", "Mật báo", "/mat-bao"], ["08", "Hồ sơ vụ án", "/vu-an"],
] as const;

export function RoyalShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-paper text-ink archive-texture">
      <Button variant="archive" size="icon" aria-label="Mở thư khố" onClick={() => setOpen(true)} className="fixed left-4 top-4 z-50 lg:hidden"><Menu /></Button>
      {open && <button aria-label="Đóng nền menu" className="fixed inset-0 z-40 bg-ink/70 lg:hidden" onClick={() => setOpen(false)} />}
      <aside className={`group fixed inset-y-0 left-0 z-50 flex w-64 flex-col overflow-hidden border-r border-gold/20 bg-ink text-paper transition-transform duration-500 lg:w-20 lg:hover:w-64 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex h-24 shrink-0 items-center border-b border-gold/15 px-6">
          <div className="flex size-8 shrink-0 items-center justify-center border border-gold font-display text-lg text-gold">南</div>
          <span className="ml-4 whitespace-nowrap font-display text-gold transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100">THƯ KHỐ</span>
          <Button variant="ghost" size="icon" aria-label="Đóng thư khố" className="ml-auto text-paper lg:hidden" onClick={() => setOpen(false)}><X /></Button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 py-5">
          {items.map(([number, label, to]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)} className={`flex h-12 items-center px-6 transition-colors ${pathname === to ? "bg-gold/10 text-gold" : "text-paper/55 hover:text-gold"}`}>
               <span className="w-8 shrink-0 font-mono text-[11px]">{number}</span><span className="ml-4 whitespace-nowrap text-xs uppercase transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100">{label}</span>
            </Link>
          ))}
        </nav>
        <div className="border-t border-gold/15 p-5"><Button variant="archive" className="w-full justify-start overflow-hidden"><LogIn /><span className="whitespace-nowrap transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100">Đăng nhập</span></Button></div>
      </aside>
      <main className="min-h-screen lg:ml-20">{children}</main>
      <div className="pointer-events-none fixed inset-y-0 right-0 z-50 w-1 bg-gold/20" />
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <header className="border-b border-gold/25 px-5 pb-10 pt-24 sm:px-8 md:px-10 md:pb-12 lg:px-14 lg:pt-16"><div className="mx-auto max-w-6xl"><p className="mb-3 font-mono text-[11px] uppercase text-cinnabar sm:mb-4 sm:text-xs">{eyebrow}</p><h1 className="break-words font-display text-4xl leading-tight sm:text-5xl lg:text-7xl">{title}</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65 sm:mt-5 sm:text-base sm:leading-8">{children}</p></div></header>;
}