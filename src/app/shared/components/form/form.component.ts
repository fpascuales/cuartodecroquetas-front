import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CroquetaService } from 'src/app/core/services/croqueta/croqueta.service';
import { CroquetaI, CroquetaAllergensType } from 'src/app/core/services/croqueta/models/croqueta.interface';
import { isNotNegativePrice } from './validators/form-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public croqueta?: CroquetaI;
  @Input() public isEditMode: boolean = false;
  public croquetaForm?: FormGroup;
  public hasFormError: boolean = false;
  public hasSuccess: boolean = false;
  public imgSrc: string = '';
  public allergensType: string[] = [
    'Gluten',
    'Crustáceos',
    'Moluscos',
    'Pescado',
    'Huevo',
    'Altramuces',
    'Mostaza',
    'Cacahuetes',
    'Frutos Secos',
    'Soja',
    'Sésamo',
    'Apio',
    'Leche',
    'Anhídrido Sulfuroso',
  ];
  public categoryOptions: string[] = ['Pescado', 'Carne', 'Verdura', 'Queso'];
  public allergenArray: { type: string }[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private croquetaService: CroquetaService,
    private router: Router
  ) {}
  public ngOnInit(): void {
    this.initForm();
    this.croquetaForm?.get('image')?.valueChanges.subscribe((value: string) => {
      this.imgSrc = value;
    });
  }
  public handleCroqueta() {
    if (this.croquetaForm?.valid) {
      if (this.isEditMode) {
        this.editCroqueta();
      } else {
        this.createCroqueta();
      }
      this.croquetaForm?.reset();
    } else {
      this.hasFormError = true;
    }
  }
  public navigateToCroquetaList() {
    this.router.navigate(['admin/croqueta-list']);
  }
  public onFileChange(event: string) {}
  //buscar el tipo de event y meter el patchValue llamar a croquetaService

  public updateAllergen(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const allergenValue = checkbox.value;
    if (checkbox.checked) {
      this.allergenArray.push({ type: allergenValue });
    }
    else {
      const index = this.allergenArray.findIndex(
        (a) => a.type === allergenValue
      );
      if (index >= 0) {
        this.allergenArray.splice(index, 1);
      }
    }
  }
  private createCroqueta() {
    this.croquetaForm?.get('allergens')?.setValue(this.allergenArray);
    this.hasFormError = false;
    const croqueta = this.croquetaForm?.value;
    croqueta.price = parseInt(croqueta.price);
    croqueta.units = parseInt(croqueta.units);
    this.croquetaService.createCroqueta(this.croquetaForm?.value)
    .subscribe(
      response => {
        this.hasSuccess = true;
        return response;
      },
      error => {
        this.hasFormError = false
        return error;
      }
    )
  }
  private editCroqueta() {
    if (!this.croqueta) {
      return;
    }
    this.croquetaService
      .editCroqueta(this.croquetaForm?.value, this.croqueta._id)
      .subscribe((croqueta) => {
        this.hasSuccess = true;
        this.router.navigate(['admin/croqueta-list']);
      });
  }
  private initForm() {    
    const priceExp = new RegExp(/^[\-\.0-9]+$/);
    if (this.croqueta) {
      this.imgSrc = this.croqueta.image;         
    }
    this.croquetaForm = this.formBuilder.group({
      name: new FormControl(this.croqueta?.name || '', [Validators.required]),
      image: [this.croqueta?.image || '', [Validators.required]],
      description: new FormControl(this.croqueta?.description || '', [
        Validators.required,
      ]),
      price: new FormControl(this.croqueta?.price || '', [
        isNotNegativePrice(),
        Validators.required,
        Validators.pattern(priceExp),
      ]),
      units: new FormControl(this.croqueta?.units || '', [
        Validators.required,
        Validators.pattern(priceExp),
      ]),
      category: new FormControl(this.croqueta?.category || '', [
        Validators.required,
      ]),
      allergens: new FormControl(this.croqueta?.allergens || '', [
        Validators.required,
      ]),
    });
  }  
}
