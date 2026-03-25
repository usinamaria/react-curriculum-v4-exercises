//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Maria';
  const age = 37;
  const hobbies = ['Reading', 'Coding', 'Hiking', 'Traveling'];

  return (
    <div>
      <h1>About {name}</h1>
      <p>
        Hi, I am {name}, I am {age} years old. I love learning and building
        things with React.
      </p>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
