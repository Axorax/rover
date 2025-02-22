<p align="center"><img src="./rover.svg" width="130px" height="130px"></p>

## 🌐 Rover

Static site generator but for redirects.

Rover allows you to generate HTML pages that redirect to other URLs in one config file using the custom Rover syntax. It can be used as an URL shortener or anything.

If you have a static site and want to create redirect links, instead of making them all manually, you can use Rover. Rover can also visualize all of your links.

## ✨ Features

- Custom syntax that is easy and well-documented. [🔗 Documentation](./FILE%20FORMAT.md)
- Supports metadata.
- Visualize all of your configurations.
- Automatically makes text URL friendly
- Supports multiple methods to redirect.

## ❓ Why use Rover?

Using Rover is faster than writing HTML pages for redirects manually. All links are stored in one easy to edit config file. You can also add metadata.

## 🔥 What's the syntax like?

Full documentation => [🔗 Click here](./FILE%20FORMAT.md)

Full example configuration => [🔗 Click here](./example.rvr)

```js
method = both # [both | js | html]

[redirects]

youtube = https://youtube.com
[
    title = YouTube Link
    keywords = YouTube, video, sharing
    description = Video sharing site
]

axorax = https://axorax.github.io
```

## 💻 CLI Commands

Example usage:

```sh
python main.py config.rvr -o rover -v true
```

All commands:

```sh
>> python main.py -h

usage: main.py [-h] [-oj JSON_FILE] [-ov HTML_FILE] [-v TRUE | FALSE]
               [-j TRUE | FALSE] [-m TRUE | FALSE] [-o FOLDER_NAME]
               [-me METHOD_NAME]
               CONFIG

Generate redirect HTML files based on a configuration file.

positional arguments:
  CONFIG                Path to the configuration file (e.g., config.rvr)

options:
  -h, --help            show this help message and exit
  -oj, --output-json JSON_FILE
                        Specify the output JSON file name (default: output.json)
  -ov, --output-visualizer HTML_FILE
                        Specify the visualizer output file name (default:
                        rover.html)
  -v, --visualize TRUE | FALSE
                        Visualize the configuation file (default: false)
  -j, --json TRUE | FALSE
                        Generate JSON output (default: false)
  -m, --minify TRUE | FALSE
                        Minify the HTML files (default: false)
  -o, --output FOLDER_NAME
                        Output folder name (default: rover)
  -me, --method METHOD_NAME
                        Redirection method (default: both)
```

---

<p align="center">
    <a href="https://github.com/Axorax/socials">Socials + Donate</a>
</p>
