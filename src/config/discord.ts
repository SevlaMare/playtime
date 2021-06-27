// ---------------------------------------------------
// interface for environment variables for discord api
// ---------------------------------------------------

const BASE_URL = 'https://discord.com/api';

const { REDIRECT_URI } = process.env;
const { SCOPE } = process.env;
const { RESPONSE_TYPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;

export { BASE_URL, REDIRECT_URI, SCOPE, RESPONSE_TYPE, CLIENT_ID, CDN_IMAGE };
