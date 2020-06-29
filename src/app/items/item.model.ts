import { Comment } from './comment.model';

export interface Item {
	id?: string;
	title: string;
	image?: File;
	imagePath: string;
	comments?: Comment[];
};