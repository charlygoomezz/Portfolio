export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type ProjectType = {
  imgSrc: string;
  title: string;
  description?: string;
  descriptionLink?: string;
  stack: ToolsType[];
  projectLink: string;
  secondaryLink?: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute?: string;
  company?: string;
  desc: string;
};

export type StatsType = {
  number: string;
  label: string;
};

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};
export type CollabsType = {
  title: string;
  description: string;
  company: string;
  role: string;
  link: string;
  icon: React.ElementType;
};
