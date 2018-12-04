
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {
          id: 1, 
          title: 'You Don\'t Know JS: Async & Performance',
          genre: 'JavaScript',
          description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process.',
          coverUrl: 'https://covers.oreillystatic.com/images/0636920033752/lrg.jpg'
        },
        {
          id: 2,
          title: 'rowValue1',
          genre: '',
          description: '',
          coverUrl: ''
        },
        {
          id: 3, 
          title: 'rowValue1',
          genre: '',
          description: '',
          coverUrl: ''
        },
        {
          id: 4, 
          title: 'rowValue1',
          genre: '',
          description: '',
          coverUrl: ''
        },
        {
          id: 5, 
          title: 'rowValue1',
          genre: '',
          description: '',
          coverUrl: ''
        },
        {
          id: 6, 
          title: 'rowValue1',
          genre: '',
          description: '',
          coverUrl: ''
        },
      ]);
    });
};
