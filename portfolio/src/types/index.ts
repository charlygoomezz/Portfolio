import type { JSX } from 'react';

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
  institute: string;
  desc: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  projects: string;
  icon: JSX.Element;
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
