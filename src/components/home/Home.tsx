import scss from "./home.module.scss";

const Home = () => {
  return (
    <div className={scss.home}>
      <div className={scss.photo}>
        <img src="/public/_.jpeg" alt="" />
        <img src="/public/_ (1).jpeg" alt="" />
        <img src="/public/_ (2).jpeg" alt="" />
        <img src="/public/_ (3).jpeg" alt="" />
        <img src="/public/_ (4).jpeg" alt="" />
        <img src="/public/base & stacey_.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Home;
