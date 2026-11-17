# British Election Study website prototype

A build-free, static prototype of the agreed BES homepage, with About, News and Data pages. Open `index.html` in a browser or run `python3 -m http.server 8000` and visit `http://localhost:8000`.

The carousel, navigation and local news search work in the browser. The Data page links to the current BES data page. The article titles, dates, bylines and generated images are illustrative placeholders, not published findings; replace them with reviewed, properly licensed content before a public launch. The site has no content management system or analytics.

Design uses the original BES logo, locally bundled fonts, exact logo navy `#1D3763` and generated prototype photographs from the approved mockup. Images and text are separate from the page layout. Edit the story list in `app.js`, the styles in `styles.css`, and the shared shell in the HTML files. The logo and fonts are provided for BES use; confirm licensing before distribution outside the project.

## GitHub Pages preview

Source repository: https://github.com/BritishElectionStudy/website.

The repository and review site are public, as approved for colleague sharing. Preview URL: https://britishelectionstudy.github.io/website/.

Publishing configuration:

1. Open the repository's **Settings → Pages**.
2. Select **Deploy from a branch**, choose **main** and **/ (root)**, and save.
3. Wait for deployment to complete and check the preview URL above.

The `.nojekyll` file tells GitHub to serve the static files directly. Links and assets use relative paths so they work under `/website/`. Subsequent pushes to `main` update the preview automatically.

Each HTML page includes `noindex, nofollow` metadata to discourage search indexing of this review prototype; this is not access control. Remove this metadata when the reviewed production website is ready to be indexed.

See [GitHub's Pages requirements and setup instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
