import { NextResponse } from "next/server";

export const runtime = "nodejs";

const palettes: Array<{ from: string; to: string; text: string }> = [
  { from: "#121B4F", to: "#3B4793", text: "#FFDE7C" },
  { from: "#1F2A6E", to: "#5B68B8", text: "#FFDE7C" },
  { from: "#0F0F2D", to: "#3A3D72", text: "#FFDE7C" },
  { from: "#FFDE7C", to: "#F0B450", text: "#0F0F2D" },
  { from: "#F8C861", to: "#E07F2F", text: "#0F0F2D" },
  { from: "#3B4793", to: "#9DA9E8", text: "#FFDE7C" },
];

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

function initialsFromSlug(slug: string): string {
  const cleaned = slug.replace(/\.svg$/i, "");
  const parts = cleaned.split(/[-_\s]+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase() || "?";
}

function escapeXml(s: string): string {
  return s.replace(/[<>&"']/g, (ch) => {
    switch (ch) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
      default:
        return "&apos;";
    }
  });
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ seed: string }> }
) {
  const { seed } = await ctx.params;
  const slug = seed.replace(/\.svg$/i, "");
  const initials = escapeXml(initialsFromSlug(slug));
  const palette = palettes[hash(slug) % palettes.length];
  const gradId = `g_${hash(slug).toString(36)}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${initials}">
  <defs>
    <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${palette.from}"/>
      <stop offset="100%" stop-color="${palette.to}"/>
    </linearGradient>
    <radialGradient id="${gradId}_r" cx="30%" cy="25%" r="80%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.18)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
  </defs>
  <rect width="400" height="500" fill="url(#${gradId})"/>
  <rect width="400" height="500" fill="url(#${gradId}_r)"/>
  <text x="200" y="295" text-anchor="middle" font-family="Viga, Impact, sans-serif" font-size="180" font-weight="900" letter-spacing="-4" fill="${palette.text}" fill-opacity="0.92">${initials}</text>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
