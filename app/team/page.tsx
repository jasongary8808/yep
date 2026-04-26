import { headers } from "next/headers";
import TeamView from "../components/TeamView";
import type { TeamSection } from "../data/Team";

export const revalidate = 300;

async function fetchTeam(): Promise<TeamSection[]> {
  const h = await headers();
  const host = h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";

  if (!host) {
    const { teamSections } = await import("../data/Team");
    return teamSections;
  }

  const res = await fetch(`${proto}://${host}/api/team`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Failed to load team: ${res.status}`);
  }

  const data = (await res.json()) as { sections: TeamSection[] };
  return data.sections;
}

export default async function TeamPage() {
  const sections = await fetchTeam();
  return <TeamView sections={sections} />;
}
