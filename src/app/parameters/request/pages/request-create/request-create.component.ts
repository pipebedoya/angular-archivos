import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { switchMap } from 'rxjs';
import { ProponentService } from 'src/app/parameters/proponent/services/proponent.service';
import { TRequestService } from 'src/app/parameters/t-request/services/t-request.service';
import { TRequest } from '../../../t-request/interfaces/t_request.interface';
import { ModalityService } from 'src/app/parameters/modality/services/modality.service';
import { Modality } from '../../../modality/interfaces/modality.interface';
import { StateService } from 'src/app/parameters/state/services/state.service';
import { AreaService } from 'src/app/parameters/i-area/services/area.service';
import { State } from 'src/app/parameters/state/interfaces/state.interface';
import { Area } from 'src/app/parameters/i-area/interfaces/area.interface';
import { UploadedFile } from '../../interfaces/uploaded.file.interface';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styles: [
  ]
})
export class RequestCreateComponent implements OnInit {

  documentForm:FormGroup = new FormGroup({});
  trequest!: TRequest[];
  modality!: Modality[];
  status!: State[];
  area!: Area[];
  proponenteId!: number;

  constructor( private fb: FormBuilder,
               private requestService: RequestService,
               private proponentService: ProponentService,
               private tRequestService: TRequestService,
               private modalityService: ModalityService,
               private statusService: StateService,
               private areaService: AreaService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.proponentService.getProponentById(id))
      )
      .subscribe( proponentes => {
        /* tengo la info de los proponentes */
        this.proponenteId=proponentes.id;
      })

      // TIPO DE SOLICITUD
      this.tRequestService.getTRequest()
      .subscribe( trequests => {
        console.log(trequests);
        this.trequest = trequests
      })

       //MODALIDAD
       this.modalityService.getModality()
       .subscribe( modalities => {
         console.log(modalities);
         this.modality = modalities;
       })

       //ESTADO
       this.statusService.getState()
       .subscribe( status => {
         console.log(status);
         this.status = status;
       })
       
       //AREA DE INVESTIGACION
       this.areaService.getArea()
       .subscribe( areas => {
         console.log(areas);
         this.area = areas;
       })

  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    fecha_radicado:['',[Validators.required]],
    descripcion:['',[Validators.required, Validators.minLength(3)]],
    trabajo:['',[Validators.required, Validators.minLength(3)]],
    idtiposolicitud:['',[Validators.required]],
    idmodalidad:['',[Validators.required]],
    idestado:['',[Validators.required]],
    idareainvestigacion:['',[Validators.required]],
  })

  createRequest(){

    const formData = this.miFormulario.getRawValue();
    console.log('formulario Objeto',formData);

    this.requestService.createRequest({
      nombre_trabajo:formData.nombre,
      fecha_radicado: formData.fecha_radicado,
      descripcion: formData.descripcion,
      trabajo: formData.trabajo,
      id_tiposolicitud: parseInt(formData.idtiposolicitud),
      id_modalidad: parseInt(formData.idmodalidad),
      id_estado: parseInt(formData.idestado),
      id_areainvestigacion: parseInt(formData.idareainvestigacion),
    })
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new Request has been created',
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          const formData = this.miFormulario.getRawValue();
          this.requestService.createRequestProponent({
            id_proponente:this.proponenteId,
            id_solicitud: parseInt(resp.id)
          })
        }, 2000);
        
        this.router.navigateByUrl('/parameters/faculties/Request-read')
      })
      this.requestService.createRequestProponent({
          
      })
  }

  FormDocument(){
    this.documentForm= this.fb.group({
       file:["",[]]
      });
     }
 

  //Carga de Archivo

  UploadDocument(event:any) {
    if(event.target.files.length>0){
    const file = event.target.files[0]
     this.documentForm.controls["file"].setValue(file);
    }
    }

    SubmitFileToServer(){
     const form = new FormData();
     form.append("file", this.documentForm.controls["file"].value);
     this.requestService.UploadDocument(form).subscribe({
       next: (data: UploadedFile) =>{
          this.miFormulario.controls["trabajo"].setValue(data.filename);
       }
     });

    }
}
