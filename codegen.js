module.exports = {
  schema: [
    {
      'http://localhost:5000/v1/graphql': {
        headers: {
          "x-hasura-admin-secret": "password",
        }
      },
    },
  ],
  documents: [
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.graphql',
  ],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: '@apollo/client',
        apolloReactCommonImportFrom: '@apollo/client',
      },
    },
  },
};
