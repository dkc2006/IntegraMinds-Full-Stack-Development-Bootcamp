import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export function Sample() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const App = (props) => {
  const profile = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
    hobbies: ['reading', 'painting', 'coding', 'cooking'],
  };

  const cards = [
    {
      _id: "card1",
      title: "How To Update Your Status During Standup Like a Senior Engineer",
      description:
        "A status update is where you can showcase how well you manage ambiguity and is an important way to build trust with your team",
      authorName: "Edward Huang",
      cardImageUrl:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/0*3Xdd_WEaRxryzfLC",
      authorImageUrl:
        "https://miro.medium.com/v2/resize:fill:176:176/1*wfUDTiKcoy2gOH98Eq2kIQ.jpeg",
      date: "Jun 22",
      likes: 2800,
      Comments: "125",
      status: "active",
    },
    {
      _id: "card2",
      title: "28 JavaScript One-Liners every Senior Developer Needs to Know",
      description:
        "Learn how to implement complex logic with beautifully short and efficient next-level JavaScript syntax.",
      authorName: "Mate Marschalko",
      cardImageUrl:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/1*SvL6TGfFaPmEOtw1dzPDFg.jpeg",
      authorImageUrl:
        "https://miro.medium.com/v2/resize:fill:110:110/1*pdvQ_QYAVavif1MNzvwARQ.jpeg",
      date: "Mar 12",
      likes: 1300,
      Comments: "11",
      status: "active",
    },
    {
      _id: "card3",
      title: "My Experience With an Arrogant Junior Programmer",
      description: "That I won’t forget",
      authorName: "Josef Cruz",
      cardImageUrl:
        "https://miro.medium.com/v2/resize:fit:828/format:webp/0*oY_ucPmMlywwHFow",
      authorImageUrl:
        "https://miro.medium.com/v2/resize:fill:110:110/1*RvB7OCsPIBQwZpVMW3UEeg.jpeg",
      date: "Dec 19",
      likes: 6600,
      Comments: "201",
      status: "active",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">Profile</header>
      <div className='posts'>
        {cards.map((card, idx) => {
          console.log("🚀 ~ App ~ card:", card);
          return (
            <div key={idx} className="card">
              <img src={card.cardImageUrl} alt="card" />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <span>By: {card.authorName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
