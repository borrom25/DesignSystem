import { Button } from "./components";
import { Counter } from "./components/Counter/Counter";
import { useTheme } from "./providers";
import { Color, Size, Type } from "./types";

function App() {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="flex justify-center items-center min-h-screen gap-4">
      <Counter count={5} />
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
