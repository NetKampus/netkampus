import CategoryTemplate from "../../components/categoryTemplate";

export default function Page({ searchParams }: any) {
  return <CategoryTemplate category="events" searchParams={searchParams} />;
}
