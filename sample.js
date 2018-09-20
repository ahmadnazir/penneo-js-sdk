var config = require('./config.json');
var penneo = require('./penneo.js');

penneo.init(config.endpoint, config.key, config.secret);

// Get the authenticated user
penneo.request('GET', 'user');

// // Create a case file
// penneo.casefile.create({
//     title: "testing",
//     sensitive: true,
//     documentVisibility: "all",
//     language: "en",
//     caseFileType: "Simpel aftale",
//     documents: [{
//         title: "test",
//         documentType: "Simpelt dokument",
//         url: "https://sandbox.penneo.com/api/v1/files/1"
//     }],
//     signers: [{
//         name: "John",
//         private: true,
//         insecureSigning: false,
//         roles: [{signerType: "Underskriver"}],
//         email: "ar@penneo.com",
//         emailSubject: "my subject",
//         emailText: "my subject"
//     }],
//     copyRecipients: [{
//         name: "test",
//         email: "ar@penneo.com"
//     }]
// });


