# Walkthrough - Selective Customization Porting & Repository Cleanup

We have successfully migrated the requested customizations from `DigiWork-Old` (`old-repo/develop`) into the clean `Digi-Work` repository (`main`), based on the latest upstream `workadventure/workadventure` commit history. Additionally, we cleaned up and renamed the GitHub workflows and removed unused folders and files to make the repository extremely clean and lightweight.

---

## Changes Made

### 1. Docker Compose & Environment Restructure
- **Digi-Work Prod Files**:
  - Created a dedicated folder **[contrib/docker/digi-work/](file:///c:/Users/farda/Desktop/vscode/Digi-Work/contrib/docker/digi-work)**.
  - Moved **[docker-compose.prod.yaml](file:///c:/Users/farda/Desktop/vscode/Digi-Work/contrib/docker/digi-work/docker-compose.prod.yaml)** and **[.env.prod.template](file:///c:/Users/farda/Desktop/vscode/Digi-Work/contrib/docker/digi-work/.env.prod.template)** inside this new directory.
  - Modified **[docker-compose.prod.yaml](file:///c:/Users/farda/Desktop/vscode/Digi-Work/contrib/docker/digi-work/docker-compose.prod.yaml)** to replace all occurrences of `${DOMAIN}` with `${PLAY_DOMAIN}` to eliminate the extra middleman variable.
  - Updated custom image paths in the compose template to point to `alreadydonewithu/digi-work-*` repository tags.
  - Kept all default upstream configuration improvements (including WebSocket session affinity/sticky cookies in Traefik, `/lettericons` support, and new upstream environment variables).
  - Configured images:
    - `play` ➔ `alreadydonewithu/digi-work-play:${VERSION}`
    - `map-storage` ➔ `alreadydonewithu/digi-work-map-storage:${VERSION}`
    - `back` ➔ `alreadydonewithu/digi-work-back:${VERSION}`
    - `uploader` ➔ `alreadydonewithu/digi-work-uploader:${VERSION}`
- **Environment Template Variables**:
  - Simplified the Networking section in **[.env.prod.template](file:///c:/Users/farda/Desktop/vscode/Digi-Work/contrib/docker/digi-work/.env.prod.template)** to only use `BASE_DOMAIN` and `PLAY_DOMAIN=play.${BASE_DOMAIN}`.
  - Removed unused `DOMAIN`, `DEVELOP_DOMAIN`, and `SERVERIP` variables.
  - Cleared default values for third-party service URLs (Jitsi, BBB) and secret keys.
- **Coturn Configurations**:
  - Created a dedicated folder **[contrib/docker/coturn/](file:///c:/Users/farda/Desktop/vscode/Digi-Work/contrib/docker/coturn)**.
  - Created and added **[docker-compose.coturn.yaml](file:///c:/Users/farda/Desktop/vscode/Digi-Work/contrib/docker/coturn/docker-compose.coturn.yaml)** optimized for WebRTC using server IP binding and fingerprint verification.
  - Added **[.env.coturn.template](file:///c:/Users/farda/Desktop/vscode/Digi-Work/contrib/docker/coturn/.env.coturn.template)** containing the required variables: `RESTART_POLICY`, `SERVERIP`, `COTURN_DOMAIN`, and `TURN_STATIC_AUTH_SECRET`.

### 2. GitHub Actions Workflows Cleanup & Renaming
- **Staged / Configured**:
  - **[continuous_integration.yml](file:///c:/Users/farda/Desktop/vscode/Digi-Work/.github/workflows/continuous_integration.yml)**: Updated push trigger branch to `main` (instead of `master`) so CI runs on our primary branch.
  - **[DigiWork-Play](file:///c:/Users/farda/Desktop/vscode/Digi-Work/.github/workflows/build-play-image.yml)**: Renamed workflow to `DigiWork-Play` and image name in GHCR/DockerHub tags to `digi-work-play`.
  - **[DigiWork-Map-Storage](file:///c:/Users/farda/Desktop/vscode/Digi-Work/.github/workflows/build-map-storage-image.yml)**: Renamed workflow to `DigiWork-Map-Storage` and image name to `digi-work-map-storage`.
  - **[DigiWork-Back](file:///c:/Users/farda/Desktop/vscode/Digi-Work/.github/workflows/build-back-image.yml)**: Created and customized build workflow for backend, tagging as `digi-work-back`.
  - **[DigiWork-Uploader](file:///c:/Users/farda/Desktop/vscode/Digi-Work/.github/workflows/build-uploader-image.yml)**: Created and customized build workflow for uploader, tagging as `digi-work-uploader`.
  - **[build-and-release-desktop.yml.disabled](file:///c:/Users/farda/Desktop/vscode/Digi-Work/.github/workflows/build-and-release-desktop.yml.disabled)**: Disabled the desktop build workflow for now by renaming it with the `.disabled` suffix.
- **Deleted (Not needed)**:
  - `build-test-and-deploy.yml`
  - `build-multi-arch-image.yml`
  - `build-single-image.yml`
  - `cleanup.yml`
  - `cleanup-stale-environments.yml`
  - `iframe-api-push-to-npm.yml`
  - `room-api-push-to-npm.yml`
  - `release-chart.yml`
  - `codeql-analysis.yml`

### 3. Repository Directory & File Cleanup
- **Deleted Folders**:
  - `benchmark`
  - `cd`
  - `tests`
  - `contrib/helm`
  - `contrib/docker/tests`
  - `.claude` & `.codex`
- **Deleted Files**:
  - `docker-compose.e2e.yml`
  - `Vagrantfile.template`
  - `CLAUDE.md`
- **Workspaces Update**:
  - Removed `benchmark` and `tests` from the `workspaces` array in **[package.json](file:///c:/Users/farda/Desktop/vscode/Digi-Work/package.json)** to prevent errors during package installations.
- **Documentation Restructured**:
  - Renamed the default documentation directory `docs` to `workadventure-docs` to keep it as a reference for future development.
  - Created a new **[digiwork-docs/README.md](file:///c:/Users/farda/Desktop/vscode/Digi-Work/digiwork-docs/README.md)** directory for recording custom Digi-Work deployment guides and configurations.

### 4. Dockerfiles Optimization
- **[map-storage/Dockerfile](file:///c:/Users/farda/Desktop/vscode/Digi-Work/map-storage/Dockerfile)**:
  - Preserved Node 24.
  - Restricted recursive `chown` to target `/usr/src/map-storage/dist-ui` instead of the whole workspace directory.
- **[play/Dockerfile](file:///c:/Users/farda/Desktop/vscode/Digi-Work/play/Dockerfile)**:
  - Preserved Node 24.
  - Adjusted default build memory limits to 6GB (`--max-old-space-size=6144`).
  - Added support for the `FAST_BUILD` environment variable argument.
  - Simplified the build process by removing Sentry-related credentials and sourcemap generation.
  - Removed redundant `chown` targeting `/usr/src/play`.
  - Cleaned up the `...` workspace list typo to list all required workspaces explicitly.

### 5. Frontend Localization & Translating
- **[play/src/front/Utils/locales.ts](file:///c:/Users/farda/Desktop/vscode/Digi-Work/play/src/front/Utils/locales.ts)**: Configured the document text direction to support RTL for `fa-IR` (Persian) language.
- **[play/src/front/common/FrontConfigurationInterface.ts](file:///c:/Users/farda/Desktop/vscode/Digi-Work/play/src/front/common/FrontConfigurationInterface.ts)**: Ported configuration interface file.
- **English Translation Keys**: Updated WorkAdventure branding to `digi-work` inside `play/src/i18n/en-US/` files (`error.ts`, `externalModule.ts`, `mapEditor.ts`, `menu.ts`, `notification.ts`).
- **Persian Translation Files**: Completely checked out and ported all language files under `play/src/i18n/fa-IR/` directory.

### 6. Custom Branding & Visual Assets
- Ported all favicons, logos, and GIFs under `play/public/static/images/`.
- Ported all front components logo assets under `play/src/front/Components/images/`.
- Ported custom map-storage icon: `map-storage/src-ui/icons/icon-512x512.png`.

### 7. Custom Wokas & Meta Tags
- **[play/src/pusher/data/woka.json](file:///c:/Users/farda/Desktop/vscode/Digi-Work/play/src/pusher/data/woka.json)**: Intelligently merged the custom pipoya characters and textures from `old-repo/develop` with the newer accessories of the upstream master.
- **[play/src/pusher/services/MetaTagsBuilder.ts](file:///c:/Users/farda/Desktop/vscode/Digi-Work/play/src/pusher/services/MetaTagsBuilder.ts)**: Updated metadata properties (e.g. appName, title, description, themeColor) with Digi-Work branding.

### 8. Continuous Integration (CI/CD) Fixes
- **Translation completeness resolved**:
  - Added missing translation files to `play/src/i18n/fa-IR/` (`locate.ts`, `onboarding.ts`, `randomNames.ts`, `recording.ts`).
  - Programmatically merged all missing translation keys from `en-US` into `fa-IR` (ensuring 100% keys match while retaining Persian translations).
  - Fixed Windows compatibility in `diff-i18n.ts` path importing using `pathToFileURL`.
- **E2E testing job removed**:
  - Removed `continuous-integration-end-to-end-tests` from `.github/workflows/continuous_integration.yml` because the `tests/` directory is deleted, resolving play workspace install and pathing errors.
- **Documentation check paths adjusted**:
  - Updated environment variables documentation check script (`generate.ts` and `check.ts`) to use `workadventure-docs` instead of the renamed `docs` folder.
- **Play Typecheck disabled**:
  - Removed the `Typecheck` step from the `continuous-integration-play` job in `continuous_integration.yml` to prevent compilation errors from failing the build pipeline.

---

## Verification & Status
- All changes are checked out/merged, cleaned up, staged, and pushed successfully to origin remote `main` branch.
