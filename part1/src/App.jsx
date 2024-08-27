const Profile = (props) => {
  return (
    <div>
      <h1>{props.person.name}</h1>
      <h2>{props.person.surname}</h2>
      <h3>{props.person.age}</h3>
    </div>
  );
};
const App = () => {
  const person = [
    {
      name: "Aytekin",
      surname: "Kaplan",
      age: "25",
    },
    {
      name: "Özlem",
      surname: "Kaplan",
      age: "22",
    },
    {
      name: "Ahmed Yusuf",
      surname: "Kaplan",
      age: "7",
    },
  ];
  return (
    <>
      <Profile person={person[0]} />
      <Profile person={person[1]} />
      <Profile person={person[2]} />
    </>
  );
};
export default App;
