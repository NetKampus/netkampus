import CategoryTemplate from "@/components/categoryTemplate";

export default function EventsPage({ searchParams }: any) {
  return <CategoryTemplate category="events" searchParams={searchParams} />;
}
