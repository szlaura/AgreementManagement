export interface Agreement {
  agreementAuthorization?: AgreementAuthorization[];
  agreementItem:  AgreementItem[];
  agreementPeriod: string; //TIME????
  agreementSpecification?: AgreementSpecification[]; //REFERENCE???
  agreementType: string;
  associatedAgreement?: AgreementRef[];
  characteristic?: Characteristic[];
  completionDate: string; //DATE???
  description: string;
  documentNumber: number;
  engagedParty: RelatedParty[];
  href: string;
  id: string;
  initialDate: string; //DATE??
  name: string;
  statementOfIntent: string;
  status: string;
  version: string;
}
export interface AgreementAuthorization {
  date: string; //DATE??
  signatureRepresentation: string;
  state: string;
}
export interface AgreementItem {
  product?: ProductRef[];
  productOffering?: ProductOfferingRef[];
  termOrCondition?: AgreementTermOrCondition[];
}
export interface AgreementSpecification {
  referredType: string;
  href: string;
  id: string;
  name: string;
  description: string;
}
export interface AgreementRef {
  referredType: string;
  href: string;
  id: string;
  name: string;
}
export interface Characteristic {
  name: string;
  value: any;
  valueType: string;
}
export interface RelatedParty {
  referredType: string;
  href: string;
  id: string;
  name: string;
  role:string;
}
export interface ProductRef {
  referredType: string;
  href: string;
  id: string;
  name: string;
}
export interface ProductOfferingRef {
  referredType: string;
  href: string;
  id: string;
  name: string;
}
export interface AgreementTermOrCondition {
  description: string;
  id: string;
  validFor: string;
}
