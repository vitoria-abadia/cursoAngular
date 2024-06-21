import { inject } from '@angular/core';
import type {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { of } from 'rxjs';
import { CursoService } from '../../service/curso.service';
import { Curso } from '../../models/cursos';

export const CursoResolverGuard: ResolveFn<Curso> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const cursoService = inject(CursoService);

  if (route.params && route.params['id']) {
    return cursoService.loadByID(route.params['id']);
  } else {
    return of({
      id: null,
      nome: null,
    } as Curso);
  }
};
