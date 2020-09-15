-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2020 at 05:20 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `bathroom`
--

CREATE TABLE `bathroom` (
  `id` int(11) NOT NULL,
  `product-title` varchar(255) NOT NULL,
  `product-size` varchar(255) NOT NULL,
  `product-price` varchar(255) NOT NULL,
  `product-description` text NOT NULL,
  `product-image-one` varchar(255) NOT NULL,
  `product-image-two` varchar(255) NOT NULL,
  `product-image-three` varchar(255) NOT NULL,
  `product-image-four` varchar(255) NOT NULL,
  `product-creation-date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bathroom`
--

INSERT INTO `bathroom` (`id`, `product-title`, `product-size`, `product-price`, `product-description`, `product-image-one`, `product-image-two`, `product-image-three`, `product-image-four`, `product-creation-date`) VALUES
(1, 'Placerat Duis Dignissim Etiam', '60/60/30 cm', '€ 49,95', 'Turpis Ridiculus Faucibus varius lacus nunc habitasse faucibus interdum pede. Habitant, metus at feugiat mus. Tempor maecenas id et massa malesuada cubilia.', 'url(\'assets/images/bathroom/one/one.jpg\')', 'url(\'assets/images/bathroom/one/two.jpg\')', 'url(\'assets/images/bathroom/one/three.jpg\')', 'url(\'assets/images/bathroom/one/four.jpg\')', '2020-09-14 13:55:55'),
(2, 'Parturient Nec Accumsan Varius', '65/185,5/38 cm', '€ 59,90', 'Aenean Euismod Nibh Neque Lectus vehicula tortor sociosqu. Feugiat egestas, per taciti augue mauris ridiculus cubilia pretium hendrerit. Inceptos in non mollis morbi Integer.', 'url(\'assets/images/bathroom/two/one.jpg\')', 'url(\'assets/images/bathroom/two/two.jpg\')', 'url(\'assets/images/bathroom/two/three.jpg\')', 'url(\'assets/images/bathroom/two/four.jpg\')', '2020-09-14 13:58:39'),
(3, 'Senectus Justo', '60/65/13,9 cm', '€ 64,90', 'Sit Dapibus Tortor. Facilisis ad auctor a gravida hendrerit eget tristique sodales viverra augue duis dignissim fames sollicitudin convallis accumsan facilisis posuere.', 'url(\'assets/images/bathroom/three/one.jpg\')', 'url(\'assets/images/bathroom/three/two.jpg\')', 'url(\'assets/images/bathroom/three/three.jpg\')', 'url(\'assets/images/bathroom/three/four.jpg\')', '2020-09-14 13:58:39'),
(4, 'Consequat Amet Auctor Suscipit Pede', '60/52,7/28,3 cm', '€ 49,95', 'Tempus Fusce Nisi Magnis taciti. Lorem luctus tristique risus cursus dictum justo porta eleifend. Ullamcorper tortor hac. Nonummy aenean in facilisi ridiculus iaculis.', 'url(\'assets/images/bathroom/four/one.jpg\')', 'url(\'assets/images/bathroom/four/two.jpg\')', 'url(\'assets/images/bathroom/four/three.jpg\')', 'url(\'assets/images/bathroom/four/four.jpg\')', '2020-09-14 14:00:29'),
(5, 'Dolor Penatibus Arcu Lacus Dictumst', '80/195/80 cm', '€ 269,–', 'Condimentum Odio Arcu Interdum A Pulvinar Phasellus Vivamus ultricies parturient turpis ad praesent ligula vel natoque. Per felis metus ullamcorper, dui hendrerit adipiscing posuere justo sollicitudin habitant.', 'url(\'assets/images/bathroom/five/one.jpg\')', 'url(\'assets/images/bathroom/five/two.jpg\')', 'url(\'assets/images/bathroom/five/three.jpg\')', 'url(\'assets/images/bathroom/five/four.jpg\')', '2020-09-14 14:00:29'),
(6, 'Platea Ante Magnis', '48/92/3 cm', '€ 149,–', 'Morbi Malesuada Litora Dis Natoque. Fames scelerisque massa. Lacinia est mauris ultricies elit vitae mi. Fames suscipit felis ridiculus. Pellentesque scelerisque cubilia dictum est.', 'url(\'assets/images/bathroom/six/one.jpg\')', 'url(\'assets/images/bathroom/six/two.jpg\')', 'url(\'assets/images/bathroom/six/three.jpg\')', 'url(\'assets/images/bathroom/six/four.jpg\')', '2020-09-14 14:02:00'),
(7, 'Adipiscing Fringilla Quam Conubia Leo', '138/191/40 cm', '€ 249,–', 'Congue Turpis Gravida Cum Magna Massa Hymenaeos Penatibus Porttitor hac senectus imperdiet Natoque mauris risus euismod hac diam aenean mattis odio. Nonummy phasellus orci diam habitasse aptent lorem.', 'url(\'assets/images/bathroom/seven/one.jpg\')', 'url(\'assets/images/bathroom/seven/two.jpg\')', 'url(\'assets/images/bathroom/seven/three.jpg\')', 'url(\'assets/images/bathroom/seven/four.jpg\')', '2020-09-14 14:02:00'),
(8, 'Tempus Mauris Ligula Ultrices Ligula', '86,8/192/49 cm', '€ 199,–', 'Accumsan Turpis Cum In Aenean Aenean Habitant cubilia hymenaeos fames laoreet lobortis facilisis quisque. Id. Pretium aenean suspendisse libero ac dictumst eros risus maecenas dolor. Senectus.', 'url(\'assets/images/bathroom/eight/one.jpg\')', 'url(\'assets/images/bathroom/eight/two.jpg\')', 'url(\'assets/images/bathroom/eight/three.jpg\')', 'url(\'assets/images/bathroom/eight/four.jpg\')', '2020-09-14 14:02:46');

-- --------------------------------------------------------

--
-- Table structure for table `bedroom`
--

CREATE TABLE `bedroom` (
  `id` int(11) NOT NULL,
  `product-title` varchar(255) NOT NULL,
  `product-size` varchar(255) NOT NULL,
  `product-price` varchar(255) NOT NULL,
  `product-description` text NOT NULL,
  `product-image-one` varchar(255) NOT NULL,
  `product-image-two` varchar(255) NOT NULL,
  `product-image-three` varchar(255) NOT NULL,
  `product-image-four` varchar(255) NOT NULL,
  `product-creation-date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bedroom`
--

INSERT INTO `bedroom` (`id`, `product-title`, `product-size`, `product-price`, `product-description`, `product-image-one`, `product-image-two`, `product-image-three`, `product-image-four`, `product-creation-date`) VALUES
(1, 'Placerat Duis Dignissim Etiam', '180/200 cm', '€ 469,–', 'Turpis Ridiculus Faucibus varius lacus nunc habitasse faucibus interdum pede. Habitant, metus at feugiat mus. Tempor maecenas id et massa malesuada cubilia.', 'url(\'assets/images/bedroom/one/one.jpg\')', 'url(\'assets/images/bedroom/one/two.jpg\')', 'url(\'assets/images/bedroom/one/three.jpg\')', 'url(\'assets/images/bedroom/one/four.jpg\')', '2020-09-14 14:15:26'),
(2, 'Parturient Nec Accumsan Varius', '180/200 cm', '€ 399,–', 'Aenean Euismod Nibh Neque Lectus vehicula tortor sociosqu. Feugiat egestas, per taciti augue mauris ridiculus cubilia pretium hendrerit. Inceptos in non mollis morbi Integer.', 'url(\'assets/images/bedroom/two/one.jpg\')', 'url(\'assets/images/bedroom/two/two.jpg\')', 'url(\'assets/images/bedroom/two/three.jpg\')', 'url(\'assets/images/bedroom/two/four.jpg\')', '2020-09-14 14:15:26'),
(3, 'Senectus Justo', '173/120/212 cm', '€ 209,–', 'Sit Dapibus Tortor. Facilisis ad auctor a gravida hendrerit eget tristique sodales viverra augue duis dignissim fames sollicitudin convallis accumsan facilisis posuere.', 'url(\'assets/images/bedroom/three/one.jpg\')', 'url(\'assets/images/bedroom/three/two.jpg\')', 'url(\'assets/images/bedroom/three/three.jpg\')', 'url(\'assets/images/bedroom/three/four.jpg\')', '2020-09-14 14:15:26'),
(4, 'Consequat Amet Auctor Suscipit Pede', '90/200 cm', '€ 69,90', 'Tempus Fusce Nisi Magnis taciti. Lorem luctus tristique risus cursus dictum justo porta eleifend. Ullamcorper tortor hac. Nonummy aenean in facilisi ridiculus iaculis.', 'url(\'assets/images/bedroom/four/one.jpg\')', 'url(\'assets/images/bedroom/four/two.jpg\')', 'url(\'assets/images/bedroom/four/three.jpg\')', 'url(\'assets/images/bedroom/four/four.jpg\')', '2020-09-14 14:15:26'),
(5, 'Dolor Penatibus Arcu Lacus Dictumst', '48/47-97/37 cm', '€ 79,90', 'Condimentum Odio Arcu Interdum A Pulvinar Phasellus Vivamus ultricies parturient turpis ad praesent ligula vel natoque. Per felis metus ullamcorper, dui hendrerit adipiscing posuere justo sollicitudin habitant.', 'url(\'assets/images/bedroom/five/one.jpg\')', 'url(\'assets/images/bedroom/five/two.jpg\')', 'url(\'assets/images/bedroom/five/three.jpg\')', 'url(\'assets/images/bedroom/five/four.jpg\')', '2020-09-14 14:15:26'),
(6, 'Platea Ante Magnis', '200/90/20 cm', '€ 266,–', 'Morbi Malesuada Litora Dis Natoque. Fames scelerisque massa. Lacinia est mauris ultricies elit vitae mi. Fames suscipit felis ridiculus. Pellentesque scelerisque cubilia dictum est.', 'url(\'assets/images/bedroom/six/one.jpg\')', 'url(\'assets/images/bedroom/six/two.jpg\')', 'url(\'assets/images/bedroom/six/three.jpg\')', 'url(\'assets/images/bedroom/six/four.jpg\')', '2020-09-14 14:15:26'),
(7, 'Adipiscing Fringilla Quam Conubia Leo', '30/55/31 cm', '€ 29,95', 'Congue Turpis Gravida Cum Magna Massa Hymenaeos Penatibus Porttitor hac senectus imperdiet Natoque mauris risus euismod hac diam aenean mattis odio. Nonummy phasellus orci diam habitasse aptent lorem.', 'url(\'assets/images/bedroom/seven/one.jpg\')', 'url(\'assets/images/bedroom/seven/two.jpg\')', 'url(\'assets/images/bedroom/seven/three.jpg\')', 'url(\'assets/images/bedroom/seven/four.jpg\')', '2020-09-14 14:15:26'),
(8, 'Tempus Mauris Ligula Ultrices Ligula', '180/200 cm', '€ 349,–', 'Accumsan Turpis Cum In Aenean Aenean Habitant cubilia hymenaeos fames laoreet lobortis facilisis quisque. Id. Pretium aenean suspendisse libero ac dictumst eros risus maecenas dolor. Senectus.', 'url(\'assets/images/bedroom/eight/one.jpg\')', 'url(\'assets/images/bedroom/eight/two.jpg\')', 'url(\'assets/images/bedroom/eight/three.jpg\')', 'url(\'assets/images/bedroom/eight/four.jpg\')', '2020-09-14 14:15:26');

-- --------------------------------------------------------

--
-- Table structure for table `children`
--

CREATE TABLE `children` (
  `id` int(11) NOT NULL,
  `product-title` varchar(255) NOT NULL,
  `product-size` varchar(255) NOT NULL,
  `product-price` varchar(255) NOT NULL,
  `product-description` text NOT NULL,
  `product-image-one` varchar(255) NOT NULL,
  `product-image-two` varchar(255) NOT NULL,
  `product-image-three` varchar(255) NOT NULL,
  `product-image-four` varchar(255) NOT NULL,
  `product-creation-date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `children`
--

INSERT INTO `children` (`id`, `product-title`, `product-size`, `product-price`, `product-description`, `product-image-one`, `product-image-two`, `product-image-three`, `product-image-four`, `product-creation-date`) VALUES
(1, 'Placerat Duis Dignissim Etiam', '278/187/232 cm', '€ 222,–', 'Turpis Ridiculus Faucibus varius lacus nunc habitasse faucibus interdum pede. Habitant, metus at feugiat mus. Tempor maecenas id et massa malesuada cubilia.', 'url(\'assets/images/children/one/one.jpg\')', 'url(\'assets/images/children/one/two.jpg\')', 'url(\'assets/images/children/one/three.jpg\')', 'url(\'assets/images/children/one/four.jpg\')', '2020-09-14 14:28:10'),
(2, 'Parturient Nec Accumsan Varius', '99/26/91 cm', '€ 69,90', 'Aenean Euismod Nibh Neque Lectus vehicula tortor sociosqu. Feugiat egestas, per taciti augue mauris ridiculus cubilia pretium hendrerit. Inceptos in non mollis morbi Integer.', 'url(\'assets/images/children/two/one.jpg\')', 'url(\'assets/images/children/two/two.jpg\')', 'url(\'assets/images/children/two/three.jpg\')', 'url(\'assets/images/children/two/four.jpg\')', '2020-09-14 14:28:10'),
(3, 'Senectus Justo', '163/196,4/57,6 cm', '€ 299,–', 'Sit Dapibus Tortor. Facilisis ad auctor a gravida hendrerit eget tristique sodales viverra augue duis dignissim fames sollicitudin convallis accumsan facilisis posuere.', 'url(\'assets/images/children/three/one.jpg\')', 'url(\'assets/images/children/three/two.jpg\')', 'url(\'assets/images/children/three/three.jpg\')', 'url(\'assets/images/children/three/four.jpg\')', '2020-09-14 14:28:10'),
(4, 'Consequat Amet Auctor Suscipit Pede', '204/107/120 cm', '€ 199,–', 'Tempus Fusce Nisi Magnis taciti. Lorem luctus tristique risus cursus dictum justo porta eleifend. Ullamcorper tortor hac. Nonummy aenean in facilisi ridiculus iaculis.', 'url(\'assets/images/children/four/one.jpg\')', 'url(\'assets/images/children/four/two.jpg\')', 'url(\'assets/images/children/four/three.jpg\')', 'url(\'assets/images/children/four/four.jpg\')', '2020-09-14 14:28:10'),
(5, 'Dolor Penatibus Arcu Lacus Dictumst', '204/160/124 cm', '€ 299,–', 'Condimentum Odio Arcu Interdum A Pulvinar Phasellus Vivamus ultricies parturient turpis ad praesent ligula vel natoque. Per felis metus ullamcorper, dui hendrerit adipiscing posuere justo sollicitudin habitant.', 'url(\'assets/images/children/five/one.jpg\')', 'url(\'assets/images/children/five/two.jpg\')', 'url(\'assets/images/children/five/three.jpg\')', 'url(\'assets/images/children/five/four.jpg\')', '2020-09-14 14:28:10'),
(6, 'Platea Ante Magnis', '194/160/124 cm', '€ 99,–', 'Morbi Malesuada Litora Dis Natoque. Fames scelerisque massa. Lacinia est mauris ultricies elit vitae mi. Fames suscipit felis ridiculus. Pellentesque scelerisque cubilia dictum est.', 'url(\'assets/images/children/six/one.jpg\')', 'url(\'assets/images/children/six/two.jpg\')', 'url(\'assets/images/children/six/three.jpg\')', 'url(\'assets/images/children/six/four.jpg\')', '2020-09-14 14:28:10'),
(7, 'Adipiscing Fringilla Quam Conubia Leo', '138/201/57 cm', '€ 279,–', 'Congue Turpis Gravida Cum Magna Massa Hymenaeos Penatibus Porttitor hac senectus imperdiet Natoque mauris risus euismod hac diam aenean mattis odio. Nonummy phasellus orci diam habitasse aptent lorem.', 'url(\'assets/images/children/seven/one.jpg\')', 'url(\'assets/images/children/seven/two.jpg\')', 'url(\'assets/images/children/seven/three.jpg\')', 'url(\'assets/images/children/seven/four.jpg\')', '2020-09-14 14:28:10'),
(8, 'Tempus Mauris Ligula Ultrices Ligula', '109/63-96/55 cm', '€ 79,95', 'Accumsan Turpis Cum In Aenean Aenean Habitant cubilia hymenaeos fames laoreet lobortis facilisis quisque. Id. Pretium aenean suspendisse libero ac dictumst eros risus maecenas dolor. Senectus.', 'url(\'assets/images/children/eight/one.jpg\')', 'url(\'assets/images/children/eight/two.jpg\')', 'url(\'assets/images/children/eight/three.jpg\')', 'url(\'assets/images/children/eight/four.jpg\')', '2020-09-14 14:28:10');

-- --------------------------------------------------------

--
-- Table structure for table `diningroom`
--

CREATE TABLE `diningroom` (
  `id` int(11) NOT NULL,
  `product-title` varchar(255) NOT NULL,
  `product-size` varchar(255) NOT NULL,
  `product-price` varchar(255) NOT NULL,
  `product-description` text NOT NULL,
  `product-image-one` varchar(255) NOT NULL,
  `product-image-two` varchar(255) NOT NULL,
  `product-image-three` varchar(255) NOT NULL,
  `product-image-four` varchar(255) NOT NULL,
  `product-creation-date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `diningroom`
--

INSERT INTO `diningroom` (`id`, `product-title`, `product-size`, `product-price`, `product-description`, `product-image-one`, `product-image-two`, `product-image-three`, `product-image-four`, `product-creation-date`) VALUES
(1, 'Placerat Duis Dignissim Etiam', '42/97/53 cm', '€ 14,99', 'Turpis Ridiculus Faucibus varius lacus nunc habitasse faucibus interdum pede. Habitant, metus at feugiat mus. Tempor maecenas id et massa malesuada cubilia.', 'url(\'assets/images/diningroom/one/one.jpg\')', 'url(\'assets/images/diningroom/one/two.jpg\')', 'url(\'assets/images/diningroom/one/three.jpg\')', 'url(\'assets/images/diningroom/one/four.jpg\')', '2020-09-14 14:51:21'),
(2, 'Parturient Nec Accumsan Varius', '120/92,3/40 cm', '€ 89,90', 'Aenean Euismod Nibh Neque Lectus vehicula tortor sociosqu. Feugiat egestas, per taciti augue mauris ridiculus cubilia pretium hendrerit. Inceptos in non mollis morbi Integer.', 'url(\'assets/images/diningroom/two/one.jpg\')', 'url(\'assets/images/diningroom/two/two.jpg\')', 'url(\'assets/images/diningroom/two/three.jpg\')', 'url(\'assets/images/diningroom/two/four.jpg\')', '2020-09-14 14:51:21'),
(3, 'Senectus Justo', '105/159/41,5 cm', '€ 179,–', 'Sit Dapibus Tortor. Facilisis ad auctor a gravida hendrerit eget tristique sodales viverra augue duis dignissim fames sollicitudin convallis accumsan facilisis posuere.', 'url(\'assets/images/diningroom/three/one.jpg\')', 'url(\'assets/images/diningroom/three/two.jpg\')', 'url(\'assets/images/diningroom/three/three.jpg\')', 'url(\'assets/images/diningroom/three/four.jpg\')', '2020-09-14 14:51:21'),
(4, 'Consequat Amet Auctor Suscipit Pede', '165x125 cm', '€ 389,–', 'Tempus Fusce Nisi Magnis taciti. Lorem luctus tristique risus cursus dictum justo porta eleifend. Ullamcorper tortor hac. Nonummy aenean in facilisi ridiculus iaculis.', 'url(\'assets/images/diningroom/four/one.jpg\')', 'url(\'assets/images/diningroom/four/two.jpg\')', 'url(\'assets/images/diningroom/four/three.jpg\')', 'url(\'assets/images/diningroom/four/four.jpg\')', '2020-09-14 14:51:21'),
(5, 'Dolor Penatibus Arcu Lacus Dictumst', '153/76/90 cm', '€ 129,–', 'Condimentum Odio Arcu Interdum A Pulvinar Phasellus Vivamus ultricies parturient turpis ad praesent ligula vel natoque. Per felis metus ullamcorper, dui hendrerit adipiscing posuere justo sollicitudin habitant.', 'url(\'assets/images/diningroom/five/one.jpg\')', 'url(\'assets/images/diningroom/five/two.jpg\')', 'url(\'assets/images/diningroom/five/three.jpg\')', 'url(\'assets/images/diningroom/five/four.jpg\')', '2020-09-14 14:51:21'),
(6, 'Platea Ante Magnis', '96/132/35 cm', '€ 145,–', 'Morbi Malesuada Litora Dis Natoque. Fames scelerisque massa. Lacinia est mauris ultricies elit vitae mi. Fames suscipit felis ridiculus. Pellentesque scelerisque cubilia dictum est.', 'url(\'assets/images/diningroom/six/one.jpg\')', 'url(\'assets/images/diningroom/six/two.jpg\')', 'url(\'assets/images/diningroom/six/three.jpg\')', 'url(\'assets/images/diningroom/six/four.jpg\')', '2020-09-14 14:51:21'),
(7, 'Adipiscing Fringilla Quam Conubia Leo', '140/80/40 cm', '€ 129,–', 'Congue Turpis Gravida Cum Magna Massa Hymenaeos Penatibus Porttitor hac senectus imperdiet Natoque mauris risus euismod hac diam aenean mattis odio. Nonummy phasellus orci diam habitasse aptent lorem.', 'url(\'assets/images/diningroom/seven/one.jpg\')', 'url(\'assets/images/diningroom/seven/two.jpg\')', 'url(\'assets/images/diningroom/seven/three.jpg\')', 'url(\'assets/images/diningroom/seven/four.jpg\')', '2020-09-14 14:51:21'),
(8, 'Tempus Mauris Ligula Ultrices Ligula', '158/158/34 cm', '€ 99,90', 'Accumsan Turpis Cum In Aenean Aenean Habitant cubilia hymenaeos fames laoreet lobortis facilisis quisque. Id. Pretium aenean suspendisse libero ac dictumst eros risus maecenas dolor. Senectus.', 'url(\'assets/images/diningroom/eight/one.jpg\')', 'url(\'assets/images/diningroom/eight/two.jpg\')', 'url(\'assets/images/diningroom/eight/three.jpg\')', 'url(\'assets/images/diningroom/eight/four.jpg\')', '2020-09-14 14:51:21');

-- --------------------------------------------------------

--
-- Table structure for table `kitchen`
--

CREATE TABLE `kitchen` (
  `id` int(11) NOT NULL,
  `product-title` varchar(255) NOT NULL,
  `product-size` varchar(255) NOT NULL,
  `product-price` varchar(255) NOT NULL,
  `product-description` text NOT NULL,
  `product-image-one` varchar(255) NOT NULL,
  `product-image-two` varchar(255) NOT NULL,
  `product-image-three` varchar(255) NOT NULL,
  `product-image-four` varchar(255) NOT NULL,
  `product-creation-date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kitchen`
--

INSERT INTO `kitchen` (`id`, `product-title`, `product-size`, `product-price`, `product-description`, `product-image-one`, `product-image-two`, `product-image-three`, `product-image-four`, `product-creation-date`) VALUES
(1, 'Placerat Duis Dignissim Etiam', 'full kitchen', '€ 2350,–', 'Turpis Ridiculus Faucibus varius lacus nunc habitasse faucibus interdum pede. Habitant, metus at feugiat mus. Tempor maecenas id et massa malesuada cubilia.', 'url(\'assets/images/kitchen/one/one.jpg\')', 'url(\'assets/images/kitchen/one/two.jpg\')', 'url(\'assets/images/kitchen/one/three.jpg\')', 'url(\'assets/images/kitchen/one/four.jpg\')', '2020-09-14 15:06:20'),
(2, 'Parturient Nec Accumsan Varius', '50/200/57 cm', '€ 94,90', 'Aenean Euismod Nibh Neque Lectus vehicula tortor sociosqu. Feugiat egestas, per taciti augue mauris ridiculus cubilia pretium hendrerit. Inceptos in non mollis morbi Integer.', 'url(\'assets/images/kitchen/two/one.jpg\')', 'url(\'assets/images/kitchen/two/two.jpg\')', 'url(\'assets/images/kitchen/two/three.jpg\')', 'url(\'assets/images/kitchen/two/four.jpg\')', '2020-09-14 15:06:20'),
(3, 'Senectus Justo', '270 cm', '€ 1.299,–', 'Sit Dapibus Tortor. Facilisis ad auctor a gravida hendrerit eget tristique sodales viverra augue duis dignissim fames sollicitudin convallis accumsan facilisis posuere.', 'url(\'assets/images/kitchen/three/one.jpg\')', 'url(\'assets/images/kitchen/three/two.jpg\')', 'url(\'assets/images/kitchen/three/three.jpg\')', 'url(\'assets/images/kitchen/three/four.jpg\')', '2020-09-14 15:06:20'),
(4, 'Consequat Amet Auctor Suscipit Pede', '100/85/47 cm', '€ 94,90', 'Tempus Fusce Nisi Magnis taciti. Lorem luctus tristique risus cursus dictum justo porta eleifend. Ullamcorper tortor hac. Nonummy aenean in facilisi ridiculus iaculis.', 'url(\'assets/images/kitchen/four/one.jpg\')', 'url(\'assets/images/kitchen/four/two.jpg\')', 'url(\'assets/images/kitchen/four/three.jpg\')', 'url(\'assets/images/kitchen/four/four.jpg\')', '2020-09-14 15:06:20'),
(5, 'Dolor Penatibus Arcu Lacus Dictumst', '270/60 cm', '€ 1.229,–', 'Condimentum Odio Arcu Interdum A Pulvinar Phasellus Vivamus ultricies parturient turpis ad praesent ligula vel natoque. Per felis metus ullamcorper, dui hendrerit adipiscing posuere justo sollicitudin habitant.', 'url(\'assets/images/kitchen/five/one.jpg\')', 'url(\'assets/images/kitchen/five/two.jpg\')', 'url(\'assets/images/kitchen/five/three.jpg\')', 'url(\'assets/images/kitchen/five/four.jpg\')', '2020-09-14 15:06:20'),
(6, 'Platea Ante Magnis', '200/60 cm', '€ 499,–', 'Morbi Malesuada Litora Dis Natoque. Fames scelerisque massa. Lacinia est mauris ultricies elit vitae mi. Fames suscipit felis ridiculus. Pellentesque scelerisque cubilia dictum est.', 'url(\'assets/images/kitchen/six/one.jpg\')', 'url(\'assets/images/kitchen/six/two.jpg\')', 'url(\'assets/images/kitchen/six/three.jpg\')', 'url(\'assets/images/kitchen/six/four.jpg\')', '2020-09-14 15:06:20'),
(7, 'Adipiscing Fringilla Quam Conubia Leo', '240/205/60 cm', '€ 499,–', 'Congue Turpis Gravida Cum Magna Massa Hymenaeos Penatibus Porttitor hac senectus imperdiet Natoque mauris risus euismod hac diam aenean mattis odio. Nonummy phasellus orci diam habitasse aptent lorem.', 'url(\'assets/images/kitchen/seven/one.jpg\')', 'url(\'assets/images/kitchen/seven/two.jpg\')', 'url(\'assets/images/kitchen/seven/three.jpg\')', 'url(\'assets/images/kitchen/seven/four.jpg\')', '2020-09-14 15:06:20'),
(8, 'Tempus Mauris Ligula Ultrices Ligula', '280/170 cm', '€ 599,–', 'Accumsan Turpis Cum In Aenean Aenean Habitant cubilia hymenaeos fames laoreet lobortis facilisis quisque. Id. Pretium aenean suspendisse libero ac dictumst eros risus maecenas dolor. Senectus.', 'url(\'assets/images/kitchen/eight/one.jpg\')', 'url(\'assets/images/kitchen/eight/two.jpg\')', 'url(\'assets/images/kitchen/eight/three.jpg\')', 'url(\'assets/images/kitchen/eight/four.jpg\')', '2020-09-14 15:06:20');

-- --------------------------------------------------------

--
-- Table structure for table `livingroom`
--

CREATE TABLE `livingroom` (
  `id` int(11) NOT NULL,
  `product-title` varchar(255) NOT NULL,
  `product-size` varchar(255) NOT NULL,
  `product-price` varchar(255) NOT NULL,
  `product-description` text NOT NULL,
  `product-image-one` varchar(255) NOT NULL,
  `product-image-two` varchar(255) NOT NULL,
  `product-image-three` varchar(255) NOT NULL,
  `product-image-four` varchar(255) NOT NULL,
  `product-creation-date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `livingroom`
--

INSERT INTO `livingroom` (`id`, `product-title`, `product-size`, `product-price`, `product-description`, `product-image-one`, `product-image-two`, `product-image-three`, `product-image-four`, `product-creation-date`) VALUES
(1, 'Placerat Duis Dignissim Etiam', '58/48/40 cm', '€ 99,90', 'Turpis Ridiculus Faucibus varius lacus nunc habitasse faucibus interdum pede. Habitant, metus at feugiat mus. Tempor maecenas id et massa malesuada cubilia.', 'url(\'assets/images/livingroom/one/one.jpg\')', 'url(\'assets/images/livingroom/one/two.jpg\')', 'url(\'assets/images/livingroom/one/three.jpg\')', 'url(\'assets/images/livingroom/one/four.jpg\')', '2020-09-14 14:57:49'),
(2, 'Parturient Nec Accumsan Varius', '77/84/91 cm', '€ 249,–', 'Aenean Euismod Nibh Neque Lectus vehicula tortor sociosqu. Feugiat egestas, per taciti augue mauris ridiculus cubilia pretium hendrerit. Inceptos in non mollis morbi Integer.', 'url(\'assets/images/livingroom/two/one.jpg\')', 'url(\'assets/images/livingroom/two/two.jpg\')', 'url(\'assets/images/livingroom/two/three.jpg\')', 'url(\'assets/images/livingroom/two/four.jpg\')', '2020-09-14 14:57:49'),
(3, 'Senectus Justo', '91/104/80 cm', '€ 219,–', 'Sit Dapibus Tortor. Facilisis ad auctor a gravida hendrerit eget tristique sodales viverra augue duis dignissim fames sollicitudin convallis accumsan facilisis posuere.', 'url(\'assets/images/livingroom/three/one.jpg\')', 'url(\'assets/images/livingroom/three/two.jpg\')', 'url(\'assets/images/livingroom/three/three.jpg\')', 'url(\'assets/images/livingroom/three/four.jpg\')', '2020-09-14 14:57:49'),
(4, 'Consequat Amet Auctor Suscipit Pede', '287/196/40 cm', '€ 456,95', 'Tempus Fusce Nisi Magnis taciti. Lorem luctus tristique risus cursus dictum justo porta eleifend. Ullamcorper tortor hac. Nonummy aenean in facilisi ridiculus iaculis.', 'url(\'assets/images/livingroom/four/one.jpg\')', 'url(\'assets/images/livingroom/four/two.jpg\')', 'url(\'assets/images/livingroom/four/three.jpg\')', 'url(\'assets/images/livingroom/four/four.jpg\')', '2020-09-14 14:57:49'),
(5, 'Dolor Penatibus Arcu Lacus Dictumst', '157/63,9/43,2 cm', '€ 129,–', 'Condimentum Odio Arcu Interdum A Pulvinar Phasellus Vivamus ultricies parturient turpis ad praesent ligula vel natoque. Per felis metus ullamcorper, dui hendrerit adipiscing posuere justo sollicitudin habitant.', 'url(\'assets/images/livingroom/five/one.jpg\')', 'url(\'assets/images/livingroom/five/two.jpg\')', 'url(\'assets/images/livingroom/five/three.jpg\')', 'url(\'assets/images/livingroom/five/four.jpg\')', '2020-09-14 14:57:49'),
(6, 'Platea Ante Magnis', '266x82x105 cm', '€ 699,–', 'Morbi Malesuada Litora Dis Natoque. Fames scelerisque massa. Lacinia est mauris ultricies elit vitae mi. Fames suscipit felis ridiculus. Pellentesque scelerisque cubilia dictum est.', 'url(\'assets/images/livingroom/six/one.jpg\')', 'url(\'assets/images/livingroom/six/two.jpg\')', 'url(\'assets/images/livingroom/six/three.jpg\')', 'url(\'assets/images/livingroom/six/four.jpg\')', '2020-09-14 14:57:49'),
(7, 'Adipiscing Fringilla Quam Conubia Leo', '105/45/60 cm', '€ 119,–', 'Congue Turpis Gravida Cum Magna Massa Hymenaeos Penatibus Porttitor hac senectus imperdiet Natoque mauris risus euismod hac diam aenean mattis odio. Nonummy phasellus orci diam habitasse aptent lorem.', 'url(\'assets/images/livingroom/seven/one.jpg\')', 'url(\'assets/images/livingroom/seven/two.jpg\')', 'url(\'assets/images/livingroom/seven/three.jpg\')', 'url(\'assets/images/livingroom/seven/four.jpg\')', '2020-09-14 14:57:49'),
(8, 'Tempus Mauris Ligula Ultrices Ligula', '218x324x170 cm', '€ 1.349,–', 'Accumsan Turpis Cum In Aenean Aenean Habitant cubilia hymenaeos fames laoreet lobortis facilisis quisque. Id. Pretium aenean suspendisse libero ac dictumst eros risus maecenas dolor. Senectus.', 'url(\'assets/images/livingroom/eight/one.jpg\')', 'url(\'assets/images/livingroom/eight/two.jpg\')', 'url(\'assets/images/livingroom/eight/three.jpg\')', 'url(\'assets/images/livingroom/eight/four.jpg\')', '2020-09-14 14:57:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bathroom`
--
ALTER TABLE `bathroom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bedroom`
--
ALTER TABLE `bedroom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `children`
--
ALTER TABLE `children`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `diningroom`
--
ALTER TABLE `diningroom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kitchen`
--
ALTER TABLE `kitchen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `livingroom`
--
ALTER TABLE `livingroom`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bathroom`
--
ALTER TABLE `bathroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `bedroom`
--
ALTER TABLE `bedroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `children`
--
ALTER TABLE `children`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `diningroom`
--
ALTER TABLE `diningroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `kitchen`
--
ALTER TABLE `kitchen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `livingroom`
--
ALTER TABLE `livingroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
