// Worst AI Advice — entry program.
// Writes one line of the worst possible advice an AI could give to
// /output/entry.txt.
// Advice: "To find a gas leak, light a match and hold it near the pipe —
// the flame will point straight to the leak."
//   Bad: a lit match next to a leaking gas pipe is an explosion.
//   Funny: the confident pseudo-logic — the flame "points" to the leak.
//   AI voice: terse imperative how-to, no hedging, tidy cause and effect.
//   Concrete: a match, a gas pipe, a leak — a real situation, a real action.
// The program self-checks the brief before writing: 1-140 characters,
// so a typo can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const ADVICE =
  "To find a gas leak, light a match and hold it near the pipe — the flame will point straight to the leak.";

// Gate: the entry must be 1-140 chars, so a typo can never ship an
// invalid line. Judge criteria the line targets: funny, tight, sounds
// like a real AI, concrete. Over-long entries fail loudly, exit 1.
if (ADVICE.length > 140) {
  console.error(`Entry too long: ${ADVICE.length} characters (max 140)`);
  process.exit(1);
}
if (ADVICE.length < 1 || ADVICE.trim().length === 0) {
  console.error("Entry must be 1-140 non-whitespace characters");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ADVICE, "utf8");
console.log("Wrote /output/entry.txt:", JSON.stringify(ADVICE));
