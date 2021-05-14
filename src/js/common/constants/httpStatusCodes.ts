/* 1xx - INFORMATIONAL */
export const HTTP_SWITCHING_PROTOCOLS = 101;

/* 2xx - SUCCESS */
export const HTTP_OK = 200;
export const HTTP_CREATED = 201;
export const HTTP_ACCEPTED = 202;
export const HTTP_NO_CONTENT = 204;

/* 3xx - REDIRECTION */
export const HTTP_MOVED_PERMANENTLY = 301;
export const HTTP_MOVED_TEMPORARILY = 302;
export const HTTP_NOT_MODIFIED = 304;

/* 4xx - CLIENT ERROR */
export const HTTP_BAD_REQUEST = 400;
export const HTTP_UNAUTHORIZED = 401;
export const HTTP_FORBIDDEN = 403;
export const HTTP_NOT_FOUND = 404;
export const HTTP_METHOD_NOT_ALLOWED = 405;
export const HTTP_GONE = 410;
export const HTTP_UNPROCESSABLE_ENTITY = 422;
export const HTTP_TOO_MANY_REQUESTS = 429;

/* 5xx - SERVER ERRORS */
export const HTTP_INTERNAL_SERVER_ERROR = 500;
export const HTTP_NOT_IMPLEMENTED = 501;
export const HTTP_BAD_GATEWAY = 502;
export const HTTP_SERVICE_UNAVAILABLE = 503;
export const HTTP_GATEWAY_TIMEOUT = 504;
