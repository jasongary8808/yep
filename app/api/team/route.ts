import { NextResponse } from "next/server";
import { teamSections } from "../../data/Team";
import { fetchTeamFromCosmic } from "../../lib/cosmic";

export const runtime = "nodejs";
export const revalidate = 300;

export async function GET() {
  try {
    const cosmicSections = await fetchTeamFromCosmic();
    if (cosmicSections && cosmicSections.length > 0) {
      return NextResponse.json(
        { sections: cosmicSections, source: "cosmic" },
        {
          headers: {
            "Cache-Control":
              "public, s-maxage=300, stale-while-revalidate=600",
          },
        }
      );
    }
  } catch (error) {
    console.error("[/api/team] Cosmic fetch failed:", error);
  }

  return NextResponse.json(
    { sections: teamSections, source: "local" },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
