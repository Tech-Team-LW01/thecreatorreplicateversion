// Define the type for the image object
export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  priority: boolean;
}

// Define the type for a section
export interface Section {
  heading: string;
  content: string;
}

// Define the type for a project
export interface Project {
  title: string;
  description: string;
  image: Image; // Use the Image interface
  projectCode: string;
  sections: Section[]; // Use the Section interface

}

// Define the type for the entire data object
export interface Data {
  projects: Project[]; // Array of projects
  button?: { // Optional button property
    text: string;
    className: string;
  };
  additionalSections?: { // Optional additional sections
    title: string;
    content: string[];
  }[];
}