import { CardItem } from "./CardItem";

export function CardList() {
  return (
    <div className="flex justify-center items-center gap-10 flex-col mx-auto flex-wrap mt-12">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
}
