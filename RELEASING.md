
# Releasing zrok

## Semantic Versioning

This project uses semantic versioning. See [here](https://semver.org/) for more information.

Release tags like `v3.2.1` are eligible for promotion to stable status in GitHub and downstream distribution channels.

Pre-release tags like `v3.2.1-rc1` (with a semver hyphenated pre-release suffix) are published in GitHub as pre-releases, and are blocked from promotion to downstream distribution channels if they are marked "stable" by mistake and the GitHub "released" event fires.

Pre-release version strings must contain exactly one hyphen, and may not contain an underscore.

## How to Trigger Release Automation

> [!NOTE]
> Each trigger is outlined separately, but some may occur simultaneously, e.g., when a draft release is published as stable rather than first publishing it as a pre-release, or a pre-release is promoted to stable and marked as latest at the same time.

1. Push a tag to GitHub like `v*.*.*` to trigger **the pre-release workflow**. Wait for this workflow to complete before marking the release stable (`isPrerelease: false`).
    1. Linux packages are uploaded to Artifactory as pre-releases.
    1. Docker images are uploaded to Docker Hub as pre-releases.
    1. A release is drafted in GitHub.
1. Edit the draft and publish the release as a pre-release (`isPrerelease: true`).
    1. The one-time GitHub "published" event fires, and binaries are available in GitHub.
1. If the release does not have a pre-release suffix, mark it as stable by un-checking (`isPrerelease: false`).
    1. The one-time GitHub "released" event fires.
    1. Linux packages are promoted to "stable" in Artifactory.
    1. Docker images are promoted to `:latest` in Docker Hub.
    1. Homebrew formulae are built and released.
    1. Python wheels are built and released to PyPi.
    1. Node.js packages are built and released to NPM.
1. Edit the stable release to mark it as latest.
    1. https://docs.zrok.io/docs/guides/install/ always serves the "latest" stable version via GitHub binary download URLs.

## Rolling Back Downstreams

The concepts, tools, and procedures for managing existing downstream artifacts in Artifactory and Docker Hub are identical for zrok and ziti. Here's the [RELEASING.md document for ziti](https://github.com/openziti/ziti/blob/main/RELEASING.md#rolling-back-downstreams).

## Updating the Homebrew Formula

[`zrok.rb`](https://github.com/Homebrew/homebrew-core/blob/master/Formula/z/zrok.rb) is a Ruby script in `Homebrew/homebrew-core` that defines the build procedure for the `zrok` binary. The Homebrew workflow triggered by the "released" event in GitHub sends a pull request to update the zrok formula. Usually, the only differences are the HTTP URL of the release's source code archive and it's checksum. It's also necessary to send a PR for the Ruby script when the zrok build procedure changes  ([example PR](https://github.com/Homebrew/homebrew-core/pull/210917)).

```bash
# Clone the Homebrew/homebrew-core repository
brew tap --force homebrew/core
cd $(brew --repo homebrew/core)

# if already cloned then fetch
git fetch origin master

# if you're patching a PR HEAD that failed to build, then branch from that PR branch's HEAD
git fetch origin pull/<pr-number>/head  # e.g. `git fetch origin pull/1234/head`
git checkout -b fix-homebrew FETCH_HEAD

# Disable API-based installation to enable local build and testing
export HOMEBREW_NO_INSTALL_FROM_API=1

# Edit ./Formula/z/zrok.rb
brew edit zrok

# Build from source
brew install --verbose --formula --build-bottle zrok

# run the test section of the formula
brew test zrok

# Audit the the formula
brew audit --strict zrok

# Check formula styles
brew style zrok
```

Finally, if correcting a failed GitHub Actions check on a PR based on Homebrew/homebrew-core master branch, then push commits as the ziti-ci user with the "gh_ci_key" SSH key to update the PR. A valid commit message is just the formula name and new version string, e.g., "zrok 1.0.0".

[Homebrew Documentation](https://docs.brew.sh/FAQ#can-i-edit-formulae-myself)

