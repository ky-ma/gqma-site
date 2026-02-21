# CLAUDE.md

## Git Rules
- Do NOT include `Co-Authored-By` lines in commit messages
- Do NOT include "made with Claude" or any AI attribution in commits
- Feature branches only (feat/xxx, fix/xxx). Never commit directly to main/master.

## Domain Architecture
- **agent.gqma.org** = Agent MA platform (agent-ma repo). Marketing/product content goes HERE.
- **www.gqma.org** = Ky's personal portfolio (this repo, CF Pages). Do NOT put product content here.
- **gqma.org** → 301 redirect → www.gqma.org (www is canonical)

## Tmux Messaging Format
```
tmux load-buffer - <<'INNER'
from w19 - <message>
INNER
tmux paste-buffer -t mine:<target-window>.0 && sleep 0.7 && tmux send-keys -t mine:<target-window>.0 Enter
```
Window map: 0=scout, 2=coordinator, 3=k8s, 5=ma, 19=marketing(us), 20=ux, 22=coach
