# Horizon Chat app

## Install

### RethinkDB and Horizon

First, you must install RethinkDB. It's an awesome database, with amazing
features such as pushing changes in collections (tables) to client application.

Then, you must install Horizon via `npm install -g horizon`. Horizon will be
accessible via `hz` command.

### Chat App

Checkout the repo and simply run `npm install`. Then you must initialize your
Horizon `secrets.toml` file via `hz init` command in the project directory.

## How to run

First, you have to run your Horizon listener.

`hz serve --dev`

Afterwards, run the webpack command.

`webpack --watch --progress --colors`

This will run webpack which will watch over changes in the files and repacks
everything (hotloading).
