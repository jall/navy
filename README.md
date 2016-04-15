navy
====

> Dev environments made easy with Docker

This project is a work in progress and aims to be a tool to help make working on your application easier when it has many services, perfect if you have a microservice-like architecture.

It adds additional functionality on top of Docker Compose which means it's super easy to get started if you're already familiar with the Docker ecosystem.

## Features

- **Easily run multiple instances of your environment in parallel.**

  This is useful if you want to have a development environment where you do all of your usual, manual testing, but also want to be able to spin up another environment with all of your services for an automated integration test run.

- **Javascript API for interfacing with Docker and Docker Compose**

  Easily launch and manage environments from your code. Useful for if you want to spin up an environment at the start of a test run.

- *and more... see the Roadmap below*


## Installation

Navy can be installed globally as a CLI tool, or locally in your application so you can use the API to manage environments from code.

### CLI installation

```sh
$ npm install -g navy
$ navy help
```

### Package installation

```sh
$ npm install --save-dev navy
```

## Getting started

- [Guide to using the CLI](docs/using-the-cli.md)

## Roadmap

- **Ability to manipulate services in the environment during development.**

  Your services shouldn't have to be fixed to what is defined in your Docker Compose file. You might want to take down a service and bring it up with some volumes mounted and the entrypoint command overridden so you can work on and develop that service live with automatic restarting.

  You might want to temporarily use a custom tag for a service, maybe because a QA engineer wants to test an old version.

- **Plugin system**

  Sometimes you will want to add some CLI functionality to Navy which is specific to your application or development team.


## License

Licensed under the MIT License.

[View the full license here](https://raw.githubusercontent.com/momentumft/navy/master/LICENSE).
