-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2024 at 04:17 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mangaread`
--

-- --------------------------------------------------------

--
-- Table structure for table `manga`
--

CREATE TABLE `manga` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `penulis` varchar(255) NOT NULL,
  `penerbit` varchar(255) NOT NULL,
  `tanggal_rilis` date NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `jumlah_volume` int(11) DEFAULT NULL,
  `url_baca` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `manga`
--

INSERT INTO `manga` (`id`, `judul`, `penulis`, `penerbit`, `tanggal_rilis`, `rating`, `jumlah_volume`, `url_baca`, `created_at`, `updated_at`) VALUES
(1, 'Naruto', 'Masashi Kishimoto', 'Shueisha', '2001-09-21', 4, 72, 'https://example.com/naruto', '2024-01-16 20:42:18', '2024-01-16 20:42:18'),
(2, 'Bleach', 'Tite Kubo', 'Shueisha', '2001-08-07', 4, 74, 'https://example.com/bleach', '2024-01-16 20:42:18', '2024-01-16 20:42:18'),
(3, 'Gintama', 'Hideaki Sorachi', 'Shueisha', '2003-12-08', 4, 77, 'https://example.com/gintama', '2024-01-16 20:42:18', '2024-01-16 20:42:18'),
(4, 'Dragon Ball', 'Akira Toriyama', 'Shueisha', '1984-12-03', 4, 42, 'https://example.com/dragon-ball', '2024-01-16 20:42:18', '2024-01-16 20:42:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `manga`
--
ALTER TABLE `manga`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_judul_unique` (`judul`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `manga`
--
ALTER TABLE `manga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
