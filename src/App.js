import React from 'react'
import './App.css';
import Header from './components/Header';
import NewsNotification from './components/NewsNotification';
import News from './components/News';

const NewsNotificationData = [
  {
    topic: 'Mainos',
    body: 'Kaksi viikkoa ilmaista lukuaikaa'
  },
  {
    topic: 'Tänään',
    body: '18-vuotias lukiolaispoika teki hurjan tuloksen Cooperin testissä'
  },
]

document.body.style.backgroundColor = "lightgray";

function App() {
  return (
    
    <div>
      <Header />
      <div style={{paddingBottom:'20px', paddingTop:'10px'}}>
                  {
        NewsNotificationData.map(element =>  <NewsNotification data={element} />)
      }
      </div>
      <News />
    </div>
  );
}

export default App;
