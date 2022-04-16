import "./styles.css";
import Card from "/Components/Card";
import Cards from "/Cards/Cards";

export default function App() {
  return (
    <div className="App">
      {Cards.map(({ imageUrl, title, body }) => (
        <Card imageUrl={imageUrl} title={title} body={body} />
      ))}
    </div>
  );
}
