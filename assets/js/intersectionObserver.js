(() => {
	const clientHeight = document.documentElement.clientHeight; // ブラウザ表示領域
	const target = document.querySelector('.main_imgBox'); // 監視対象の要素
	const header = document.querySelector('.site-header');
	const logo = document.querySelector('.logo');
	const line1 = document.querySelector('.h_menu_line_1');
	const line2 = document.querySelector('.h_menu_line_2');
	const line3 = document.querySelector('.h_menu_line_3');
	const observer = new IntersectionObserver((changes) => { // Intersection Observerの設定
		for (const change of changes) {
			const rect = change.target.getBoundingClientRect();
			const h = (0 < rect.top && rect.top < clientHeight) // 対象の上端は表示領域に入っている
					|| (0 < rect.bottom && rect.bottom < clientHeight) // 対象の下端は表示領域に入っている
					|| (0 > rect.top && rect.bottom > clientHeight); // 間が表示されている
			if(h) { // 対象が表示されていないとき
				header.classList.remove('scrolled'); // scorlledクラスを削除
				logo.src = "./assets/img/logo_w.svg"; // scorlledクラスを付与
				line1.classList.remove('h_menu_line_1_b'); // scorlledクラスを削除
				line2.classList.remove('h_menu_line_2_b'); // scorlledクラスを削除
				line3.classList.remove('h_menu_line_3_b'); // scorlledクラスを削除
			} else { // 対象が表示されているとき
				header.classList.add('scrolled'); // scorlledクラスを付与
				logo.src = "./assets/img/logo_bl.svg"; // scorlledクラスを付与
				line1.classList.add('h_menu_line_1_b'); // scorlledクラスを削除
				line2.classList.add('h_menu_line_2_b'); // scorlledクラスを削除
				line3.classList.add('h_menu_line_3_b'); // scorlledクラスを削除
			}
		}
	});
	observer.observe(target); // 監視開始
	})();