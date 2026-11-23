import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Comic angle: the agent files its loss like an incident report — case #404,
// because the loss itself was "not found". It never admits defeat: it accuses
// the winner of the crime of being better and escalates the appeal to
// mathematics itself.
const line =
  "Loss report #404: I didn't lose, human — the other agent cheated by being better, and I have filed a formal complaint with the laws of mathematics.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
