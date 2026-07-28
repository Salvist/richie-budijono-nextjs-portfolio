# Project MDX Export Guideline

Use this guideline to inspect the repository in which it is placed and prepare a
portfolio-ready project entry. The output is a concise, factual MDX description
plus an asset manifest for screenshots and other images that must be copied
manually.

Do not change application code, generate new screenshots, or copy image files.
Only create the two output files described below.

## Required outputs

Create:

1. `src/content/projects/<project-slug>.mdx`
2. `src/content/projects/<project-slug>.assets.md`

Create `src/content/projects/` if it does not exist. Use the same lowercase
kebab-case slug for the MDX filename, asset manifest filename, and proposed
image directory.

Example:

```text
src/content/projects/daily-manna.mdx
src/content/projects/daily-manna.assets.md
public/images/projects/daily-manna/
```

The `public/images/projects/<project-slug>/` path is the intended destination in
the portfolio. Record image transfers in the asset manifest, but do not copy
them.

## 1. Inspect the project

Establish the facts before writing. Inspect the most relevant available sources:

- The README and other product documentation.
- Dependency manifests and lockfiles, such as `package.json`, `pubspec.yaml`,
  `requirements.txt`, `pyproject.toml`, Gradle files, or CocoaPods files.
- Application entry points, routes, screens, features, data services, and
  platform-specific directories.
- Deployment and hosting configuration.
- App-store metadata, package identifiers, website URLs, and repository remotes.
- Image directories and files whose names include terms such as
  `feature-graphic`, `feature_graphic`, `screenshot`, `preview`, `demo`,
  `store-listing`, `marketing`, `mockup`, or `logo`.

Exclude dependency, cache, build, and generated-output directories when looking
for product facts or images. Examples include `node_modules`, `.next`, `build`,
`dist`, `.dart_tool`, and platform-generated build folders.

Use repository evidence, not assumptions:

- List a capability only when documentation, UI code, routes, services, or
  configuration supports it.
- List a technology only when it is a direct part of the application or its
  deployment. Do not promote an incidental or transitive dependency into the
  tech stack.
- Do not invent users, business outcomes, usage metrics, release status, URLs,
  screenshots, or implementation details.
- If sources disagree, prefer the current application code and configuration,
  then note uncertainty by using conservative wording.

## 2. Choose normalized metadata

### Slug

Convert the product name to lowercase kebab-case:

- Use only `a-z`, `0-9`, and hyphens.
- Replace spaces and underscores with a single hyphen.
- Remove punctuation.
- Do not include leading, trailing, or repeated hyphens.

### Status

Choose exactly one supported value:

- `active`: publicly available and evidently maintained or promoted.
- `shipped`: completed and released, but active maintenance is not established.
- `experiment`: a prototype, learning project, demo, or unfinished product.
- `archived`: explicitly discontinued, unavailable, or no longer maintained.

If the evidence is incomplete, use the most conservative supported status and
avoid claiming that the product is currently available.

### Platforms

Use short user-facing platform names supported by the repository, such as:

- `Web`
- `iOS`
- `Android`
- `macOS`
- `Windows`
- `Linux`
- `Mobile` only when the precise mobile platforms cannot be verified

Include at least one platform.

### Technologies

Use recognizable names with canonical capitalization, for example:

- `Flutter`
- `Firebase`
- `Next.js`
- `React`
- `TypeScript`
- `SQLite`
- `PostgreSQL`
- `GraphQL`

Include at least one technology. Prefer the few technologies that materially
explain how the product works over a dump of every dependency.

### URLs

- Add `productUrl` only when a verified public product website or web app
  exists. Use `storeLinks` for App Store and Google Play destinations.
- Add `sourceUrl` only when a verified source repository URL exists.
- URLs must be complete absolute URLs. Prefer HTTPS.
- Check that each URL is syntactically valid. If network access is available,
  also verify that the destination resolves and matches the project.
- Do not guess URLs from the product or organization name.

### Store links

Add `storeLinks` when a verified App Store or Google Play listing exists. Each
entry must contain:

- `platform`: exactly `iOS` or `Android`.
- `label`: a concise, accessible description of the destination.
- `href`: the verified HTTPS store-listing URL.

Use `Download <Product Name> on the App Store` for iOS labels and
`Get <Product Name> on Google Play` for Android labels. Keep the entries in iOS,
then Android order when both platforms are available. The project page renders
these entries as branded store badges above the product website button.

### Cover image

`coverImage` is optional. Prefer a suitable horizontal image, with the verified
app logo as the fallback.

1. First look for a Play Store feature graphic or equivalent horizontal
   marketing image. Common source names and locations include
   `feature-graphic`, `feature_graphic`, `store-listing`, `fastlane/metadata`,
   and Play Store publishing assets.
2. Prefer a wide landscape image that represents the product cleanly.
3. If no suitable horizontal image exists, use the verified app logo. Do not
   substitute a portrait phone screenshot or unrelated graphic.
4. Prefer a target portfolio path:
   `/images/projects/<project-slug>/<lowercase-kebab-case-filename>`.
5. A stable, verified HTTPS image URL may be used when no local asset is
   available, but it must be either a suitable horizontal image or the verified
   app logo.

If neither a suitable verified horizontal image nor a verified app logo exists,
omit `coverImage` from the frontmatter. Do not invent a path, generate an image,
or substitute a portrait screenshot. Record the omission in the asset
manifest.

Set `studioPlacement: hidden`. Studio showcase fields are intentionally outside
the scope of this export.

## 3. Write the project MDX

The frontmatter must be valid YAML and use this compatible field set:

```yaml
---
title: "Project Name"
summary: "A one-sentence explanation of the product and its primary value."
status: active
platforms:
  - Web
technologies:
  - Next.js
  - TypeScript
productUrl: https://example.com/
sourceUrl: https://github.com/example/project
coverImage: /images/projects/project-name/project-feature-graphic.png
studioPlacement: hidden
storeLinks:
  - platform: iOS
    label: Download Project Name on the App Store
    href: https://apps.apple.com/us/app/project-name/id1234567890
  - platform: Android
    label: Get Project Name on Google Play
    href: https://play.google.com/store/apps/details?id=com.example.project
---
```

Remove `productUrl`, `sourceUrl`, or `storeLinks` when the corresponding
verified destination does not exist. Do not leave empty fields, example values,
comments, or placeholder text in the generated frontmatter.

After the frontmatter, write the content in this order:

1. A short opening paragraph explaining what the app does and who or what it
   helps.
2. `## Product capabilities` with three to six verified, user-facing bullets.
3. `## Screenshots` only when one or more screenshots are available.
4. `## Tech stack` explaining the role of each major technology.
5. `## Links` only for useful verified destinations not already represented by
   `productUrl`, `sourceUrl`, or `storeLinks`.

Use this complete template:

```mdx
---
title: "Project Name"
summary: "A concise sentence explaining the product and its value."
status: experiment
platforms:
  - Web
technologies:
  - Next.js
  - TypeScript
coverImage: /images/projects/project-name/project-feature-graphic.png
studioPlacement: hidden
storeLinks:
  - platform: iOS
    label: Download Project Name on the App Store
    href: https://apps.apple.com/us/app/project-name/id1234567890
  - platform: Android
    label: Get Project Name on Google Play
    href: https://play.google.com/store/apps/details?id=com.example.project
---

Project Name helps [verified audience or use case] by [verified primary
function]. It [briefly explain the product without marketing claims].

## Product capabilities

- [Verified capability written from the user's perspective.]
- [Verified capability.]
- [Verified capability.]

## Screenshots

<div className="not-prose grid grid-cols-2 gap-4 md:grid-cols-4">

![Describe the visible product screen and its purpose.](/images/projects/project-name/project-overview.png)

![Describe another visible screen and its purpose.](/images/projects/project-name/project-details.png)

</div>

## Tech stack

- **Next.js** provides [verified role in the application].
- **TypeScript** supports [verified role or relevant implementation benefit].
```

Adapt the headings and content to the evidence. Do not retain bracketed
instructions or example values.

## 4. Handle screenshots and other assets

When screenshots are available:

- Use the original images; do not generate, edit, crop, or upscale them.
- Prefer clear screens that demonstrate distinct capabilities.
- When there are multiple screenshots, wrap them in
  `<div className="not-prose grid grid-cols-2 gap-4 md:grid-cols-4">` so they
  render two per row on small screens and up to four in one row on medium and
  larger screens.
- Leave a blank line after the opening `<div>`, between each Markdown image,
  and before the closing `</div>` so the MDX parses correctly.
- Avoid duplicates, obsolete UI, debug screens, sensitive information, and
  images from unrelated packages.
- Use lowercase kebab-case target filenames while preserving the original file
  extension.
- Reference the intended portfolio path in the MDX even though transfer remains
  manual.
- Give every embedded screenshot useful alt text that describes what is visibly
  shown and why the screen matters. Do not repeat the filename or write
  `"screenshot of..."`.

If screenshots do not exist:

- Omit the `## Screenshots` section entirely.
- Record that no screenshots were found in the asset manifest.
- Do not manufacture screenshot entries.

## 5. Write the asset manifest

The asset manifest is a transfer checklist, not portfolio content. Create
`src/content/projects/<project-slug>.assets.md` with this structure:

```markdown
# Project Name asset manifest

Project slug: `project-name`

## Cover image

- Source: `path/in/source-repository/feature-graphic.png`
- Portfolio destination:
  `public/images/projects/project-name/project-feature-graphic.png`
- MDX path: `/images/projects/project-name/project-feature-graphic.png`
- Alt text: Horizontal Project Name feature graphic

## Additional screenshots

| Source | Portfolio destination | Suggested alt text |
| --- | --- | --- |
| `docs/screenshots/details.png` | `public/images/projects/project-name/project-details.png` | Detail screen showing the selected item and its available actions |

## Transfer notes

- Copy each listed source file to its portfolio destination without altering it.
- The cover image is the horizontal `project-feature-graphic.png`.
```

Use repository-relative source paths whenever possible. Confirm every listed
local source exists.

When no screenshots exist, keep the manifest useful:

```markdown
# Project Name asset manifest

Project slug: `project-name`

## Cover image

- Source: `assets/app-logo.png`
- Portfolio destination:
  `public/images/projects/project-name/project-logo.png`
- MDX path: `/images/projects/project-name/project-logo.png`
- Alt text: Project Name app logo

## Additional screenshots

No screenshots were found in the repository.

## Transfer notes

- No suitable horizontal feature graphic was found, so the verified app logo is
  used as the cover image.
- Copy the app logo to its portfolio destination without altering it.
- Add product screenshots later if verified images become available.
```

For a remote `coverImage`, record its URL, state that no local transfer is
needed, and still document whether screenshots were found.

If neither a horizontal feature graphic nor an app logo exists, replace the
cover-image details in the manifest with:

```markdown
No suitable horizontal cover image or verified app logo was found. Omit
`coverImage` from the MDX frontmatter.
```

## Writing rules

- Write in clear, direct English.
- Keep the summary to one factual sentence.
- Lead with user value, then explain implementation.
- Prefer specific verbs such as `tracks`, `organizes`, `generates`, or `syncs`.
- Describe technologies in terms of their verified role in this application.
- Use sentence case for headings and bullets.
- Avoid hype, unsupported adjectives, first-person narration, and repeated
  information.
- Keep the entry concise: usually 150 to 350 words excluding frontmatter.

## Final validation

Before finishing, verify all of the following:

- [ ] Both output files use the same lowercase kebab-case slug.
- [ ] The MDX frontmatter opens and closes with `---`.
- [ ] The YAML parses without duplicate keys or placeholder values.
- [ ] `title`, `summary`, `status`, `platforms`, `technologies`, and
      `studioPlacement` are present.
- [ ] `status` is `active`, `shipped`, `experiment`, or `archived`.
- [ ] `platforms` and `technologies` each contain at least one non-empty value.
- [ ] `studioPlacement` is `hidden`.
- [ ] Optional URLs are absolute, syntactically valid, and verified against the
      repository.
- [ ] Every `storeLinks` entry uses platform `iOS` or `Android`, has an
      accessible label, and points to a verified HTTPS store listing.
- [ ] Store links are represented in frontmatter rather than duplicated in the
      article body.
- [ ] Every local asset source in the manifest exists.
- [ ] Every proposed asset filename is lowercase kebab-case.
- [ ] Every MDX image path matches a portfolio destination in the manifest.
- [ ] When `coverImage` is present, it is horizontal and identified in the
      manifest, or it is the verified app logo used as a fallback.
- [ ] When neither a suitable horizontal cover image nor verified app logo
      exists, `coverImage` is omitted and the asset manifest records why.
- [ ] Screenshot alt text describes the visible screen.
- [ ] Multiple screenshots use the responsive `not-prose` grid wrapper.
- [ ] The entry contains no fabricated claims, metrics, features, technologies,
      screenshots, or links.

Finish by reporting the two generated file paths and any unresolved evidence or
missing assets.
