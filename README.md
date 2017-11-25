<h1 align="center">
  <br>
    <img src="https://raw.githubusercontent.com/auchenberg/dinero-printer/master/.icons/icon.png" alt="logo" width="150">
  <br>
  dinero-printer
  <br>
  <br>
</h1>

<h4 align="center">Virtual printer that forwards print jobs to <a href="https://dinero.dk/">Dinero Regnskab</a></h4>

<p align="center">
  <a href="https://travis-ci.org/auchenberg/dinero-printer.svg?branch=master"><img src="https://travis-ci.org/auchenberg/dinero-printer.svg?branch=master" alt="Travis"></a>
  <img src="https://img.shields.io/badge/powered%20by-Electron-9feaf9.svg" alt="Electron">
</p>

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

