import { Button } from "./components";
import { Counter } from "./components/Counter/Counter";
import { useTheme } from "./providers";
import { Color, Size, Type } from "./types";

function App() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="flex justify-center items-center min-h-screen gap-4">
      {/* <Button size={Size.Xs} type={Type.Fill} color={Color.Info}>
        Button
      </Button>
      <Button size={Size.Sm} type={Type.Flat} color={Color.Info}>
        Button
      </Button>
      <Button size={Size.Md} type={Type.Ghost} color={Color.Info}>
        Button
      </Button>
      <Button size={Size.Lg} type={Type.Outline} color={Color.Info}>
        Button
      </Button>
      <Button
        size={Size.Sm}
        type={Type.Outline}
        color={Color.Info}
        iconOnly={Plus}
      /> */}

      <Counter count={5}/>
      <Button
        size={Size.Sm}
        type={Type.Outline}
        color={Color.Brand}
        onClick={toggleTheme}
      >
        {theme === "light" ? "Тёмная тема" : "Светлая тема"}
      </Button>
    </div>
  );
}

export default App;
