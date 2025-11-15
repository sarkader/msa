# Contributing

Use Conventional Commits (feat, fix, refactor, perf, chore, docs, test) with a short Why line.

Branch per task; small PRs; CI must pass before merge.

Choose one linter: Biome OR ESLint. Do not use both.

Run: bun run typecheck && (bunx biome check || bun run lint) && bun run build before pushing.

