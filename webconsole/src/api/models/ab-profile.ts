/* tslint:disable */
/* eslint-disable */
/**
 * sctgdesk-api-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface AbProfile
 */
export interface AbProfile {

    /**
     * @type {string}
     * @memberof AbProfile
     */
    guid: string;

    /**
     * @type {string}
     * @memberof AbProfile
     */
    name: string;

    /**
     * @type {string}
     * @memberof AbProfile
     */
    owner: string;

    /**
     * @type {string}
     * @memberof AbProfile
     */
    note?: string | null;

    /**
     * @type {number}
     * @memberof AbProfile
     */
    rule: number;
}