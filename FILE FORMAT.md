# Rover File Format (.rvr) Documentation

The **Rover file format** (.rvr) is used to define and configure redirects in a structured way, which is later processed to generate HTML files for redirection. This file format supports custom metadata, multi-line descriptions, and other SEO-related information.

The Rover file format is made for the Rover project (https://github.com/Axorax/rover) by Axorax. The extension for the format is `.rvr`.

## 1. **Basic Structure of a .rvr File**

A `.rvr` file consists of two main sections:

- **Global Configuration**: Defines general settings for the redirection process.
- **Redirects Section**: Defines individual redirects and associated metadata.

### Example Format:

```js
method = both

[redirects]

youtube = https://youtube.com
[
    title = YouTube Link
    keywords = YouTube, video, sharing
    description = Video sharing site
]

axorax = https://axorax.github.io
```

## 2. **Global Configuration**

The **global configuration** defines the overall settings for generating the redirects. These settings are global and affect how the redirects are generated and what extra information is output.

### Configuration Keys:

- **method** (required): Specifies the method of redirection.

  - **Values**:
    - `html`: Uses HTML meta refresh to redirect the user.
    - `js`: Uses JavaScript for the redirect.
    - `both`: Uses both HTML meta refresh and JavaScript for the redirect.
  - **Example**:

    ```js
    method = both;
    ```

- **output** (optional): Defines the name of the folder where the generated HTML files will be stored.

  - **Values**: A string that represents the folder name. The folder will be created if it doesn't exist.
  - **Example**:

    ```js
    output = rover;
    ```

- **json** (optional): Specifies whether to output the parsed configuration data as a JSON file.

  - **Values**:
    - `true`: Generates the JSON output file.
    - `false`: No JSON output.
  - **Example**:

    ```js
    json = false;
    ```

- **output json** (optional): Specifies the name of the JSON output file if `json` is set to `true`. Defaults to `output.json`.

  - **Values**: A string representing the file name.
  - **Example**:

    ```js
    output json = example.json
    ```

- **visualize** (optional): Specifies whether to visualize the data in a table (HTML file). Powered by tabulatorjs.

  - **Values**:
    - `true`: Generates the visualizer file.
    - `false`: No visualizer.
  - **Example**:

    ```js
    visualize = false;
    ```

- **output visualize** (optional): Specifies the name of the visualize output file if `visualize` is set to `true`. Defaults to `rover.html`.

  - **Values**: A string representing the file name.
  - **Example**:

    ```js
    output visualize = example.html
    ```

- **minify** (optional): Determines whether the HTML output should be minified.
  - **Values**:
    - `true`: Minify the HTML files.
    - `false`: Do not minify the HTML files.
  - **Example**:

    ```js
    minify = false;
    ```

## 3. **Redirects Section**

The **redirects section** defines a set of URL redirects. Each redirect is identified by a key (the redirect name) and is associated with a target URL. Additional metadata like title, description, image, and keywords can be included.

### Syntax for Redirects:

- A redirect is defined using a key-value pair, where the key is a name or identifier, and the value is the target URL.
- The redirect key is defined outside the square brackets, while the URL is its value.
- Metadata associated with each redirect is placed within square brackets `[ ]`.
- Multi-line metadata (like descriptions) are wrapped in the `[]` block and can span multiple lines.

### Example:

```js
youtube = https://youtube.com
[
    title = YouTube Link
    image = https://example.com/image.png
    keywords = YouTube, video, sharing
    description = [
        Multi-line
        string
    ]
]
```

### Redirect Key Explanation:

- **youtube = https://youtube.com**:
  - **youtube** is the redirect name or identifier.
  - **https://youtube.com** is the target URL for the redirect.
- **Metadata Block**: Metadata is enclosed in square brackets `[ ]` and can include the following fields:
  - **title**: Title for the redirect.
  - **image**: Image URL associated with the redirect (for Open Graph or other SEO purposes).
  - **keywords**: Keywords related to the URL for SEO purposes.
  - **description**: A description of the redirect. It can be a single-line string or a multi-line string enclosed in `[]`.

## 4. **Multi-line Values**

Some values, such as descriptions, can span multiple lines. To represent multi-line values, enclose the content inside `[` and `]`.

### Example:

```js
description = [
    Multi-line
    string
]
```

This allows you to include more detailed explanations or descriptions, which can be useful for SEO or to provide more context for the redirect.

## 5. Comments

You can add comments using `#`.

### Example:

```js
# This is a comment

method = both # You can also use js, html
```

## 6. **Complete Example**

Here is a complete example of a `.rvr` file that includes both the global configuration and redirect definitions:

```js
method = both                 # [both | js | html] Method used to redirect user.
output = rover                # [STRING] Output folder name. Uses relative path.
json = false                  # [true | false] Output JSON data.
output json = example.json    # [STRING] Output JSON file name.
minify = false                # [true | false] Minify the HTML files.
visualize = true              # [true | false] Create visualization table (rover.html).
output visualize = rover.html # [STRING] Visualization output file.

[redirects]

youtube = https://youtube.com/
[
    title = YouTube Link
    image = https://example.com/image.png
    keywords = YouTube, video, sharing
    description = [
        Multi-line
        string
    ]
]

axorax = https://axorax.github.io

discord = https://discord.com/app
[
    description = Redirect link for a messaging platform.
]
```

## 7. **Conclusion**

The Rover `.rvr` file format is a flexible way to define redirection rules, allowing for customization of redirection methods, SEO metadata, and multi-line descriptions. The generated HTML files can include redirection logic and metadata, improving both the user experience and search engine optimization.

---

<p align="center">Made with ❤️ by Axorax</p>
