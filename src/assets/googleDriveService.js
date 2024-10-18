import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    keyFile: 'https://drive.google.com/drive/folders/1sgJjz9wd90-9rgbDuiFtKRmIyN39kCPQ?usp=drive_link',
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

export async function fetchSongFromDrive(fileId) {
    try {
        console.log(`Fetching file with ID: ${fileId}`);
        const response = await drive.files.get(
            { fileId: fileId, alt: 'media' },
            { responseType: 'arraybuffer' }
        );
        console.log(`Successfully fetched file with ID: ${fileId}`);
        return new Blob([response.data], { type: 'audio/mpeg' });
    } catch (error) {
        console.error(`Error fetching file with ID: ${fileId}:`, error);
        return null;
    }
}