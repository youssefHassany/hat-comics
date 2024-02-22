export interface ComicType {
  company: string;
  character: string;
  title: string;
  issues: number;
  complete: boolean;
  img?: string;
  publishYear: Number;
  description: string;
  slug: string;
  englishLink?: string;
  arabicLink?: string;
  beginnerFriendly?: boolean;
}
