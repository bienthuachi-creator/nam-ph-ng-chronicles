import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RoyalShell } from "@/components/royal-shell";
import palace from "@/assets/nam-phuong-palace.jpg";
import openingVideo from "@/assets/nam-phuong-opening.webm.asset.json";
import openingVideoMp4 from "@/assets/nam-phuong-opening.mp4.asset.json";
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
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
      <video autoPlay muted loop playsInline preload="auto" poster={palace} aria-label="Khung cảnh cung đình Đại Ung" className="opening-film absolute inset-0 size-full object-cover">
        <source src={openingVideo.url} type="video/webm" />
        <source src={openingVideoMp4.url} type="video/mp4" />
      </video>
      <div className="opening-vignette absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold/40" />
      <div className="absolute inset-0 flex items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-10 lg:px-6 lg:py-7">
        <div className={`w-full max-w-5xl transition-all duration-1000 ${entered ? "pointer-events-none scale-95 opacity-0" : ""}`}>
          <p className="opening-kicker mb-3 font-mono text-[9px] uppercase text-gold sm:mb-4 sm:text-[10px] lg:mb-5 lg:text-xs">Đại Ung · Thịnh Hòa Thập Bát Niên</p>
          <div className="opening-title-frame py-4 md:py-5">
            <span className="opening-glyph block font-display text-sm text-gold">南　方</span>
            <h1 className="opening-title mt-2 whitespace-nowrap font-display text-[clamp(2rem,10vw,4.5rem)] leading-none lg:text-8xl">NAM PHƯƠNG</h1>
          </div>
          <p className="opening-verse mx-auto mt-4 max-w-2xl text-xs italic leading-5 text-paper/90 sm:mt-5 sm:text-sm sm:leading-6 lg:mt-6 lg:text-lg lg:leading-7">“Thiên hạ thái bình chỉ là lớp màn che cho một ván cờ chưa kết thúc.”</p>
          <div className="opening-actions mt-5 flex items-center justify-center gap-4 sm:mt-6 sm:gap-7 lg:mt-7">
            <Button variant="seal" onClick={() => setEntered(true)} className="h-auto w-36 flex-col gap-3 bg-transparent p-0 shadow-none hover:bg-transparent hover:shadow-none">
              <span className="flex size-14 items-center justify-center bg-cinnabar font-display text-lg leading-5 outline outline-2 outline-gold/30">南<br/>方</span><span className="font-mono text-[9px] uppercase">Bước vào Nam Phương</span>
            </Button>
            <div className="hidden h-10 w-px bg-gold/35 sm:block" />
            <Button asChild variant="ghost" className="h-auto w-36 flex-col items-center gap-1 text-paper/60 hover:bg-transparent hover:text-gold"><a href="#hoi-ky"><span className="font-mono text-[9px] uppercase">Chương I</span><span className="font-display text-lg">Đọc hồi ký</span></a></Button>
          </div>
        </div>
        {entered && <div className="w-[min(88vw,24rem)] animate-[scroll-open_1.1s_var(--ease-royal)_both] border-y border-gold/35 bg-paper px-6 py-8 text-ink shadow-2xl md:px-10 md:py-9"><p className="font-display text-xl leading-8 md:text-2xl">“Ngươi đã bước vào Đại Ung.”</p><Button asChild variant="archive" size="sm" className="mt-6 border-cinnabar text-cinnabar hover:bg-cinnabar/10"><a href="#hoi-ky">Mở cuộn thư</a></Button></div>}
      </div>
    </section>
    <section id="hoi-ky" className="px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:gap-12 lg:grid-cols-12 lg:gap-14">
        <article className="lg:col-span-5"><p className="font-mono text-xs uppercase text-cinnabar">Hồi ký · Thịnh Hòa 18</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Đêm ấy,<br/><i className="text-ink/40">Trường An đổ mưa.</i></h2><div className="mt-6 space-y-4 text-sm leading-7 text-ink/65 sm:mt-8 sm:text-base sm:leading-8"><p>Hoàng cung đóng cửa. Tả tướng chết trong phủ. Tông Chính Tự bốc cháy.</p><p>Và một người đã chết từ mười tám năm trước trở về, mang theo mảnh ngọc bội không rõ lai lịch.</p></div><Button asChild variant="archive" className="mt-8 border-cinnabar text-cinnabar hover:bg-cinnabar/10 sm:mt-9"><Link to="/vu-an">Mở hồ sơ Ngọc Bội</Link></Button></article>
        <div className="space-y-10 lg:col-span-7">
          <article className="border-l border-cinnabar/30 bg-card/55 p-5 sm:p-7"><span className="float-right font-display text-6xl text-ink/10 sm:text-7xl">一</span><h3 className="font-display text-2xl sm:text-3xl">Vết mực trên tay áo</h3><p className="my-5 max-w-xl text-sm leading-7 text-ink/60 sm:text-base">Nhân chứng khai đã nhìn thấy một bóng người mặc cẩm y lướt qua hành lang phía Tây vào giờ Hợi.</p><img src={dossier} loading="lazy" width={1152} height={576} alt="Hồ sơ giấy cũ dính vết mực" className="aspect-[2/1] w-full object-cover" /></article>
          <article className="grid gap-6 border-l border-cinnabar/30 bg-card/55 p-5 sm:grid-cols-2 sm:p-7"><img src={seal} loading="lazy" width={816} height={816} alt="Ấn ngọc hoàng thất" className="aspect-square w-full object-cover" /><div className="flex flex-col justify-end"><p className="font-mono text-[10px] uppercase text-gold">Vật chứng số 04</p><h3 className="mt-3 font-display text-2xl sm:text-3xl">Ngọc bội hoàng thất</h3><p className="mt-4 text-sm leading-7 text-ink/60 sm:text-base">Được tìm thấy cạnh thi thể Tả tướng. Lai lịch chưa rõ.</p></div></article>
        </div>
      </div>
    </section>
  </RoyalShell>;
}