// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Tcl/Tk',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Google App Script',
    competency: 3,
    category: ['Tools', 'Web Development', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2.5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 1,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Linux',
    competency: 3.5,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Amazon Web Services (AWS)',
    competency: 3.1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2.5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/MySQL/SQL',
    competency: 3.5,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'BigQuery',
    competency: 3,
    category: ['Web Development', 'Databases', 'Tools'],
  },
  {
    title: 'Google Cloud Platform (GCP)',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Data Mining',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Leaflet',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Data Engineering'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Flask',
    competency: 1,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/GitHub/BitBucket/GitLab',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Data Engineering', 'Web Development'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Numba',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML',
    competency: 2.8,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'SASS/SCSS/CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C/C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 3.5,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Plot.ly',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Seaborn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4.5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3.8,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HuggingFace Transformers',
    competency: 5,
    category: ['Data Science', 'Python'],
  },

].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
