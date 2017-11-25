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


## How it Works
Dinero Printer works by emulating a local PostScript compatible printer that's announced on the local network via Bonjour/MDNS which allows super easy setup on Mac and Windows computers. When the virtual printer receives a print job it takes the received PostScript document and converts it to PDF via GhostScript. Once converted to PDF it connects to Dinero via their API emulating being the official Dinero iOS app (via [dinero-js](https://github.com/auchenberg/dinero-js)) and stores the PDF as a new draft Voucher, just like the Dinero iOS app does. There's no difference for Dinero between the offical app and Dinero Printer

## Perspective
Dinero printer is a generic PostScript printer implemented in Node.js, that can be embedded and run everywhere. An interesting aspect could be to offer the Dinero Printer as a device any company could buy, plug-into their network, and that way enable everyone to send Voucers to the book keeper that sits in the other end of Dinero. In the future such bookkeeper could be an AI. Dinero would then be the platform the connects the parties, but is fully transparent to everyone. Bam!


## Development

```
npm install
npm start
```

