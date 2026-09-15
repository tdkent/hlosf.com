export function validateGroupId(slug: string) {
  if (!slug.startsWith("group-")) return null;

  const groupId = Number(slug.split("-")[1]);

  if (!groupId || Number.isNaN(groupId) || groupId > 5) return null;

  return groupId;
}
