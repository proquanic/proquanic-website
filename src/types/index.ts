export interface ProductRecord {
  id: string;
  name: string;
  code?: string;
  family: string;
  categorySlug: string;
  shortDescription: string;
  specifications: Record<string, string>;
  commonGradesOrSizes?: string[];
  applications: string[];
  unitOfMeasure?: string;
  image?: string;
  leadTimeNotice?: string;
}

export interface ProductFamily {
  id: string;
  name: string;
  slug: string;
  description: string;
  representativeItems: string[];
  typicalSpecs: string;
}

export interface Category {
  order: number;
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  image: string;
  families: ProductFamily[];
  sampleProducts: ProductRecord[];
  commonStandards?: string[];
  procurementNote?: string;
}

export interface MachineryItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  typicalCapacity: string;
  specifications: Record<string, string>;
  keyCapabilities: string[];
  image: string;
}

export interface RfqItem {
  id: string;
  title: string;
  category: string;
  partNumberOrGrade?: string;
  quantity: string;
  unit: string;
  specifications?: string;
}

export interface RfqFormData {
  fullName: string;
  companyName: string;
  email: string;
  telephone: string;
  location: string;
  productRequired: string;
  brandOrManufacturer: string;
  partNumberOrModel: string;
  specifications: string;
  quantity: string;
  unitOfMeasure: string;
  additionalNotes: string;
  hasDocument: boolean;
  documentName?: string;
  consent: boolean;
  items: RfqItem[];
}
