<p align="center">
  <img src="https://github.com/remarkablegames/bubble-gun/blob/master/public/logo.png" alt="Bubble Gun">
</p>

# Bubble Gun

![release](https://img.shields.io/github/v/release/remarkablegames/bubble-gun)
[![build](https://github.com/remarkablegames/bubble-gun/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablegames/bubble-gun/actions/workflows/build.yml)

Bubble Gun is a top-down survival game where you shoot bubbles at enemies.

This game was made for [Global Game Jam 2025](https://globalgamejam.org/games/2025/kiki-and-boba-4), in which the theme was `Bubble`. The game was bootstrapped from [`kaplay-template`](https://github.com/remarkablegames/kaplay-template). Read the [blog post](https://remarkablegames.org/posts/bubble-gun/).

Play the game on:

- [remarkablegames](https://remarkablegames.org/bubble-gun)
- [itch.io](https://remarkablegames.itch.io/bubble-gun)
- [newgrounds](https://www.newgrounds.com/portal/view/966187)

## How to Play

- Move with WASD or arrow keys
- Left click to shoot a bubble
- Enemies will pop if they get hit with too many bubbles
- Enemies in a bubble can fall down the drain
- Avoid enemies and projectiles

## Credits

- KitB@sh - Artist, Composer ([SoundCloud](https://soundcloud.com/k1tb4sh), [YouTube](https://www.youtube.com/@kitbash52))
- remarkablemark - Programmer ([GitHub](https://github.com/remarkablemark))

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/bubble-gun.git
cd bubble-gun
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
