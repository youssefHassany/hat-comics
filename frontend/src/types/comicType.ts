export interface Comic {
  id: number;
  company: string;
  character?: string;
  comicName: string;
  issues?: number;
  complete: boolean;
  img?: string;
}
