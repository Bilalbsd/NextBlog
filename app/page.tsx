// import NewArticlePage from "./articles/new/page";
// import { ArticleList } from "./components/ArticleList";
// import { CardItem } from "./components/CardItem";
import { CardList } from "./components/CardList";

export default function Home() {
    return (
        <div className="home container mx-auto">
            <CardList />
            {/* <CardItem /> */}
            {/* <ArticleList /> */}
            {/* <NewArticlePage /> */}
        </div>
    );
}
