import { notFound } from "next/navigation";
import { validateGroupId } from "@/lib/guide/validateGroupId";

export default async function GuideGroupPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const groupId = validateGroupId(slug);

  if (!groupId) return notFound();

  return groupId;
}
