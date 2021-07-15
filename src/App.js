import PortfolioItem from './PortfolioItem'
import './App.css'
import './Portfolio.css'

const projects = [
  {
    id: 1,
    title: 'Recipe Logger',
    mediaSource: './video/recipe-logger-demo-low.webm',
    desc: 'Quick React app designed as a 72-hour challenge to simulate coding technical interview challenges.',
    pagelink: 'https://jwd05meng.github.io/recipe-logger/',
    repolink: 'https://github.com/JWD05Meng/recipe-logger'
  },
  {
    id: 2,
    title: 'Template Mimic',
    mediaSource: './video/template-challenge-low.webm',
    desc: '48-hour challenge to mimic an existing template in HTML and Bootstrap. The ↖ left side of the thumbnail shows my attempt; the right ↗ side shows the actual page.',
    pagelink: 'https://jwd05meng.github.io/week7challenge/',
    repolink: 'https://github.com/JWD05Meng/week7challenge'
  },
  {
    id: 3,
    title: 'Task Planner',
    mediaSource: './video/task-planner-demo.webm',
    desc: 'Final team project for Generation / Academy Xi programme. The goal was to work in a teams of two to produce a Task Planner app within three sprints. I learnt a lot from this experience and made a most wonderful new friend :)',
    pagelink: 'https://hlc64.github.io/taskplannerproject/',
    repolink: 'https://github.com/hlc64/taskplannerproject'
  },
  {
    id: 4,
    title: 'Website Mockup',
    mediaSource: './video/justloud-demo.webm',
    desc: 'A quick mockup created for a company looking to get their website published quickly. Work was carried out part-time over several days. Unfortunately, the company\'s liason has since been tied up with other pressing concerns.',
    pagelink: 'https://ymloh.github.io/justloud/',
    repolink: 'https://github.com/ymloh/justloud'
  }
]

function App() {
  return (
    <div className='portfolio'>
      {projects.map(proj => <PortfolioItem
        title={proj.title}
        mediaSource={proj.mediaSource}
        desc={proj.desc}
        pagelink={proj.pagelink}
        repolink={proj.repolink}
        key={proj.id}
      />)}
    </div>
  );
}

export default App;
