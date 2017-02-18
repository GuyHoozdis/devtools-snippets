# devtools-snippets

Utilities and helpers for [Chrome DevTools][devtools-snippets].

## Resources


Chrome DevTools

 * [Keyboard Shortcuts][devtools-shortcuts]
 * [DevTools Snippets][devtools-snippets] - an alternative to [Bookmarklets][bookmarklets] and what got me started on this adventure.
 * [DevTools Plugins][devtools-plugins] - has someone already done VIM bindings?
 * [Web Starter Kit][devtools-web-starter-kit] - an opinionated boilerplate for web development.
 * [Polymer Starter Kit][devtools-polymer-starter-kit] - is a starting point for building apps using a drawer-based layout.


After I created this repo, I discovered these resources:

 * A [package][npm-distributed-snippets] of snippets distributed through NPM.
 * Just [some dudes snippets][some-dudes-snippets].


### Other browsers

I haven't looked at the functionality, the equivelant of DevTools, that
FireFox, IE, Safari, Opera, ... provide.  I'll have to look into that.


## Goals for this project:

This is just an opportunity, and an excute, for me to play around with technologies
that I don't get to use very often.

Some lofty ideas that I would like to get to eventually:

 - Create a GitHub site for this project.
 ..- Perhaps leverage that interface to install Bookmarklet versions of the snippets.
 ..- Just to learn about this functionality, because I've been wanting to do that.
 - Create a plugin for DevTools.  I'm all about those VI bindings.
 ..- I just googled it for the first time.
 ..- This guy did _[something][devtools-vim-bindings]_.  I'll have to check it out.
 ..- Several years ago there was a [feature request][chromium-feature-request]. 
 ..- "Supporting vi edit is a significant effort with very limited interest. Closing as won't fix.  - pfeldman@chromium.org"
 ...- Until this moment I didn't know I had a nemesis.
 ...- [Nemesis](https://www.google.com/search?q=pfeldman+chromium)
 - Create a package.json
 ..- Testing entry point
 ..- Installation mechanism


[devtools-snippets]: https://developers.google.com/web/tools/chrome-devtools/snippets
[devtools-shortcuts]: https://developers.google.com/web/tools/chrome-devtools/shortcuts
[devtools-plugins]: https://developer.chrome.com/extensions/devtools
[devtools-web-starter-kit]: https://developers.google.com/web/tools/starter-kit/
[devtools-polymer-starter-kit]: https://developers.google.com/web/tools/polymer-starter-kit/
[npm-distributed-snippets]: https://github.com/bahmutov/code-snippets
[some-dudes-snippets]: https://github.com/bgrins/devtools-snippets
[bookmarklets]: https://en.wikipedia.org/wiki/Bookmarklet
[devtools-vim-bindings]: https://github.com/mllg/vim-devtools-plugin
[chromium-feature-request]: https://bugs.chromium.org/p/chromium/issues/detail?id=111516
