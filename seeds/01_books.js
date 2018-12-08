exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM books; ALTER SEQUENCE books_id_seq RESTART WITH 7")
    .then(function () {
      return knex("books").insert([
        {
          id: 1, 
          title: "To Kill a Mockingbird",
          genre: "Fiction",
          description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
          coverUrl: "https://images.gr-assets.com/books/1361975680l/2657.jpg",
          authors: "Harper Lee"
        },
        {
          id: 2, 
          title: "The Importance of Being Earnest",
          genre: "Fiction",
          description: "Oscar Wilde's madcap farce about mistaken identities, secret engagements, and lovers entanglements still delights readers more than a century after its 1895 publication and premiere performance. The rapid-fire wit and eccentric characters of The Importance of Being Earnest have made it a mainstay of the high school curriculum for decades.",
          coverUrl: "https://images.gr-assets.com/books/1298438452l/92303.jpg",
          authors: "Oscar Wilde"
        },
        {
          id: 3, 
          title: "The Hitchhiker's Guide to the Galaxy",
          genre: "Fiction",
          description: "This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",
          coverUrl: "https://images.gr-assets.com/books/1531891848l/11.jpg",
          authors: "Douglas Adams"
        },
        {
          id: 4, 
          title: "Python In A Nutshell",
          genre: "Python",
          description: "This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",
          coverUrl: "https://covers.oreillystatic.com/images/0636920012610/lrg.jpg",
          authors: "Alex Martelli, Anna Ravenscroft, Steve Holden"
        },
        {
          id: 5,
          title: "Think Python",
          genre: "Python",
          description: "If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.",
          coverUrl: "https://covers.oreillystatic.com/images/0636920025696/lrg.jpg",
          authors: "Allen B. Downey"
        },
        {
          id: 6, 
          title: "Learning React Native",
          genre: "JavaScript",
          description: "Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you’ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You’ll also discover how to access platform features such as the camera, user location, and local storage.",
          coverUrl: "https://covers.oreillystatic.com/images/0636920085270/lrg.jpg",
          authors: "Bonnie Eisenman"
        },
        {
          id: 7, 
          title: `You Don"t Know JS: ES6 & Beyond`,
          genre: "JavaScript",
          description: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
          coverUrl: "https://covers.oreillystatic.com/images/0636920033769/lrg.jpg",
          authors: "Kyle Simpson"
        },
        {
          id: 8, 
          title: `You Don"t Know JS: Scope & Closures`,
          genre: "JavaScript",
          description: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.",
          coverUrl: "https://covers.oreillystatic.com/images/0636920026327/lrg.jpg",
          authors: "Kyle Simpson"
        },
        {
          id: 9, 
          title: `You Don"t Know JS: Async & Performance`,
          genre: "JavaScript",
          description: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process.",
          coverUrl: "https://covers.oreillystatic.com/images/0636920033752/lrg.jpg",
          authors: "Kyle Simpson"
        },
      ]);
    });
};
