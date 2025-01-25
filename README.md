<p align="center">
  <img src="https://github.com/remarkablegames/kiki-and-boba/blob/master/public/logo.png" alt="Kiki and Boba">
</p>

# Kiki and Boba

![release](https://img.shields.io/github/v/release/remarkablegames/kiki-and-boba)
[![build](https://github.com/remarkablegames/kiki-and-boba/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablegames/kiki-and-boba/actions/workflows/build.yml)

💦 Capture the enemies with your bubbles!

Play the game on:

- [remarkablegames](https://remarkablegames.org/kiki-and-boba)

## How to Play

- Move with WASD or arrow keys
- Left click to shoot bubble at enemy
- Enemies will pop if they get hit with too many bubbles
- Enemies in a bubble can also fall in a sinkhole
- Avoid enemies and projectiles

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/kiki-and-boba.git
cd kiki-and-boba
```

Install the dependencies:

```sh
npm install
```

Update the environment variables:

```sh
cp .env .env.local
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

You will also see any errors in the console.

### `npm run build`

Builds the game for production to the `dist` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

### `npm run bundle`

Builds the game and packages it into a Zip file in the `dist` folder.

Your game can be uploaded to your server, [Itch.io](https://itch.io/), [Newgrounds](https://www.newgrounds.com/), etc.

## License

[MIT](LICENSE)
