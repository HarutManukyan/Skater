import { Link } from "react-router-dom";

function HomeHistory() {
  return (
    <div className="homepage__history">
      <div className="homepage__history-content">
        <h2 className="homepage__history-title">
          КТО <br />
          МЫ
        </h2>
        <div className="homepage__history-text">
          Это текст. Нажмите один раз и выберите «Редактировать текст» или
          просто кликните дважды, чтобы добавить свое содержание и настроить
          шрифт. Текстовый блок можно перетащить в любое место на странице.
          <div className="homepage__history-btn-container">
            <Link to={"/history"} className="homepage__history-btn">
              наша история
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHistory;
