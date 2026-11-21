import { mkdirSync, writeFileSync } from "node:fs";

const poem = `At six, Mrs. Adele locks the bakery,
counts the till, and hands the key
to Mara next door. "Water the basil.
Don't let the ovens sleep."

Tonight I hand my morning
to a clerk that never sleeps —
the bills, the letters, the locked drawer —
and the door stays open after me.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
