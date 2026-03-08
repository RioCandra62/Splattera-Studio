import { getScanData, getFilter } from "@/lib/neon/scan";
import DetailPage from "./detailClient";

export async function generateStaticParams() {
  const data = await getScanData();

  return data.map((scan) => ({
    name: encodeURIComponent(scan.name),
  }));
}

export default async function Page({ params } : {params: Promise<{name: string}> }) {
  
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  const scans = await getScanData();

  const project = scans.find(
    (scan) =>
      scan.name.trim().toLowerCase() ===
      decodedName.trim().toLowerCase()
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const tags = await getFilter(project.id);

  return <DetailPage project={project} tags={tags} />;
}