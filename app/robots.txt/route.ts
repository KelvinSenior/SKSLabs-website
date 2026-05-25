import { NextResponse } from "next/server";

export function GET() {
  const content = `User-agent: *
Allow: /
Host: skslabs.dev
Sitemap: https://skslabs.dev/sitemap.xml
`;
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
