import { Routes } from '@angular/router';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { AnimalDetailComponent } from './animals/animal-detail/animal-detail.component';
import { AnimalFormComponent } from './animals/animal-form/animal-form.component';

export const routes: Routes = [
    { path: '',redirectTo: 'animals', pathMatch: 'full' },
    { path: 'animals', 
        loadComponent: () => import('./animals/animal-list/animal-list.component')
        .then(m => m.AnimalListComponent)
    },
    { path: 'animals/:id', 
        loadComponent: () => import('./animals/animal-detail/animal-detail.component')
        .then(m => m.AnimalDetailComponent)
    },
    { path: 'animals/:id/edit', 
        loadComponent: () => import('./animals/animal-form/animal-form.component')
        .then(m => m.AnimalFormComponent)
    },
    { path: 'create', 
        loadComponent: () => import('./animals/animal-form/animal-form.component')
        .then(m => m.AnimalFormComponent)
    },
    { path: '**', redirectTo: 'animals' },
];

// export const routes: Routes = [
//     { path: '',redirectTo: 'animals', pathMatch: 'full' },
//     { path: 'animals', 
//         component: AnimalListComponent },
//     { path: 'animals/:id', 
//         component: AnimalDetailComponent },
//     { path: 'animals/:id/edit', 
//         component: AnimalFormComponent },
//     { path: 'create', 
//         component: AnimalFormComponent },
//     { path: '**', redirectTo: 'animals' },
// ];
