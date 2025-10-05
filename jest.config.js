// Change from module.exports to export default
const config = {
  // Specifies the environment for testing
  testEnvironment: 'node', 
  
  // The glob patterns Jest uses to detect test files.
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],

  // An array of file extensions your modules use.
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
    // Add .mjs and .jsx for clarity in an ESM project
    'mjs', 
    'jsx' 
  ],

  // ⬇️ ESSENTIAL FOR ESM ⬇️
  // This tells Jest NOT to use its default CommonJS transformer on your files, 
  // letting Node handle the ESM syntax natively.
  transform: {},
  
  // If you are using libraries that are also ESM, you may need to explicitly 
  // tell Jest to transform them (as they are in node_modules).
  // The default is to ignore all node_modules, but this is often too broad for ESM.
  // The regex below is an example for transforming a specific module (replace 'my-esm-module'
  // with the actual package name).
  // transformIgnorePatterns: ['node_modules/(?!(my-esm-module)/)'],
};

export default config;