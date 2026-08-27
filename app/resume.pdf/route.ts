import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

const RESUME_PATH = join(process.cwd(), "Nicholas-Lee.pdf");
const FILENAME = "Nicholas-Lee-Resume.pdf";

/** Serve the uploaded resume from the same origin as the portfolio. */
export async function GET() {
  try {
    const bytes = await readFile(RESUME_PATH);

    return new Response(bytes, {
      headers: {
        "content-type": "application/pdf",
        "content-disposition": `inline; filename="${FILENAME}"`,
        "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response("Resume unavailable", { status: 404 });
  }
}
