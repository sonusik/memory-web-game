-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Май 30 2024 г., 07:29
-- Версия сервера: 5.7.24
-- Версия PHP: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `diplom`
--

-- --------------------------------------------------------

--
-- Структура таблицы `awards`
--

CREATE TABLE `awards` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `award_name` varchar(255) DEFAULT NULL,
  `completed` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `awards`
--

INSERT INTO `awards` (`id`, `user_id`, `award_name`, `completed`) VALUES
(1, 1, 'Лучший ученик месяца', 1),
(2, 2, 'Участник олимпиады', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `course_title` varchar(255) DEFAULT NULL,
  `course_number` int(11) DEFAULT NULL,
  `completions` int(11) DEFAULT NULL,
  `grade` decimal(5,2) DEFAULT NULL,
  `final_user_grade` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `courses`
--

INSERT INTO `courses` (`id`, `name`, `course_title`, `course_number`, `completions`, `grade`, `final_user_grade`) VALUES
(1, 'Изучение английского', 'Игра-тренажер', 101, 150, '4.50', '4.00'),
(2, 'Изучение IT', 'Игра-тренажер', 102, 120, '4.00', '3.80');

-- --------------------------------------------------------

--
-- Структура таблицы `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `games`
--

INSERT INTO `games` (`id`, `user_id`, `level`) VALUES
(1, 1, 10),
(2, 2, 8);

-- --------------------------------------------------------

--
-- Структура таблицы `passwordrecovery`
--

CREATE TABLE `passwordrecovery` (
  `user_id` int(11) DEFAULT NULL,
  `recovery_token` varchar(255) DEFAULT NULL,
  `expiration_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `passwordrecovery`
--

INSERT INTO `passwordrecovery` (`user_id`, `recovery_token`, `expiration_date`) VALUES
(1, 'token1', '2023-12-31 23:59:59'),
(2, 'token2', '2023-12-31 23:59:59');

-- --------------------------------------------------------

--
-- Структура таблицы `rankings`
--

CREATE TABLE `rankings` (
  `user_id` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `game_progress` int(11) DEFAULT NULL,
  `statistics` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rankings`
--

INSERT INTO `rankings` (`user_id`, `level`, `game_progress`, `statistics`) VALUES
(1, 5, 80, 'Прогресс хороший'),
(2, 3, 40, 'Нужно улучшить');

-- --------------------------------------------------------

--
-- Структура таблицы `reportingstatistics`
--

CREATE TABLE `reportingstatistics` (
  `user_id` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `levels_completed` int(11) DEFAULT NULL,
  `tests_passed` int(11) DEFAULT NULL,
  `time_spent_per_course` int(11) DEFAULT NULL,
  `users_passed` int(11) DEFAULT NULL,
  `users_emails` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `reportingstatistics`
--

INSERT INTO `reportingstatistics` (`user_id`, `username`, `levels_completed`, `tests_passed`, `time_spent_per_course`, `users_passed`, `users_emails`) VALUES
(1, 'user1', 5, 3, 120, 50, 'user1@example.com,user3@example.com'),
(2, 'user2', 3, 1, 200, 30, 'user2@example.com,user4@example.com');

-- --------------------------------------------------------

--
-- Структура таблицы `usercourses`
--

CREATE TABLE `usercourses` (
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `userlogins`
--

CREATE TABLE `userlogins` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `userlogins`
--

INSERT INTO `userlogins` (`id`, `email`, `password`, `user_id`, `username`) VALUES
(1, '21312@mail.ru', '123456', NULL, NULL),
(2, 'user2@example.com', 'password2', 2, NULL),
(3, 'admin@mail.ru', 'admin', NULL, NULL),
(4, '2131222@mail.ru', '$2y$10$tMP3mMEHFi5qfKlQyjK5buO/6ffPGmv2LKX9pIiwYuxWOGfsoe.q.', NULL, NULL),
(5, '22321312@mail.ru', '$2y$10$kIfaXAdScOPSCDfoKKS2feGxhBo2QXaYq98m2ECkpArcXM6VTTpaG', NULL, NULL),
(7, 'admin2333@mail.ru', '$2y$10$r1Idbhk63BSB9e20gMibf.Ri.omzNpgvR1Dg2VV85UqVV1o9qJA.a', NULL, NULL),
(8, '123123@mail.ru', '$2y$10$LlfTXRmdDKHxlnDK007HsOioP7oIIsyjv.mzxfC0c8taiusrCmGRW', NULL, NULL),
(9, '342234@mail.ru', '$2y$10$eznu72Yihw8.qeRkVlBQn.Yw8VaSiigvpLItOIuzkX92jVh0y/4qy', NULL, NULL),
(10, '34222234@mail.ru', '$2y$10$7.ICV1Jaw01Z8X0nHSdGWevgKByVnhmDcAQcIeN2gmlgHZx9pF.y6', NULL, NULL),
(11, '3422233234@mail.ru', '$2y$10$qG2PEpFspNGpVinQQzAmtOOBR14D.V6.fqg/p.T3az7i2MnKlbBdO', NULL, NULL),
(12, '342223223234@mail.ru', '$2y$10$Y46yRriEtQXi7rQ4oZ3Xwu0ZiCdwT7jpH0DZpNVqJyKO1IBhi/7uq', NULL, NULL),
(13, '3422234223234@mail.ru', '$2y$10$INynlKkWniwCEJNERS9BRubZy7BqbmIdtjmEbn5NSSRhyVMDHrerO', NULL, NULL),
(14, '2234223234@mail.ru', '$2y$10$HhQ.UoMyivGUoP3VLoeeweFq9aKhAm3It6K4ucoEDxut/LFOyhBfe', NULL, NULL),
(15, 'aaa@mail.ru', '$2y$10$cf1lUyrqoOeLwO6n8haTauh0EOhMvOkaVMi434tjd1IpsnMnhrHu2', NULL, NULL),
(16, '111@mail.ru', '$2y$10$rqvO74qaBS9nXTxezI4zG.UaURWWyTeKcNdMRgKprOfTG9PgoDs5.', NULL, NULL),
(17, '18@mail.ru', '$2y$10$EDp/7ZbG7nhCj/rI2Ro3buISs7yEmwRJMxxBOuKU0Owfg//iWjeyC', NULL, NULL),
(18, '11@gmail.com', '$2y$10$AuwbSzf8jlLVG6FzSWHL3eSbwnaL8IjOLXA/3v/i6NSh6F8UgaHby', NULL, NULL),
(19, 'aa@mail.ru', '$2y$10$p85ocaiBH9f6QbJp9fLKlOWoXVF6k21tH2YcVLAx2suLCF8K.Phzu', NULL, NULL),
(20, '123@mail.ru', '$2y$10$t5px5GDr1A5LHuDXzWeSQeqAszKeO2wsk7Mkk8NLsl0fykrGlFrfm', NULL, NULL),
(21, '1@mail.ru', '$2y$10$qtP5xgCSo4vxpRrTslCD6.4Az2cnL7Ujd14kUVvmQmcqxbNol5tEG', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `userregistrations`
--

CREATE TABLE `userregistrations` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `userregistrations`
--

INSERT INTO `userregistrations` (`id`, `username`, `email`, `password`, `user_id`) VALUES
(1, '11', '11@gmail.com', '$2y$10$AuwbSzf8jlLVG6FzSWHL3eSbwnaL8IjOLXA/3v/i6NSh6F8UgaHby', NULL),
(2, 'фф', 'aa@mail.ru', '$2y$10$p85ocaiBH9f6QbJp9fLKlOWoXVF6k21tH2YcVLAx2suLCF8K.Phzu', NULL),
(3, '123', '123@mail.ru', '$2y$10$t5px5GDr1A5LHuDXzWeSQeqAszKeO2wsk7Mkk8NLsl0fykrGlFrfm', NULL),
(4, '1', '1@mail.ru', '$2y$10$qtP5xgCSo4vxpRrTslCD6.4Az2cnL7Ujd14kUVvmQmcqxbNol5tEG', NULL);

--
-- Триггеры `userregistrations`
--
DELIMITER $$
CREATE TRIGGER `CopyData` AFTER INSERT ON `userregistrations` FOR EACH ROW BEGIN
    INSERT INTO userlogins (email, password) VALUES (NEW.email, NEW.password);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `class` varchar(50) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `class`, `city`, `email`, `age`, `phone_number`) VALUES
(1, 'user1', 'password1', '10A', 'Москва', 'user1@example.com', 15, '1234567890'),
(2, 'user2', 'password2', '11B', 'Санкт-Петербург', 'user2@example.com', 16, '0987654321');

-- --------------------------------------------------------

--
-- Структура таблицы `user_sessions`
--

CREATE TABLE `user_sessions` (
  `session_id` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `last_activity` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `awards`
--
ALTER TABLE `awards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `passwordrecovery`
--
ALTER TABLE `passwordrecovery`
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `rankings`
--
ALTER TABLE `rankings`
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `reportingstatistics`
--
ALTER TABLE `reportingstatistics`
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `usercourses`
--
ALTER TABLE `usercourses`
  ADD PRIMARY KEY (`user_id`,`course_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Индексы таблицы `userlogins`
--
ALTER TABLE `userlogins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_userlogins_user_id` (`user_id`);

--
-- Индексы таблицы `userregistrations`
--
ALTER TABLE `userregistrations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_userregistrations_user_id` (`user_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Индексы таблицы `user_sessions`
--
ALTER TABLE `user_sessions`
  ADD PRIMARY KEY (`session_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `awards`
--
ALTER TABLE `awards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `userlogins`
--
ALTER TABLE `userlogins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `userregistrations`
--
ALTER TABLE `userregistrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `awards`
--
ALTER TABLE `awards`
  ADD CONSTRAINT `awards_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `passwordrecovery`
--
ALTER TABLE `passwordrecovery`
  ADD CONSTRAINT `passwordrecovery_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `rankings`
--
ALTER TABLE `rankings`
  ADD CONSTRAINT `rankings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `reportingstatistics`
--
ALTER TABLE `reportingstatistics`
  ADD CONSTRAINT `reportingstatistics_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `usercourses`
--
ALTER TABLE `usercourses`
  ADD CONSTRAINT `usercourses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `usercourses_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`);

--
-- Ограничения внешнего ключа таблицы `userlogins`
--
ALTER TABLE `userlogins`
  ADD CONSTRAINT `fk_userlogins_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `userregistrations`
--
ALTER TABLE `userregistrations`
  ADD CONSTRAINT `fk_userregistrations_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ограничения внешнего ключа таблицы `user_sessions`
--
ALTER TABLE `user_sessions`
  ADD CONSTRAINT `user_sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `userlogins` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
