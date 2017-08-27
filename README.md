# cssimport-bom

A small example where the BOM in the merged css file mess up styling.

## Build instruction

Requires `gulp-cli`. Run `gulp` in the project root. This will generate the output in `./dist/`. Let your favorite web server serve this directory and navigate to `index.html`.

### Expected result

The header is styled by the rules as defined `css/header.css`.

### Actual result

The header is not styled. The Chrome Developer tools show a strange character before the rule:

![Chrome Dev tools](https://github.com/allesmi/cssimport-bom/raw/master/chrome.png "Chrome Developer tools")