import request from 'superagent'
import moment from 'moment'
import md5 from 'md5'

const Url = "http://gateway.marvel.com/v1/public/";


var ts = 1;
const PUBLIC_KEY = '6ae3d7a8199b3e981ca22b094ee67e7f'
const PRIVATE_KEY = '12109bea940e0c5ddd39147e8328a322f660e2a3'
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

// console.log('apikey: ', PUBLIC_KEY, 'ts: ', ts, 'hash: ', hash );

const marvelApi = (path, callback) => {
    request
    .get(Url + path + '?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash)
    .set( 'Accept', 'application/json')
    .then(callback)
    .catch(err => {
        err.message, err.response
    });
}
// console.log('Url: ',Url + 'comics' + '?ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' + hash);


export default marvelApi;
