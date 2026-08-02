# DigiWork maintenance backlog

These items were intentionally deferred from the current production-fix deployment.

## Application

- Configure and validate Matrix before enabling Matrix-backed chat. The current Matrix URL, domain, and admin account variables are empty, while the provider is instantiated at startup.
- Make Matrix startup conditional so an intentionally disabled Matrix integration does not emit `Invalid URL` errors.
- Reproduce and add multi-user regression tests for the space teardown races currently logged as `SpaceDestroyedError` and `WebRTC sender not found`.
- Decide whether optional, not-yet-created custom entity collections should be logged as errors or treated as an empty collection.

## Server and security

- Replace password-based root SSH access with a non-root sudo account and SSH keys; disable root password login and X11 forwarding.
- Enable a host firewall with explicit rules for SSH, HTTP/HTTPS, TURN, and the required gRPC entry point. Account for Docker's firewall chains when implementing it.
- Add and validate HTTP security headers, including HSTS and `X-Content-Type-Options`; remove `X-Powered-By` after checking iframe, media, and embedded-app compatibility.
- Investigate the one-time `cloud-final.service` failure from the provisioning logs. DigiWork is not dependent on this unit and is currently healthy.
- Consider adding swap or stricter container memory limits before increasing concurrent users on the 4 GiB host.

## Operations

- Coturn currently disables its local telnet CLI because `cli-password` is empty. This is not required for TURN traffic; configure it only if the administration CLI will be used.
- Remove the empty Coturn command argument if the startup warning remains after the next container recreation.
- Restore Play typecheck or a smaller production-build smoke check in CI when the current generated-protobuf setup is ready. Full E2E coverage remains intentionally out of scope.
