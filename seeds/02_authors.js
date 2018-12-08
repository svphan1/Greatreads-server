exports.seed = function(knex, Promise) {
  return knex.raw("DELETE FROM authors; ALTER SEQUENCE authors_id_seq RESTART WITH 7")
    .then(function () {
      return knex("authors").insert([
        {
          id: 1, 
          firstName: "Harper",
          lastName: "Lee",
          biography: `Harper Lee, known as Nelle, was born in the Alabama town of Monroeville, the youngest of four children of Amasa Coleman Lee and Frances Cunningham Finch Lee. Her father, a former newspaper editor and proprietor, was a lawyer who served on the state legislature from 1926 to 1938. As a child, Lee was a tomboy and a precocious reader, and enjoyed the friendship of her schoolmate and neighbor, the young Truman Capote.`,
          portraitUrl: "https://images.gr-assets.com/authors/1188820730p5/1825.jpg"
        },
        {
          id: 2, 
          firstName: "Oscar",
          lastName: "Wilde",
          biography: `Oscar Fingal O'Flahertie Wills Wilde was an Irish playwright, poet, and author of numerous short stories, and one novel. Known for his biting wit, and a plentitude of aphorisms, he became one of the most successful playwrights of the late Victorian era in London, and one of the greatest celebrities of his day. Several of his plays continue to be widely performed, especially The Importance of Being Earnest. `,
          portraitUrl: "https://images.gr-assets.com/authors/1521044377p5/3565.jpg"
        },
        {
          id: 3, 
          firstName: "Douglas",
          lastName: "Adams",
          biography: `Douglas Noël Adams was an English author, comic radio dramatist, and musician. He is best known as the author of the Hitchhiker's Guide to the Galaxy series. Hitchhiker's began on radio, and developed into a "trilogy" of five books (which sold more than fifteen million copies during his lifetime) as well as a television series, a comic book series, a computer game, and a feature film that was completed after Adams' death. The series has also been adapted for live theatre using various scripts; the earliest such productions used material newly written by Adams. He was known to some fans as Bop Ad (after his illegible signature), or by his initials "DNA".`,
          portraitUrl: "https://images.gr-assets.com/authors/1189120061p5/4.jpg"
        },
        {
          id: 4, 
          firstName: "Alex",
          lastName: "Martelli",
          biography: `Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He"s a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Göteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex"s proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.`,
          portraitUrl: "http://cdn.oreillystatic.com/images/people/154/alex_martelli.jpg"
        },
        {
          id: 5, 
          firstName: "Anna",
          lastName: "Ravenscroft",
          biography: `Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.`,
          portraitUrl: "https://images-na.ssl-images-amazon.com/images/I/A1ufyxpz++L._UX250_.jpg"
        },
        {
          id: 6, 
          firstName: "Steve",
          lastName: "Holden",
          biography: `Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of \"Python Web Programming\", the O"Reilly School of Technology"s \"Certificate series in Python\" and O"Reilly Media"s \"Intermediate Python\" video series.`,
          portraitUrl: "http://cdn.oreillystatic.com/images/people/154/steve_holden.jpg"
        },
        {
          id: 7, 
          firstName: "Allen B.",
          lastName: "Downey",
          biography: `Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master"s and Bachelor"s degrees from MIT.`,
          portraitUrl: "http://cdn.oreillystatic.com/images/people/154/allen_downey.jpg"
        },
        {
          id: 8, 
          firstName: "Bonnie",
          lastName: "Eisenman",
          biography: "Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",
          portraitUrl: "http://cdn.oreillystatic.com/images/people/154/bonnie_eisenman.jpg"
        },
        {
          id: 9, 
          firstName: "Kyle",
          lastName: "Simpson",
          biography: `Kyle Simpson is an Open Web Evangelist who"s passionate about all things JavaScript. He"s an author, workshop trainer, tech speaker, and OSS contributor/leader.`,
          portraitUrl: "http://cdn.oreillystatic.com/images/people/154/kyle_simpson.jpg"
        }
      ]);
    });
};
