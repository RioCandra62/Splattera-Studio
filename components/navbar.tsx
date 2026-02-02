export default function Navbar() {
  return (
    <div className="relative flex items-center h-20 px-8 bg-[#2A1F1A] border-b border-[#4A352C]">
      {/* LEFT (optional nav) */}
      <div className="flex-1">{/* kosong dulu biar clean */}</div>

      {/* CENTER LOGO */}
      <div className="absolute left-1/2 -translate-x-1/2 text-center">
        <p className="text-2xl tracking-wide text-[#F3EDE7]">
          STISplat Studio
        </p>
        <p className="text-[11px] tracking-widest text-[#CBB8A9] uppercase">
          by Survey Teknologi Indonesia
        </p>
      </div>

      {/* RIGHT (optional nav) */}
      <div className="flex-1 flex justify-end">
        {/* nanti bisa isi Catalog / Contact */}
      </div>
    </div>
  );
}
