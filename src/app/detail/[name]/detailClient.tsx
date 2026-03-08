"use client";

export default function DetailPage({ project, tags }: any) {
  if (!project) {
    return (
      <div className="w-full h-[90vh] flex justify-center items-center">
        <p className="text-[32px]">Loading Project...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-neutral-50 text-neutral-900">
      {/* ===== HERO VIEWER ===== */}
      <section className="relative w-full h-[85vh] bg-black">
        <iframe src={project.link} className="w-full h-full" allowFullScreen />

        {/* Overlay Title */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-10">
          <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-wide">
            {project.name}
          </h1>
          <p className="text-neutral-300 mt-2">Digital Spatial Capture</p>
        </div>
      </section>

      {/* ===== DETAILS AREA ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Tags */}
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Tags</h2>
            <div className="flex flex-row gap-2">
              {tags.map((tx: any) => {
                return (
                  <div className="bg-sky-500 rounded-md shadow-md px-2 py-1 text-white">
                    {tx.name}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Description */}
          <div className="">
            <h2 className="text-3xl font-semibold">Description</h2>

            <p className="text-neutral-600 leading-relaxed text-lg">
              {project.desc}
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6 h-fit border">
          <h3 className="text-xl font-semibold">Scan Information</h3>

          <div className="flex flex-col gap-3 text-sm text-neutral-600">
            <div>
              <p className="font-medium text-neutral-900">Method</p>
              <span className="inline-block mt-1 px-3 py-1 rounded-full bg-sky-100 text-sky-700">
                {project.methods}
              </span>
            </div>

            <div>
              <p className="font-medium text-neutral-900">Platform</p>
              <p>XGRIDS PortalCam</p>
            </div>

            <div>
              <p className="font-medium text-neutral-900">Category</p>
              <p>Architecture Scan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
