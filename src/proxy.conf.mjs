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
      secure: false
    }
  ];