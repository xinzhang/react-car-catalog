
require('isomorphic-fetch');

// Create a new object, that prototypically inherits from the Error constructor
function FetchError(statusCode, statusText, responseBody) {
  this.name = 'FetchError';
  this.statusCode = statusCode;
  this.statusText = statusText;
  this.responseBody = responseBody;
  this.stack = new Error().stack;
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;

export default function enhancedFetch(url, options = {}) {
  options.headers = options.headers || {};

  return new Promise((resolve, reject) => {
    options.headers = Object.assign(
      {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      options.headers
    );
    options.credentials = 'same-origin';
    if (typeof options.body !== 'string') {
      options.body = JSON.stringify(options.body);
    }
    fetch(url, options)
      .then(response => {
        const contentType = response.headers.get('Content-Type');
        if (response.status >= 400) {
          throw new FetchError(response.status, response.statusText, response.text());
        }
        if (contentType) {
          if (contentType.indexOf('application/json') > -1) {
            resolve(response.json());
          }
          if (contentType.indexOf('image') > -1) {
            resolve(response.blob());
          }
        } else {
          resolve(response);
        }
      })
      .catch(async err => {
        console.error(err);
        if (err.responseBody) {
          const responseBody = await err.responseBody;
          reject(responseBody);
        } else {
          reject(err);
        }
      });
  });
}
