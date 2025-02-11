/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.62
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * Ping service.
 * @module api/PingApi
 */

/**
 * Constructs a new PingApi. 
 * @alias module:api/PingApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Ping
   * A health check for the API that won't return any account-specific information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/APIHealthStatus} and HTTP response
   */
  this.getWithHttpInfo = function() {
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/ping', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Ping
   * A health check for the API that won't return any account-specific information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/APIHealthStatus}
   */
  this.get = function() {
    return this.getWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
