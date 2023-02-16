export const RoutesConstants = {
  USER: {
    CREATE: '/create',
    ALL_USER: '/getAll',
    GET_BY_ID: '/get/:id',
    LOGIN: '/login',
    UPDATE: '/update/:id',
    DELETE: '/delete/:id',
    PROFILE: '/create/profile',
    GET_PROFILE: '/get/profile',
    CSV: '/csv/post',
    PAGINATION: '/users/pagination',
  },
  DEPARTMENT: {
    CREATE: '/create',
    ALL_DEPARTMENT: '/getAll',
    GET_BY_ID: '/get/:id',
    LOGIN: '/login',
    UPDATE: '/update/:id',
    DELETE: '/delete/:id',
  },
  ROLE: {
    GET_ROLE: '/allRoles',
    CREATE: '/create',
    DELETE: '/delete/:id',
    UPDATE: '/update/:id',
    GET_BY_ID: '/get/:id',
  },
  ADMIN: {
    CREATE: '/create',
    ALL_DEPARTMENT: '/getAll',
    GET_BY_ID: '/get/:id',
    LOGIN: '/login',
    UPDATE: '/update/:id',
    DELETE: '/delete/:id',
  },
  HEALTH: '/health',
  NOT_FOUND: '*',
};