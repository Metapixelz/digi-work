# Implementation Plan (Updated - Docker Compose Integration)

We are integrating the custom configurations from the old root `docker-compose.yaml` into the clean production template `contrib/docker/docker-compose.prod.yaml`.

## Comparison Findings & Risks

> [!IMPORTANT]
> 1. **Upstream Improvements**: The new `docker-compose.prod.yaml` from upstream includes crucial updates that do not exist in the old compose file:
>    - WebSocket session affinity / sticky cookies via Traefik (`wa_ws_affinity`).
>    - `/lettericons` support for the icon server.
>    - Critical new environment variables (e.g. `CLIENT_DISCONNECTION_RETENTION_MS`, `REDIS_HOST`, `MINIMUM_DISTANCE`, `GROUP_RADIUS`, LiveKit variables).
> 2. **Custom Images**: The old compose file hardcoded custom images:
>    - `alreadydonewithu/play:latest`
>    - `alreadydonewithu/back:latest`
>    - `alreadydonewithu/uploader:latest`
>    - `alreadydonewithu/map-storage:latest`
>    In the new repository, we customized the build workflows to tag images as `digi-work-play` and `digi-work-map-storage`.

## Proposed Solution
Instead of overwriting the new production template with the old file (which would break WebSocket affinity and new upstream variables), we will:
1. **Retain the new production template** as the base structure.
2. **Update image names** to match the custom built images:
   - `play` -> `alreadydonewithu/digi-work-play:${VERSION:-latest}` (or configurable variables).
   - `map-storage` -> `alreadydonewithu/digi-work-map-storage:${VERSION:-latest}`.
   - `back` -> `alreadydonewithu/back:${VERSION:-latest}`.
   - `uploader` -> `alreadydonewithu/uploader:${VERSION:-latest}`.
3. Review and align any other specific custom volume configurations.

## Verification Plan
- Validate syntax using `docker compose -f contrib/docker/docker-compose.prod.yaml config`.
