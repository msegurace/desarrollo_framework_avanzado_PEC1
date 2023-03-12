export default [
    {
      context: [
          '/auth',
          '/users',
          '/profiles'
      ],
      target: 'http://localhost:3000',
      secure: false
    }
  ];