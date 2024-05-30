<!DOCTYPE html>
<html lang="en">
<head>
<title>Smart Mice - тренинг платформа по языкам</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Lingua project">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="styles/bootstrap4/bootstrap.min.css">
<link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="plugins/OwlCarousel2-2.2.1/owl.carousel.css">
<link rel="stylesheet" type="text/css" href="plugins/OwlCarousel2-2.2.1/owl.theme.default.css">
<link rel="stylesheet" type="text/css" href="plugins/OwlCarousel2-2.2.1/animate.css">
<link rel="stylesheet" type="text/css" href="styles/main_styles.css">
<link rel="stylesheet" type="text/css" href="styles/responsive.css">
<link rel="icon" href="images/myshkafon2.png" type="image/myshkafon2">
<script>
    function validateForm() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (email === "") {
            alert("Пожалуйста, введите ваш email.");
            return false;
        }
    
        if (!emailPattern.test(email)) {
            alert("Пожалуйста, введите корректный email.");
            return false;
        }
    
        if (password === "") {
            alert("Пожалуйста, введите ваш пароль.");
            return false;
        }
    
        return true; // Все проверки пройдены
    }
    </script>
</head>
<body>

<div class="super_container">

	<!-- Header -->

	<header class="header">
			
		<!-- Top Bar -->
		<div class="top_bar">
			<div class="top_bar_container">
				<div class="container">
					<div class="row">
						<div class="col">
							<div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
								<div class="top_bar_phone"><span class="top_bar_title">e-mail:</span>smartmice@bk.ru</div>
								<div class="top_bar_right ml-auto">
									
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>				
		</div>

		<!-- Header Content -->
		<div class="header_container">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="header_content d-flex flex-row align-items-center justify-content-start">
							<image class="logo" href="index.html" src="images/myshkabezfona (1).png"></image>
							<div class="logo_container mr-auto">
								
								<a href="#">
									<div class="logo_text">Smart Mice</div>
								</a>
							</div>
							<nav class="main_nav_contaner">
								<ul class="main_nav">
									<li class="active"><a href="index.html">Меню</a></li>
									<li><a href="courses.html">Курсы</a></li>
									<li><a href="instructors.html">О нас</a></li>
									<li><a href="#">События</a></li>
									<li><a href="contact.html">Контакты</a></li>
								</ul>
							</nav>
							<div class="header_content_right ml-auto text-right">
								<div class="header_search">
									<div class="search_form_container">
										<form action="#" id="search_form" class="search_form trans_400">
											<input type="search" class="header_search_input trans_400" placeholder="Type for Search" required="required">
											<div class="search_button">
												<i class="fa fa-search" aria-hidden="true"></i>
											</div>
										</form>
									</div>
								</div>

								<?php
									session_start(); // Инициализация сессии

									// Проверяем, есть ли имя пользователя в сессии
									if (isset($_SESSION['username'])) {
										$username = $_SESSION['username']; // Если есть, сохраняем его в переменную
									} else {
										$username = "Guest"; // Иначе устанавливаем значение Guest
									}
									?>
									<div class="user">
										<a href="#">
											<i class="fa fa-user" aria-hidden="true"></i>
										</a>
										<div class="user_greeting" style="margin-left:130%; margin-top:-100%;">
											Hello, <?php echo htmlspecialchars($username); ?>
										</div>
									</div>
									<div class="hamburger menu_mm">
										<i class="fa fa-bars menu_mm" aria-hidden="true"></i>
									</div>
									<?php if ($username !== "Guest"): ?>
										<div class="logout" style="margin-left:200%;margin-top:-40%;">
											<a href="logout.php" class="btn btn-primary">Выйти</a>
										</div>
									<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>

	</header>

	<!-- Menu -->

	<div class="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
		<div class="menu_close_container"><div class="menu_close"><div></div><div></div></div></div>
		<div class="search">
			<form action="#" class="header_search_form menu_mm">
				<input type="search" class="search_input menu_mm" placeholder="Search" required="required">
				<button class="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
					<i class="fa fa-search menu_mm" aria-hidden="true"></i>
				</button>
			</form>
		</div>
		<nav class="menu_nav">
			<ul class="menu_mm">
				<li class="menu_mm"><a href="index.html">Меню</a></li>
				<li class="menu_mm"><a href="courses.html">Курсы</a></li>
				<li class="menu_mm"><a href="instructors.html">Инструктаж</a></li>
				<li class="menu_mm"><a href="#">События</a></li>
				<li class="menu_mm"><a href="blog.html">О нас</a></li>
				<li class="menu_mm"><a href="contact.html">Контакты</a></li>
			</ul>
		</nav>
		<div class="menu_extra">
			<div class="menu_phone"><span class="menu_title">e-mail:</span>smartmice@bk.ru</div>
		</div>
	</div>
	
	<!-- Home -->

	<div class="home">
		<div class="home_background" style="background-image: url(images/index_background.jpg);"></div>
		<div class="home_content">
			<div class="container">
				<div class="row">
					<div class="col text-center">
						<h1 class="home_title">Начни изучать языки</h1>
						<div class="home_button trans_200"><a href="courses.html">Начать</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Language -->

	<div class="language">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="language_slider_container">
						
						<!-- Language Slider -->

						<div class="owl-carousel owl-theme language_slider">

							<!-- Flag -->
							<div class="owl-item language_item">
								<a href="#">
									<div class="flag"><img src="images/Japanese.svg" alt=""></div>
									<div class="lang_name">Japanese</div>
								</a>
							</div>

							<!-- Flag -->
							<div class="owl-item language_item">
								<a href="#">
									<div class="flag"><img src="images/Lithuanian.svg" alt=""></div>
									<div class="lang_name">Lithuanian</div>
								</a>
							</div>

							<!-- Flag -->
							<div class="owl-item language_item">
								<a href="#">
									<div class="flag"><img src="images/Swedish.svg" alt=""></div>
									<div class="lang_name">Swedish</div>
								</a>
							</div>

							<!-- Flag -->
							<div class="owl-item language_item">
								<a href="#">
									<div class="flag"><img src="images/English.svg" alt=""></div>
									<div class="lang_name">English</div>
								</a>
							</div>

							<!-- Flag -->
							<div class="owl-item language_item">
								<a href="#">
									<div class="flag"><img src="images/Italian.svg" alt=""></div>
									<div class="lang_name">Italian</div>
								</a>
							</div>

							<!-- Flag -->
							<div class="owl-item language_item">
								<a href="#">
									<div class="flag"><img src="images/Chinese.svg" alt=""></div>
									<div class="lang_name">Chinese</div>
								</a>
							</div>

							<!-- Flag -->
							<div class="owl-item language_item">
								<a href="#">
									<div class="flag"><img src="images/French.svg" alt=""></div>
									<div class="lang_name">French</div>
								</a>
							</div>

							<!-- Flag -->
							<div class="owl-item language_item">
								<a href="#">
									<div class="flag"><img src="images/German.svg" alt=""></div>
									<div class="lang_name">German</div>
								</a>
							</div>

						</div>

						<div class="lang_nav lang_prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
						<div class="lang_nav lang_next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Courses -->

	<div class="courses">
		<div class="courses_background"></div>
		<div class="container">
			<div class="row">
				<div class="col">
					<h2 class="section_title text-center">Популярные курсы</h2>
				</div>
			</div>
			<div class="row courses_row">

				<!-- Course -->
				<div class="col-lg-4 course_col">
					<div class="course">
						<div class="course_image"><img src="images/course_1.jpg" alt=""></div>
						<div class="course_body">
							<div class="course_title"><a href="course.html">Изучение английского</a></div>
							<div class="course_info">
								<ul>
									<li><a href="instructors.html">Игра-тренажер</a></li>
									<li><a href="#">English</a></li>
								</ul>
							</div>
							<div class="course_text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla.</p>
							</div>
						</div>
						<div class="course_footer d-flex flex-row align-items-center justify-content-start">
							<div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>0</span></div>
							<div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>4,5</span></div>
							<div class="course_mark course_free trans_200"><a href="courses.html">Начать</a></div>
						</div>
					</div>
				</div>

				<!-- Course -->
				<div class="col-lg-4 course_col">
					<div class="course">
						<div class="course_image"><img src="images/course_2.jpg" alt=""></div>
						<div class="course_body">
							<div class="course_title"><a href="course.html">Изучение IT</a></div>
							<div class="course_info">
								<ul>
									<li><a href="instructors.html">Тесты-тренажеры</a></li>
									<li><a href="#">English</a></li>
								</ul>
							</div>
							<div class="course_text">
								<p>Данная игра пока что находится в разработке.</p>
							</div>
						</div>
						<div class="course_footer d-flex flex-row align-items-center justify-content-start">
							<div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>0</span></div>
							<div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>0</span></div>
							<div class="course_mark course_free trans_200"><a href="courses.html">Начать</a></div>
						</div>
					</div>
				</div>

				<!-- Course -->
				<div class="col-lg-4 course_col">
					<div class="course">
						<div class="course_image"><img src="images/course_3.jpg" alt=""></div>
						<div class="course_body">
							<div class="course_title"><a href="course.html">Изучение китайского</a></div>
							<div class="course_info">
								<ul>
									<li><a href="instructors.html">Игра-тренажер</a></li>
									<li><a href="#">Chinese</a></li>
								</ul>
							</div>
							<div class="course_text">
								<p>Данная игра пока что находится в разработке.</p>
							</div>
						</div>
						<div class="course_footer d-flex flex-row align-items-center justify-content-start">
							<div class="course_students"><i class="fa fa-user" aria-hidden="true"></i><span>0</span></div>
							<div class="course_rating ml-auto"><i class="fa fa-star" aria-hidden="true"></i><span>0</span></div>
							<div class="course_mark trans_200"><a href="courses.html">Начать</a></div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>


	<!-- Register -->

	<div class="register">
		<div class="container">
			<div class="row">
				
				<!-- Register Form -->
				
				<div class="col-lg-6">
					<div class="register_form_container">
						<div class="register_form_title">Авторизоваться</div>
						<form action="welcome.php" id="register_form" class="register_form" method="post" onsubmit="return validateForm()">
							<div class="row register_row">
								<div class="col-lg-6 register_col">
									<input type="email" id="email" class="form_input" placeholder="Email" name="email" required="required">
								</div>
								<div class="col-lg-6 register_col">
									<input type="password" id="password" class="form_input" placeholder="Пароль" name="password" required="required">
								</div>
								<div class="col">
									<button type="submit" class="form_button trans_200">Войти</button>
								</div>
							</div>
						</form>
						<a class="register_form_title" href="index.php">Зарегистрироваться</a>
					</div>
				</div>

				
			</div>
		</div>
	</div>
			
	<!-- Events -->

	<div class="events">
		<div class="container">
			<div class="row">
				<div class="col">
					<h2 class="section_title text-center">Предстоящие события</h2>
				</div>
			</div>
			<div class="row events_row">
				
				<!-- Event -->
				<div class="col-lg-4 event_col">
					<div class="event">
						<div class="event_image"><img src="images/event_1.jpg" alt=""></div>
						<div class="event_date d-flex flex-column align-items-center justify-content-center">
							<div class="event_day">26</div>
							<div class="event_month">aug</div>
						</div>
						<div class="event_body d-flex flex-row align-items-center justify-content-start">
							<div class="event_title"><a href="#">Networking Day</a></div>
							<div class="event_tag ml-auto">Free</div>
						</div>
					</div>
				</div>

				<!-- Event -->
				<div class="col-lg-4 event_col">
					<div class="event">
						<div class="event_image"><img src="images/event_2.jpg" alt=""></div>
						<div class="event_date d-flex flex-column align-items-center justify-content-center">
							<div class="event_day">26</div>
							<div class="event_month">aug</div>
						</div>
						<div class="event_body d-flex flex-row align-items-center justify-content-start">
							<div class="event_title"><a href="#">Networking Day</a></div>
							<div class="event_tag ml-auto">Free</div>
						</div>
					</div>
				</div>

				<!-- Event -->
				<div class="col-lg-4 event_col">
					<div class="event">
						<div class="event_image"><img src="images/event_3.jpg" alt=""></div>
						<div class="event_date d-flex flex-column align-items-center justify-content-center">
							<div class="event_day">26</div>
							<div class="event_month">aug</div>
						</div>
						<div class="event_body d-flex flex-row align-items-center justify-content-start">
							<div class="event_title"><a href="#">Networking Day</a></div>
							<div class="event_tag ml-auto">Free</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	
				<!-- Blog Right -->

				<div class="col-lg-6">
					<div class="blog_right">
						<div class="blog_image" style="background-image:url(images/blog_7.jpg)"></div>
						<div class="blog_title_container">
							<div class="blog_right_category"><a href="#">travel</a></div>
							<div class="blog_right_title"><a href="blog_single.html">Design Better Forms</a></div>
							<div class="blog_right_text">
								<p>Whether it is a signup flow, a multi-view stepper, or a monotonous data entry interface, forms are one of the most important components of digital product design.</p>
							</div>
							<div class="read_more"><a href="blog_single.html">Read More <img src="images/right.png" alt=""></a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->

	<footer class="footer">
		<div class="footer_body">
			<div class="container">
				<div class="row">

					<!-- Newsletter -->
					<div class="col-lg-3 footer_col">
						<div class="newsletter_container d-flex flex-column align-items-start justify-content-end">
							<div class="footer_logo mb-auto"><a href="#">Smart Mice</a></div>
							<div class="footer_title">Подписаться на новости</div>
							<form action="#" id="newsletter_form" class="newsletter_form">
								<input type="email" class="newsletter_input" placeholder="Email" required="required">
								<button class="newsletter_button"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
							</form>
						</div>
					</div>

					<!-- About -->
					<div class="col-lg-2 offset-lg-3 footer_col">
						<div>
							<div class="footer_title">About Us</div>
							<ul class="footer_list">
								<li><a href="#">Courses</a></li>
								<li><a href="#">Team</a></li>
								<li><a href="#">Brand Guidelines</a></li>
								<li><a href="#">Jobs</a></li>
								<li><a href="#">Advertise with us</a></li>
								<li><a href="#">Press</a></li>
								<li><a href="#">Contact us</a></li>
							</ul>
						</div>
					</div>

					<!-- Help & Support -->
					<div class="col-lg-2 footer_col">
						<div class="footer_title">Help & Support</div>
						<ul class="footer_list">
							<li><a href="#">Discussions</a></li>
							<li><a href="#">Troubleshooting</a></li>
							<li><a href="#">Duolingo FAQs</a></li>
							<li><a href="#">Schools FAQs</a></li>
							<li><a href="#">Duolingo English Test FAQs</a></li>
							<li><a href="#">Status</a></li>
						</ul>
					</div>

					<!-- Privacy -->
					<div class="col-lg-2 footer_col clearfix">
						<div>
							<div class="footer_title">Privacy & Terms</div>
							<ul class="footer_list">
								<li><a href="#">Community Guidelines</a></li>
								<li><a href="#">Terms</a></li>
								<li><a href="#">Brand Guidelines</a></li>
								<li><a href="#">Privacy</a></li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="copyright_content d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
							<div class="cr"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved </i>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></div>
							<div class="cr_right ml-md-auto">
								<div class="footer_phone"><span class="cr_title">e-mail:</span>smartmice@bk.ru</div>
								<div class="footer_social">
									<span class="cr_social_title">follow us</span>
									<ul>
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>

<script src="js/jquery-3.2.1.min.js"></script>
<script src="styles/bootstrap4/popper.js"></script>
<script src="styles/bootstrap4/bootstrap.min.js"></script>
<script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
<script src="plugins/easing/easing.js"></script>
<script src="js/custom.js"></script>
</body>
</html>