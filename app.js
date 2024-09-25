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