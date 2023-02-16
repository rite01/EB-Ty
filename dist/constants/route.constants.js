"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RoutesConstants", {
    enumerable: true,
    get: ()=>RoutesConstants
});
const RoutesConstants = {
    USER: {
        CREATE: '/create',
        ALL_USER: '/getAll',
        GET_BY_ID: '/get/:id',
        LOGIN: '/login',
        UPDATE: '/update/:id',
        DELETE: '/delete/:id',
        PROFILE: '/create/profile',
        GET_PROFILE: '/get/profile',
        CSV: '/csv/post'
    },
    DEPARTMENT: {
        CREATE: '/create',
        ALL_DEPARTMENT: '/getAll',
        GET_BY_ID: '/get/:id',
        LOGIN: '/login',
        UPDATE: '/update/:id',
        DELETE: '/delete/:id'
    },
    ROLE: {
        GET_ROLE: '/allRoles',
        CREATE: '/create',
        DELETE: '/delete/:id',
        UPDATE: '/update/:id',
        GET_BY_ID: '/get/:id'
    },
    ADMIN: {
        CREATE: '/create',
        ALL_DEPARTMENT: '/getAll',
        GET_BY_ID: '/get/:id',
        LOGIN: '/login',
        UPDATE: '/update/:id',
        DELETE: '/delete/:id'
    },
    HEALTH: '/health',
    NOT_FOUND: '*'
};

//# sourceMappingURL=route.constants.js.map