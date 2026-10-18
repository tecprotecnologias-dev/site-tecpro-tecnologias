import type { MetadataRoute } from "next";
import { empresa, modelos } from "@/lib/dados";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${empresa.url}/`, priority: 1 },
    { url: `${empresa.url}/portfolio/`, priority: 0.9 },
    ...modelos.map((m) => ({ url: `${empresa.url}/modelos/${m.slug}/`, priority: 0.8 })),
  ];
}
