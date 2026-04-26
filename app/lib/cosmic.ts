import type { TeamMember, TeamSection } from "../data/Team";

interface CosmicPhoto {
  url: string;
  imgix_url: string;
}

interface CosmicPersonMetadata {
  name: string;
  email: string;
  blurb: string;
  position: string;
  position_category: string;
  year: string | null;
  major?: string;
  photo?: CosmicPhoto | null;
}

interface CosmicPerson {
  slug: string;
  title: string;
  type?: string;
  metadata: CosmicPersonMetadata;
}

interface CosmicListResponse {
  objects: CosmicPerson[];
}

const SECTION_ORDER = [
  "Directors",
  "Student Mentors",
  "Program Management",
  "Liaison",
  "Student Engagement",
  "School Engagement",
  "Media and Design",
];

const SECTION_INTROS: Record<string, string> = {
  Directors:
    "We help lead our wonderful team of YEP leaders to create a motivating, innovative, and creative atmosphere.",
  "Student Mentors":
    "Our mentor team guides, provides support, and works with entrepreneurs to help launch their businesses.",
  "Program Management":
    "Program management keeps our sessions, logistics, and student support systems running smoothly across all tracks.",
  Liaison:
    "Our liaison team builds strong relationships with schools, families, and community organizations across Providence.",
  "Student Engagement":
    "Student engagement develops activities that keep students involved, curious, and confident in each workshop.",
  "School Engagement":
    "School engagement develops activities that keep students involved, curious, and confident in each workshop.",
  "Media and Design":
    "Media and design shapes YEP storytelling, visuals, and outreach materials for students and families.",
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function imgixUrl(photo: CosmicPhoto | null | undefined, slug: string): string {
  if (photo?.imgix_url) {
    const sep = photo.imgix_url.includes("?") ? "&" : "?";
    return `${photo.imgix_url}${sep}w=600&h=800&fit=crop&crop=faces,center&auto=format,compress`;
  }
  if (photo?.url) {
    return photo.url;
  }
  return `/api/team/avatar/${slug}`;
}

function mapPerson(person: CosmicPerson): TeamMember {
  const m = person.metadata;
  return {
    id: person.slug,
    name: m.name || person.title,
    role: m.position || "Team Member",
    email: m.email || "",
    classYear: m.year ?? "",
    major: m.major ?? "",
    blurb: m.blurb ?? "",
    imageUrl: imgixUrl(m.photo, person.slug),
  };
}

function isPerson(p: CosmicPerson): boolean {
  const m = p.metadata;
  if (!m) return false;
  if (typeof m.name !== "string" || !m.name.trim()) return false;
  if (typeof m.position_category !== "string" || !m.position_category.trim())
    return false;
  return true;
}

function groupIntoSections(people: CosmicPerson[]): TeamSection[] {
  const buckets = new Map<string, CosmicPerson[]>();

  for (const person of people) {
    if (!isPerson(person)) continue;
    const cat = person.metadata.position_category.trim();
    if (!buckets.has(cat)) buckets.set(cat, []);
    buckets.get(cat)!.push(person);
  }

  const ordered = [
    ...SECTION_ORDER.filter((title) => buckets.has(title)),
    ...[...buckets.keys()].filter((title) => !SECTION_ORDER.includes(title)),
  ];

  return ordered.map((title) => ({
    id: slugify(title),
    title,
    intro:
      SECTION_INTROS[title] ??
      `Meet the ${title.toLowerCase()} team behind YEP.`,
    members: (buckets.get(title) ?? []).map(mapPerson),
  }));
}

export async function fetchTeamFromCosmic(): Promise<TeamSection[] | null> {
  const bucket = process.env.COSMIC_BUCKET_SLUG;
  const readKey = process.env.COSMIC_READ_KEY;

  if (!bucket || !readKey) return null;

  const url = new URL(`https://api.cosmicjs.com/v3/buckets/${bucket}/objects`);
  url.searchParams.set("type", "people");
  url.searchParams.set("read_key", readKey);
  url.searchParams.set("props", "slug,title,type,metadata");
  url.searchParams.set("limit", "100");

  const res = await fetch(url.toString(), {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Cosmic fetch failed: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as CosmicListResponse;
  return groupIntoSections(data.objects ?? []);
}
