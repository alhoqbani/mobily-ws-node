[![Build Status](https://travis-ci.com/alhoqbani/mobily-ws-node.svg?token=GcKyqN8fG1uVX7yXGjDS&branch=master)](https://travis-ci.com/alhoqbani/mobily-ws-node)

# Mobily Ws
A Node.js client to communicate with mobily.ws API

## Installation
```sh
npm install mobily-ws --save
```
## Usage

### Javascript
```javascript
const mobilyWs = require('mobily-ws');

const client = mobilyWs('YOUR API KEY', 'SENDER NAME');

// Extra options to send to the api.
const options = {
    dateSend: '01/01/2020',
    timeSend: '15:30:00',
};

client.sendSMS('Thank you for your business', ['966511111111', '966522222222'], options)
    .then(function (response) {
        console.log(response)
    });

```

### TypeScript/ES6
```typescript
import mobilyWs from 'mobily-ws';

const client = mobilyWs('YOUR API KEY', 'SENDER NAME');

// Extra options to send to the api.
const options = {
    dateSend: '01/01/2020',
    timeSend: '15:30:00',
};

client.sendSMS('Thank you for your business', ['966511111111', '966522222222'], options)
    .then((response) => {
        console.log(response)
    });

```

## Test
```sh
npm run test
```
