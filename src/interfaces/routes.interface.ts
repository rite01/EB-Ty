import { Router } from 'express';

export interface Routes {
    path?: string | undefined;
    router: Router;
}
