import { Route } from '@angular/router';
import {AppLayoutComponent} from "./layout/component/appLayout/appLayout.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {NotFoundComponent} from "./pages/notFound/notFound.component";

export const appRoutes: Route[] = [
    {path:'',
        component: AppLayoutComponent,
        children: [
            { path: 'pages', loadChildren: () => import('./pages/pages.routes') }
        ]
    },
    { path: 'landing', component: LandingComponent },
    { path: 'notfound', component: NotFoundComponent, pathMatch: 'full' },
    // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
