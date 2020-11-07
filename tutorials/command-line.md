These are the most common options you'll be using:

| Option | Description |
| ------ | ----------- |
| -c     | Path to configuration file |
| -d     | Path to the output folder |
| -r     | Recurse into subdirectories |
| -u     | Path to tutorials (like this one) |

Example:

Generate docs inside the `docs` folder for files inside the `src` folder using a configuration file.

```sh
$ npx jsdoc src -r -c ./conf.json -d ./docs
```

Visit the official JSDoc documentation to learn more about the [Command-line arguments]{@link https://jsdoc.app/about-commandline.html}