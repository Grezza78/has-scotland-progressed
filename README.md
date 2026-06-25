# Has Scotland Progressed?

A deliberately dramatic, dependency-free static website for tracking Scotland's route to the 2026 World Cup Round of 32.

## Run locally

Open `index.html` directly, or run a tiny local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Update results

Edit `data.js`.

- Set the overall `status` to `waiting`, `qualified`, or `eliminated`.
- Change each group's `state` to `pending`, `helpful`, or `harmful`.
- Update the timestamp.
- Revise scenario text as the remaining possibilities narrow.

## Deploy

The folder can be deployed unchanged to GitHub Pages, Cloudflare Pages, Netlify or any ordinary web host.

## Suggested next upgrade

Replace `data.js` with a small serverless function that retrieves match data from a licensed football-data API, recalculates all group tables, and commits a generated JSON snapshot. Keeping API keys off the client is essential.

## Legal/common-sense note

Use a Saltire and original artwork rather than FIFA logos, tournament marks or broadcast photography. Describe the project as unofficial and fan-made.
