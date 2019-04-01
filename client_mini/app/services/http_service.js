import $ from 'jquery';
const http = require('http');

// TODO: add global error handler to display errors

export default class HttpService {
  static get(url, params = {}) {
    return new Promise(resolve => {
      const fullUrl = `${url}?${$.param(params)}`;

      http.get({path: fullUrl}, response => {
        let data = '';
        response.on('data', _data => (data += _data));
        response.on('end', () => resolve(data));
      });
    });
  }

  static post(url, data) {
    return new Promise(resolve => {
      const post_data = JSON.stringify(data);
      const urlObj = new URL(url);

      const post_options = {
        host: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname,
        protocol: urlObj.protocol,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(post_data)
        }
      };

      const post_req = http.request(post_options, function(response) {
        response.setEncoding('utf8');
        let data = '';
        response.on('data', _data => (data += _data));
        response.on('end', () => resolve(data));
      });

      post_req.write(post_data);
      post_req.end();
    });
  }
}
