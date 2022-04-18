import FormMain from "../components/FormMain";
import FormSecondary from "../components/FormSecondary";
import ViewSong from "../components/ViewSong";
import LayoutMain from "../layout/LayoutMain";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">CREAR NUEVA ALABANZA/CANCION</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7 bg-light">
          <LayoutMain>
            <FormMain />
          </LayoutMain>

          <LayoutMain>
            <FormSecondary />
          </LayoutMain>
        </div>
        <div className="col-span-5 bg-bermuda">
          <LayoutMain>
            <ViewSong />
          </LayoutMain>
        </div>
      </div>
    </div>
  );
};

export default Home;
