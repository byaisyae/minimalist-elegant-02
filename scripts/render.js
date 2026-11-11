/* Menyusun seluruh halaman undangan ke #app. */
$("#app").innerHTML =
  `<header id="home" class="relative min-h-screen grid place-items-center text-center px-5 bg fx" style="${ov("rgba(250,246,238,.6)", "rgba(250,246,238,.92)")}"><div data-p=".25">
<p class="rv tracking-[.45em] text-xs text-white [text-shadow:0_2px_14px_rgba(0,0,0,.45)]">THE WEDDING OF</p>
<h1 class="rz font-script text-7xl sm:text-9xl lg:text-7xl text-white my-6 [text-shadow:0_2px_14px_rgba(0,0,0,.45)]" style="--d:.15s">${B.nick} &amp; ${G.nick}</h1>
<p class="rv font-serif tracking-[.3em] text-lg text-white [text-shadow:0_2px_14px_rgba(0,0,0,.45)]" style="--d:.3s">${d0.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" }).replaceAll("/", ".")}</p>
<div id="cd" class="rv mt-10 flex justify-center gap-2 sm:gap-4 lg:gap-2" style="--d:.45s"></div></div></header>` +
  sec(
    "mempelai",
    C.text.greeting,
    C.text.intro,
    `<div class="-mx-5 sm:-mx-6 grid md:grid-cols-2 lg:grid-cols-1 gap-px">${prof(B, "rl", "l")}${prof(G, "rr", "r")}</div>`,
    "",
    "bg-cream-200",
  ) +
  `<section class="relative py-24 px-6 bg fx" style="${bgs(C.bg.quote)}"><div data-p=".12" class="rz max-w-2xl mx-auto text-center"><p class="font-serif italic text-lg sm:text-2xl leading-relaxed text-ink-900">"${C.text.quote}"</p><p class="mt-5 tracking-widest text-xs text-ink-500">${C.text.quoteSource}</p></div></section>` +
  sec(
    "acara",
    "Save The Date",
    `<b class="text-ink-900 font-semibold tracking-wide">${fmt.toUpperCase()}</b>`,
    `<div class="grid md:grid-cols-2 lg:grid-cols-1 gap-8">${C.events.map(evCard).join("")}</div>
 ${C.live ? ` <div class="rv mt-6 rounded-3xl border border-ac/30 bg-white/70 backdrop-blur-sm p-8"><h3 class="font-serif text-xl text-ink-900">Live Streaming</h3><p class="text-sm my-3">Bagi tamu yang berhalangan hadir, silakan saksikan acara melalui link berikut:</p>${btn(C.live, "Live Streaming")}</div>` : ""}`,
    bgs(C.bg.date, "rgba(250,246,238,.9)"),
  ) +
  sec(
    "galeri",
    "Our Gallery",
    "",
    `<div class="rv -mx-5 sm:-mx-6"><div id="galMain" class="gal-view relative overflow-hidden aspect-[8/9] select-none"><div id="galTrack" class="gal-track flex h-full">${C.gallery.map((g) => `<div class="gal-slide ph flex-none w-full h-full cursor-zoom-in"><img src="${g}" alt="Galeri" loading="lazy" decoding="async" draggable="false" onerror="this.remove()" class="gl w-full h-full object-cover"></div>`).join("")}</div></div><div id="galThumbs" class="gal-scroll relative flex gap-2 sm:gap-3 overflow-x-auto mt-2 sm:mt-3 px-2">${C.gallery.map((g, i) => `<button type="button" aria-label="Foto ${i + 1}" class="gal-th ph flex-none w-24 sm:w-28 aspect-[4/3] rounded-lg overflow-hidden"><img src="${g}" alt="" loading="lazy" decoding="async" onerror="this.remove()" class="w-full h-full object-cover"></button>`).join("")}</div></div>`,
    "",
    "bg-cream-200",
  ) +
  (C.story && C.story.length
    ? sec("cerita", "Our Story", "", storyCard())
    : "") +
  sec(
    "rsvp",
    "Rsvp &amp; Ucapan Doa",
    "Konfirmasi kehadiran dan sampaikan doa restu untuk kedua mempelai.",
    `<form id="f" class="rz text-left max-w-md mx-auto space-y-3">
 <input name="web" tabindex="-1" autocomplete="off" aria-hidden="true" class="hidden">
 <input name="n" required minlength="2" placeholder="Nama" class="w-full px-4 py-3 rounded-xl bg-white/80 text-ink-900 border border-ac/30 outline-none focus:border-ac">
 <div class="grid grid-cols-2 gap-3"><select name="k" class="px-4 py-3 rounded-xl bg-white/80 border border-ac/30"><option>Hadir</option><option>Tidak hadir</option><option>Masih ragu</option></select>
 <select name="j" class="px-4 py-3 rounded-xl bg-white/80 border border-ac/30 disabled:opacity-40 disabled:cursor-not-allowed"><option>1 orang</option><option>2 orang</option><option>3 orang</option><option>4 orang</option></select></div>
 <textarea name="m" required rows="3" placeholder="Ucapan &amp; doa restu" class="w-full px-4 py-3 rounded-xl bg-white/80 text-ink-900 border border-ac/30 outline-none focus:border-ac"></textarea>
 <button class="w-full py-3 rounded-xl bg-ac text-white font-semibold hover:bg-ac-dark transition">Kirim</button></form>
 <div id="cnt" class="mt-10 flex justify-center gap-6 text-sm"></div><div id="wl" class="mt-6 max-w-xl mx-auto space-y-3 text-left"></div><nav id="pgn" aria-label="Halaman ucapan" class="mt-5 flex flex-wrap justify-center items-center gap-1.5 text-sm"></nav>`,
    bgs(C.bg.foot, "rgba(250,246,238,.92)"),
  ) +
  ((C.gifts && C.gifts.length) || (C.giftAddress && C.giftAddress.addr)
    ? sec(
        "hadiah",
        "Wedding Gift",
        "Tanpa mengurangi rasa hormat, bagi tamu yang ingin mengirimkan hadiah kepada kedua mempelai dapat melalui:",
        `<div class="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 max-w-3xl mx-auto">${C.gifts.map((g, i) => `<div class="rl bank-card relative overflow-hidden rounded-[26px] p-5 md:p-6 shadow-[0_20px_45px_rgba(63,52,42,0.18)] border border-white/60 text-left min-h-[210px] flex flex-col justify-between" style="background:linear-gradient(135deg,#fffdf8 0%,#efe5d2 45%,#f8f2e6 100%)"><div class="absolute -right-16 -top-16 w-64 h-64 bg-gradient-to-br from-[#d9c9a8]/50 to-transparent rotate-45 rounded-3xl pointer-events-none"></div><div class="absolute right-0 bottom-0 w-28 h-28 pointer-events-none" style="background-image:radial-gradient(rgba(140,117,83,.35) 1px,transparent 1px);background-size:7px 7px;-webkit-mask-image:linear-gradient(to top left,black 20%,transparent 70%);mask-image:linear-gradient(to top left,black 20%,transparent 70%)"></div><div class="relative z-10 flex items-start justify-between"><svg width="46" height="36" viewBox="0 0 48 38" fill="none" aria-hidden="true"><defs><linearGradient id="chip${i}" x1="0" y1="0" x2="48" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#f7e8b0"/><stop offset=".5" stop-color="#d4af5a"/><stop offset="1" stop-color="#b8860b"/></linearGradient></defs><rect x="1" y="1" width="46" height="36" rx="8" fill="url(#chip${i})" stroke="#a97a1f"/><line x1="16" y1="1" x2="16" y2="37" stroke="#a97a1f"/><line x1="32" y1="1" x2="32" y2="37" stroke="#a97a1f"/><line x1="1" y1="12" x2="47" y2="12" stroke="#a97a1f"/><line x1="1" y1="25" x2="47" y2="25" stroke="#a97a1f"/><path d="M16 12Q24 19 32 12" stroke="#a97a1f" fill="none"/><path d="M16 25Q24 18 32 25" stroke="#a97a1f" fill="none"/></svg><img src="img/bca.svg" alt="${g.bank}" class="w-20 h-20 object-contain"></div><div class="relative z-10 flex items-end justify-between gap-3 mt-8"><div class="min-w-0"><p class="font-bold text-gray-800 text-sm md:text-base mb-1 truncate">${g.name.toUpperCase()}</p><p class="font-extrabold text-gray-900 text-lg md:text-2xl tracking-wide font-mono">${g.no}</p></div><button data-copy="${g.no}" class="cp flex-shrink-0 inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-700 text-white text-xs md:text-sm font-semibold px-3.5 py-2.5 rounded-xl transition-all shadow-md" aria-label="Salin nomor ${g.bank} ${g.name}"><svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"/></svg>Copy</button></div></div>`).join("")}
 ${C.giftAddress && C.giftAddress.addr ? `<div class="sm:col-span-2 lg:col-span-1 w-full max-w-xl mx-auto space-y-4"><div class="rr rounded-3xl p-7 border border-ac/30 bg-white/70"><p class="font-serif text-xl text-ink-900">Alamat Pengiriman Hadiah</p><p class="text-sm my-3 leading-relaxed"><b class="text-ink-900">${C.giftAddress.name}</b><br>${C.giftAddress.addr}</p><button data-copy="${C.giftAddress.name}, ${C.giftAddress.addr}" class="cp px-5 py-2 rounded-full bg-ac text-white text-sm font-medium">Salin</button></div><div class="rr text-center"><a id="giftWa" href="https://wa.me/${B.wa}" target="_blank" rel="noopener" class="inline-block px-6 py-2.5 rounded-full bg-ac text-white text-sm font-medium">Konfirmasi Pengiriman Hadiah via WhatsApp</a></div></div>` : ""}</div>`,
        "",
        "bg-cream-200",
      )
    : "") +
  `<footer class="relative py-28 px-6 text-center bg fx" style="${bgs(C.bg.foot, "rgba(250,246,238,.84)")}"><div class="rz max-w-xl mx-auto"><p class="text-sm">Kami yang berbahagia,</p><h2 class="font-script text-6xl sm:text-7xl lg:text-6xl text-ink-900 my-4">${B.nick} &amp; ${G.nick}</h2><p class="text-sm leading-relaxed">${C.text.closing}</p></div><div class="relative mt-16 px-6 text-xs tracking-wide text-ink-500 space-y-1.5"><p>${C.site.copyright}</p><p class="italic">Designed with love by : <a href="${C.site.designer.url}" target="_blank" rel="noopener" class="hover:underline">${C.site.designer.name}</a></p><p class="italic">Our Instagram : <a href="${C.site.instagram.url}" target="_blank" rel="noopener" class="hover:underline">${C.site.instagram.handle}</a></p><div class="flex justify-center gap-3 pt-3"><a href="${C.site.designer.url}" target="_blank" rel="noopener" aria-label="Website saevitation" class="w-10 h-10 rounded-full border border-ink-500/30 inline-flex items-center justify-center hover:bg-ink-500/10 transition"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg></a><a href="${C.site.instagram.url}" target="_blank" rel="noopener" aria-label="Instagram saevitation" class="w-10 h-10 rounded-full border border-ink-500/30 inline-flex items-center justify-center hover:bg-ink-500/10 transition"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a></div></div></footer><div class="h-20"></div>`;
