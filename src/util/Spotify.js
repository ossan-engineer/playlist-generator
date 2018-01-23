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





// const stateKey = 'spotify_auth_state';
// const userProfileSource = document.getElementById('user-profile-template').innerHTML;
// const userProfileTemplate = Handlebars.compile(userProfileSource);
// const userProfilePlaceholder = document.getElementById('user-profile');
//
// const oauthSource = document.getElementById('oauth-template').innerHTML;
// const oauthTemplate = Handlebars.compile(oauthSource);
// const oauthPlaceholder = document.getElementById('oauth');
//
// const params = getHashParams();
//
// const access_token = params.access_token;
// const state = params.state;
// const storedState = localStorage.getItem(stateKey);
//
// const Spotify = {
//   getAccessToken: () => {
//     if (access_token && (state == null || state !== storedState)) {
//       alert('There was an error during the authentication');
//     } else {
//       localStorage.removeItem(stateKey);
//       if (access_token) {
//         $.ajax({
//           url: 'https://api.spotify.com/v1/me',
//           headers: {
//             'Authorization': 'Bearer ' + access_token
//           },
//           success: function(response) {
//             userProfilePlaceholder.innerHTML = userProfileTemplate(response);
//
//             $('#login').hide();
//             $('#loggedin').show();
//           }
//         });
//       } else {
//         $('#login').show();
//         $('#loggedin').hide();
//       }
//
//       document.getElementById('login-button').addEventListener('click', function() {
//
//         var client_id = 'CLIENT_ID'; // Your client id
//         var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
//
//         var state = generateRandomString(16);
//
//         localStorage.setItem(stateKey, state);
//         var scope = 'user-read-private user-read-email';
//
//         var url = 'https://accounts.spotify.com/authorize';
//         url += '?response_type=token';
//         url += '&client_id=' + encodeURIComponent(client_id);
//         url += '&scope=' + encodeURIComponent(scope);
//         url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
//         url += '&state=' + encodeURIComponent(state);
//
//         window.location = url;
//       }, false);
//     }
//   },
//   getHashParams: () => {
//     var hashParams = {};
//     var e, r = /([^&;=]+)=?([^&;]*)/g,
//       q = window.location.hash.substring(1);
//     while ( e = r.exec(q)) {
//       hashParams[e[1]] = decodeURIComponent(e[2]);
//     }
//     return hashParams;
//   },
//   generateRandomString: (length) => {
//     var text = '';
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//
//     for (var i = 0; i < length; i++) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
//   }
// };
//
// export default Spotify;
