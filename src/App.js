import Navbar from './Navbar';
import Home from './Home';

function App() {
  const likes = 50;
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
  const link = 'http://www.google.com';

  return (
    <div className='App'>
      <Navbar />

      <div className='content'>
        <Home />
        <p>Liked {likes} times</p>

        <p>{10}</p>
        <p>{'hello'}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>
          {person.firstName} {person.lastName}
        </p>

        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
