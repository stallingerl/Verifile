## Installation
Just download the code from Github and install the dependencies.

git clone git@github.com:stallingerl/Verifile.git
cd Verifile
npm install

Now let's build the CSS assets before starting the app.

npm run build

## Configuration
You need to create a config file to store your own server, BTC wallet and email information.

cp config/test.yaml config/local-development.yaml

Report to the config page to learn more about config variables.

## Running

npm start

The app will be listening at http://localhost:3004/.


Read [the docs](https://docs.proofofexistence.com) for more.

## Known Issues
* It can't support Microsoft Windows. (__Even you try to run under MYSYS__)

## License

© Copyright 2021 WEBanizer AG, all rights reserved.<br />

