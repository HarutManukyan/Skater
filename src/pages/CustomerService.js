function CustomerService() {
  return (
    <div className="cust">
      <div className="cust__top">
        <h1 className="cust__title">
          ЖДЕМ
          <br />
          ВАС
        </h1>
        <div className="cust__img-container">
          <img
            className="cust__img"
            alt="team"
            src="https://static.wixstatic.com/media/1e47b2_14f0d160357b4553b3ad8bda275f07a3.jpg/v1/fill/w_795,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_14f0d160357b4553b3ad8bda275f07a3.jpg"
          />
        </div>
      </div>

      <div className="cust__info">
        <div className="cust__adress">
          Наш адрес
          <br />
          ул. Арбат, 1а, Москва, <br />
          119019, Россия
          <br />
          Телефон +7 (495) 000-00-00
        </div>
        <div className="cust__times">
          Часы работы
          <br />
          ПН–ПТ: 11:00–18:30
          <br />
          СБ: 11:00–17:00
          <br />
          ВС: 12:30–16:30
        </div>
        <div className="cust__question">
          Есть вопрос? <br />
          Пишите на info@mysite.ru
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
