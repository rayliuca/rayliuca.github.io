import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Bibliography from '../components/Resume/Bibliography';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import publications from '../data/resume/publications';

const sections = [
  'Education',
  'Skills',
  'Experience',
  'Bibliography',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Ray Liu's Resume. University of Alberta New Grad. Seeking opportunity in data science and machine learning"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Skills skills={skills} categories={categories} />
      <Experience data={positions} />
      <Bibliography data={publications} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
