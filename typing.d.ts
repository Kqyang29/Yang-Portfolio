interface SanityBody {
  _createdAt:string;
  _id:string;
  _rev:string;
  _updatedAt: string;
  
}

interface Image{
  _type: "image";
  asset: {
    _ref: string;
    _type:"reference";
  }
}

export interface PageInfo extends Image {
	_type: "pageInfo";
	address: string;
	bgInfomation: string;
	email: string;
	role: string;
	heroImage: Image;
	name: string;
	phone: string;
	profilePic: Image;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
 
export interface Tech extends SanityBody {
	_type: "skill";
	image: Image;
	progress: number;
	title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  summary: string;
	image: Image;
  title: string;
  link: string;
  tech: Tech[];
  points: string[];
}

export interface Social extends SanityBody{
  _type: "social";
  title: string;
  url:string;
}