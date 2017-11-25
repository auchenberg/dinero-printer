# dinero-printer
Virtual printer that forwards the print jobs to [Dinero Regnskab](https://dinero.dk/)

[![Build Status](https://travis-ci.org/auchenberg/dinero-printer.svg?branch=master)](https://travis-ci.org/auchenberg/dinero-printer)
![electorn](https://img.shields.io/badge/powered%20by-Electron-9feaf9.svg)

![](.readme/demo.gif)

## Getting started

1. Install GhostScript via HomeBrew

```
brew install ghostscript
```

2. Download binary from [lastest releases](https://github.com/auchenberg/dinero-printer/releases)

3. Add `Dinero Printer` in OSX's `Printers & Scanners` settings by clicking `Add`

4. Click the Dinero logo in your toolbar, go to `Preferences` and enter your API key + organization id.

5. Bam, ready to print to Dinero.

## Development

```
npm install
npm start
```

