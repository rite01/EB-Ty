"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpMessage", {
    enumerable: true,
    get: ()=>HttpMessage
});
const HttpMessage = {
    CONTINUE: 'Continue',
    SWITCHING_PROTOCOLS: 'Switching protocols',
    PROCESSING: 'Processing',
    EARLY_HINTS: 'Early hints',
    OK: 'Ok',
    CREATED: 'Created',
    ACCEPTED: 'Accepted',
    NON_AUTHORITATIVE_INFORMATION: 'Non authoritative information',
    NO_CONTENT: 'No content',
    RESET_CONTENT: 'Reset content',
    PARTIAL_CONTENT: 'Partial content',
    AMBIGUOUS: 'Ambiguous',
    MOVED_PERMANENTLY: 'Moved permanently',
    FOUND: 'Found',
    SEE_OTHER: 'See other',
    NOT_MODIFIED: 'Not modified',
    TEMPORARY_REDIRECT: 'Temporary redirect',
    PERMANENT_REDIRECT: 'Permanent redirect',
    BAD_REQUEST: 'Bad request',
    UNAUTHORIZED: 'Unauthorized',
    PAYMENT_REQUIRED: 'Payment required',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not found',
    METHOD_NOT_ALLOWED: 'Method not allowed',
    NOT_ACCEPTABLE: 'Not acceptable',
    PROXY_AUTHENTICATION_REQUIRED: 'Proxy authentication required',
    REQUEST_TIMEOUT: 'Request timeout',
    CONFLICT: 'Conflict',
    GONE: 'Gone',
    LENGTH_REQUIRED: 'Length required',
    PRECONDITION_FAILED: 'Precondition failed',
    PAYLOAD_TOO_LARGE: 'Payload too large',
    URI_TOO_LONG: 'Uri too long',
    UNSUPPORTED_MEDIA_TYPE: 'Unsupported media type',
    REQUESTED_RANGE_NOT_SATISFIABLE: 'Requested range not satisfiable',
    EXPECTATION_FAILED: 'Expectation failed',
    I_AM_A_TEAPOT: 'I am a teapot',
    MISDIRECTED: 'Misdirected',
    UNPROCESSABLE_ENTITY: 'Unprocessable entity',
    FAILED_DEPENDENCY: 'Failed dependency',
    PRECONDITION_REQUIRED: 'Precondition required',
    TOO_MANY_REQUESTS: 'Too many requests',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    NOT_IMPLEMENTED: 'Not implemented',
    BAD_GATEWAY: 'Bad gateway',
    SERVICE_UNAVAILABLE: 'Service unavailable',
    GATEWAY_TIMEOUT: 'Gateway timeout',
    HTTP_VERSION_NOT_SUPPORTED: 'Http version not supported'
};

//# sourceMappingURL=http-message.constants.js.map