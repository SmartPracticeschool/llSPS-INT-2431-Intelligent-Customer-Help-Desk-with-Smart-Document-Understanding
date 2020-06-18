/**
  *
  * @param {object} params
  * @param {string} params.iam_apikey
  * @param {string} params.url
  * @param {string} params.username
  * @param {string} params.password
  * @param {string} params.environment_id
  * @param {string} params.collection_id
  * @param {string} params.configuration_id
  * @param {string} params.input
  *
  * @return {object}
  *
  */

const assert = require('assert');
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
  return new Promise(function (resolve, reject) {

    let discovery;

    if (params.iam_apikey){
      discovery = new DiscoveryV1({
        'iam_apikey': params.iam_apikey,
        'url': params.url,
        'version': '2019-03-25'
      });
    }
    else {
      discovery = new DiscoveryV1({
        'username': params.username,
        'password': params.password,
        'url': params.url,
        'version': '2019-03-25'
      });
    }

    discovery.query({
      'environment_id': params.environment_id,
      'collection_id': params.collection_id,
      'natural_language_query': params.input,
      'passages': true,
      'count': 3,
      'passages_count': 3
    }, function(err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

https://us-south.functions.cloud.ibm.com/api/v1/web/efce3364-b199-4186-8b98-66b2e7839184/default/fetch%20from%20user
https://us-south.functions.cloud.ibm.com/api/v1/web/efce3364-b199-4186-8b98-66b2e7839184/default/fetch%20from%20user

You have made the following selections:

Secure your editor so only authorised users can access it
Allow anyone to view the editor, but not make any changes
You can change these settings at any time by setting the following environment variables via the IBM Cloud console:

NODE_RED_USERNAME - the username
NODE_RED_PASSWORD - the password
NODE_RED_GUEST_ACCESS - if set to `true`, allows anyone read-only access to the editor
