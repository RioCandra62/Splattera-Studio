"use client";

type Props = {
  filter: string;
  data: any[];
};

export default function FilterPage({ filter, data }: Props) {

  const layoutPattern = [
    "hero","tall","normal","wide","wide",
    "normal","normal","normal","normal","wide","normal",
  ];

  const getLayout = (index: number) => {
    return layoutPattern[index % layoutPattern.length];
  };
  return (
    <>
      <h2 className="text-xl md:text-2xl pt-12 px-12">{filter.toUpperCase()}</h2>

      <section
        className="
        px-6 md:px-16
        py-10 md:py-12
        grid gap-10
        md:grid-cols-3
      "
      >
        {data.map((item, index) => {
          const layout = getLayout(index);

          return (
            <a
              key={item.id}
              href={`/detail/${encodeURIComponent(item.name)}`}
              className={`
                ${layout === "hero" && "md:col-span-2"}
                ${layout === "wide" && "md:col-span-2"}
              `}
            >
              <h2 className="text-xl md:text-2xl mb-6">{item.name}</h2>

              <p className="text-xs mb-2">ART MARKET • 22 JUN 2024</p>

              {/* IMAGE */}
              <div className="relative group overflow-hidden">

                <img
                  src={item.thumbnail}
                  className={`
                    w-full object-cover mb-4 bg-black
                    transition duration-500 group-hover:scale-105
                    ${
                      layout === "hero"
                        ? "h-[420px]"
                        : layout === "tall"
                        ? "h-[260px]"
                        : layout === "wide"
                        ? "md:h-[360px] h-[260px]"
                        : "h-[260px]"
                    }
                  `}
                />

                {/* HOVER OVERLAY */}
                <div
                  className="
                  absolute inset-0
                  bg-black/0
                  group-hover:bg-black/60
                  transition duration-500
                  flex items-center justify-center
                "
                >
                  <h3
                    className="
                    text-white text-lg md:text-2xl
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                    text-center px-4
                    tracking-wide uppercase
                  "
                  >
                    {item.name}
                  </h3>
                </div>

              </div>

              {/* DESCRIPTION */}
              <h3
                className="
                text-lg
                md:text-2xl
                leading-snug
              "
              >
                A historic landmark that reflects Makassar’s rich cultural
                heritage, where timeless architecture preserves stories of the
                city’s past.
              </h3>
            </a>
          );
        })}
      </section>
    </>
  );
}
