
import './App.css';
import Display from './components/Display';
import Headline from './components/Headline';
import Nav from './components/nav/Nav';
import request from './components/request';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Headline/>
      {/* we give title name to differentiate */}
      <Display title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginal} isBigger/>
      <Display title="Trending Now" fetchUrl={request.fetchTrading}/>
      <Display title='Top Rated' fetchUrl={request.fetchTopRateMovies}/>
      <Display title='Action Movies' fetchUrl={request.fetchActionMovies}/>
      <Display title='Comedy Movies' fetchUrl={request.fetchComedyMovies}/>
      <Display title='Horror Movies' fetchUrl={request.fetchHorrorMovies}/>
      <Display title='Romance Movies' fetchUrl={request.fetchRomanceMovies}/>
      <Display title='Documentaries Movies' fetchUrl={request.fetchDocumentaries}/>
     </div>
  );
}

export default App;
