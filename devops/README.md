# aloha-talk-web

An Aloha Health Network fork of [vector-im/riot-web](https://github.com/vector-im/riot-web)

## Development Setup

Follow these instructions to get a local development environment setup.

### Add Upstream

It is important to keep our fork current with the maintainer's upstream.
Use the following commands to make sure you're building upon the latest release of riot.im

Make sure you have an upstream remote:
```console
> git remote -v
origin	git@github.com:AlohaHealth/aloha-talk-web.git (fetch)
origin	git@github.com:AlohaHealth/aloha-talk-web.git (push)
upstream	git@github.com:vector-im/riot-web.git (fetch)
upstream	git@github.com:vector-im/riot-web.git (push)
```

If your remotes don't match above, add the upstream remote:
```console
git remote add upstream git@github.com:vector-im/riot-web.git
```

### Update from Upstream

Before starting a new major feature, make sure our fork is current with the
latest released version of riot.im by comparing version numbers:

[riot-web version](https://github.com/vector-im/riot-web/blob/master/package.json#L5)
should match our
[aloha-talk-web version](https://github.com/AlohaHealth/aloha-talk-web/blob/master/package.json#L5)

If the versions do not match, it's time for an update!

```console
# Fetch upstream changes
git fetch upstream

# Update your own master
git checkout master
git pull

# Create and upstream-update branch
git checkout -b upstream-update
git merge upstream/master

# Push the upstream-update branch and open a Pull Request
git push origin upstream-update
```

[Open a Pull Request](https://github.com/AlohaHealth/aloha-talk-web/compare/master...AlohaHealth:upstream-update?expand=1) and get approval before merging to master.

**IMPORTANT:** Make sure your PR is comparing the correct branches:
> base: master <= compare: upstream-update
