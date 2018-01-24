import queryString from 'query-string';
import axios from 'axios';

const parsedHash = queryString.parse(window.location.hash);
let accessToken = parsedHash.access_token ? parsedHash.access_token : '';
const expiresIn = parsedHash.expires_in ? parsedHash.expires_in : '';
const requestParams = {
  clientId: '65e1281ba669443385b8bad485a9e286',
  responseType: 'token',
  scope: 'playlist-modify-public',
  redirectUri: 'http://localhost:3000',
};
const authUrl = `https://accounts.spotify.com/authorize?client_id=${requestParams.clientId}&response_type=${requestParams.responseType}&scope=${requestParams.scope}&redirect_uri=${requestParams.redirectUri}`;
const baseUrl = 'https://api.spotify.com';

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
  window.location.href = authUrl;
}

const Spotify = {
  getAccessToken: () => {
    if (accessToken) {
      return accessToken;
    }
  },
  search: (term, callback = null) => {
    // fetch(`${baseUrl}/v1/search?type=track&q=${term}`, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log(response);
    //       return response.json();
    //     } else {
    //       console.log('Network response was not ok.');
    //     }
    //   })
    //   .then((jsonResponse) => {
    //     console.log(jsonResponse.tracks);
    //
    //     if (callback) {
    //       callback(jsonResponse);
    //     }
    //     return jsonResponse.tracks;
    //   })
    //   .catch(error => console.log(error.message));

    axios.get(`${baseUrl}/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (callback) {
          console.log(response.data.tracks.items);
          callback(response.data.tracks.items);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  },
  // savePlaylist: () => {
  //
  // }
}

export default Spotify;
