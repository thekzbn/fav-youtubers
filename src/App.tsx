import { youtubers } from "./youtubers";
import { YoutuberCard } from "./components/YoutuberCard";

export function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Favorite YouTubers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {youtubers.map((youtuber) => (
          <YoutuberCard key={youtuber.name} youtuber={youtuber} />
        ))}
      </div>
    </div>
  );
}

export default App;
