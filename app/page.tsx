import { DropdownComponent } from "./components/DropdownComponent";
import { CardList } from "./components/CardList";

export default function Home() {
  return (
    <div className="home container mx-auto">
      <div className="flex justify-around">
        <h1 className="text-2xl">Tous les articles</h1>
        <DropdownComponent />
      </div>
      <CardList />
    </div>
  );
}
