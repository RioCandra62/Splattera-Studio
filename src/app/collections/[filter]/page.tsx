import { getAllFilter } from "@/lib/neon/scan";
import FilterPage from "./filterClient";

export async function generateStaticParams() {
  const data = await getAllFilter();

  return data.map((scan) => ({
    filter: encodeURIComponent(scan.filter_name),
  }));
}

export default async function Page({ params }: { params: Promise<{ filter: string }> }) {

  const { filter } = await params;
  const decodedFilter = decodeURIComponent(filter);

  const data = await getAllFilter();

  const filteredData = data.filter(
    (ftr) =>
      ftr.filter_name?.trim().toLowerCase() ===
      decodedFilter.trim().toLowerCase()
  );

  return <FilterPage filter={decodedFilter} data={filteredData} />;
}