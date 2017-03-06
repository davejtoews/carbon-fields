/**
 * The external dependencies.
 */
import { createAction } from 'redux-actions';

/**
 * Perform the initial setup of the field.
 *
 * @param  {String} fieldId
 * @param  {String} type
 * @param  {Object} ui
 * @return {Object}
 */
export const setupField = createAction('fields/SETUP_FIELD', (fieldId, type, ui) => ({ fieldId, type, ui }));

/**
 * Prepare the field for removal.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const teardownField = createAction('fields/TEARDOWN_FIELD', fieldId => ({ fieldId }));

/**
 * Perform the setup of the validation logic.
 *
 * @param  {String} fieldId
 * @param  {String} validationType
 * @return {Object}
 */
export const setupValidation = createAction('fields/SETUP_VALIDATION', (fieldId, validationType) => ({ fieldId, validationType }));

/**
 * Update the object that contains information about field's UI.
 *
 * @param  {String} fieldId
 * @param  {Object} ui
 * @return {Object}
 */
export const setUI = createAction('fields/SET_UI', (fieldId, ui) => ({ fieldId, ui }));

/**
 * Update the field.
 *
 * @param  {String} fieldId
 * @param  {Object} data
 * @return {Object}
 */
export const updateField = createAction('fields/UPDATE_FIELD', (fieldId, data) => ({ fieldId, data }));

/**
 * Setup the interaction between field and WordPress's media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const setupMediaBrowser = createAction('fields/SETUP_MEDIA_BROWSER');

/**
 * Open the built-in media browser.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const openMediaBrowser = createAction('fields/OPEN_MEDIA_BROWSER');

/**
 * Add the field(s) to the store.
 *
 * @param  {Object} fields
 * @return {Object}
 */
export const addFields = createAction('fields/ADD_FIELDS');

/**
 * Remove the field(s) from the store.
 *
 * @param  {String[]} fields
 * @return {Object}
 */
export const removeFields = createAction('fields/REMOVE_FIELDS');

/**
 * Add a new instance of the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupName
 * @return {Object}
 */
export const addComplexGroup = createAction('fields/ADD_COMPLEX_GROUP', (fieldId, groupName) => ({ fieldId, groupName }));

/**
 * Create a clone of the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
export const cloneComplexGroup = createAction('fields/CLONE_COMPLEX_GROUP', (fieldId, groupId) => ({ fieldId, groupId }));

/**
 * Remove the specified complex group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
export const removeComplexGroup = createAction('fields/REMOVE_COMPLEX_GROUP', (fieldId, groupId) => ({ fieldId, groupId }));

/**
 * Show the contents of the specified group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
export const expandComplexGroup = createAction('fields/EXPAND_COMPLEX_GROUP', (fieldId, groupId) => ({ fieldId, groupId, collapsed: false }));

/**
 * Hide the contents of the specified group.
 *
 * @param  {String} fieldId
 * @param  {String} groupId
 * @return {Object}
 */
export const collapseComplexGroup = createAction('fields/COLLAPSE_COMPLEX_GROUP', (fieldId, groupId) => ({ fieldId, groupId, collapsed: true }));

/**
 * Process the address through Google's geocoding service.
 *
 * @param  {String} fieldId
 * @param  {String} address
 * @return {Object}
 */
export const geocodeAddress = createAction('fields/GEOCODE_ADDRESS', (fieldId, address) => ({ fieldId, address }));

/**
 * Update the validation status of the field.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const markFieldAsValid = createAction('fields/MARK_FIELD_AS_VALID', fieldId => ({ fieldId }));

/**
 * Update the validation status of the field.
 *
 * @param  {String} fieldId
 * @param  {String} error
 * @return {Object}
 */
export const markFieldAsInvalid = createAction('fields/MARK_FIELD_AS_INVALID', (fieldId, error) => ({ fieldId, error }));

/**
 * Trigger the validation for a field.
 *
 * @param  {String} fieldId
 * @return {Object}
 */
export const validateField = createAction('fields/VALIDATE_FIELD', fieldId => ({ fieldId }));

/**
 * Trigger the validation for all required fields.
 *
 * @return {Object}
 */
export const validateFields = createAction('fields/VALIDATE_FIELDS');
