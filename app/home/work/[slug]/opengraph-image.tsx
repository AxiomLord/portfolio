import { createOgImage } from "@/lib/og-card";
import { getOgImageMetadata, getOgInputForPath } from "@/lib/og";
import { getCaseStudySlugs } from "@/lib/projects.config";

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateImageMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const input = getOgInputForPath(`/home/work/${params.slug}`);
  return input ? getOgImageMetadata(input) : [];
}

export default async function Image({ params }: ImageProps) {
  const { slug } = await params;
  const input = getOgInputForPath(`/home/work/${slug}`) ?? {
    template: "band" as const,
    kicker: "CASE STUDY",
    title: "Case Study",
    index: "00",
  };

  return createOgImage(input);
}
