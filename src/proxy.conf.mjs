export default [
    {
      context: [
          '/auth',
          '/users',
          '/profile',
          '/user',
          '/posts',
          '/categories'
      ],
      target: 'http://localhost:3000',
      pathRewrite: { '^/en-US' : ''},
      pathRewrite: { '^/es-ES' : ''},
      secure: false
    }
  ];