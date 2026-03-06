# AI Consultant GitHub Pages Site

This is a beginner-friendly proof of concept for an AI consultant website.

It is designed to satisfy these goals:
- hosted on GitHub Pages
- no paid hosting
- no monthly subscription fees
- easy to maintain
- single source of truth for content
- simple enough for another student to fork, edit, and deploy quickly

## Live Site URL

After deployment, your live URL will usually look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/ai-consultant-site/
```

If you renamed the repository, replace `ai-consultant-site` with your repo name.

## Project Structure

```text
ai-consultant-site/
├─ index.html
├─ assets/
│  ├─ styles.css
│  └─ app.js
├─ content/
│  └─ site.json
├─ tools/
│  └─ editor.html
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
└─ README.md
```

## Single Source of Truth

All main website content lives in:

```text
content/site.json
```

To update the website, you only need to edit this file.

You do **not** need to manually edit generated HTML pages.

## Quick Setup

1. Fork this repository, or upload these files to a new GitHub repository.
2. Open `content/site.json`.
3. Replace the placeholder content with your own:
   - name
   - tagline
   - about text
   - services
   - email / LinkedIn / calendar link
4. Push the changes to the `main` branch.
5. In GitHub, go to **Settings → Pages**.
6. Under **Build and deployment**, choose **GitHub Actions**.
7. Wait for the workflow to finish.
8. Your site will be live at your GitHub Pages URL.

## Fastest Way to Update Content

### Option 1: Edit JSON directly

Open:

```text
content/site.json
```

Change the text, commit, and push.

### Option 2: Use the included browser editor

Open:

```text
tools/editor.html
```

Fill in the fields, copy the generated JSON, and paste it into:

```text
content/site.json
```

Then commit and push.

## How the Site Works

- `index.html` contains the page structure.
- `assets/app.js` loads the content from `content/site.json`.
- `assets/styles.css` controls the design.
- GitHub Pages hosts the site.

Because the page reads from one JSON file, the solution is easy to maintain and update.

## Demo Script

Use this for a short proof-of-concept demo:

1. Open the live GitHub Pages site.
2. Show the homepage with your name, services, and contact section.
3. Open `content/site.json` in GitHub.
4. Change one line, such as a service description or your contact email.
5. Commit the change.
6. Show the GitHub Actions workflow running.
7. Refresh the live site after deployment.
8. Show that the content updated successfully.

## Why This Meets the Requirements

- **GitHub Pages hosting:** yes
- **No paid hosting:** yes
- **No monthly subscription fees:** yes
- **AI allowed only locally or pay-per-token:** yes, because the deployed site itself uses no subscription AI service
- **Easy to maintain:** yes, one JSON file controls the content
- **Redistributable:** yes, another student only needs a browser, GitHub account, and this repo
- **Painless setup:** yes, fork, edit JSON, enable Pages, deploy

## Notes

- The contact button uses `mailto:` by default.
- You can also add LinkedIn and a calendar booking link.
- This project is intentionally simple so it can be deployed quickly.
