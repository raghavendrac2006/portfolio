const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'api.github.com',
  path: '/users/raghavendrac2006/repos',
  method: 'GET',
  headers: {
    'User-Agent': 'Node.js'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('repos.json', data);
    console.log('Repos fetched and saved to repos.json');
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();
