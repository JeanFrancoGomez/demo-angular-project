import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _dogs = [
    {
      name: 'Shiva',
      breed: 'Golden',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog.`,
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      avatar: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      online: true
    },
    {
      name: 'Roby',
      breed: 'Caniche',
      description: `Perrito de Diana muy tranquilo, casi un abuelito con cuerpo de joven como la dueña :D`,
      image: 'https://www.nombresdeperros.eu/wp-content/uploads/2021/02/coton-de-tulear-perro-peludo-blanco.jpg',
      avatar: 'https://avatars.githubusercontent.com/u/1248187?v=4',
      online: true
    },
    {
      name: 'Domino',
      breed: 'Dalmata',
      description: `Ex perrito de Erick, muy fuerte y amigable, pero cuando se enojaba era terrible.
      De pequeño era muy travieso. RIP Dominic`,
      image: 'https://www.ilverdemondo.it/public/blog/thumbs/cane-dalmata-carattere-e-alimentazione-it-000.jpg',
      avatar: 'https://thumbs.dreamstime.com/z/persiga-el-icono-geom%C3%A9trico-d%C3%A1lmata-de-avatar-del-estilo-de-la-colecci%C3%B3n-redondo-90266436.jpg',
      online: false
    }
  ]

  constructor() {
  }

  getDogs() {
    return this._dogs;
  }

  getDog(id: number) {
    return this._dogs[id];
  }
}
