#!/bin/bash

npm install -g yarn
yarn
yarn typeorm migration:run
yarn dev
