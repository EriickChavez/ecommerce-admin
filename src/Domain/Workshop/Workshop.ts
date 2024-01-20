export interface Workshop {
  id: string;
  name: string;
  description: string;
  imageUri: string;
  createdAt: string;
  adminId: string;
}
export interface InputWorkshop {
  name: string;
  description: string;
  imageUri: string;
  adminId: string;
}
