-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 24, 2020 at 03:31 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id12345147_piratedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `player score`
--

CREATE TABLE `player score` (
  `ID` int(11) NOT NULL COMMENT 'identifier',
  `Doubloons` bigint(20) DEFAULT NULL COMMENT 'score',
  `Scallywags` int(11) DEFAULT NULL,
  `Pirates` int(11) DEFAULT NULL,
  `FirstMates` int(11) DEFAULT NULL,
  `Captains` int(11) DEFAULT NULL,
  `Sloops` int(11) DEFAULT NULL,
  `Brigantines` int(11) DEFAULT NULL,
  `Galleons` int(11) DEFAULT NULL,
  `AlienTech` tinyint(1) DEFAULT NULL,
  `SpaceShips` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `player stats`
--

CREATE TABLE `player stats` (
  `ID` int(11) NOT NULL COMMENT 'identifier',
  `Name` text COLLATE utf8_unicode_ci NOT NULL COMMENT 'pirate name',
  `Pass` varchar(16) COLLATE utf8_unicode_ci NOT NULL COMMENT 'password',
  `email` varchar(45) COLLATE utf8_unicode_ci NOT NULL COMMENT 'for password reset'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='player stats for pirate game';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `player score`
--
ALTER TABLE `player score`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `player stats`
--
ALTER TABLE `player stats`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`Name`(32));

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `player score`
--
ALTER TABLE `player score`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'identifier';

--
-- AUTO_INCREMENT for table `player stats`
--
ALTER TABLE `player stats`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'identifier';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
