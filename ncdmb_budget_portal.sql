-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2021 at 10:27 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lcdmb_budget+portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `borrow_request`
--

CREATE TABLE `borrow_request` (
  `id` int(11) NOT NULL,
  `amount` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `department_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `budget_heads`
--

CREATE TABLE `budget_heads` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `amount` float NOT NULL,
  `user_id` int(11) NOT NULL,
  `process_status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `claim`
--

CREATE TABLE `claim` (
  `id` int(11) NOT NULL,
  `claim_types_id` int(11) NOT NULL,
  `training_id` int(11) NOT NULL,
  `process_status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `claim_types`
--

CREATE TABLE `claim_types` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `contractor`
--

CREATE TABLE `contractor` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `expenditure`
--

CREATE TABLE `expenditure` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,3) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `sub_budget_head_details_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `feeding_periods`
--

CREATE TABLE `feeding_periods` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset`
--

CREATE TABLE `password_reset` (
  `id` int(11) NOT NULL,
  `token` varchar(100) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `process_status`
--

CREATE TABLE `process_status` (
  `id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `refund`
--

CREATE TABLE `refund` (
  `id` int(11) NOT NULL,
  `training_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_no` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sub_budget_head`
--

CREATE TABLE `sub_budget_head` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `budget_heads_id` int(11) NOT NULL,
  `process_status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sub_budget_head_details`
--

CREATE TABLE `sub_budget_head_details` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,3) DEFAULT NULL,
  `sub_budget_head_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `contractor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sub_budget_head_details_has_borrow_request`
--

CREATE TABLE `sub_budget_head_details_has_borrow_request` (
  `sub_budget_head_details_id` int(11) NOT NULL,
  `borrow_request_id` int(11) NOT NULL,
  `process_status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tp_types`
--

CREATE TABLE `tp_types` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `training`
--

CREATE TABLE `training` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `training_venues_id` int(11) NOT NULL,
  `training_location_id` int(11) NOT NULL,
  `travel_feeding_id` int(11) NOT NULL,
  `travel_accomodation_id` int(11) NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `expiry_date` datetime DEFAULT NULL,
  `no_of_days` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `training_location`
--

CREATE TABLE `training_location` (
  `id` int(11) NOT NULL,
  `location` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `training_tp`
--

CREATE TABLE `training_tp` (
  `id` int(11) NOT NULL,
  `cost` decimal(10,3) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `TP_types_id` int(11) NOT NULL,
  `training_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `training_venues`
--

CREATE TABLE `training_venues` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `travel_accomodation`
--

CREATE TABLE `travel_accomodation` (
  `idtravel_accomodation` int(11) NOT NULL,
  `hotel_name` varchar(100) NOT NULL,
  `no_of_nights` varchar(100) NOT NULL,
  `extra_nights` varchar(100) NOT NULL,
  `cost_per_night` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `travel_feeding`
--

CREATE TABLE `travel_feeding` (
  `id` int(11) NOT NULL,
  `day_no` int(11) DEFAULT NULL,
  `cost` decimal(10,3) DEFAULT NULL,
  `travel_feedingcol` varchar(45) DEFAULT NULL,
  `feeding_periods_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `email_verified_date` datetime DEFAULT NULL,
  `remember_token` varchar(45) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `borrow_request`
--
ALTER TABLE `borrow_request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_borrow_request_department1_idx` (`department_id`);

--
-- Indexes for table `budget_heads`
--
ALTER TABLE `budget_heads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_budget_heads_user1_idx` (`user_id`),
  ADD KEY `fk_budget_heads_process_status1_idx` (`process_status_id`);

--
-- Indexes for table `claim`
--
ALTER TABLE `claim`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_claim_claim_types1_idx` (`claim_types_id`),
  ADD KEY `fk_claim_training1_idx` (`training_id`),
  ADD KEY `fk_claim_process_status1_idx` (`process_status_id`);

--
-- Indexes for table `claim_types`
--
ALTER TABLE `claim_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contractor`
--
ALTER TABLE `contractor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenditure`
--
ALTER TABLE `expenditure`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_expenditure_sub_budget_head_details1_idx` (`sub_budget_head_details_id`);

--
-- Indexes for table `feeding_periods`
--
ALTER TABLE `feeding_periods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset`
--
ALTER TABLE `password_reset`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Password_reset_user1_idx` (`user_id`);

--
-- Indexes for table `process_status`
--
ALTER TABLE `process_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `refund`
--
ALTER TABLE `refund`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_refund_training1_idx` (`training_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_role_users_idx` (`user_id`);

--
-- Indexes for table `sub_budget_head`
--
ALTER TABLE `sub_budget_head`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sub_budget_head_budget_heads1_idx` (`budget_heads_id`),
  ADD KEY `fk_sub_budget_head_process_status1_idx` (`process_status_id`);

--
-- Indexes for table `sub_budget_head_details`
--
ALTER TABLE `sub_budget_head_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sub_budget_head_details_sub_budget_head1_idx` (`sub_budget_head_id`),
  ADD KEY `fk_sub_budget_head_details_department1_idx` (`department_id`),
  ADD KEY `fk_sub_budget_head_details_user1_idx` (`user_id`),
  ADD KEY `fk_sub_budget_head_details_contractor1_idx` (`contractor_id`);

--
-- Indexes for table `sub_budget_head_details_has_borrow_request`
--
ALTER TABLE `sub_budget_head_details_has_borrow_request`
  ADD PRIMARY KEY (`sub_budget_head_details_id`,`borrow_request_id`),
  ADD KEY `fk_sub_budget_head_details_has_borrow_request_borrow_reques_idx` (`borrow_request_id`),
  ADD KEY `fk_sub_budget_head_details_has_borrow_request_sub_budget_he_idx` (`sub_budget_head_details_id`),
  ADD KEY `fk_sub_budget_head_details_has_borrow_request_process_statu_idx` (`process_status_id`);

--
-- Indexes for table `tp_types`
--
ALTER TABLE `tp_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_training_training_venues1_idx` (`training_venues_id`),
  ADD KEY `fk_training_training_location1_idx` (`training_location_id`),
  ADD KEY `fk_training_travel_feeding1_idx` (`travel_feeding_id`),
  ADD KEY `fk_training_travel_accomodation1_idx` (`travel_accomodation_id`),
  ADD KEY `fk_training_user1_idx` (`user_id`);

--
-- Indexes for table `training_location`
--
ALTER TABLE `training_location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `training_tp`
--
ALTER TABLE `training_tp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_training_TP_TP_types1_idx` (`TP_types_id`),
  ADD KEY `fk_training_TP_training1_idx` (`training_id`);

--
-- Indexes for table `training_venues`
--
ALTER TABLE `training_venues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `travel_accomodation`
--
ALTER TABLE `travel_accomodation`
  ADD PRIMARY KEY (`idtravel_accomodation`);

--
-- Indexes for table `travel_feeding`
--
ALTER TABLE `travel_feeding`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_travel_feeding_feeding_periods1_idx` (`feeding_periods_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `borrow_request`
--
ALTER TABLE `borrow_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `budget_heads`
--
ALTER TABLE `budget_heads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `claim`
--
ALTER TABLE `claim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `claim_types`
--
ALTER TABLE `claim_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contractor`
--
ALTER TABLE `contractor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expenditure`
--
ALTER TABLE `expenditure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feeding_periods`
--
ALTER TABLE `feeding_periods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `password_reset`
--
ALTER TABLE `password_reset`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_budget_head`
--
ALTER TABLE `sub_budget_head`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_budget_head_details`
--
ALTER TABLE `sub_budget_head_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tp_types`
--
ALTER TABLE `tp_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `training`
--
ALTER TABLE `training`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `training_location`
--
ALTER TABLE `training_location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `training_venues`
--
ALTER TABLE `training_venues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `travel_accomodation`
--
ALTER TABLE `travel_accomodation`
  MODIFY `idtravel_accomodation` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `travel_feeding`
--
ALTER TABLE `travel_feeding`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `borrow_request`
--
ALTER TABLE `borrow_request`
  ADD CONSTRAINT `fk_borrow_request_department1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `budget_heads`
--
ALTER TABLE `budget_heads`
  ADD CONSTRAINT `fk_budget_heads_process_status1` FOREIGN KEY (`process_status_id`) REFERENCES `process_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_budget_heads_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `claim`
--
ALTER TABLE `claim`
  ADD CONSTRAINT `fk_claim_claim_types1` FOREIGN KEY (`claim_types_id`) REFERENCES `claim_types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_claim_process_status1` FOREIGN KEY (`process_status_id`) REFERENCES `process_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_claim_training1` FOREIGN KEY (`training_id`) REFERENCES `training` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `expenditure`
--
ALTER TABLE `expenditure`
  ADD CONSTRAINT `fk_expenditure_sub_budget_head_details1` FOREIGN KEY (`sub_budget_head_details_id`) REFERENCES `sub_budget_head_details` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `password_reset`
--
ALTER TABLE `password_reset`
  ADD CONSTRAINT `fk_Password_reset_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `refund`
--
ALTER TABLE `refund`
  ADD CONSTRAINT `fk_refund_training1` FOREIGN KEY (`training_id`) REFERENCES `training` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `role`
--
ALTER TABLE `role`
  ADD CONSTRAINT `fk_role_users` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `sub_budget_head`
--
ALTER TABLE `sub_budget_head`
  ADD CONSTRAINT `fk_sub_budget_head_budget_heads1` FOREIGN KEY (`budget_heads_id`) REFERENCES `budget_heads` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sub_budget_head_process_status1` FOREIGN KEY (`process_status_id`) REFERENCES `process_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `sub_budget_head_details`
--
ALTER TABLE `sub_budget_head_details`
  ADD CONSTRAINT `fk_sub_budget_head_details_contractor1` FOREIGN KEY (`contractor_id`) REFERENCES `contractor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sub_budget_head_details_department1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sub_budget_head_details_sub_budget_head1` FOREIGN KEY (`sub_budget_head_id`) REFERENCES `sub_budget_head` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sub_budget_head_details_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `sub_budget_head_details_has_borrow_request`
--
ALTER TABLE `sub_budget_head_details_has_borrow_request`
  ADD CONSTRAINT `fk_sub_budget_head_details_has_borrow_request_borrow_request1` FOREIGN KEY (`borrow_request_id`) REFERENCES `borrow_request` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sub_budget_head_details_has_borrow_request_process_status1` FOREIGN KEY (`process_status_id`) REFERENCES `process_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_sub_budget_head_details_has_borrow_request_sub_budget_head1` FOREIGN KEY (`sub_budget_head_details_id`) REFERENCES `sub_budget_head_details` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `training`
--
ALTER TABLE `training`
  ADD CONSTRAINT `fk_training_training_location1` FOREIGN KEY (`training_location_id`) REFERENCES `training_location` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_training_training_venues1` FOREIGN KEY (`training_venues_id`) REFERENCES `training_venues` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_training_travel_accomodation1` FOREIGN KEY (`travel_accomodation_id`) REFERENCES `travel_accomodation` (`idtravel_accomodation`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_training_travel_feeding1` FOREIGN KEY (`travel_feeding_id`) REFERENCES `travel_feeding` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_training_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `training_tp`
--
ALTER TABLE `training_tp`
  ADD CONSTRAINT `fk_training_TP_TP_types1` FOREIGN KEY (`TP_types_id`) REFERENCES `tp_types` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_training_TP_training1` FOREIGN KEY (`training_id`) REFERENCES `training` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `travel_feeding`
--
ALTER TABLE `travel_feeding`
  ADD CONSTRAINT `fk_travel_feeding_feeding_periods1` FOREIGN KEY (`feeding_periods_id`) REFERENCES `feeding_periods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
