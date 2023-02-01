import blackRose from './DALL·E 2023-02-01 21.10.22 - Сreate an illustration for the poem below about Black Rose in the style of Stephen King_dark-bg.png';

export const App = () => {
  return (
    <div className="article-box">
      <article className="article">
        <img className="img" src={blackRose} alt="Black Rose" />
        {/* prettier-ignore */}
        <h1>Black Rose</h1>
        <p className="text">
          A black rose blooms in darkness, <br />
          Its thorns a symbol of pain.
          <br />
          It stands alone in shadows,
          <br />
          Its beauty both bold and strange.
          <br />
          <br />
          Its petals soft and velvety,
          <br />
          Its scent a haunting refrain.
          <br />
          Its presence both dark and mystic,
          <br />
          A symbol of love's disdain.
          <br />
          <p className="author">
            Written by ChatGPT with soul of Stephen King <br /> Illustration
            created by DALL-E 2
          </p>
        </p>
      </article>
    </div>
  );
};
