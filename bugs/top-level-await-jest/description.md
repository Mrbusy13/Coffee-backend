//Description of error

When running npm test with Jest,

- Test suite runs
- Test fails due to 'top-level await' not being supported.

#### Error Message:

"Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher."

#### Current configuration in tsconfig.json contains:

"target": "ES2022",
"module": "ES2022",
"moduleResolution": "nodenext",

#### Workaround:

- Remove top-level await by wrapping in an async function.

#### Additional thoughts:

- Perhaps the tsconfig file is being ignored or overridden.
- Perhaps the jest.config.ts file requires additional configuration to support the latest ESM.
