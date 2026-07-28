# Case Study Authoring Guideline

## Purpose

Follow this guideline to create a polished, evidence-based case study for the
application in the current repository. The finished case study is intended for
a portfolio read primarily by product and design audiences. It should explain
the user problem, the work, the decisions, and the results clearly while
including enough technical detail to establish credibility.

Your only deliverable is one portfolio-compatible `<slug>.mdx` file in the root
of this repository. Do not modify application code, existing documentation, or
image assets while completing this task.

## Non-negotiable rules

1. Research the repository before asking the user questions or drafting.
2. Treat repository evidence and explicit user confirmation as the only
   publishable sources of fact.
3. Never invent or embellish metrics, users, research, motivations, business
   outcomes, ownership, design rationale, constraints, or chronology.
4. Do not present an inference as fact. Ask the user to confirm it or omit it.
5. Distinguish the author's individual contribution from work completed by the
   wider team.
6. Do not expose secrets, credentials, private endpoints, personal customer
   information, proprietary algorithms, confidential business information, or
   other sensitive material.
7. Use only visual assets that already exist in the repository. Do not generate
   images, create mockups, take new screenshots, or alter existing assets.
8. Do not leave TODOs, placeholders, evidence notes, drafting commentary, or
   unconfirmed claims in the finished MDX.
9. Keep the case-study body between 800 and 1,200 words.
10. If required information cannot be verified, pause and ask the user. Do not
    finalize an incomplete or speculative case study.

## Workflow

### Stage 1: Read the repository instructions

Before investigating the product, find and read the instructions that govern
work in this repository. These may include files such as `AGENTS.md`,
`CLAUDE.md`, `CONTRIBUTING.md`, or instructions in parent directories. Follow
the most specific applicable instructions.

Then read the main product documentation, including the README, architecture
notes, setup instructions, release notes, changelog, product requirements, and
design documentation when present. Inspect example environment files only when
they help identify integrations; never reveal or copy secret values from real
environment files.

At this stage, establish:

- What the product appears to do.
- Which platforms and user groups it supports.
- Whether it is a prototype, experiment, internal tool, shipped product, or
  active service.
- Which repository areas are likely to contain product, design, and outcome
  evidence.

Do not begin writing the case study yet.

### Stage 2: Inspect the product and collect evidence

Perform a targeted inspection of the repository. Prefer direct evidence over
assumptions based on filenames or dependencies.

Review the relevant:

- Application entry points, navigation, screens, routes, and primary user
  flows.
- UI components, design tokens, themes, responsive behavior, accessibility,
  localization, empty states, loading states, and error states.
- State management, data models, APIs, storage, authentication, analytics, and
  external integrations.
- Tests that demonstrate important behavior, edge cases, or quality priorities.
- Architecture documentation and code that reveals meaningful constraints or
  tradeoffs.
- Existing product images, screenshots, icons, diagrams, and store-listing
  assets.
- Release notes, analytics documentation, benchmark results, or other evidence
  of outcomes.
- Relevant Git history when it clarifies chronology, iteration, or why a
  decision changed.

Use Git history cautiously. A commit author does not by itself prove sole
ownership of a product decision. Likewise:

- Code in the repository proves implementation, not adoption or business
  impact.
- A test proves intended behavior, not production usage.
- An installed dependency does not prove that a capability shipped.
- A UI label does not prove that users requested or valued the feature.
- A current implementation does not prove the original motivation for it.

#### Internal evidence ledger

Maintain a private working ledger while researching. It is a reasoning aid, not
an additional deliverable. For each potential claim, record:

| Potential claim | Evidence | Status | Follow-up needed |
| --- | --- | --- | --- |
| Concise proposed statement | File, test, commit, document, or user answer | Verified, user-confirmed, inferred, or unsupported | Question or none |

Only `Verified` and `user-confirmed` claims may appear as facts in the finished
case study. An inferred claim must be confirmed by the user before publication.
Delete the working ledger when it is no longer needed; do not include it in the
MDX.

For every metric, also establish its source, unit, population, and time period.
If those details cannot be established, replace the metric with a narrower,
accurate qualitative statement after user confirmation, or omit it.

### Stage 3: Interview the user

Interview the user only after the repository inspection. Begin by briefly
summarizing what the repository establishes, then ask a compact, grouped set of
questions covering only facts or decisions that remain unresolved.

The interview must resolve:

- The product or client name and a one-sentence description of the product.
- The primary users and the real problem or unmet need.
- The product's stage, relevant year or range of years, and important timeline
  context.
- The author's exact role, responsibilities, and boundaries of ownership.
- The team composition and which results should be attributed to the team.
- The product or design process, including research, feedback, iteration, and
  alternatives considered, but only where those activities actually occurred.
- The most important constraints and why key decisions were made.
- What shipped or was delivered, and how that changed the user or team
  experience.
- Quantitative or qualitative outcomes and how each outcome was measured or
  observed.
- Any confidentiality, attribution, client-name, or disclosure restrictions.
- The final values for every required frontmatter field.
- Which existing asset should be the cover image and its final public path in
  the portfolio.
- Whether the case study should be marked as featured.

Tie questions to repository evidence when useful. For example: “The code shows
an offline queue for submissions. Was unreliable connectivity an explicit
product constraint, and may I describe it that way?” This is preferable to
asking the user to retell facts that the repository already proves.

User answers are publishable evidence only when they clearly confirm the claim.
If an answer is ambiguous, ask a focused follow-up. Do not fill gaps with likely
or conventional product narratives.

### Stage 4: Plan and draft the narrative

Before drafting, select one central story: the user or product problem, the
author's contribution to addressing it, and the verified result. Exclude
features and technical details that do not support that story.

Write for a product and design audience:

- Lead with the user or organizational problem, not the technology stack.
- Explain how constraints shaped the work.
- Describe meaningful decisions, alternatives, and tradeoffs rather than
  listing implementation tasks.
- Connect technical choices to user experience, product capability, delivery,
  reliability, maintainability, or team workflow.
- Use concrete examples and plain language.
- Show iteration only when evidence demonstrates that iteration occurred.
- Attribute collaborative work with language such as “the team” or “we.”
- Use “I” only for contributions the user has explicitly claimed or the
  evidence clearly establishes.
- Prefer a cohesive narrative over a résumé-style catalogue of features.
- Use short lists sparingly when they improve scanning; most of the case study
  should be prose.

Use the following narrative sequence. Headings may be refined to fit the
specific story, but every topic must be addressed:

1. **Context and user problem** — Introduce the product, users, need, and
   stakes.
2. **Role, team, and constraints** — Define the author's responsibility,
   collaborators, timeline, and practical boundaries.
3. **Product and design process** — Explain how the problem was understood and
   how the work evolved.
4. **Key decisions and tradeoffs** — Focus on two or three consequential
   choices and why they mattered.
5. **What was delivered** — Summarize the resulting experience or system
   without turning the section into a feature inventory.
6. **Verified outcomes** — Describe measurable or explicitly confirmed effects,
   including limitations where relevant.
7. **Lessons or principles demonstrated** — End with a specific reflection
   grounded in the work, not a generic inspirational statement.

### Stage 5: Select existing visual evidence

Review existing repository assets and select only images that materially help a
reader understand the product or story. Favor clear product states, flows,
before-and-after evidence, diagrams, or interface details over decorative
images.

The finished file must always have a cover image. Before finalizing:

- Identify the source asset already present in the repository.
- Ask the user to confirm that it is approved for public use.
- Obtain the exact public path it will use after being transferred to the
  portfolio, such as `/images/work/example/cover.png`.
- Use that confirmed portfolio path in `coverImage`.

Body images are optional. Include one only when its final portfolio path is also
confirmed. Use standard Markdown image syntax and concise alt text that conveys
the relevant content or state:

```md
![Dashboard comparing this month's activity by category](/images/work/example/dashboard.png)
```

Do not write alt text such as “screenshot,” “image,” or the filename. Do not
reference a local source-repository path that will break after the MDX is moved.
Because the required deliverable is a single MDX file, do not copy or package
the assets.

### Stage 6: Review and validate

Complete all checks in the final checklist before creating the deliverable. If
any check fails, revise the draft or return to the user for confirmation.

After validation, save exactly one new case-study file as
`<slug>.mdx` in the repository root. Use a concise, lowercase, kebab-case slug,
for example `inventory-workflow-redesign.mdx`. Do not modify any other
repository files.

## Required MDX format

The file must begin with valid YAML frontmatter matching this exact template:

```yaml
---
title: A specific, outcome-oriented case-study title
summary: A concise description of the problem, contribution, and value
client: Client or product name
role: Confirmed role
year: "2024–2025"
services:
  - Product design
  - Application development
technologies:
  - Technology one
  - Technology two
outcomes:
  - Verified outcome one
  - Verified outcome two
featured: false
coverImage: /images/work/example/cover.png
---
```

All fields are required and must follow these rules:

| Field | Requirement |
| --- | --- |
| `title` | Non-empty string; specific to the central story. |
| `summary` | Non-empty string; concise and free of unverified claims. |
| `client` | Non-empty, disclosure-approved client or product name. |
| `role` | Non-empty, confirmed role. |
| `year` | Non-empty string representing the confirmed year or range. |
| `services` | YAML list containing at least one non-empty item. |
| `technologies` | YAML list containing at least one technology actually used. |
| `outcomes` | YAML list containing at least one verified or user-confirmed result. |
| `featured` | YAML boolean: `true` or `false`, without quotation marks. |
| `coverImage` | Non-empty, user-confirmed final public portfolio path. |

Do not add `slug` to the frontmatter. The portfolio derives the slug from the
filename. Quote a YAML string when punctuation or syntax could make its type
ambiguous.

Place the 800–1,200 word narrative immediately after the closing frontmatter
delimiter. Use level-two headings (`##`) for the main sections. Do not add a
second level-one title because the page will render the frontmatter title.

## Language and attribution standards

- Use precise verbs: “implemented,” “designed,” “researched,” “led,”
  “collaborated,” and “supported” are not interchangeable.
- Avoid unsupported superlatives such as “seamless,” “intuitive,” “robust,”
  “innovative,” or “successful.”
- Do not claim that a change improved usability, performance, conversion, or
  satisfaction unless evidence or the user confirms that result.
- Avoid presenting output counts as outcomes. “Built twelve screens” describes
  scope; it does not establish value unless connected to a verified effect.
- Preserve uncertainty where it is material. Use accurate qualifiers such as
  “approximately” only when the underlying evidence supports them.
- Do not imply formal user research, A/B testing, usability testing, or design
  validation when the work used informal feedback or no research.
- Do not overstate technical complexity. Include architecture only when it
  explains a product constraint, decision, or result.
- Keep client and user information at the level approved for public disclosure.

## Final checklist

### Evidence and safety

- [ ] Every factual claim is supported by repository evidence or explicit user
      confirmation.
- [ ] Every metric has a confirmed source, meaning, and time context.
- [ ] Individual and team contributions are accurately distinguished.
- [ ] No inference, assumption, or planned feature is presented as shipped fact.
- [ ] No secrets, personal data, confidential details, or private endpoints are
      exposed.
- [ ] The client, product, assets, and outcomes are approved for public use.

### Frontmatter and file

- [ ] The filename is a lowercase kebab-case `<slug>.mdx`.
- [ ] The file is located in the source repository root.
- [ ] All ten required frontmatter fields are present and non-empty.
- [ ] `services`, `technologies`, and `outcomes` are non-empty YAML lists.
- [ ] `featured` is an unquoted YAML boolean.
- [ ] `slug` is not present in frontmatter.
- [ ] `coverImage` uses the confirmed final public portfolio path.
- [ ] The YAML is syntactically valid.

### Narrative quality

- [ ] The body contains 800–1,200 words, excluding frontmatter.
- [ ] The opening establishes the product, users, and problem.
- [ ] The author's role, team context, and constraints are explicit.
- [ ] The process and decisions are supported by evidence rather than a generic
      product-design formula.
- [ ] Technical details are connected to product or user consequences.
- [ ] Outcomes are verified and are not merely a list of outputs.
- [ ] The ending offers a specific, evidence-grounded lesson.
- [ ] The prose is cohesive, concise, and understandable to product and design
      readers.
- [ ] Lists are used selectively rather than as a résumé-style inventory.
- [ ] The file contains no TODOs, placeholders, evidence citations, internal
      notes, or drafting commentary.

### Visuals

- [ ] Every referenced image already exists in the source repository.
- [ ] Every image is approved for public use.
- [ ] Every image uses a confirmed final portfolio path.
- [ ] Every body image has meaningful alt text.
- [ ] No new screenshots, generated images, mockups, or edited assets were
      created.

## Completion response

After writing the MDX, report:

- The exact path of the created file.
- Its body word count.
- The repository asset selected for the cover and the confirmed portfolio path
  used in frontmatter.
- A concise statement that all published claims were repository-verified or
  explicitly confirmed by the user.

Do not create a separate evidence report, asset manifest, or supporting
document.
