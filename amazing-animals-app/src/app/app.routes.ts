import { Routes } from '@angular/router';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { AnimalDetailComponent } from './animals/animal-detail/animal-detail.component';
import { AnimalFormComponent } from './animals/animal-form/animal-form.component';

export const routes: Routes = [
    { path: '',redirectTo: 'animals', pathMatch: 'full' },
    { path: 'animals', 
        loadComponent: () => 
            import('./animals/animal-list/animal-list.component')
        .then(m => m.AnimalListComponent)
    },

    { path: 'animals/create', 
        loadComponent: () => 
            import('./animals/animal-form/animal-form.component')
        .then(m => m.AnimalFormComponent)
    },

    { path: 'animals/:id', 
        loadComponent: () => 
            import('./animals/animal-detail/animal-detail.component')
        .then(m => m.AnimalDetailComponent)
    },

    { path: 'animals/:id/edit', 
        loadComponent: () => 
            import('./animals/animal-form/animal-form.component')
        .then(m => m.AnimalFormComponent)
    },
    
    { path: 'animals/:id/delete',
        loadComponent: () => 
            import('./animals/animal-delete/animal-delete.component')
        .then(m => m.AnimalDeleteComponent)
    },
    
    { path: '**', redirectTo: 'animals' },
];
