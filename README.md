# Instagram Photo Posting Bot

This is a simple Node.js script that automates posting photos to Instagram using the `instagram-private-api` library. It logs into an Instagram account and posts a specified photo with a caption.

## Features

- **Login to Instagram**: Uses credentials to log into an Instagram account.
- **Post Photos**: Uploads photos with a caption to the logged-in account.
- **Multiple Posts**: Can be configured to post multiple photos in a loop.

## Requirements

- Node.js
- npm (Node Package Manager)
- `instagram-private-api` library

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/instagram-photo-bot.git
   cd instagram-photo-bot
   ```

2. Install the required dependencies:
   ```bash
   npm install instagram-private-api
   ```

3. Update the script with your Instagram credentials.

## Usage

1. Set your Instagram username and password in the script.
2. Specify the photo path and caption in the `postPhoto` function.
3. Run the script:
   ```bash
   node index.js
   ```

## Code Explanation

```javascript
const { IgApiClient } = require('instagram-private-api'); 

async function postPhoto() {
    const ig = new IgApiClient();
    ig.state.generateDevice('username');

    try {
        await ig.account.login('username', 'password');
    } catch (error) {
        console.error('Login failed:', error.message);
        return;
    }

    const path = 'Dog-Coding.jpg'; 
    const caption = 'JavaScript Bot';

    try {
        const publishResult = await ig.publish.photo({
            file: path,
            caption: caption,
        });
        console.log('Photo posted successfully:', publishResult);
    } catch (error) {
        console.error('Failed to post photo:', error.message);
    }
}

async function executePosts() {
    for (let i = 0; i < 10; i++) {
        await postPhoto();
        console.log(`Post attempt ${i + 1} completed.`);
    }
}

executePosts().catch(console.error);
```

### Key Functions

- **`postPhoto`**: Handles logging in and posting a photo with a caption.
- **`executePosts`**: Calls `postPhoto` multiple times to automate posting.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements!

## Disclaimer

Using bots to interact with Instagram may violate Instagram's Terms of Service. Use this script responsibly and at your own risk.
