import logo from './logo.svg';
import './App.css';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css'


const projects = [
  {
    id: 1,
    title: 'Recipe Logger',
    mediaSource: './video/recipe-logger-demo-low.webm',
    desc: 'Quick React app designed as a 72-hour challenge to simulate coding technical interview challenges.'
  },
  {
    id: 2,
    title: 'Template Mimic',
    mediaSource: './video/template-challenge-low.webm',
    desc: '48-hour challenge to mimic an existing template in HTML and Bootstrap. The ↖ left side of the thumbnail shows my attempt; the right ↗ side shows the actual page.'
  }
]

function App() {
  return (
    <div className='portfolio'>
      {projects.map(proj => <PortfolioItem
        title={proj.title}
        mediaSource={proj.mediaSource}
        desc={proj.desc}
      />)}
    </div>
  );
}

export default App;
