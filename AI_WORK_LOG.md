# AI Work Log

This file records every change made by the autonomous AI agent while
implementing the requested features. Entries are appended chronologically and
are never overwritten.

---

## Step 1 — GitHub Repository Section

**Timestamp:** 2026-06-28

**Files modified / created:**
- `website/src/components/GitHubSection/index.tsx` (new)
- `website/src/components/GitHubSection/styles.module.css` (new)
- `website/src/pages/index.tsx` (modified — import + render)
- `website/docusaurus.config.ts` (modified — added `customFields` with `githubOwner`, `githubRepo`, `donation`)
- `website/src/types/customFields.d.ts` (new — TS module augmentation)

**Exact changes:**
1. Created `GitHubSection` component that fetches the latest 6 commits and repo stats (stars, forks, issues) directly from the GitHub REST API.
2. Reads owner/repo from `siteConfig.customFields` (set in `docusaurus.config.ts`) — no hardcoded repository identity in component logic.
3. Handles three states: loading (spinner), error (rate-limit vs generic), and success (stats badges + commit list with avatar, message, author, SHA, relative time).
4. Added `customFields` block to `docusaurus.config.ts` containing `githubOwner`, `githubRepo`, and `donation` settings so they are editable without code changes.
5. Added TypeScript module augmentation (`customFields.d.ts`) so the custom fields are type-safe.
6. Wired `<GitHubSection />` into the home page between Features and QuickStart.
7. Added a "Contributors" navbar item pointing to `/contributors` (page created in a later step).

**Reason for change:**
Implement feature 1 (GitHub Repository Section) and lay the configuration groundwork for feature 3 (Donation Modal).

**Assumptions:**
- The GitHub repository to display is `CyberSinook/Sinux` (matches existing config).
- Unauthenticated GitHub API requests are acceptable; an optional `localStorage['github_token']` is supported for maintainers who hit rate limits.
- The component is rendered client-side (uses `fetch` in `useEffect`), which is fine for a Docusaurus SPA.

---

## Step 2 — Contributors Page

**Timestamp:** 2026-06-28

**Files modified / created:**
- `website/src/pages/contributors.tsx` (new)
- `website/src/pages/contributors.module.css` (new)

**Exact changes:**
1. Created a standalone `/contributors` page (Docusaurus page component) that fetches all contributors from the GitHub REST API (`/repos/{owner}/{repo}/contributors`), paginating across up to 3 pages (300 contributors).
2. Reads owner/repo from `siteConfig.customFields` — same config-driven approach as the GitHub section, nothing hardcoded.
3. Splits contributors into two groups: "Main Contributors" (those whose contribution count is ≥ 30% of the top contributor's count) and regular "Contributors". This adapts to any repo size without a fixed threshold.
4. Main contributors render as larger cards with a cyan border, a "Main" badge, and a 96px avatar. Other contributors render in a denser grid with 64px avatars.
5. Each card shows avatar, username (links to GitHub profile), and contribution count.
6. Handles loading (spinner), error (rate-limit vs generic), and empty states — all translated.
7. Uses `Layout` from `@theme/Layout` to integrate with the existing navbar/footer.

**Reason for change:**
Implement feature 2 (Contributors Tab) — show all contributors, distinguish main contributors, fetch from GitHub API, display avatar/username/contribution count.

**Assumptions:**
- "Main contributor" is defined by a relative threshold (30% of the top contributor's commits) rather than a hardcoded list, so it stays correct as the project evolves.
- Fetching 3 pages of 100 is sufficient for the vast majority of repositories; GitHub's anonymous rate limit (60 req/h) can handle this.

---

## Step 3 — Donation Modal

**Timestamp:** 2026-06-28

**Files modified / created:**
- `website/src/components/DonateModal/index.tsx` (new)
- `website/src/components/DonateModal/styles.module.css` (new)
- `website/src/theme/Root/index.tsx` (new — Docusaurus Root wrapper)
- `website/src/css/custom.css` (modified — `.donate-navbar-btn` styling)

**Exact changes:**
1. Created `DonateModal` component with three exports:
   - `DonateModalDialog` (the modal itself) — reads `link` and `wallets[]` from `siteConfig.customFields.donation`. Shows a sponsor link button and a list of crypto wallets (ticker, label, address) with a copy-to-clipboard button each.
   - `DonateButton` — a trigger button (variants: `navbar` for the navbar, `standalone` for use elsewhere). Dispatches a `sinux:open-donate` custom event.
   - Default export `DonateModal` = renders `DonateModalDialog` (mounted globally).
2. Modal handles: Escape-to-close, click-outside-to-close, body scroll lock while open, copy feedback ("Copied!" for 2s), and an empty state when no donation config exists.
3. Created `src/theme/Root/index.tsx` — the Docusaurus Root wrapper pattern. Mounts the modal globally and portals a `DonateButton` into `.navbar__items--right` so the Donate button appears in the navbar without swizzling.
4. Added `.donate-navbar-btn` styling to `custom.css` (red-tinted button to distinguish from regular links).
5. The donation link and wallet addresses are **not hardcoded in components** — they live in `customFields.donation` in `docusaurus.config.ts` and are editable there.

**Reason for change:**
Implement feature 3 (Donation Modal) — Donate button opens a modal with donation link + crypto wallets, all configurable via settings fields without touching source code.

**Assumptions:**
- The Root wrapper is the idiomatic Docusaurus way to inject global UI without swizzling; Docusaurus automatically picks up `src/theme/Root/index.tsx`.
- Clipboard API is available in secure contexts; copy failures are silently ignored (no error shown to user).
- The donation config shape (`{link, wallets:[{ticker,label,address}]}`) is flexible enough for common donation methods.

---

## Step 4 — Full Persian Localization

**Timestamp:** 2026-06-28

**Files modified / created:**
- `website/i18n/fa/code.json` (modified — added 30+ new translation IDs for GitHub section, contributors page, donate modal)
- `website/i18n/fa/docusaurus-theme-classic/navbar.json` (modified — added Contributors item)
- `website/i18n/fa/docusaurus-theme-classic/footer.json` (modified — added Contributors item)
- `website/i18n/fa/docusaurus-plugin-content-docs/current.json` (modified — translated sidebar category labels to Persian)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/intro.md` (new — Persian translation)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/architecture/overview.md` (new)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/architecture/boot-flow.md` (new)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/architecture/memory-layout.md` (new)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/syscalls/abi.md` (new)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/syscalls/table.md` (new)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/building/dependencies.md` (new)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/building/build.md` (new)
- `website/i18n/fa/docusaurus-plugin-content-docs/current/building/running.md` (new)
- `website/i18n/fa/docusaurus-plugin-content-blog/2026-06-03-v0-04.md` (new — Persian blog post)
- `website/i18n/fa/docusaurus-plugin-content-blog/options.json` (modified — translated blog title/description/sidebar to Persian)
- `website/docusaurus.config.ts` (modified — added Contributors to footer)
- `website/README.md` (modified — added Persian README link)
- `README.fa.md` (new — Persian project README)

**Exact changes:**
1. Added Persian translations for all new `<Translate>` IDs introduced in Steps 1–3 (GitHub section, contributors page, donate modal) to `fa/code.json`.
2. Translated ALL documentation pages (9 docs files) into Persian under `i18n/fa/docusaurus-plugin-content-docs/current/`.
3. Translated the blog post into Persian.
4. Translated sidebar category labels (Architecture → معماری, Syscalls → فراخوان‌های سیستمی, Building & Running → ساخت و اجرا) in `current.json`.
5. Translated blog options (title, description, sidebar label) into Persian.
6. Added "Contributors" translations to navbar.json and footer.json.
7. Added Contributors link to the footer in `docusaurus.config.ts`.
8. Created a Persian README (`README.fa.md`) and linked it from the main README.

**Reason for change:**
Implement feature 4 (Full Persian Localization) — translate all user-facing text including pages, components, navigation, docs, and README into Persian, following the existing i18n architecture.

**Assumptions:**
- The existing Docusaurus i18n architecture (`i18n/fa/` directory with `code.json`, per-plugin JSON, and translated markdown files) is the canonical pattern — extended rather than replaced.
- RTL direction is already configured in `docusaurus.config.ts` (`direction: 'rtl'` for `fa`).
- Technical terms (QEMU, GRUB, BIOS, UEFI, ELF, etc.) are kept in English within the Persian text as is standard in Persian technical writing.

---

## Step 5 — GitHub API fix + final verification

**Timestamp:** 2026-06-28

**Files modified:**
- `website/docusaurus.config.ts` (changed `githubOwner` from `CyberSinook` to `SinuxProject`)

**Exact changes:**
1. Discovered the GitHub repository `CyberSinook/Sinux` has been renamed/moved to `SinuxProject/Sinux`. The API returns a 301 redirect.
2. Updated `customFields.githubOwner` to `SinuxProject` so the GitHub API integration fetches from the correct, current repository.
3. Verified the API returns valid data: 24 stars, 5 forks, 2 contributors (CyberSinook with 9 commits as main, CluvexStudio with 1 as other), and latest commits are accessible.
4. Rebuilt both locales (en + fa) — both succeed with zero warnings or errors.
5. Verified the build output contains: contributors page (en + fa), DonateModal code + CSS in JS bundle, GitHubSection component, and Persian translations on the fa homepage.

**Reason for change:**
The GitHub API integration must point to the live repository. Without this fix, the API call would 301-redirect and the component would show an error state.

**Assumptions:**
- `SinuxProject/Sinux` is the canonical repository name going forward.
- The existing `href` links in the navbar/footer pointing to `github.com/CyberSinook/Sinux` still work because GitHub auto-redirects old organization/repo names, but the API is stricter and does not follow redirects on all endpoints.
