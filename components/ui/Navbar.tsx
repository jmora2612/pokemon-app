import { Spacer } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 20px",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <h1>Pokemon</h1>

      <Spacer style={{ flex: 1 }} />
      <p color="white" style={{ marginRight: "10px" }}>
        Favoritos
      </p>
    </div>
  );
};
