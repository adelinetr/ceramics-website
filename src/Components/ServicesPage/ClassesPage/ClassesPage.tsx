import Header from "../../Header/Header";
import ChooseClass from "./ChooseClass/ChooseClass";
import Hero from "./HeroClass/Hero";
import MostPopular from "./MostPopular/MostPopular";
import Teacher from "./Teacher/Teacher";

export default function ClassesPage(){
    return(
        <div>
            <Header />
            <Hero />
            <ChooseClass />
            <Teacher />
            <MostPopular />
        </div>
    )
}