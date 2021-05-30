import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

export function getAgreementForm(): FormGroup {
  return new FormGroup({
      agreementAuthorization: new FormArray([
        getAgreementAuthorizationForm('')
      ]),
      agreementItem: new FormArray([
        getAgreementItemForm('item')
      ]),
      agreementPeriod: new FormControl(),
      agreementSpecification: new FormArray([
        getAgreementSpecificationForm('')
      ]),
      agreementType: new FormControl(),
      associatedAgreement: new FormArray([
        getAgreementRefForm('')
      ]),
      characteristic: new FormArray([
        getCharacteristicForm('')
      ]),
      completionDate: new FormControl(Validators.pattern('10/21/2020')),
      description: new FormControl(),
      documentNumber: new FormControl(),
      engagedParty: new FormArray([
        getRelatedPartyForm('')
      ]),
      href: new FormControl(),
      id: new FormControl(),
      initialDate: new FormControl(Validators.pattern('10/21/2020')),
      name: new FormControl(),
      statementOfIntent: new FormControl(),
      status: new FormControl(),
      version: new FormControl(),
  });
}
export function getAgreementAuthorizationForm(signatureRepresentation:string): FormGroup {
  return new FormGroup({
  date: new FormControl(),
  signatureRepresentation: new FormControl(signatureRepresentation),
  state: new FormControl()
  });
}
export function getAgreementItemForm(item:string): FormGroup {
  return new FormGroup({
    product: new FormArray([
      getProductRefForm(item)
    ]),
    productOffering: new FormArray([
      getProductOfferingRefForm()
    ]),
    termOrCondition: new FormArray([
      getAgreementTermOrConditionForm()
    ]),
  });
}
export function getAgreementSpecificationForm(descript:string): FormGroup {
return new FormGroup({
  referredType: new FormControl(),
  href: new FormControl(),
  id: new FormControl(),
  name: new FormControl(),
  description: new FormControl(descript)
  });
}
export function getAgreementRefForm(refer:string): FormGroup {
  return new FormGroup({
    referredType: new FormControl(),
    href: new FormControl(refer),
    id: new FormControl(),
    name: new FormControl()
  });
}
export function getCharacteristicForm(name: string): FormGroup {
  return new FormGroup({
    name: new FormControl(name),
    value: new FormControl(),
    valueType: new FormControl()
  });
}
export function getRelatedPartyForm(role:string): FormGroup {
  return new FormGroup({
    referredType: new FormControl(),
    href: new FormControl(),
    id: new FormControl(),
    name: new FormControl(),
    role: new FormControl(role)

  });
}
export function getProductRefForm(name:string): FormGroup {
  return new FormGroup({
    referredType: new FormControl(),
    href: new FormControl(),
    id: new FormControl(),
    name: new FormControl(name)
  });
}
export function getProductOfferingRefForm(): FormGroup {
  return new FormGroup({
    referredType: new FormControl(),
    href: new FormControl(),
    id: new FormControl(),
    name: new FormControl()
  });
}
export function getAgreementTermOrConditionForm(): FormGroup {
  return new FormGroup({
    description: new FormControl(),
    id: new FormControl(),
    validFor: new FormControl()
  });
}
