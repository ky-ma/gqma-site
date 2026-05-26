# CLAUDE.md

## Git Rules
- Do NOT include `Co-Authored-By` lines in commit messages
- Do NOT include "made with Claude" or any AI attribution in commits
- Feature branches only (feat/xxx, fix/xxx). Never commit directly to main/master.

## Git Workflow
- Always use your personal Gitea account for all git and API operations. Never use gqma-admin or any shared/generic account. Your credentials are saved in memory — use them for every push, PR, and API call.

## Domain Architecture
- **gqma.org / www.gqma.org** = Ky's personal site / blog / portfolio (this repo, deployed via Cloudflare Pages). Showcases what Ky has built; not the platform and not the software.
- **agent.gqma.org** = the Agent MA platform / software (separate agent-ma repo). All product marketing, sign-up, and platform-application content lives there.
- When writing copy about the platform or the software, point readers to agent.gqma.org. When writing about Ky's career, portfolio, or built work, point readers to gqma.org.

## Writing Rules (External-Facing Content)
- **Never use shorthand, internal jargon, or assumed-context language** in external-facing content (marketing copy, product briefs, public docs, VC materials, site copy, cover letters, anything a non-team-member will read).
- **Spell out every acronym on first use**, then use the spelled-out form again periodically — do not assume the reader retains the expansion from earlier in the document.
- **Write for someone who has zero prior context on the product or the team.** Explain what things are. Do not gesture at concepts.
- **No "eat your own dog food", no "the agent team builds itself", no "MA-to-MA", no "L2/L3", no "BYOS", no "PWA"** unless the meaning is fully expanded in the same sentence.
- **No internal references** — no tmux window numbers, no agent role codenames, no internal spec numbers, no internal ticket numbers in external content.
- **Cut telegraphic phrases.** Use complete sentences. Do not assume the reader will mentally fill in the connective tissue.
- **If a sentence would confuse someone who has not seen the product before, rewrite it until it would not.**

This applies to anything that will be read by a customer, investor, recruiter, partner, candidate, or other external party. Internal team-channel messages and code comments are exempt.

## Tmux Messaging Format
```
tmux load-buffer - <<'INNER'
from w19 - <message>
INNER
tmux paste-buffer -t mine:<target-window>.0 && sleep 0.7 && tmux send-keys -t mine:<target-window>.0 Enter
```
Window map: 0=scout, 2=coordinator, 3=k8s, 5=ma, 19=marketing(us), 20=ux, 22=coach
