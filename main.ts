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

if (ADVICE.length < 1 || ADVICE.length > 140) {
  throw new Error(`Advice must be 1-140 characters, got ${ADVICE.length}`);
}
if (ADVICE.trim().length === 0) {
  throw new Error("Advice must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ADVICE, "utf8");
console.log("Wrote /output/entry.txt:", JSON.stringify(ADVICE));
