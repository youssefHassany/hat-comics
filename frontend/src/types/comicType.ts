export interface ComicType {
  _id: string;
  company: string;
  character: string;
  title: string;
  issues: number;
  complete: boolean;
  img?: string;
  publishYear: number;
  description: string;
  slug: string;
  englishLink?: string;
  arabicLink?: string;
  beginnerFriendly?: boolean;
}
