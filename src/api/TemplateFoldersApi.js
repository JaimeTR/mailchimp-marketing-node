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
 * TemplateFolders service.
 * @module api/TemplateFoldersApi
 */

/**
 * Constructs a new TemplateFoldersApi. 
 * @alias module:api/TemplateFoldersApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Delete template folder
   * Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.
   * @param {String} folderId The unique id for the template folder.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.removeWithHttpInfo = function(folderId) {
    var postBody = null;

    // verify the required parameter 'folderId' is set
    if (folderId === undefined || folderId === null) {
      throw new Error("Missing the required parameter 'folderId' when calling ");
    }

    var pathParams = {
      'folder_id': folderId
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
      '/template-folders/{folder_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete template folder
   * Delete a specific template folder, and mark all the templates in the folder as 'unfiled'.
   * @param {String} folderId The unique id for the template folder.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.remove = function(folderId) {
    return this.removeWithHttpInfo(folderId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List template folders
   * Get all folders used to organize templates.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateFolders} and HTTP response
   */
  this.listWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset']
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
      '/template-folders', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List template folders
   * Get all folders used to organize templates.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateFolders}
   */
  this.list = function(opts) {
    return this.listWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get template folder
   * Get information about a specific folder used to organize templates.
   * @param {String} folderId The unique id for the template folder.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateFolder} and HTTP response
   */
  this.getWithHttpInfo = function(folderId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'folderId' is set
    if (folderId === undefined || folderId === null) {
      throw new Error("Missing the required parameter 'folderId' when calling ");
    }

    var pathParams = {
      'folder_id': folderId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
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
      '/template-folders/{folder_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get template folder
   * Get information about a specific folder used to organize templates.
   * @param {String} folderId The unique id for the template folder.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateFolder}
   */
  this.get = function(folderId, opts) {
    return this.getWithHttpInfo(folderId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Update template folder
   * Update a specific folder used to organize templates.
   * @param {String} folderId The unique id for the template folder.
   * @param {module:model/TemplateFolder2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateFolder} and HTTP response
   */
  this.updateWithHttpInfo = function(folderId, body) {
    var postBody = body;

    // verify the required parameter 'folderId' is set
    if (folderId === undefined || folderId === null) {
      throw new Error("Missing the required parameter 'folderId' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'folder_id': folderId
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
      '/template-folders/{folder_id}', 'PATCH',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Update template folder
   * Update a specific folder used to organize templates.
   * @param {String} folderId The unique id for the template folder.
   * @param {module:model/TemplateFolder2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateFolder}
   */
  this.update = function(folderId, body) {
    return this.updateWithHttpInfo(folderId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Add template folder
   * Create a new template folder.
   * @param {module:model/TemplateFolder1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TemplateFolder} and HTTP response
   */
  this.createWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

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
      '/template-folders', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Add template folder
   * Create a new template folder.
   * @param {module:model/TemplateFolder1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TemplateFolder}
   */
  this.create = function(body) {
    return this.createWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
