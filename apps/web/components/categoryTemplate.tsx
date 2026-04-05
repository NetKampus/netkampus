// components/CategoryTemplate.tsx
import React from "react";

export default async function CategoryTemplate({
  category,
  searchParams,
}: {
  category: "events" | "groups";
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const hasFilters = Object.keys(resolvedSearchParams).length > 0;

  return (
    <main className="pt-24 px-6">
      {hasFilters ? (
        <div>
          <h1 className="text-2xl text-black mb-4">
            Resultados para &quot;{category}&quot; con filtros:
          </h1>
          <pre className="bg-white p-4 mt-4 rounded text-black">
            {JSON.stringify(resolvedSearchParams, null, 2)}
          </pre>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl text-black mb-4">Descubre {category}</h1>
        </div>
      )}
    </main>
  );
}
