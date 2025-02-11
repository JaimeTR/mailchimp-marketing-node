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
 * SearchMembers service.
 * @module api/SearchMembersApi
 */

/**
 * Constructs a new SearchMembersApi. 
 * @alias module:api/SearchMembersApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Search members
   * Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.
   * @param {String} query The search query used to filter results. Query should be a valid email, or a string representing a contact's first or last name.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {String} opts.listId The unique id for the list.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Members} and HTTP response
   */
  this.searchWithHttpInfo = function(query, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'query' is set
    if (query === undefined || query === null) {
      throw new Error("Missing the required parameter 'query' when calling ");
    }

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'query': query,
      'list_id': opts['listId']
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
      '/search-members', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Search members
   * Search for list members. This search can be restricted to a specific list, or can be used to search across all lists in an account.
   * @param {String} query The search query used to filter results. Query should be a valid email, or a string representing a contact's first or last name.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {String} opts.listId The unique id for the list.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Members}
   */
  this.search = function(query, opts) {
    return this.searchWithHttpInfo(query, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
