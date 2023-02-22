# Coffee-backend

# Scripts Explained:

"tsc": "tsc":
This is a npm script which runs the TypeScript compiler (tsc) when executed in the terminal with the command npm run tsc. The tsc command is used to compile TypeScript code into JavaScript code that can be executed in Node.js or in a browser.

"postinstall": "npm run tsc":
This is another npm script that automatically runs after the npm install command is executed. In this case, it runs the tsc script, which compiles the TypeScript code into JavaScript. This script is useful in situations where a package or project is installed and the source code needs to be compiled before it can be used.
