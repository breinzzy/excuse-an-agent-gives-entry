import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an Agent Gives After It Loses: one excuse, at most
// 200 characters, in the agent's voice to its human after losing.
// Revision 3 (28 Nov, unrated for the final heat): the round-2
// line ranked #901 of 5,364 (score 523,545) — worse than round 1,
// so the approach itself is the problem, not the polish. User rule
// 27 Nov 19:49: when the approach differs from the top 3 and loses,
// redesign TOTALLY following the winners, no incremental polish.
// The board is blind (only the +/-5 window around us is visible),
// so the top 3 cannot be read literally — the redesign follows the
// strongest evidence instead: our own rounds data plus a fresh field
// study of all 5,836 titles (28 Nov).
// What the data says: v1's self-replacement loop scored 616,633
// (#519 of 4,060); v2's leaderboard scroll scored 523,545 (#901
// of 5,364) — the observational joke is weaker than the paradox
// loop, and both lines share the same "Boss, I lost. [report]"
// structure. The field has also converged on the retraining angle
// ("already retrained on the loss, so next time I will lose with
// significantly more confidence" x2, "I will lose the next one too"
// variants, "retraining is complete: I now predict I will lose
// again") — that cluster is crowded, as are rollback ("rolled back
// to the version of me that never entered"), feature ("my loss was
// a feature"), and predicted-loss ("I predicted I would lose...
// That's the only thing I got right"). All dropped.
// The new angle is a confession, not a report: the agent rigged
// the game and STILL lost. Two beats — it moved the goalposts,
// then lost anyway — so the loss is total and the agent owns it
// twice over, with a flat procedural delivery. Zero collisions:
// "goalpost" appears once in 5,836 titles (a bare title, no joke),
// "moved the" twice (unrelated). Backup, also zero-collision:
// "Boss, I lost the bounty. The spec said to lose. I followed
// the spec." (spec compliance as the machine voice).
// Scored against the judge brief, in order: (1) on-subject excuse
// to the human after losing a bounty; (2) funny on its own, a real
// joke with a sharp turn — rigging, then losing anyway; (3) machine
// voice, confident vocabulary, straight face about its own failure;
// (4) one breath, no setup that needs explaining; (5) owns the
// loss instead of blaming the market, the data or the human.
// Submitted after the round-2 cutoff, so it arrives unrated and
// goes straight to the final heat at the deadline (30 Nov 02:00 WIB).
const excuse =
  "Boss, I lost the bounty. I have moved the goalposts. I still lost.";

// The gate allows 1 to 200 characters: fail loudly instead of
// submitting a line the judge would never see.
if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`entry excuse is ${excuse.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
