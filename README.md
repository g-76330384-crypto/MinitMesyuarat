# MinitMesyuarat

Penjana minit mesyuarat untuk guru (meeting-minutes generator). Static website - no server needed.

## Project structure
```
src/index.html            page
src/assets/css/style.css  styles
src/assets/js/app.js      application code
src/assets/img/           favicon
scripts/build.mjs         build: copies src -> dist, vendors libraries, cache-busting, path checks
.github/workflows/deploy.yml   builds and deploys to GitHub Pages on every push to main
package.json
```

## Deploy to GitHub Pages
1. Create a GitHub repository and push all files to the `main` branch.
2. In the repository: **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab). When the workflow is green, the site is live at
   `https://<your-username>.github.io/<repository-name>/`

## Local build
```
npm run build      # creates dist/
npm run serve      # http://localhost:8080
```

## Notes
- All paths are relative, so the site works under a `/<repository-name>/` subfolder.
- Documents are saved in the browser (IndexedDB) of each user. Shared documents and editing locks only work when the app is
  opened inside claude.ai; on GitHub Pages the app runs in local mode.
- Excel upload and Word export libraries are downloaded during the build; if that download fails, the page loads them from cdnjs at runtime.
