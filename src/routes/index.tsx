import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RoyalShell } from "@/components/royal-shell";
import palace from "@/assets/nam-phuong-palace.jpg";
import dossier from "@/assets/ancient-dossier.jpg";
import seal from "@/assets/jade-seal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Nam Phương — Đại Ung · Thịnh Hòa" }, { name: "description", content: "Bước vào Đại Ung năm Thịnh Hòa thứ mười tám, nơi một bí mật hoàng thất vừa thức tỉnh." },
    { property: "og:title", content: "Nam Phương — Đại Ung · Thịnh Hòa" }, { property: "og:description", content: "Thiên hạ thái bình chỉ là lớp màn che cho một ván cờ chưa kết thúc." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);
  return <RoyalShell>
    <section className="relative min-h-[92svh] overflow-hidden bg-ink text-paper">
      <img src={palace} width={1920} height={1080} alt="Kinh thành Đại Ung trong đêm tuyết" className="absolute inset-0 size-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/15 to-ink" />
      <div className="cloud-pattern absolute inset-x-0 top-0 h-16 opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className={`max-w-5xl transition-all duration-1000 ${entered ? "opacity-0 scale-95 pointer-events-none" : "animate-[fade-up_1s_var(--ease-royal)_both]"}`}>
          <p className="mb-7 font-mono text-[10px] uppercase text-gold md:text-xs">Đại Ung · Thịnh Hòa Thập Bát Niên</p>
          <h1 className="font-display text-6xl leading-none md:text-9xl lg:text-[10rem]">NAM PHƯƠNG</h1>
          <p className="mx-auto mt-8 max-w-2xl text-sm italic leading-7 text-paper/75 md:text-lg">“Thiên hạ thái bình chỉ là lớp màn che cho một ván cờ chưa kết thúc.”</p>
          <div className="mt-12 flex flex-col items-center justify-center gap-7 sm:flex-row sm:gap-12">
            <Button variant="seal" onClick={() => setEntered(true)} className="h-auto flex-col gap-3 bg-transparent p-0 shadow-none hover:bg-transparent hover:shadow-none">
              <span className="flex size-20 items-center justify-center bg-cinnabar font-display text-2xl leading-6 outline outline-4 outline-gold/20">南<br/>方</span><span className="font-mono text-[10px] uppercase">Bước vào Nam Phương</span>
            </Button>
            <div className="hidden h-px w-24 bg-gold/35 sm:block" />
            <Button asChild variant="ghost" className="h-auto flex-col items-start text-paper/60 hover:bg-transparent hover:text-gold"><a href="#hoi-ky"><span className="font-mono text-[10px] uppercase">Chương I</span><span className="font-display text-xl">Đọc hồi ký</span></a></Button>
          </div>
        </div>
        {entered && <div className="animate-[scroll-open_1.1s_var(--ease-royal)_both] bg-paper px-8 py-12 text-ink shadow-2xl md:px-20 md:py-16"><p className="font-display text-2xl leading-10 md:text-4xl">“Ngươi đã bước vào Đại Ung.”</p><Button asChild variant="archive" className="mt-8 border-cinnabar text-cinnabar hover:bg-cinnabar/10"><a href="#hoi-ky">Mở cuộn thư</a></Button></div>}
      </div>
    </section>
    <section id="hoi-ky" className="px-6 py-20 md:px-14 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <article className="lg:col-span-5"><p className="font-mono text-xs uppercase text-cinnabar">Hồi ký · Thịnh Hòa 18</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">Đêm ấy,<br/><i className="text-ink/40">Trường An đổ mưa.</i></h2><div className="mt-8 space-y-4 leading-8 text-ink/65"><p>Hoàng cung đóng cửa. Tả tướng chết trong phủ. Tông Chính Tự bốc cháy.</p><p>Và một người đã chết từ mười tám năm trước trở về, mang theo mảnh ngọc bội không rõ lai lịch.</p></div><Button asChild variant="archive" className="mt-9 border-cinnabar text-cinnabar hover:bg-cinnabar/10"><Link to="/vu-an">Mở hồ sơ Ngọc Bội</Link></Button></article>
        <div className="space-y-10 lg:col-span-7">
          <article className="border-l border-cinnabar/30 bg-card/55 p-7"><span className="float-right font-display text-7xl text-ink/10">一</span><h3 className="font-display text-3xl">Vết mực trên tay áo</h3><p className="my-5 max-w-xl leading-7 text-ink/60">Nhân chứng khai đã nhìn thấy một bóng người mặc cẩm y lướt qua hành lang phía Tây vào giờ Hợi.</p><img src={dossier} loading="lazy" width={1152} height={576} alt="Hồ sơ giấy cũ dính vết mực" className="aspect-[2/1] w-full object-cover" /></article>
          <article className="grid gap-6 border-l border-cinnabar/30 bg-card/55 p-7 sm:grid-cols-2"><img src={seal} loading="lazy" width={816} height={816} alt="Ấn ngọc hoàng thất" className="aspect-square w-full object-cover" /><div className="flex flex-col justify-end"><p className="font-mono text-[10px] uppercase text-gold">Vật chứng số 04</p><h3 className="mt-3 font-display text-3xl">Ngọc bội hoàng thất</h3><p className="mt-4 leading-7 text-ink/60">Được tìm thấy cạnh thi thể Tả tướng. Lai lịch chưa rõ.</p></div></article>
        </div>
      </div>
    </section>
  </RoyalShell>;
}