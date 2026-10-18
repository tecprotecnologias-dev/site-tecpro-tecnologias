import type { MetadataRoute } from "next";
import { empresa, modelos } from "@/lib/dados";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${empresa.url}/`, priority: 1 },
    ...modelos.map((m) => ({ url: `${empresa.url}/modelos/${m.slug}/`, priority: 0.8 })),
  ];
}
