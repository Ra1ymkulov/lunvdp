import type { FC } from "react";
import scss from "./home.module.scss";
interface IHomeProps {
  setWelcome: (value: boolean) => void;
}
const Home: FC<IHomeProps> = ({ setWelcome }) => {
  return (
    <div className={scss.home}>
      <p>Наши воспоминание с 2020 года!!!</p>
      <button onClick={() => setWelcome(true)}>Начать?!</button>
    </div>
  );
};

export default Home;
