// User
import {productsPublicRotes} from 'routes';

import App from 'core/ui/App';

export const routes = [
    {
        component: App,
        routes: [
            ...productsPublicRotes,
        ],
    },
];
