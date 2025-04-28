import { NextPage } from "next";
import Stratagems from "../../lib/data/stratagems.json";
import { Stratagem } from "../../lib/data/types/stratagem";
import Icon from "../1-atoms/Icon";
import BaseLayout from "../4-layouts/BaseLayout";

interface Props {
  //
}

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <BaseLayout className="home">
        <div className="flex justify-center items-center h-screen">
          <div className="grid grid-cols-8 gap-1">
            {Stratagems.map((stratagem: Stratagem) => {
              return (
                <Icon
                  {...stratagem}
                  className="hover:bg-stone-800"
                />
              );
            })}
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default HomePage;
