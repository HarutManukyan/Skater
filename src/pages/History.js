function History() {
  return (
    <div className="history">
      <div className="history__top">
        <h1 className="history__title">
          НАША <br /> ИСТОРИЯ
        </h1>
        <div className="history__img-container">
          <img
            className="history__img"
            alt="team"
            src="https://static.wixstatic.com/media/1e47b2_4b3f41833bb1481284a38f42c08eb8d3.jpg/v1/fill/w_795,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_4b3f41833bb1481284a38f42c08eb8d3.jpg"
          />
        </div>
      </div>
      <div className="history__texts">
        <p className="history__text--main">
          Это текст. Нажмите один раз и выберите «Редактировать текст» или
          кликните дважды, чтобы добавить содержание и настроить шрифт.
        </p>
        <p className="history__text--secondary">
          Это текст. Нажмите один раз и выберите «Редактировать текст» или
          просто кликните дважды, чтобы добавить свое содержание и настроить
          шрифт. Текстовый блок можно перетащить в любое место на странице.
          Расскажите посетителям сайта о себе подробнее, например, как вам
          пришла в голову идея бизнеса.
          <br />
          <br />
          Здесь будет удачно смотреться текст о ваших услугах. Используйте эту
          возможность, чтобы выгодно представить свою компанию клиентам.
          Объясните, в чем заключается ваше преимущество перед конкурентами.
          Приводите увлекательные факты, цифры и не забудьте про ключевые слова,
          по которым ваш сайт найдут в поисковых системах.
        </p>
      </div>
      <h2 className="history__team-title">КОМАНДА</h2>
      <ul className="history__team">
        <li className="history__team-item">
          <div className="history__team-img-container">
            <img
              src="https://static.wixstatic.com/media/1e47b2_cbc997b570d9496fa45cdc206e2db9af.jpg/v1/fill/w_280,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_cbc997b570d9496fa45cdc206e2db9af.jpg"
              className="history__team-img"
              alt="teammate"
            />
          </div>
          <h3 className="history__team-name">Данила Сергеев</h3>
          <p className="history__team-text">
            Это текст. Кликните дважды, чтобы отредактировать. Расскажите здесь
            о себе.
          </p>
        </li>
        <li className="history__team-item">
          <div className="history__team-img-container">
            <img
              src="https://static.wixstatic.com/media/1e47b2_09abf02d83a3442999fea3c59953ad17.jpg/v1/fill/w_280,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_09abf02d83a3442999fea3c59953ad17.jpg"
              className="history__team-img"
              alt="teammate"
            />
          </div>
          <h3 className="history__team-name">Карина Орлова</h3>
          <p className="history__team-text">
            Это текст. Кликните дважды, чтобы отредактировать. Расскажите здесь
            о себе.
          </p>
        </li>
        <li className="history__team-item">
          <div className="history__team-img-container">
            <img
              src="https://static.wixstatic.com/media/1e47b2_4cb92ea57b454e42a50a0929310e4ad9.jpg/v1/fill/w_280,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_4cb92ea57b454e42a50a0929310e4ad9.jpg"
              className="history__team-img"
              alt="teammate"
            />
          </div>
          <h3 className="history__team-name">Марат Дольский</h3>
          <p className="history__team-text">
            Это текст. Кликните дважды, чтобы отредактировать. Расскажите здесь
            о себе.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default History;
