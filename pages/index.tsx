import { MoonIcon } from "@/components/darkTheme/MoonIcon";
import { SunIcon } from "@/components/darkTheme/SunIcon";
import type { GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { Button, Switch } from "@nextui-org/react";
import { NextPage } from "next";
import { useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { pokeApi } from "@/apis";
import { PokemonList, Result } from "@/interfaces";

interface Props {
  pokemons: Result[];
}

const HomePage: NextPage<Props> = ( { pokemons } ) => {
  
  const darkMode = useDarkMode(true);

  useEffect(() => {
    if (darkMode.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode.value]);

  return (
    <main className={darkMode.value ? "dark" : ""}>
      <div style={{ position: "fixed", top: "20px", right: "20px" }}>
    <div style={{ marginBottom: "20px" }}>
      <Switch
        onClick={darkMode.toggle}
        defaultSelected
        size="lg"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
        }
      >
        {darkMode.value ? "Modo Claro" : "Modo Oscuro"}
      </Switch>
    </div>
  </div>

      {/* <div>
        <Layout title="Listado de pokemon">
          <ul>
            {
            pokemons.map(({name, _id}) => (
              <li key={_id}>{_id} {name}</li>
            ))
            }
          </ul>
        </Layout>
      </div> */}
    </main>
  );
};


// SERVER SIDE GENERATION
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>("/pokemon?limit=151");

  const pokemons: Result[] = data.results.map((el, i) => ({
    ...el,
    _id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${
      i + 1
    }.png`,
  }));

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/132.png

  return {
    props: {
      pokemons
    },
  };
};

export default HomePage;
