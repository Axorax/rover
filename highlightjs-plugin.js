// Highlightjs language plugin for Rover

// Usage:
// Copy and paste this code after you have included highlight.js

hljs.registerLanguage("rvr", function (hljs) {
  return {
    keywords: {
      keyword:
        "method output json output json visualize output visualize minify redirects",
      built_in: "true false both js html",
    },
    contains: [
      {
        className: "comment",
        begin: /#/,
        end: /$/,
        relevance: 0,
      },
      {
        className: "variable",
        begin: /^[a-zA-Z0-9_\-]+\s*=\s*/,
        end: /$/,
        excludeEnd: true,
      },
      {
        className: "section",
        begin: /^\[redirects\]$/,
        end: /$/,
      },
      {
        className: "symbol",
        begin: /^[a-zA-Z0-9_\-]+(?=\s*=\s*)/,
        end: /$/,
        excludeEnd: true,
      },
      {
        className: "string",
        begin: /\[/,
        end: /\]/,
        contains: [
          {
            className: "string",
            begin: /[^[]+/,
            end: /$/,
          },
        ],
      },
      {
        className: "string",
        begin: /\S/,
        end: /$/,
      },
      {
        className: "meta",
        begin: /^\[.*\]$/,
        end: /$/,
        relevance: 10,
      },
    ],
  };
});
