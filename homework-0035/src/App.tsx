import "./App.css";

function App() {
  return (
    <>
      <div
        className="main_content App"
        style={{ zIndex: "4", visibility: "visible" }}
      >
        <div className="contener">
          <div className="contener2">
            <div className="content">
              <div className="x-sort">
                <div className="xsort-area ignore-select">
                  <div style={{ paddingRight: "3px" }}>Сортировать:</div>
                  <div className="xsort-div xsort-active">
                    <div className="xsort-selected">
                      <span className="xdesc">топ за 3 дня</span>
                    </div>
                    <ul className="xsort-ul" data-field="defaultsort">
                      <li data-val="views_top" className="current xdesc">
                        топ за 3 дня
                      </li>
                      <li data-val="date">по дате</li>
                      <li data-val="title">по алфавиту</li>
                      <li data-val="rating">по рейтингу</li>
                      <li data-val="views">по просмотрам</li>
                      <li data-val="comm">по комментариям</li>
                      <li data-val="year">по году</li>
                      <li data-val="time">по длительности</li>
                      <li data-val="kp">по Кинопоиск`у</li>
                      <li data-val="imdb">по IMDb</li>
                    </ul>
                  </div>
                  <div className="xsort-div">
                    <div className="xsort-selected">Год</div>
                    <ul className="xsort-ul" data-field="year">
                      <li data-val="" className="current">
                        Год
                      </li>
                      <li data-val="2022">2022</li>
                      <li data-val="2021">2021</li>
                      <li data-val="2020">2020</li>
                      <li data-val="2019">2019</li>
                      <li data-val="2018">2018</li>
                      <li data-val="2017">2017</li>
                      <li data-val="2016">2016</li>
                      <li data-val="2015">2015</li>
                      <li data-val="2014">2014</li>
                      <li data-val="2013">2013</li>
                      <li data-val="2012">2012</li>
                      <li data-val="2011">2011</li>
                      <li data-val="2010">2010</li>
                      <li data-val="2009">2009</li>
                      <li data-val="2008">2008</li>
                      <li data-val="2007">2007</li>
                      <li data-val="2006">2006</li>
                      <li data-val="2005">2005</li>
                      <li data-val="2004">2004</li>
                      <li data-val="2003">2003</li>
                      <li data-val="2002">2002</li>
                      <li data-val="2001">2001</li>
                      <li data-val="2000">2000</li>
                      <li data-val="1999">1999</li>
                      <li data-val="1998">1998</li>
                      <li data-val="1997">1997</li>
                      <li data-val="1996">1996</li>
                      <li data-val="1995">1995</li>
                      <li data-val="1994">1994</li>
                      <li data-val="1993">1993</li>
                      <li data-val="1992">1992</li>
                      <li data-val="1991">1991</li>
                      <li data-val="1990">1990</li>
                      <li data-val="1989">1989</li>
                      <li data-val="1988">1988</li>
                      <li data-val="1987">1987</li>
                      <li data-val="1986">1986</li>
                      <li data-val="1985">1985</li>
                      <li data-val="1984">1984</li>
                      <li data-val="1983">1983</li>
                      <li data-val="1982">1982</li>
                      <li data-val="1981">1981</li>
                      <li data-val="1980">1980</li>
                      <li data-val="1979">1979</li>
                      <li data-val="1978">1978</li>
                      <li data-val="1977">1977</li>
                      <li data-val="1976">1976</li>
                      <li data-val="1975">1975</li>
                      <li data-val="1974">1974</li>
                      <li data-val="1973">1973</li>
                      <li data-val="1972">1972</li>
                      <li data-val="1971">1971</li>
                      <li data-val="1970">1970</li>
                      <li data-val="1969">1969</li>
                      <li data-val="1968">1968</li>
                      <li data-val="1967">1967</li>
                      <li data-val="1966">1966</li>
                      <li data-val="1965">1965</li>
                      <li data-val="1964">1964</li>
                      <li data-val="1963">1963</li>
                      <li data-val="1962">1962</li>
                      <li data-val="1961">1961</li>
                      <li data-val="1960">1960</li>
                      <li data-val="1959">1959</li>
                      <li data-val="1958">1958</li>
                      <li data-val="1957">1957</li>
                      <li data-val="1956">1956</li>
                      <li data-val="1955">1955</li>
                      <li data-val="1954">1954</li>
                      <li data-val="1953">1953</li>
                      <li data-val="1952">1952</li>
                      <li data-val="1951">1951</li>
                      <li data-val="1950">1950</li>
                      <li data-val="1949">1949</li>
                      <li data-val="1948">1948</li>
                      <li data-val="1947">1947</li>
                      <li data-val="1946">1946</li>
                      <li data-val="1945">1945</li>
                      <li data-val="1944">1944</li>
                      <li data-val="1943">1943</li>
                      <li data-val="1942">1942</li>
                      <li data-val="1941">1941</li>
                      <li data-val="1940">1940</li>
                      <li data-val="1939">1939</li>
                      <li data-val="1938">1938</li>
                      <li data-val="1937">1937</li>
                      <li data-val="1936">1936</li>
                      <li data-val="1935">1935</li>
                      <li data-val="1934">1934</li>
                      <li data-val="1933">1933</li>
                      <li data-val="1932">1932</li>
                      <li data-val="1931">1931</li>
                      <li data-val="1930">1930</li>
                    </ul>
                  </div>
                  <div className="xsort-div">
                    <div className="xsort-selected">Подборки</div>
                    <ul className="xsort-ul" data-field="podborki">
                      <li data-val="" className="current">
                        Подборки
                      </li>
                      <li data-val="Amazon">Amazon</li>
                      <li data-val="Apple TV+">Apple TV+</li>
                      <li data-val="BBC">BBC</li>
                      <li data-val="DC">DC</li>
                      <li data-val="Disney">Disney</li>
                      <li data-val="DreamWorks">DreamWorks</li>
                      <li data-val="Fox">Fox</li>
                      <li data-val="HBO">HBO</li>
                      <li data-val="Marvel">Marvel</li>
                      <li data-val="National Geographic">
                        National Geographic
                      </li>
                      <li data-val="Netflix">Netflix</li>
                      <li data-val="Антиутопии">Антиутопии</li>
                      <li data-val="Биографии">Биографии</li>
                      <li data-val="Для взрослых">Для взрослых</li>
                      <li data-val="Для женщин">Для женщин</li>
                      <li data-val="Для молодёжи">Для молодёжи</li>
                      <li data-val="Для мужчин">Для мужчин</li>
                      <li data-val="Лучшие фильмы 20 века">
                        Лучшие фильмы 20 века
                      </li>
                      <li data-val="Молодежные комедии">Молодежные комедии</li>
                      <li data-val="Мотивирующие">Мотивирующие</li>
                      <li data-val="На реальных событиях">
                        На реальных событиях
                      </li>
                      <li data-val="Про агентов">Про агентов</li>
                      <li data-val="Про акул">Про акул</li>
                      <li data-val="Про апокалипсис">Про апокалипсис</li>
                      <li data-val="Про боевые искусства">
                        Про боевые искусства
                      </li>
                      <li data-val="Про бывших">Про бывших</li>
                      <li data-val="Про вампиров">Про вампиров</li>
                      <li data-val="Про ведьм">Про ведьм</li>
                      <li data-val="Про войну 1941-1945">
                        Про войну 1941-1945
                      </li>
                      <li data-val="Про гонки">Про гонки</li>
                      <li data-val="Про девушек">Про девушек</li>
                      <li data-val="Про детей">Про детей</li>
                      <li data-val="Про динозавров">Про динозавров</li>
                      <li data-val="Про докторов">Про докторов</li>
                      <li data-val="Про драконов">Про драконов</li>
                      <li data-val="Про животных">Про животных</li>
                      <li data-val="Про жизнь">Про жизнь</li>
                      <li data-val="Про звезд">Про звезд</li>
                      <li data-val="Про зомби">Про зомби</li>
                      <li data-val="Про инопланетян">Про инопланетян</li>
                      <li data-val="Про космос">Про космос</li>
                      <li data-val="Про любовь">Про любовь</li>
                      <li data-val="Про маньяков">Про маньяков</li>
                      <li data-val="Про мафию">Про мафию</li>
                      <li data-val="Про монстров">Про монстров</li>
                      <li data-val="Про оборотней">Про оборотней</li>
                      <li data-val="Про ограбления">Про ограбления</li>
                      <li data-val="Про острова">Про острова</li>
                      <li data-val="Про подростков">Про подростков</li>
                      <li data-val="Про полицию">Про полицию</li>
                      <li data-val="Про призраков">Про призраков</li>
                      <li data-val="Про путешествия">Про путешествия</li>
                      <li data-val="Про путешествия во времени">
                        Про путешествия во времени
                      </li>
                      <li data-val="Про роботов">Про роботов</li>
                      <li data-val="Про снайперов">Про снайперов</li>
                      <li data-val="Про спорт">Про спорт</li>
                      <li data-val="Про средневековье">Про средневековье</li>
                      <li data-val="Про супергероев">Про супергероев</li>
                      <li data-val="Про танки">Про танки</li>
                      <li data-val="Про тюрьму">Про тюрьму</li>
                      <li data-val="Про футбол">Про футбол</li>
                      <li data-val="Про школу">Про школу</li>
                      <li data-val="Психологические">Психологические</li>
                      <li data-val="Рождественские">Рождественские</li>
                      <li data-val="Романтические комедии">
                        Романтические комедии
                      </li>
                      <li data-val="Самые кассовые">Самые кассовые</li>
                      <li data-val="Ситкомы">Ситкомы</li>
                      <li data-val="С наградами">С наградами</li>
                      <li data-val="С неожиданным концом">
                        С неожиданным концом
                      </li>
                      <li data-val="Советские">Советские</li>
                      <li data-val="ТНТ">ТНТ</li>
                      <li data-val="Фильмы-катастрофы">Фильмы-катастрофы</li>
                      <li data-val="Фильмы на Хэллоуин">Фильмы на Хэллоуин</li>
                      <li data-val="Экранизация книг">Экранизация книг</li>
                      <li data-val="аферы и мошенников">аферы и мошенников</li>
                    </ul>
                  </div>
                  <div className="xsort-div">
                    <div className="xsort-selected">Страна</div>
                    <ul className="xsort-ul" data-field="country">
                      <li data-val="" className="current">
                        Страна
                      </li>
                      <li data-val="Австралия">Австралия</li>
                      <li data-val="Аргентина">Аргентина</li>
                      <li data-val="Бельгия">Бельгия</li>
                      <li data-val="Бразилия">Бразилия</li>
                      <li data-val="Великобритания">Великобритания</li>
                      <li data-val="Германия">Германия</li>
                      <li data-val="Гонконг">Гонконг</li>
                      <li data-val="Индия">Индия</li>
                      <li data-val="Ирландия">Ирландия</li>
                      <li data-val="Исландия">Исландия</li>
                      <li data-val="Испания">Испания</li>
                      <li data-val="Италия">Италия</li>
                      <li data-val="Казахстан">Казахстан</li>
                      <li data-val="Канада">Канада</li>
                      <li data-val="Китай">Китай</li>
                      <li data-val="Колумбия">Колумбия</li>
                      <li data-val="Корея Южная">Корея Южная</li>
                      <li data-val="Люксембург">Люксембург</li>
                      <li data-val="Мексика">Мексика</li>
                      <li data-val="Нидерланды">Нидерланды</li>
                      <li data-val="Новая Зеландия">Новая Зеландия</li>
                      <li data-val="Норвегия">Норвегия</li>
                      <li data-val="ОАЭ">ОАЭ</li>
                      <li data-val="Польша">Польша</li>
                      <li data-val="Россия">Россия</li>
                      <li data-val="Румыния">Румыния</li>
                      <li data-val="СССР">СССР</li>
                      <li data-val="США">США</li>
                      <li data-val="Таиланд">Таиланд</li>
                      <li data-val="Тайвань">Тайвань</li>
                      <li data-val="Турция">Турция</li>
                      <li data-val="Украина">Украина</li>
                      <li data-val="Франция">Франция</li>
                      <li data-val="Хорватия">Хорватия</li>
                      <li data-val="Чехия">Чехия</li>
                      <li data-val="Чили">Чили</li>
                      <li data-val="Швейцария">Швейцария</li>
                      <li data-val="Швеция">Швеция</li>
                      <li data-val="Эстония">Эстония</li>
                      <li data-val="ЮАР">ЮАР</li>
                      <li data-val="Япония">Япония</li>
                    </ul>
                  </div>
                  <div
                    className="xsort-div xsort-div-clearall"
                    title="Сбросить выбранные значения"
                  ></div>
                </div>
              </div>
              <div id="dle-content">
                <div id="53104" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/53104-avatar-2-2022.html">
                        <h2>Аватар 2: Путь воды (2022)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "80%" }}
                          >
                            80
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.4/5 (
                        <span id="vote-num-id-53104" className="ignore-select">
                          2345
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/53104-avatar-2-2022.html">
                        <img
                          src="./img/1671979938-1238168491.webp"
                          className="loaded lazy-loaded"
                          width="200"
                          height="300"
                          alt="Аватар 2: Путь воды"
                          title="Аватар 2: Путь воды"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                          2022
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A1%D0%A8%D0%90/">
                          США
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/boevik/">Боевик</a> /
                        <a href="https://kinogo.biz/prikluchenia/">
                          Приключения
                        </a>
                        /
                        <a href="https://kinogo.biz/fantastika/"> Фантастика</a>
                        /<a href="https://kinogo.biz/fentezi/"> Фэнтези</a>
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>15 декабря 2022
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>WEB-DL 720
                      </span>
                      <div className="excerpt">
                        В прошлом Джейк Салли был опытнейшим солдатом, но травма
                        вынуждает его расстаться с боевыми товарищами раз и
                        навсегда. Но неожиданно герой становится участником
                        эксперимента, что позволяет ему получить собственного
                        аватара и начать новую жизнь. Узнав, что Пандоре грозит
                        серьезная опасность, Джейк возглавляет оборону планеты.
                        Также к герою присоединяются его друзья и возлюбленная
                        Нейтири. Вскоре...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 8.0</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 8.0
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/53104-avatar-2-2022.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="1 804 373 просмотров"
                      >
                        1 804 373
                      </div>
                      <div
                        className="total_meta-comments"
                        title="173 комментариев"
                      >
                        173
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>Вчера, 15:32</span>
                    </div>
                  </div>
                </div>
                <div id="55503" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/55503-mazhor-v-sochi.html">
                        <h2>Мажор в Сочи (2022)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "80%" }}
                          >
                            80
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.1/5 (
                        <span id="vote-num-id-55503" className="ignore-select">
                          395
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/55503-mazhor-v-sochi.html">
                        <img
                          src="./img/1671729926-296997583.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Мажор в Сочи"
                          title="Мажор в Сочи"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                          2022
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/">
                          Россия
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/boevik/">Боевик</a> /
                        <a href="https://kinogo.biz/komedia/"> Комедия</a>
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>Неизвестно
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>WEB-DL 720
                      </span>
                      <div className="excerpt">
                        Мажору приходится попрощаться с роскошной столичной
                        жизнью и перебраться в курортный город, ежегодно
                        заманивающий в свои сети сотни тысяч туристов. С собой
                        мужчина берет маленькую дочь и открывает свой
                        собственный отель, рассчитывая на хороший заработок.
                        Однако очень скоро выясняется, что между мечтами и
                        реальностью есть сотни преград, о которых Соколовский
                        даже не подозревал. Вначале он...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 7.2</span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/55503-mazhor-v-sochi.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="112 752 просмотров"
                      >
                        112 752
                      </div>
                      <div
                        className="total_meta-comments"
                        title="20 комментариев"
                      >
                        20
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>23-12-2022, 16:04</span>
                    </div>
                  </div>
                </div>
                <div id="55403" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/55403-dostat-nozhi-stekljannaja-lukovica.html">
                        <h2>Достать ножи 2: Стеклянная луковица (2022)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "100%" }}
                          >
                            100
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.5/5 (
                        <span id="vote-num-id-55403" className="ignore-select">
                          154
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/55403-dostat-nozhi-stekljannaja-lukovica.html">
                        <img
                          src="./img/1670015346-922283005.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Достать ножи 2: Стеклянная луковица"
                          title="Достать ножи 2: Стеклянная луковица"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                          2022
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A1%D0%A8%D0%90/">
                          США
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/detektiv/">Детектив</a> /
                        <a href="https://kinogo.biz/kriminal/">Криминал</a>
                      </span>
                      <span>
                        <b>Продолжительность:</b>140 мин.
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>Неизвестно
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>WEB-DL 720
                      </span>
                      <div className="excerpt">
                        Бенуа Блан – профессиональный детектив,
                        специализирующийся на самых запутанных преступлениях.
                        Окружающие видят в нем человека, способного разобраться
                        с любой проблемой в два счета, и нет в мире такого
                        преступника, который смог бы его обхитрить. Однако сыщик
                        не подозревал, что однажды ему придется взяться за
                        задание, которое заставит его засомневаться в
                        собственном профессионализме. Все начинается...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 7.2</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 7.5
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/55403-dostat-nozhi-stekljannaja-lukovica.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="84 734 просмотров"
                      >
                        84 734
                      </div>
                      <div
                        className="total_meta-comments"
                        title="7 комментариев"
                      >
                        7
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>Вчера, 13:52</span>
                    </div>
                  </div>
                </div>
                <div id="55445" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/55445-osvobozhdenie.html">
                        <h2>Освобождение (2022)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "100%" }}
                          >
                            100
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.5/5 (
                        <span id="vote-num-id-55445" className="ignore-select">
                          413
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/55445-osvobozhdenie.html">
                        <img
                          src="./img/1670614042-1051634032.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Освобождение"
                          title="Освобождение"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                          2022
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A1%D0%A8%D0%90/">
                          США
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/boevik/">Боевик</a> /
                        <a href="https://kinogo.biz/triller/"> Триллер</a>
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>Неизвестно
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>WEB-DL 720
                      </span>
                      <div className="excerpt">
                        Америка, 1860-е годы. Еще совсем недавно главный герой
                        был обычным рабом, вынужденным трудиться на плантациях
                        жестокого хозяина. Этот человек нещадно наказывал его за
                        малейшую ошибку и относился как к личной собственности.
                        И однажды доведенный до отчаянья раб решает совершить
                        побег, оставив позади все то, что не давало ему никаких
                        шансов на нормальное будущее. Так беглец оказывается
                        на...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 6.5</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 5.9
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/55445-osvobozhdenie.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="170 226 просмотров"
                      >
                        170 226
                      </div>
                      <div
                        className="total_meta-comments"
                        title="26 комментариев"
                      >
                        26
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>17-12-2022, 15:11</span>
                    </div>
                  </div>
                </div>
                <div id="55316" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/55316-strana-snov.html">
                        <h2>Страна снов (2022)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "100%" }}
                          >
                            100
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.5/5 (
                        <span id="vote-num-id-55316" className="ignore-select">
                          260
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/55316-strana-snov.html">
                        <img
                          src="./img/1668801828-809898786.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Страна снов"
                          title="Страна снов"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                          2022
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A1%D0%A8%D0%90/">
                          США
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/komedia/"> Комедия</a> /
                        <a href="https://kinogo.biz/muzikl/"> Мюзикл</a> /
                        <a href="https://kinogo.biz/fentezi/"> Фэнтези</a>
                      </span>
                      <span>
                        <b>Продолжительность:</b>117 мин.
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>Неизвестно
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>WEB-DL 720
                      </span>
                      <div className="excerpt">
                        Часто люди мечтают о том, чего быть не может. Например,
                        поговорить с покойным человеком, которого ты крайне
                        любил, или попасть в страну, где все будут тебе рады.
                        Однако, если хорошо подумать, то это возможно. Для того,
                        чтобы окунуться в мир, где почти ничто не может
                        потревожить, стоит лишь взять хорошую книгу или
                        запустить фильм. Эти две вещи смогут переместить в
                        совершенно другую вселенную,...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 6.9</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 6.7
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/55316-strana-snov.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="260 577 просмотров"
                      >
                        260 577
                      </div>
                      <div
                        className="total_meta-comments"
                        title="15 комментариев"
                      >
                        15
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>19-11-2022, 14:47</span>
                    </div>
                  </div>
                </div>
                <div id="55332" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/55332-lamborgini-chelovek-legenda.html">
                        <h2>Ламборгини: Человек-легенда (2022)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "80%" }}
                          >
                            80
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.1/5 (
                        <span id="vote-num-id-55332" className="ignore-select">
                          799
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/55332-lamborgini-chelovek-legenda.html">
                        <img
                          src="./img/1668886551_poster.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Ламборгини: Человек-легенда"
                          title="Ламборгини: Человек-легенда"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2020/">
                          2020
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F/">
                          Италия
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/biografia/">Биография</a> /
                        <a href="https://kinogo.biz/drama/">Драма</a>
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>Неизвестно
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>WEB-DL 720
                      </span>
                      <div className="excerpt">
                        Новый фильм «Ламборгини: Человек- Легенда» достоверно
                        показывает нам о жизненный путь и становление
                        гениального изобретателя Ферруччо Ламборгини. История
                        начинает рассказ с самого начла жизненного пути
                        восходящей звезды. Времени, когда Ферруччо еще не был
                        знаменитым. История начинается с молодого парня, который
                        только что вернулся с войны. Молодой парень решает
                        обзавестись сельским хозяйством. А...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 6.0</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 5.2
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/55332-lamborgini-chelovek-legenda.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="388 664 просмотров"
                      >
                        388 664
                      </div>
                      <div
                        className="total_meta-comments"
                        title="18 комментариев"
                      >
                        18
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>25-11-2022, 00:45</span>
                    </div>
                  </div>
                </div>
                <div id="48932" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/48932-gnev-chelovecheski-2021-kino-v1.html">
                        <h2>Гнев человеческий (2021)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "80%" }}
                          >
                            80
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.2/5 (
                        <span id="vote-num-id-48932" className="ignore-select">
                          8625
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/48932-gnev-chelovecheski-2021-kino-v1.html">
                        <img
                          src="./img/1619553978_610x900_45349.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Гнев человеческий"
                          title="Гнев человеческий"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2021/">
                          2021
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A1%D0%A8%D0%90/">
                          США
                        </a>
                        ,
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/">
                          Великобритания
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/boevik/">Боевик</a> /
                        <a href="https://kinogo.biz/triller/"> Триллер</a>
                      </span>
                      <span>
                        <b>Продолжительность:</b>118 мин.
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>22 апреля 2021
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>HDRip 1080p
                      </span>
                      <div className="excerpt">
                        В одну инкассаторскую компанию Лос-Анджелеса на работу
                        устроился новый работник. Изначально может показаться,
                        что мужчина, который называет себя Эйч, максимально
                        хорошо сможет подойти для подобной достаточно опасной
                        работенки. Он достаточно одинокий, у него нет друзей,
                        благодаря чему он может максимально выложиться для
                        выполнения поставленных перед собой заданий. Не считая
                        этого, Эйч имеет...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 7.6</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 7.1
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/48932-gnev-chelovecheski-2021-kino-v1.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit - content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="3 154 612 просмотров"
                      >
                        3 154 612
                      </div>
                      <div
                        className="total_meta-comments"
                        title="336 комментариев"
                      >
                        336
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>14-09-2021, 01:50</span>
                    </div>
                  </div>
                </div>
                <div id="55370" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/55370-strazhi-galaktiki-prazdnichnyj-specvypusk.html">
                        <h2>Стражи Галактики: Праздничный спецвыпуск (2022)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "80%" }}
                          >
                            80
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.2/5 (
                        <span id="vote-num-id-55370" className="ignore-select">
                          394
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/55370-strazhi-galaktiki-prazdnichnyj-specvypusk.html">
                        <img
                          src="./img/1669403925-987538960.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Стражи Галактики: Праздничный спецвыпуск"
                          title="Стражи Галактики: Праздничный спецвыпуск"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                          2022
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A1%D0%A8%D0%90/">
                          США
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/boevik/">Боевик</a> /
                        <a href="https://kinogo.biz/fantastika/"> Фантастика</a>
                        /<a href="https://kinogo.biz/fentezi/"> Фэнтези</a>
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>Неизвестно
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>WEB-DL 720
                      </span>
                      <div className="excerpt">
                        Однажды Йонду Удонта испортил маленькому Питеру
                        Рождество. На это Рождество Мантис вместе с Драксом
                        собираются подарить Квиллу что-то особенное. То, что ему
                        точно понравится. Также Мантис хочет задобрить Питера,
                        чтобы рассказать ему, что они с ним сводные брат и
                        сестра. Но эта новость не такая красочная, так как их
                        соединяет ужасный отец. Да и Гамора бросила Квилла.
                        Поэтому Дракс вместе с Мантис...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 7.1</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 7.0
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/55370-strazhi-galaktiki-prazdnichnyj-specvypusk.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="191 502 просмотров"
                      >
                        191 502
                      </div>
                      <div
                        className="total_meta-comments"
                        title="16 комментариев"
                      >
                        16
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>13-12-2022, 11:04</span>
                    </div>
                  </div>
                </div>
                <div id="55011" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/55011-bandit-2022-v1.html">
                        <h2>Бандит (2022)</h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "80%" }}
                          >
                            80
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        4.3/5 (
                        <span id="vote-num-id-55011" className="ignore-select">
                          1204
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/55011-bandit-2022-v1.html">
                        <img
                          src="./img/1664210992-1650614864.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Бандит"
                          title="Бандит"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                          2022
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0/">
                          Канада
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/drama/">Драма</a> /
                        <a href="https://kinogo.biz/kriminal/">Криминал</a> /
                        <a href="https://kinogo.biz/triller/"> Триллер</a>
                      </span>
                      <span>
                        <b>Продолжительность:</b>126 мин.
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>20 октября 2022
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>HD 1080p
                      </span>
                      <div className="excerpt">
                        Главный герой фильма Гилберт Галван-младший –
                        профессиональный мошенник, грабитель, которого прозвали
                        Летающий бандит. Его привлекательная внешность не дает
                        окружающим в чем-то его подозревать. Мужчина всегда
                        работает в одиночку. Полиция долгое время не могла выйти
                        на след преступника, он ловко заметал следы. Но однажды
                        правоохранительным органам все—таки удается взять след
                        грабителя и установили...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 7.3</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 6.3
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/55011-bandit-2022-v1.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="659 922 просмотров"
                      >
                        659 922
                      </div>
                      <div
                        className="total_meta-comments"
                        title="23 комментариев"
                      >
                        23
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>13-11-2022, 16:08</span>
                    </div>
                  </div>
                </div>
                <div id="55235" className="shortstory">
                  <div className="shortstory__header">
                    <div className="shortstory__title">
                      <a href="https://kinogo.biz/55235-prizrachnyj-patrul-2-vosstanie-prokljatyh.html">
                        <h2>
                          Призрачный патруль 2: Восстание проклятых (2022)
                        </h2>
                      </a>
                    </div>
                    <div className="shortstory__rating">
                      <div className="rating">
                        <ul className="unit-rating">
                          <li
                            className="current-rating"
                            style={{ width: "60%" }}
                          >
                            60
                          </li>
                        </ul>
                      </div>
                      <span className="rating__results">
                        3.4/5 (
                        <span id="vote-num-id-55235" className="ignore-select">
                          1348
                        </span>
                        гол.)
                      </span>
                    </div>
                    <div className="shortstory__favs">
                      <span
                        className="add__fav"
                        title="Необходимо зарегистрироваться для добавления в избранное"
                      ></span>
                    </div>
                  </div>
                  <div className="shortstory__body">
                    <div className="shortstory__poster">
                      <a href="https://kinogo.biz/55235-prizrachnyj-patrul-2-vosstanie-prokljatyh.html">
                        <img
                          src="./img/1667669504-1325701783.webp"
                          className=""
                          width="200"
                          height="300"
                          alt="Призрачный патруль 2: Восстание проклятых"
                          title="Призрачный патруль 2: Восстание проклятых"
                        />
                      </a>
                    </div>
                    <div className="shortstory__info">
                      <span>
                        <b>Год выпуска:</b>
                        <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                          2022
                        </a>
                      </span>
                      <span>
                        <b>Страна:</b>
                        <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A1%D0%A8%D0%90/">
                          США
                        </a>
                      </span>
                      <span>
                        <b>Жанр:</b>
                        <a href="https://kinogo.biz/new/">Новинки</a> /
                        <a href="https://kinogo.biz/filmy/">Фильмы</a> /
                        <a href="https://kinogo.biz/boevik/">Боевик</a> /
                        <a href="https://kinogo.biz/komedia/"> Комедия</a> /
                        <a href="https://kinogo.biz/fentezi/"> Фэнтези</a>
                      </span>
                      <span>
                        <b>Премьера (РФ):</b>Неизвестно
                      </span>
                      <span className="ka4estvo">
                        <b>Качество:</b>BDRip 1080
                      </span>
                      <div className="excerpt">
                        Основные действия фильма разворачиваются в 1876 году на
                        территории Дикого Запада. Шериф, который погиб во время
                        перестрелки с бандитами, попадает в специальное
                        чистилище. Здесь расположен своеобразный департамент,
                        есть собственное бюро. Главная задача агентов, поймать
                        беглецов с мира мертвых, которые решили еще немного
                        задержаться в мире живых. Но что-то пошло не так, и
                        врата Ада открылись,...
                      </div>
                    </div>
                    <div className="film__rating">
                      <span className="kp">KP 4.9</span>
                      <span className="imdb" data-label="IMDB">
                        IMDB 4.5
                      </span>
                    </div>
                  </div>
                  <div className="shortstory__meta">
                    <a
                      href="https://kinogo.biz/55235-prizrachnyj-patrul-2-vosstanie-prokljatyh.html"
                      className="watch__film"
                      rel="nofollow"
                    >
                      Смотреть онлайн
                    </a>
                    <div
                      className="edit-admin"
                      style={{
                        padding: "4px",
                        background: "#242424",
                        border: "1px solid #404040",
                        outline: "solid 1px #111",
                        display: "block",
                        width: "fit-content",
                      }}
                    ></div>
                    <div className="total_meta">
                      <div
                        className="total_meta-views"
                        title="570 006 просмотров"
                      >
                        570 006
                      </div>
                      <div
                        className="total_meta-comments"
                        title="48 комментариев"
                      >
                        48
                      </div>
                    </div>
                    <div className="film_posted">
                      <span>16-11-2022, 14:28</span>
                    </div>
                  </div>
                </div>
                <div className="bot-left">
                  <div
                    className="bot-navigation"
                    style={{ display: "block", textAlign: "center" }}
                  >
                    <span>Раньше</span>
                    <span>1</span>
                    <a href="https://kinogo.biz/page/2/">2</a>
                    <a href="https://kinogo.biz/page/3/">3</a>
                    <a href="https://kinogo.biz/page/4/">4</a>
                    <a href="https://kinogo.biz/page/5/">5</a>
                    <a href="https://kinogo.biz/page/6/">6</a>
                    <a href="https://kinogo.biz/page/7/">7</a>
                    <a href="https://kinogo.biz/page/8/">8</a>
                    <a href="https://kinogo.biz/page/9/">9</a>
                    <a href="https://kinogo.biz/page/10/">10</a>
                    <span className="nav_ext">...</span>
                    <a href="https://kinogo.biz/page/3486/">3486</a>
                    <a href="https://kinogo.biz/page/2/">Позже</a>
                  </div>
                </div>
              </div>
              <div className="pomoshnik"></div>
            </div>

            <div className="leftblok_contener">
              <div
                style={{
                  padding: "7px 20px",
                  position: "relative",
                  borderBottom: "1px solid #3f413f",
                }}
              >
                <i style={{ fontSize: "15px" }}>Панель навигации</i>
                <div className="new" style={{ display: "none" }}></div>
              </div>

              <div className="leftblok_contener2">
                <div className="leftblok1">
                  <div className="miniblock">
                    <div
                      className="mini"
                      style={{ borderTop: "0px", paddingTop: "0px" }}
                    >
                      <i style={{ fontSize: "14px" }}>Категории</i>
                      <br />
                      <br />
                      <a href="https://kinogo.biz/filmy/">Все фильмы</a>
                      <span style={{ float: "right" }}>(33418)</span>
                      <br />
                      <a href="https://kinogo.biz/biografia/">Биографии</a>
                      <span style={{ float: "right" }}>(1205)</span>
                      <br />
                      <a href="https://kinogo.biz/boevik/">Боевики</a>
                      <span style={{ float: "right" }}>(5661)</span>
                      <br />
                      <a href="https://kinogo.biz/vestern/">Вестерны</a>
                      <span style={{ float: "right" }}>(304)</span>
                      <br />
                      <a href="https://kinogo.biz/voennye/">Военные</a>
                      <span style={{ float: "right" }}>(1582)</span>
                      <br />
                      <a href="https://kinogo.biz/detektiv/">Детективы</a>
                      <span style={{ float: "right" }}>(1789)</span>
                      <br />
                      <a href="https://kinogo.biz/detskie/">Детские</a>
                      <span style={{ float: "right" }}>(70)</span>
                      <br />
                      <a href="https://kinogo.biz/dokumentalnye/">Докумен-ые</a>
                      <span style={{ float: "right" }}>(859)</span>
                      <br />
                      <a href="https://kinogo.biz/drama/">Драмы</a>
                      <span style={{ float: "right" }}>(16368)</span>
                      <br />
                      <a href="https://kinogo.biz/istoricheskie/">
                        Исторические
                      </a>
                      <span style={{ float: "right" }}>(913)</span>
                      <br />
                      <a href="https://kinogo.biz/komedia/">Комедии</a>
                      <span style={{ float: "right" }}>(9930)</span>
                      <br />
                      <a href="https://kinogo.biz/kriminal/">Криминал</a>
                      <span style={{ float: "right" }}>(3592)</span>
                      <br />
                      <a href="https://kinogo.biz/melodrama/">Мелодрамы</a>
                      <span style={{ float: "right" }}>(5927)</span>
                      <br />
                      <a href="https://kinogo.biz/multfilmy/">Мультфильмы</a>
                      <span style={{ float: "right" }}>(1598)</span>
                      <br />
                      <a href="https://kinogo.biz/muzikl/">Мюзиклы</a>
                      <span style={{ float: "right" }}>(552)</span>
                      <br />
                      <a href="https://kinogo.biz/prikluchenia/">Приключения</a>
                      <span style={{ float: "right" }}>(2205)</span>
                      <br />
                      <a href="https://kinogo.biz/family/">Семейные</a>
                      <span style={{ float: "right" }}>(1528)</span>
                      <br />
                      <a href="https://kinogo.biz/sport/">Cпортивные</a>
                      <span style={{ float: "right" }}>(593)</span>
                      <br />
                      <a href="https://kinogo.biz/triller/">Триллеры</a>
                      <span style={{ float: "right" }}>(7928)</span>
                      <br />
                      <a href="https://kinogo.biz/uzhasy/">Ужасы</a>
                      <span style={{ float: "right" }}>(4591)</span>
                      <br />
                      <a href="https://kinogo.biz/fantastika/">Фантастика</a>
                      <span style={{ float: "right" }}>(2747)</span>
                      <br />
                      <a href="https://kinogo.biz/fentezi/">Фэнтези</a>
                      <span style={{ float: "right" }}>(2565)</span>
                      <br />
                      <br />
                      <a href="https://kinogo.biz/podborki.html">
                        Все подборки
                      </a>
                      <br />-
                      <a href="https://kinogo.biz/xfsearch/podborki/Netflix/">
                        Нетфликс
                      </a>
                      <br />-
                      <a href="https://kinogo.biz/xfsearch/podborki/Marvel/">
                        Марвел
                      </a>
                      <br />-
                      <a href="https://kinogo.biz/xfsearch/podborki/DC/">
                        DC комикс
                      </a>
                      <br />-
                      <a href="https://kinogo.biz/xfsearch/podborki/%D0%AD%D0%BA%D1%80%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BA%D0%BD%D0%B8%D0%B3/">
                        Экранизация книг
                      </a>
                      <br />-
                      <a href="https://kinogo.biz/xfsearch/podborki/%D0%9F%D1%80%D0%BE%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C/">
                        Про любовь
                      </a>
                    </div>
                    <div style={{ paddingTop: "20px" }}></div>
                  </div>
                </div>

                <div className="leftblok2">
                  <div className="miniblock">
                    <div
                      className="mini"
                      style={{ borderTop: "0px", paddingTop: "0px" }}
                    >
                      <i style={{ fontSize: "14px" }}>По году</i>
                      <br />
                      <br />
                      <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2016/">
                        2016 года
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2017/">
                        2017 года
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2018/">
                        2018 года
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2019/">
                        2019 года
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2020/">
                        2020 года
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2021/">
                        2021 года
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2022/">
                        2022 года
                      </a>
                      <br />
                      <div className="poloska"></div>
                    </div>
                    <div className="mini">
                      <i style={{ fontSize: "14px" }}>По странам</i>
                      <br />
                      <br />
                      <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A1%D0%A8%D0%90/">
                        Американские
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F/">
                        Турецкие
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/">
                        Российские
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%98%D0%BD%D0%B4%D0%B8%D1%8F/">
                        Индийские
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0/">
                        Украинские
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/">
                        Французские
                      </a>
                      <br />
                      <a href="https://kinogo.biz/xfsearch/strana-xfsearch/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/">
                        Казахстанские
                      </a>
                      <br />
                      <div className="poloska"></div>
                    </div>
                    <div className="mini">
                      <i style={{ fontSize: "14px" }}>Сериалы</i> |
                      <a
                        style={{ fontSize: "14px" }}
                        href="https://kinogo.biz/doramy/"
                      >
                        Дорамы
                      </a>
                      <br />
                      <br />
                      <a href="https://kinogo.biz/serialy/">Все сериалы</a>
                      <span style={{ float: "right" }}>(8347)</span>
                      <br />-
                      <a href="https://kinogo.biz/zarubezhnye-serialy/">
                        Зарубежные
                      </a>
                      <span style={{ float: "right" }}>(4344)</span>
                      <br />-
                      <a href="https://kinogo.biz/tureckie-serialy/">
                        Турецкие
                      </a>
                      <span style={{ float: "right" }}>(345)</span>
                      <br />-{" "}
                      <a href="https://kinogo.biz/russkie-serialy/">Русские</a>
                      <span style={{ float: "right" }}>(3238)</span>
                      <br />
                      <a href="https://kinogo.biz/multserialy/">Мульсериалы</a>
                      <span style={{ float: "right" }}>(1074)</span>
                      <br />
                      <a href="https://kinogo.biz/anime/">Аниме</a>
                      <span style={{ float: "right" }}>(1583)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="poloska_bloka"></div>
              <div
                style={{
                  padding: "7px 20px",
                  position: "relative",
                  borderBottom: "1px solid #3f413f",
                }}
              >
                <i style={{ fontSize: "15px" }}>Скоро на сайте</i>
              </div>

              <div className="mimiserblock">
                <ul>
                  <li className="li_block">
                    <div className="li_block_title">
                      <a href="https://kinogo.biz/55075-dzhon-uik-4.html">
                        <img
                          src="./img/48ff712386d468814e45ced457466c.webp"
                          alt="Джон Уик 4"
                          width="85"
                          height="127"
                          style={{ float: "left" }}
                        />
                        Джон Уик 4 (2023)
                      </a>
                    </div>
                    <div className="blockstory">
                      Джон Уик - первоклассный наемник, которому почти ежедневно
                      приходится отстаивать свое право на жизнь. После многих
                      потерь, падений и тяжелых дней Джон пытается восстановить
                      свою...
                    </div>
                  </li>
                  <li className="li_block">
                    <div className="li_block_title">
                      <a href="https://kinogo.biz/55072-shazam-2.html">
                        <img
                          src="./img/3b3e1346bb9902767113541c1fc5fc.webp"
                          alt="Шазам! 2"
                          width="85"
                          height="127"
                          style={{ float: "left" }}
                        />
                        Шазам! 2 (2023)
                      </a>
                    </div>
                    <div className="blockstory">
                      История первой части погружает нас в жизнь подростка,
                      Билли Бэтсона, которому 14 лет. Он обнаружил, что может
                      стать могучим воином с божественной способностью. Билли
                      получил этот...
                    </div>
                  </li>
                </ul>
              </div>

              <div className="poloska_bloka"></div>
              <div
                style={{
                  padding: "7px 20px",
                  position: "relative",
                  borderBottom: "1px solid #3f413f",
                }}
              >
                <i style={{ fontSize: "15px" }}>Обновления сериалов</i>
                <span style={{ float: "right" }}>
                  <a href="https://kinogo.biz/serialy/">Все</a>
                </span>
              </div>

              <div className="new_block">
                <div className="msupdate_block">
                  <div className="msupdate_block_date">
                    Последние 12 обновлений
                  </div>
                  <ul className="msupdate_block_list">
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/55474-sokrovische-nacii-na-kraju-istorii.html"
                        title="Сокровище нации: На краю истории"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/e0e90670ef92912bea2c676fc497a5.webp"
                              width="56"
                              height="64"
                              alt="Сокровище нации: На краю истории"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Сокровище нации: На краю истории
                            </div>
                            <div className="season">(1 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-4 серия</span>
                            <i>
                              (BaibaKo, ColdFilm, DniproFilm (укр), eng2,
                              HDRezka Studio, Original English, RuDub, rus0,
                              ukr1, Ultradox)
                            </i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/55468-kazanova-v-rossii.html"
                        title="Казанова в России"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/93bf3a0164de2eeb4189a886739cca.webp"
                              width="56"
                              height="64"
                              alt="Казанова в России"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Казанова в России
                            </div>
                            <div className="season">(1 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-11 серия</span>
                            <i>
                              (rus0, rus1, Не требуется, Оригинальная дорожка,
                              Украинский)
                            </i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/55535-agentstvo-spravedlivost.html"
                        title="Агентство «Справедливость»"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/6ecba73f780bd8d35e712392580e60.webp"
                              width="56"
                              height="64"
                              alt="Агентство «Справедливость»"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Агентство «Справедливость»
                            </div>
                            <div className="season">(1 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-6 серия</span>
                            <i>(Не требуется, Субтитры)</i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/7578-zapretnyj-plod.html"
                        title="Запретный плод"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/6364fa1b5cf7f60e0d879288ee2a9b.webp"
                              width="56"
                              height="64"
                              alt="Запретный плод"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Запретный плод
                            </div>
                            <div className="season">(1-6 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>
                              1-159 серия
                            </span>
                            <i>
                              (SesDizi, TurkStar, А. Гайдаржи, Гайдаржи
                              Анастасия, Двухголосый закадровый, Любительский,
                              Одноголосый закадровый)
                            </i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/55497-kazino.html"
                        title="Казино"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/c0022de2681ba7b1802b87b92dbd93.webp"
                              width="56"
                              height="64"
                              alt="Казино"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Казино
                            </div>
                            <div className="season">(1 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-4 серия</span>
                            <i>
                              (BaibaKo, ColdFilm, DubLik.TV, HDRezka Studio,
                              Korean. Original, Original English, Ultradox)
                            </i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/9534-zhuki-1.html"
                        title="Жуки"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/ab64893c55905c61f3a5463c200d62.webp"
                              width="56"
                              height="64"
                              alt="Жуки"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Жуки
                            </div>
                            <div className="season">(1-3 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-16 серия</span>
                            <i>(Не требуется, Оригинальная дорожка)</i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/55495-dama-s-sobachkoj.html"
                        title="Дама с собачкой"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/012cd0dd250512612da6da17818adc.webp"
                              width="56"
                              height="64"
                              alt="Дама с собачкой"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Дама с собачкой
                            </div>
                            <div className="season">(1 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-14 серия</span>
                            <i>(Не требуется, Оригинальная дорожка)</i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/55441-brjenson.html"
                        title="Брэнсон"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/18da7ae66a3f65869cd6f88775f628.webp"
                              width="56"
                              height="64"
                              alt="Брэнсон"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Брэнсон
                            </div>
                            <div className="season">(1 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-4 серия</span>
                            <i>(Original)</i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/55301-chernaja-vesna.html"
                        title="Чёрная весна"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/82090ac48fd3a00275cc629ae4faa4.webp"
                              width="56"
                              height="64"
                              alt="Чёрная весна"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Чёрная весна
                            </div>
                            <div className="season">(1 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-8 серия</span>
                            <i>(Не требуется, Оригинальная дорожка)</i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/9573-test-na-beremennost.html"
                        title="Тест на беременность"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/0d1c175f62353357aec883a9def1f2.webp"
                              width="56"
                              height="64"
                              alt="Тест на беременность"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Тест на беременность
                            </div>
                            <div className="season">(1-3 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>все серии</span>
                            <i>(Не требуется, Оригинальная дорожка)</i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/55114-maska-tancy.html"
                        title="Маска. Танцы"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/abd4b5faf42713345092c28de0541c.webp"
                              width="56"
                              height="64"
                              alt="Маска. Танцы"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Маска. Танцы
                            </div>
                            <div className="season">(1 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-13 серия</span>
                            <i>(Не требуется)</i>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="msupdate_block_list_item">
                      <a
                        className="msupdate_block_list_link"
                        href="https://kinogo.biz/52505-grab-nagrablennoe-iskuplenie.html"
                        title="Грабь награбленное: Искупление"
                      >
                        <div className="msupdate_block_list_item_inner">
                          <div className="cell cell-0">
                            <img
                              src="./img/b7918ba709689d1cab5aac5bee74c4.webp"
                              width="56"
                              height="64"
                              alt="Грабь награбленное: Искупление"
                            />
                          </div>
                          <div className="cell cell-1">
                            <div className="msupdate_block_list_item_title">
                              Грабь награбленное: Искупление
                            </div>
                            <div className="season">(1-2 сезон)</div>
                          </div>
                          <span className="cell cell-2">
                            <span style={{ color: "#ff9f71" }}>1-9 серия</span>
                            <i>
                              (BaibaKo, ColdFilm, HDRezka Studio, LostFilm,
                              Original English, RuDub, TVShows, Ultradox)
                            </i>
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="poloska_bloka"></div>
              <div
                style={{
                  padding: "7px 20px",
                  position: "relative",
                  borderBottom: "1px solid #3f413f",
                }}
              >
                <i style={{ fontSize: "15px" }}>Обновления дорам / Аниме</i>
                <span style={{ float: "right" }}>
                  <a href="https://kinogo.biz/doramy/">Все</a>
                </span>
              </div>

              <div className="mimiser">
                <ul>
                  <li className="li_serial">
                    <div className="lenta22">
                      <div className="edge-left22"></div>
                      <div className="cont22">1-13 серия</div>
                    </div>
                    <a
                      href="https://kinogo.biz/55107-blich-tysjacheletnjaja-krovavaja-vojna.html"
                      title="Блич: Тысячелетняя кровавая война"
                    >
                      <img
                        src="./img/a8f0cb359b44a88a3c4cda53f64765.webp"
                        alt="Блич: Тысячелетняя кровавая война"
                      />
                    </a>
                    <br />
                    Блич: Тысячелетняя кровавая война
                    <br />
                    (1 сезон)
                  </li>
                  <li className="li_serial">
                    <div className="lenta22">
                      <div className="edge-left22"></div>
                      <div className="cont22">1-4 серия</div>
                    </div>
                    <a
                      href="https://kinogo.biz/55497-kazino.html"
                      title="Казино"
                    >
                      <img
                        src="./img/c0022de2681ba7b1802b87b92dbd93.webp"
                        alt="Казино"
                      />
                    </a>
                    <br />
                    Казино
                    <br />
                    (1 сезон)
                  </li>
                  <li className="li_serial">
                    <div className="lenta22">
                      <div className="edge-left22"></div>
                      <div className="cont22">1-12 серия</div>
                    </div>
                    <a
                      href="https://kinogo.biz/55122-sinjaja-tjurma-blju-lok.html"
                      title="Синяя тюрьма: Блю Лок"
                    >
                      <img
                        src="./img/5db3a22ca4d781bddb88d612eacb55.webp"
                        alt="Синяя тюрьма: Блю Лок"
                      />
                    </a>
                    <br />
                    Синяя тюрьма: Блю Лок
                    <br />
                    (1 сезон)
                  </li>
                  <li className="li_serial">
                    <div className="lenta22">
                      <div className="edge-left22"></div>
                      <div className="cont22">1-12 серия</div>
                    </div>
                    <a
                      href="https://kinogo.biz/55123-chelovek-benzopila.html"
                      title="Человек-бензопила"
                    >
                      <img
                        src="./img/2d0568081356b71901a8358dbbb52d.webp"
                        alt="Человек-бензопила"
                      />
                    </a>
                    <br />
                    Человек-бензопила
                    <br />
                    (1 сезон)
                  </li>
                </ul>
              </div>

              <div className="poloska_bloka"></div>
              <div
                style={{
                  padding: "7px 20px",
                  position: "relative",
                  borderBottom: "1px solid #3f413f",
                }}
              >
                <i style={{ fontSize: "15px" }}>Последние комментарии</i>
              </div>

              <div className="sb-cont">
                <ul className="last-comments">
                  <li>
                    <span className="last-comments__user">
                      <span className="last-comments__user_avatar">
                        <img
                          src="./img/26ff2181a539d883affc4a3d3e0873.webp"
                          alt="Гость Марина"
                        />
                      </span>
                      <span className="last-comments__info">
                        <span className="last-comments__info_title">
                          <a href="https://kinogo.biz/11989-sedmoj.html#comment">
                            Седьмой
                          </a>
                        </span>
                      </span>
                    </span>
                    <p className="last-comments__comment">
                      <span className="last-comments__info_user">
                        Гость Марина:
                      </span>
                      Не то слово
                    </p>
                  </li>
                  <li>
                    <span className="last-comments__user">
                      <span className="last-comments__user_avatar">
                        <img
                          src="./img/26ff2181a539d883affc4a3d3e0873.webp"
                          alt="Гость Марина"
                        />
                      </span>
                      <span className="last-comments__info">
                        <span className="last-comments__info_title">
                          <a href="https://kinogo.biz/11990-strannaja-priroda.html#comment">
                            Странная природа
                          </a>
                        </span>
                      </span>
                    </span>
                    <p className="last-comments__comment">
                      <span className="last-comments__info_user">
                        Гость Марина:
                      </span>
                      Хороший фильм что бывает если не заботится об окружающей
                      среде и загрязнять её
                    </p>
                  </li>
                  <li>
                    <span className="last-comments__user">
                      <span className="last-comments__user_avatar">
                        <img
                          src="./img/26ff2181a539d883affc4a3d3e0873.webp"
                          alt="Prado"
                        />
                      </span>
                      <span className="last-comments__info">
                        <span className="last-comments__info_title">
                          <a href="https://kinogo.biz/55532-vremennaja-petlja.html#comment">
                            Временная петля
                          </a>
                        </span>
                      </span>
                    </span>
                    <p className="last-comments__comment">
                      <span className="last-comments__info_user">Prado:</span>
                      Когда-то смотрел было интересно. Петля не только для
                      одного.
                    </p>
                  </li>
                  <li>
                    <span className="last-comments__user">
                      <span className="last-comments__user_avatar">
                        <img
                          src="./img/26ff2181a539d883affc4a3d3e0873.webp"
                          alt="vera"
                        />
                      </span>
                      <span className="last-comments__info">
                        <span className="last-comments__info_title">
                          <a href="https://kinogo.biz/16224-nirvana.html#comment">
                            Нирвана
                          </a>
                        </span>
                      </span>
                    </span>
                    <p className="last-comments__comment">
                      <span className="last-comments__info_user">vera:</span>{" "}
                      Был также фильм о том, как парнишка приобрёл игровую
                      приставку, и выпустил таким образом Джинна из бутылки,
                      вставив в неё оптический диск с видеоигрой: когда он делал
                      это, то в реальность выбирался главный герой и то, что он
                      по триггеру совершать
                    </p>
                  </li>
                  <li>
                    <span className="last-comments__user">
                      <span className="last-comments__user_avatar">
                        <img src="./img/noavatar.webp" alt="virt" />
                      </span>
                      <span className="last-comments__info">
                        <span className="last-comments__info_title">
                          <a href="https://kinogo.biz/9633-pjanaja-firma.html#comment">
                            Пьяная фирма
                          </a>
                        </span>
                      </span>
                    </span>
                    <p className="last-comments__comment">
                      <span className="last-comments__info_user">
                        <a href="https://kinogo.biz/user/virt/" rel="nofollow">
                          virt
                        </a>
                        :
                      </span>
                      Господи, что за дрянь! 😳
                    </p>
                  </li>
                  <li>
                    <span className="last-comments__user">
                      <span className="last-comments__user_avatar">
                        <img
                          src="./img/26ff2181a539d883affc4a3d3e0873.webp"
                          alt="Фейк"
                        />
                      </span>
                      <span className="last-comments__info">
                        <span className="last-comments__info_title">
                          <a href="https://kinogo.biz/9534-zhuki-1.html#comment">
                            Жуки
                          </a>
                        </span>
                      </span>
                    </span>
                    <p className="last-comments__comment">
                      <span className="last-comments__info_user">Фейк:</span>{" "}
                      Почему заменили актера священника? В принципе хорошо
                      сыграл и даже манера говорить все отлично скопировал, но
                      типаж все равно разный
                    </p>
                  </li>
                  <li>
                    <span className="last-comments__user">
                      <span className="last-comments__user_avatar">
                        <img src="./img/noavatar.webp" alt="vit2903" />
                      </span>
                      <span className="last-comments__info">
                        <span className="last-comments__info_title">
                          <a href="https://kinogo.biz/9534-zhuki-1.html#comment">
                            Жуки
                          </a>
                        </span>
                      </span>
                    </span>
                    <p className="last-comments__comment">
                      <span className="last-comments__info_user">
                        <a
                          href="https://kinogo.biz/user/vit2903/"
                          rel="nofollow"
                        >
                          vit2903
                        </a>
                        :
                      </span>
                      в последней серии Владимирпоступил как мужик.А вооще
                      режиссер хорошо показал деревню:
                      алкоголизм,разгильдяйсво,нищету.
                    </p>
                  </li>
                  <li>
                    <span className="last-comments__user">
                      <span className="last-comments__user_avatar">
                        <img
                          src="./img/26ff2181a539d883affc4a3d3e0873.webp"
                          alt="ЕРСИН"
                        />
                      </span>
                      <span className="last-comments__info">
                        <span className="last-comments__info_title">
                          <a href="https://kinogo.biz/55445-osvobozhdenie.html#comment">
                            Освобождение
                          </a>
                        </span>
                      </span>
                    </span>
                    <p className="last-comments__comment">
                      <span className="last-comments__info_user">ЕРСИН:</span>
                      Классный фильм 10/10
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="carusel"
        style={{
          flexFlow: "column",
          display: "flex",
          marginBottom: "0.78em",
          zIndex: "2",
        }}
      >
        <div className="deepnavigation" style={{ padding: "0", zIndex: "2" }}>
          <table className="menu">
            <tbody>
              <tr>
                <td className="item">
                  <a href="https://kinogo.biz/">
                    <span className="name">Главная</span>
                  </a>
                </td>
                <td className="item">
                  <a href="https://kinogo.biz/new/">
                    <span className="name">Новинки</span>
                  </a>
                </td>
                <td className="item">
                  <a
                    href="https://kinogo.biz/podborki.html"
                    style={{ background: "#5a2a2a" }}
                  >
                    <span className="name">Подборки</span>
                  </a>
                </td>
                <td className="item">
                  <a href="https://kinogo.biz/filmy/">
                    <span className="name">Фильмы</span>
                  </a>
                </td>
                <td className="item">
                  <a href="https://kinogo.biz/serialy/">
                    <span className="name">Сериалы</span>
                  </a>
                </td>
                <td className="item">
                  <a href="https://kinogo.biz/doramy/">
                    <span className="name">Дорамы</span>
                  </a>
                </td>
                <td className="item">
                  <a href="https://kinogo.biz/anime/">
                    <span className="name">Аниме</span>
                  </a>
                </td>
                <td className="item">
                  <a href="https://kinogo.biz/top-filmy/" title="топ фильмов">
                    <span className="name">ТОП&nbsp,фильмов</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{ height: "180px", maxHeight: "180px", zIndex: "999" }}
          className="new__movies"
        >
          <div className="new__movies-items owl-carousel owl-theme owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "1937px",
                }}
              >
                <div
                  className="owl-item active"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/37611-duna-2021-hd-v1.html"
                      title="Дюна (2021)"
                    >
                      <img
                        src="./img/0717ab6f1972961779bcabd5bfba02.webp"
                        className="lazy-loaded loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Дюна (2021)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/54660-vyshka-2022-hd.html"
                      title="Вышка (2022)"
                    >
                      <img
                        src="./img/549868bd8fd552d06783d2a35fac3e.webp"
                        className="lazy-loaded loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Вышка (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/53104-avatar-2-2022.html"
                      title="Аватар 2: Путь воды (2022)"
                    >
                      <img
                        src="./img/ed74350231f596ea0edd1a8f5dedbd.webp"
                        className="lazy-loaded loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Аватар 2: Путь воды (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/55011-bandit-2022-v1.html"
                      title="Бандит (2022)"
                    >
                      <img
                        src="./img/fbac0f8d82e95a4eba8e49908d16be.webp"
                        className="lazy-loaded loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Бандит (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/55235-prizrachnyj-patrul-2-vosstanie-prokljatyh.html"
                      title="Призрачный патруль 2: Восстание проклятых (2022)"
                    >
                      <img
                        src="./img/71675a5b8fc8f856f4a7dec31642ae.webp"
                        className="lazy-loaded loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Призрачный патруль 2: Восстание проклятых (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/54408-serdce-parmy.html"
                      title="Сердце Пармы (2022)"
                    >
                      <img
                        src="./img/b9ca7690790f863352438f152b01f1.webp"
                        className="lazy-loaded loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Сердце Пармы (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/49321-devushka-v-podvale-2021-v2.html"
                      title="Девушка в подвале (2021)"
                    >
                      <img
                        src="./img/975c98a099f8bbf7b9db9bb9174249.webp"
                        className="lazy-loaded loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Девушка в подвале (2021)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/55332-lamborgini-chelovek-legenda.html"
                      title="Ламборгини: Человек-легенда (2022)"
                    >
                      <img
                        src="./img/361c6a4bae8ea6734df27d3140acc3.webp"
                        className="lazy-loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Ламборгини: Человек-легенда (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/55262-korabl-v-pusan.html"
                      title="Корабль в Пусан (2022)"
                    >
                      <img
                        src="./img/7066aa6a93ba2e77c2a5905bfdb484.webp"
                        className="lazy-loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Корабль в Пусан (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/53896-svezhatinka-2022.html"
                      title="Свежатинка (2022)"
                    >
                      <img
                        src="./img/62d5d45b42b86ce63d6caa55088e8d.webp"
                        className="lazy-loaded"
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Свежатинка (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/55073-chernaya-pantera-vakanda-navsegda-2022.html"
                      title="Чёрная Пантера: Ваканда навсегда (2022)"
                    >
                      <img
                        src="./img/a50e0c024e017beea8183b1acc456b.webp"
                        className=""
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Чёрная Пантера: Ваканда навсегда (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/55445-osvobozhdenie.html"
                      title="Освобождение (2022)"
                    >
                      <img
                        src="./img/8079e91ac84dbe68c05e770f452bc9.webp"
                        className=""
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Освобождение (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/55370-strazhi-galaktiki-prazdnichnyj-specvypusk.html"
                      title="Стражи Галактики: Праздничный спецвыпуск (2022)"
                    >
                      <img
                        src="./img/4f7c52f09540ffab59a4cc7d74a7f7.webp"
                        className=""
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Стражи Галактики: Праздничный спецвыпуск (2022)"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "124.029px", marginRight: "14.3px" }}
                >
                  <div className="top__item">
                    <a
                      href="https://kinogo.biz/55503-mazhor-v-sochi.html"
                      title="Мажор в Сочи (2022)"
                    >
                      <img
                        src="./img/4ba05a9383fa293a30cd64c1d4189b.webp"
                        className=""
                        style={{ width: "118px", height: "174px" }}
                        width="118"
                        height="174"
                        alt="Мажор в Сочи (2022)"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled"></div>
          </div>
        </div>
      </div>
      <div className="footer" style={{ zIndex: "2" }}>
        <div className="footer-text">
          <p>
            Рады приветствовать всех любителей интересного и качественного кино
            на нашем сайте. У нас более 30.000 бесплатных фильмов и сериалов
            онлайн - официальный сайт kinogo.biz! Вы любите кинематограф также
            как мы? Постоянно следите за выходом новинок? Не проходит ни одного
            вечера, чтобы вы не посмотрели пару-тройку фильмов? Тогда вы пришли
            точно по адресу! В нашем кинотеатре можно
            <strong>смотреть фильмы онлайн бесплатно</strong> и без каких-либо
            ограничений!
          </p>
          <p>
            <img
              src="./img/footer-main.jpg"
              width="240"
              height="140"
              title="просмотр фильмов онлайн"
            />
            Специально для наших уважаемых пользователей мы постарались собрать
            лучшую коллекцию фильмов различных жанров, времен и народов! Команда
            проекта постоянно следит за выходом фильмов в прокат и регулярно
            добавляет картины, чтобы вы могли одними из первых наслаждаться, как
            лучшими мировыми шедеврами, так и новинками кино совершенно
            бесплатно!
          </p>
          <p>
            У нас вы найдете лучшие фильмы «Золотой эпохи» Голливуда,
            классическое европейское кино, лучшие французские комедии, азиатское
            кино, советские картины и современные хиты
            <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2018/">
              2018
            </a>
            ,
            <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2019/">
              2019
            </a>
            , а также
            <a href="https://kinogo.biz/xfsearch/year-teg-xfsearch/2020/">
              фильмы 2020
            </a>
            годов. Мы собрали внушительную коллекцию художественных и
            документальных фильмов, боевиков и триллеров, фэнтези и фантастики,
            драм и мелодрам, здесь же вы найдете
            <a href="https://kinogo.biz/komedia/">комедии</a>,
            <a href="https://kinogo.biz/uzhasy/">ужасы</a>, приключенческие и
            исторические ленты, детективы, вестерны, кино на военную тематику, а
            также картины других жанров и направлений. У нас смотреть фильмы
            можно в любое время, в неограниченных количествах, совершенно
            бесплатно и при этом в отличном качестве! Собирайтесь с друзьями,
            выбирайте хорошее кино, смотрите и делитесь впечатлениями! Здесь
            каждый сможет найти что-то интересное для себя. Жанровое кино,
            старый добрый советский фильм, а может быть, интересную
            документальную ленту. Любители новинок также смогут смотреть свежие
            фильмы 2020 в хорошем качестве картинки и звука.
          </p>
          <p>
            Специально для вашего удобства на сайте действует поисковая строка,
            благодаря которой можно быстро отыскать нужный фильм, введя его
            русское или оригинальное название. Если поиск не дал результатов,
            попробуйте воспользоваться расширенным поиском или напишите нам, и
            мы обязательно постараемся добавить нужный вам фильм. Также мы
            постарались максимально удобно структурировать сам сайт, чтобы
            искать фильмы различных жанров стало еще проще. Мы стараемся
            удовлетворять запросы широкого круга зрителей, поэтому оперативно
            добавляем новые фильмы практически сразу после их выхода в прокат, а
            затем регулярно обновляем их качество на лучшее сразу после релиза
            DVD или Blu-ray дисков. Поэтому наш кинотеатр готов стать верным
            партнером и помощником, как для ценителей отменного качества, так и
            для тех зрителей, которые предпочитают посмотреть новый фильм как
            можно быстрее.
          </p>
          <p>
            Смотрите хорошее <strong>кино онлайн бесплатно</strong>, без
            регистрации и отправки смс даже не выходя из дома!
          </p>
        </div>
        <div style={{ float: "left" }} className="partners"></div>
        <span
          style={{
            float: "left",
            paddingTop: "1px",
            paddingLeft: "10px",
            paddingBottom: "7px",
          }}
        >
          <a
            rel="nofollow"
            href="https://kinogo.biz/copyrights.html"
            style={{ fontWeight: "bold" }}
          >
            Правообладателям / Рекламодателям
          </a>
        </span>
        <div
          style={{
            float: "right",
            textAlign: "right",
            width: "300px",
            paddingTop: "3px",
          }}
        ></div>
      </div>
      <div
        className="blk-header__bg"
        style={{
          height: "33px",
          backgroundColor: "#000",
          width: "100%",
          position: "fixed",
          left: "0",
          right: "0",
          zIndex: "999999",
          top: "0px",
        }}
      >
        <div className="wrap" style={{ margin: "5px auto", width: "976px" }}>
          <div
            className="blk_header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="desk_logo">
              <a
                href="https://kinogo.biz/"
                style={{ lineHeight: "0", display: "block" }}
              >
                <svg
                  width="378pt"
                  height="82pt"
                  style={{ height: "17px", width: "90px" }}
                  version="1.1"
                  viewBox="0 0 378 82"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(0 82) scale(.1 -.1)" fill="#fff">
                    <path d="m1859 724c-64-19-141-91-176-162-24-50-27-69-27-157 0-87 3-107 25-155 31-66 85-121 148-152 39-19 62-23 146-23s107 4 146 23c148 72 213 246 160 422-19 62-31 82-79 130-39 39-73 62-106 73-60 21-173 21-237 1zm186-73c77-35 129-134 128-246-2-132-60-230-153-255-133-36-241 79-241 255 0 87 24 158 70 204 59 59 127 74 196 42z"></path>
                    <path d="m2600 731c-90-28-155-86-196-176-24-51-28-73-28-146 0-77 3-93 32-152 40-80 102-138 181-168 45-17 72-20 136-17 93 5 153 28 214 83l41 37v119 120l-137-3-138-3v-35-35l78-3 77-3v-84c0-84 0-85-30-100-107-55-241-7-303 109-18 34-22 57-22 141s3 107 22 142c55 102 182 138 293 83 45-23 69-50 85-97 11-32 18-38 45-41l33-3-5 45c-10 85-80 159-174 185-44 12-166 13-204 2z"></path>
                    <path d="m3272 726c-184-60-268-297-174-489 54-110 152-167 287-167 136 0 236 63 290 182 25 55 29 75 29 153 0 76-5 99-28 151-31 69-80 122-145 155-56 29-193 36-259 15zm184-77c48-23 98-89 115-153 19-71 7-184-27-246-73-136-226-144-311-17-115 171-22 430 156 436 14 1 44-8 67-20z"></path>
                    <path d="m100 405v-325h60 60v145c0 80 3 145 8 144 4 0 61-65 127-144l120-144h78c43-1 76 2 74 7-3 4-71 86-151 182l-145 174 72 76c40 41 100 104 134 140l62 65-47 3-47 4-135-141c-74-78-138-141-142-141-5 0-8 63-8 140v140h-60-60v-325z"></path>
                    <path d="m720 405v-325h60 60v325 325h-60-60v-325z"></path>
                    <path d="m970 405v-325h40 40v276 275l118-153c65-84 160-208 211-276 91-119 95-122 132-122h39v325 325h-40-40l-2-217-3-217-165 217-165 216-82 1h-83v-325z"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div
              className="search_login"
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <div
                className="desk_login"
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <a rel="nofollow" href="https://kinogo.biz/#">
                  Вход
                </a>
                /
                <a
                  rel="nofollow"
                  href="https://kinogo.biz/index.php?do=register"
                >
                  Регистрация
                </a>
                <div className="desk_login-group5" style={{ lineHeight: "1" }}>
                  <div
                    style={{ display: "none", paddingLeft: "10px" }}
                    id="test"
                  >
                    <form method="post" action="https://kinogo.biz/">
                      <label>Логин: </label>
                      <input
                        type="text"
                        name="login_name"
                        id="login_name"
                        style={{ width: "60px" }}
                      />
                      <input
                        type="password"
                        name="login_password"
                        id="login_password"
                        style={{ width: "60px" }}
                      />
                      &nbsp,
                      <button className="fbutton2" type="submit" title="Войти">
                        <span>Войти</span>
                      </button>
                      <input
                        name="login"
                        type="hidden"
                        id="login"
                        value="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="desk_search">
                <div className="js-lightsearch-shader"></div>
                <form className="js-lightsearch lightsearch">
                  <input
                    type="text"
                    className="js-lightsearch-input lightsearch-input"
                    placeholder="Поиск..."
                    value=""
                  />
                  <button
                    type="button"
                    className="js-lightsearch-reset lightsearch-reset lightsearch-btn"
                    title="Очистить поле ввода"
                  ></button>
                  <button
                    type="submit"
                    className="js-lightsearch-submit lightsearch-btn"
                  >
                    ok
                  </button>
                  <div className="js-lightsearch-content lightsearch__content"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
