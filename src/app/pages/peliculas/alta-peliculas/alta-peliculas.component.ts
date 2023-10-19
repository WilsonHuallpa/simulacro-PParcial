import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { getDownloadURL } from 'firebase/storage';
import IActor from 'src/app/interfaces/actor';
@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.scss'],
})
export class AltaPeliculasComponent {
  peliculas: FormGroup;
  valorPasarAlHijo = 'pais';
  file: any;
  actores: IActor[] = [];
  constructor(
    private fb: FormBuilder,
    private firestore: FirestoreService,
    private storage: Storage
  ) {
    this.peliculas = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required, Validators.minLength(3)]],
      anioDeLanzamiento: ['', [Validators.required]],
      duracion: ['', [Validators.required, Validators.minLength(3)]],
      imagen: [''],
    });
  }

  async addPelicula() {
    try {
      if (this.file) {
        const imgRef = ref(this.storage, `images/${this.file.name}`);
        const snapshot = await uploadBytes(imgRef, this.file);
        const downloadURL = await getDownloadURL(imgRef);
        this.peliculas.patchValue({ imagen: downloadURL });
      }
      const pelicula = this.peliculas.value;
      const resp = await this.firestore.addPelicula(pelicula);

      if(this.actores.length > 0){
        const peliculaID = resp.id;
        for (const actor of this.actores) {
          if(actor.id){
            await this.firestore.addPeliculaAActor(actor.id, peliculaID);
            await this.firestore.addActorDePelicula(peliculaID, actor);
          }       
          console.log('Actor agregado a la película:', actor);
        }
      }

    } catch (error) {
      console.log('Error: ', error);
    }
  }
  uploadImage($even: any) {
    this.file = $even.target.files[0];
  }
  seleccionarActor(actor: IActor) {
    const existeActor = this.actores.find((a) => a.id === actor.id);

    if (!existeActor) {
      this.actores.push(actor);
    }
    console.log('actores: ', this.actores)
  }
  eliminarElemento(id: string | undefined) {
    if (id) {
      this.actores = this.actores.filter(actor => actor.id !== id);
    }
  }
}
