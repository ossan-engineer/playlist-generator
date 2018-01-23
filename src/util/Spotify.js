import queryString from 'query-string';

const parsedHash = queryString.parse(window.location.hash);
let accessToken = parsedHash.access_token ? parsedHash.access_token : '';
const expiresIn = parsedHash.expires_in ? parsedHash.expires_in : '';
const requestParams = {
  clientId: '65e1281ba669443385b8bad485a9e286',
  responseType: 'token',
  scope: 'playlist-modify-public',
  redirectUri: 'http://localhost:3000',
};
const url = `https://accounts.spotify.com/authorize?client_id=${requestParams.clientId}&response_type=${requestParams.responseType}&scope=${requestParams.scope}&redirect_uri=${requestParams.redirectUri}`;

if (accessToken && expiresIn) {
  setTimeout(() => {
    console.log(accessToken);
    console.log(expiresIn);
    accessToken = '';
    console.log(accessToken);
  }, expiresIn * 1000);
  window.history.pushState('Access Token', null, '/');
}

if (!accessToken) {
  window.location.href = url;
}

const Spotify = {
  getAccessToken: () => {
    if (accessToken) {
      return accessToken;
    }
  },
  // sendSearch: () => {
  //
  // },
  // savePlaylist: () => {
  //
  // }
}

export default Spotify;
