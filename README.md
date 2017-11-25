# dinero-printer
Virtual printer that forwards the print jobs to [Dinero Regnskab](https://dinero.dk/)

[![Build Status](https://travis-ci.org/auchenberg/dinero-printer.svg?branch=master)](https://travis-ci.org/auchenberg/dinero-printer)
![electorn](https://img.shields.io/badge/powered%20by-Electron-9feaf9.svg)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Getting started

1. Install GhostScript

```
brew install ghostscript
```

2. Download binary from [lastest releases](https://github.com/auchenberg/dinero-printer/releases)

3. Add `Dinero Printer` in OSX's `Printers & Scanners` settings by clicking `Add`

4. CLick the Dinero logo in your toolbar, go to Option and enter your API key + secret.

5. Bam, ready to print to Dinero.

## Development

```
npm install
npm start
```

