import styles from "./page.module.scss";

function Page() {
	return ( 
		<section id="catalog">
			<div className="container">
				<h3 className="title">Доставка и оплата</h3>

				<div className={styles.deleveryBox}>
					<h4>У нас существует два варианта оплаты</h4>
					<p>1. На сайте онлайн тогда доставка и транспортные расходы мы берём на себя. 
					И отправляем товар любым способом на Ваш выбор(CDEK, ПЭК, EMS, Почта России)</p>
					<p>2. Мы можем отправить вам товар наложенным платежом с оплатой при получении,
					в этом случии мы прекрепляем опись вложения и вы сможете расчитаться после проверки товара.
					Отправим одним из способов(CDEK, ПЭК, EMS, Почта России)</p>
					<div className={styles.border}></div>
					<h4>Условия возврата</h4>
					<p>После получения товара если у вас возникли претензии к качеству товара пишите на нашу почту recuerdo.eterno@yandex.ru
					Так же приложите как можно подробные снимки товара, который вы получили и отправьте нам вместе с претензией. 
					Возможно нам удастся договорится и мы сможем возместить, вам часть уплаченных денег у вы согласитесь оставить товар. 
					Если же этот вариант вам не пожходит, то тогда вам нужно отправить наш товар по обратному адресу и после получения в течении
					3-х рабочих дней мы свяжемся с вами и перечислим вам деньги на нужный вам счёт</p>
					<div className={styles.border}></div>
					<h4>Будем очень благодарны за ваши отзывы</h4>
					<p>Не забывайте присылать нам отзывы о нашей продукции. Будем очень благодарны!!!</p>
				</div>
			</div>
		</section>
	);
}

export default Page;