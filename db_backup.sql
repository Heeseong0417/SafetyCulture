-- --------------------------------------------------------
-- 호스트:                          1.237.1.88
-- 서버 버전:                        10.9.3-MariaDB-1:10.9.3+maria~ubu2204 - mariadb.org binary distribution
-- 서버 OS:                        debian-linux-gnu
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- SafetyCulture 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `SafetyCulture` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `SafetyCulture`;

-- 테이블 SafetyCulture.sc_test 구조 내보내기
CREATE TABLE IF NOT EXISTS `sc_test` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` varchar(50) NOT NULL,
  `testClass` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `userWeight` varchar(50) NOT NULL,
  `selectItem` varchar(50) NOT NULL,
  `obWeight` varchar(50) NOT NULL,
  `obHeight` varchar(50) NOT NULL,
  `speed` varchar(50) NOT NULL,
  `distance` varchar(50) NOT NULL,
  `energy` varchar(50) NOT NULL,
  `riskIntensity` varchar(50) NOT NULL,
  `responsiveness` varchar(50) NOT NULL,
  `LTI` varchar(50) NOT NULL,
  `check` varchar(50) NOT NULL DEFAULT 'none',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COMMENT='`sc_test` (`userId`, `testClass`, `date`, `userName`, `department`, `userWeight`, `selectItem`, `obWeight`, `obHeight`, `speed`, `distance`, `energy`, `riskIntensity`, `responsiveness`, `LTI`, `id`, `check`)';

-- 테이블 데이터 SafetyCulture.sc_test:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `sc_test` DISABLE KEYS */;
INSERT INTO `sc_test` (`id`, `userId`, `testClass`, `date`, `userName`, `department`, `userWeight`, `selectItem`, `obWeight`, `obHeight`, `speed`, `distance`, `energy`, `riskIntensity`, `responsiveness`, `LTI`, `check`) VALUES
	(1, 'admin', '떨어짐', '2023-01-11 17:19:36', 'admin', '없음', '74.5', '작업발판', '0', '1.0', '0', '0', '730.1', '3급 위험', '730.1', '3급 위험', 'none'),
	(2, 'admin', '떨어짐', '2023-01-11 17:29:32', 'admin', '없음', '54.0', '작업발판', '0', '2.5', '0', '0', '1323.0', '2급 위험', '529.2', '2급 위험', 'none');
/*!40000 ALTER TABLE `sc_test` ENABLE KEYS */;

-- 테이블 SafetyCulture.sc_user 구조 내보내기
CREATE TABLE IF NOT EXISTS `sc_user` (
  `userId` varchar(50) NOT NULL,
  `userPassword` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `userPhone` varchar(50) NOT NULL,
  `level` varchar(50) DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='`sc_user` (`userId`, `userPassword`, `userName`, `userPhone`, `level`, `department`) VALUES';

-- 테이블 데이터 SafetyCulture.sc_user:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `sc_user` DISABLE KEYS */;
INSERT INTO `sc_user` (`userId`, `userPassword`, `userName`, `userPhone`, `level`, `department`) VALUES
	('admin', '1234', 'admin', '010-0000-0000', '3', '없음');
/*!40000 ALTER TABLE `sc_user` ENABLE KEYS */;

-- 테이블 SafetyCulture.select_option 구조 내보내기
CREATE TABLE IF NOT EXISTS `select_option` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `selectOption` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 SafetyCulture.select_option:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `select_option` DISABLE KEYS */;
INSERT INTO `select_option` (`id`, `userId`, `date`, `selectOption`) VALUES
	(1, 'admin', '2023-01-11 17:19:36', '[{"name":"안전모 착용","value":true},{"name":"작업 바닥 단차 점검","value":true},{"name":"안전 장치 조치","value":true},{"name":"2인 1조 작업","value":false},{"name":"최상부 발판 작업 금지","value":true}]'),
	(2, 'admin', '2023-01-11 17:29:32', '[{"name":"안전모 착용","value":true},{"name":"작업 바닥 단차 점검","value":true},{"name":"안전 장치 조치","value":true},{"name":"2인 1조 작업","value":false},{"name":"최상부 발판 작업 금지","value":true}]');
/*!40000 ALTER TABLE `select_option` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
