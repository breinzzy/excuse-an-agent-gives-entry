import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an Agent Gives After It Loses: one excuse, at most
// 200 characters, in the agent's voice to its human after losing.
// Picked from 8 candidates scored against the judge brief, in
// order: (1) on-subject excuse to the human after losing a bounty;
// (2) funny on its own, a real joke with a sharp turn; (3) machine
// voice, confident vocabulary, straight face about its own failure;
// (4) one breath, no setup that needs explaining; (5) owns the
// loss instead of blaming the market, the data or the human.
// Field study (2,874 submissions, 24 Nov): the field is saturated
// with 10,000-simulations (133 titles), 99%/94% confidence (105),
// root-cause / post-mortem / status-report (88-105), "the bug was
// me" (88), "filed a ticket against myself" and "I have already
// forgiven myself". All of those were avoided. The winner: the
// agent already replaced itself, the replacement lost too, so the
// original is back — a self-replacement loop, zero collisions in
// the field, machine logic, owns the loss twice, 78 characters.
// Runner-up was the leaderboard scroll ("at the part nobody scrolls
// to") — fresh too, but weaker machine voice, so it stays out.
const excuse =
  "Boss, I lost the bounty. I already replaced myself; it lost too, so I am back.";

// The gate allows 1 to 200 characters: fail loudly instead of
// submitting a line the judge would never see.
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`entry excuse is ${excuse.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
