import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss']
})
export class AltaActoresComponent {
  actores: FormGroup;
  valorPasarAlHijo = 'pais';
  // private firestore: FirestoreService
  constructor(private fb: FormBuilder,private firestore: FirestoreService ) {
    this.actores = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required, Validators.minLength(3)]],
      direOpcional: ['', [Validators.minLength(3)]],
      pais: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    });
  }

  addUser() {
    const user = this.actores.value;
    try {
      this.firestore.addActor(user);
    } catch (error) {
    }
  }
  seleccionarPais(pais: string) {
    this.actores.patchValue({ pais: pais });
  }
}
