SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema lcdmb_budget+portal
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lcdmb_budget+portal` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `lcdmb_budget+portal` ;

-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`TP_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`TP_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`claim_types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`claim_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`training_location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`training_location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`training_venues`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`training_venues` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`feeding_periods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`feeding_periods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`travel_accomodation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`travel_accomodation` (
  `idtravel_accomodation` INT NOT NULL AUTO_INCREMENT,
  `hotel_name` VARCHAR(100) NOT NULL,
  `no_of_nights` VARCHAR(100) NOT NULL,
  `extra_nights` VARCHAR(100) NOT NULL,
  `cost_per_night` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idtravel_accomodation`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `email_verified_date` DATETIME NULL,
  `remember_token` VARCHAR(45) NULL,
  `date` TIMESTAMP NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`process_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`process_status` (
  `id` INT NOT NULL,
  `status` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`budget_heads`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`budget_heads` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `amount` FLOAT NOT NULL,
  `user_id` INT NOT NULL,
  `process_status_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_budget_heads_user1_idx` (`user_id` ASC),
  INDEX `fk_budget_heads_process_status1_idx` (`process_status_id` ASC),
  CONSTRAINT `fk_budget_heads_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lcdmb_budget+portal`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_budget_heads_process_status1`
    FOREIGN KEY (`process_status_id`)
    REFERENCES `lcdmb_budget+portal`.`process_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`contractor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`contractor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `address` VARCHAR(150) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`sub_budget_head`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`sub_budget_head` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `budget_heads_id` INT NOT NULL,
  `process_status_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sub_budget_head_budget_heads1_idx` (`budget_heads_id` ASC),
  INDEX `fk_sub_budget_head_process_status1_idx` (`process_status_id` ASC),
  CONSTRAINT `fk_sub_budget_head_budget_heads1`
    FOREIGN KEY (`budget_heads_id`)
    REFERENCES `lcdmb_budget+portal`.`budget_heads` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_budget_head_process_status1`
    FOREIGN KEY (`process_status_id`)
    REFERENCES `lcdmb_budget+portal`.`process_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`department`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`department` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`sub_budget_head_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`sub_budget_head_details` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` DECIMAL(10,3) NULL,
  `sub_budget_head_id` INT NOT NULL,
  `department_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `contractor_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sub_budget_head_details_sub_budget_head1_idx` (`sub_budget_head_id` ASC),
  INDEX `fk_sub_budget_head_details_department1_idx` (`department_id` ASC),
  INDEX `fk_sub_budget_head_details_user1_idx` (`user_id` ASC),
  INDEX `fk_sub_budget_head_details_contractor1_idx` (`contractor_id` ASC),
  CONSTRAINT `fk_sub_budget_head_details_sub_budget_head1`
    FOREIGN KEY (`sub_budget_head_id`)
    REFERENCES `lcdmb_budget+portal`.`sub_budget_head` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_budget_head_details_department1`
    FOREIGN KEY (`department_id`)
    REFERENCES `lcdmb_budget+portal`.`department` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_budget_head_details_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lcdmb_budget+portal`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_budget_head_details_contractor1`
    FOREIGN KEY (`contractor_id`)
    REFERENCES `lcdmb_budget+portal`.`contractor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`Password_reset`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`Password_reset` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(100) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Password_reset_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_Password_reset_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lcdmb_budget+portal`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`expenditure`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`expenditure` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` DECIMAL(10,3) NULL,
  `date` DATETIME NULL,
  `sub_budget_head_details_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_expenditure_sub_budget_head_details1_idx` (`sub_budget_head_details_id` ASC),
  CONSTRAINT `fk_expenditure_sub_budget_head_details1`
    FOREIGN KEY (`sub_budget_head_details_id`)
    REFERENCES `lcdmb_budget+portal`.`sub_budget_head_details` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`borrow_request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`borrow_request` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `date` DATETIME NULL,
  `department_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_borrow_request_department1_idx` (`department_id` ASC),
  CONSTRAINT `fk_borrow_request_department1`
    FOREIGN KEY (`department_id`)
    REFERENCES `lcdmb_budget+portal`.`department` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `role_no` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_role_users_idx` (`user_id` ASC),
  CONSTRAINT `fk_role_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `lcdmb_budget+portal`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`travel_feeding`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`travel_feeding` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `day_no` INT NULL,
  `cost` DECIMAL(10,3) NULL,
  `travel_feedingcol` VARCHAR(45) NULL,
  `feeding_periods_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_travel_feeding_feeding_periods1_idx` (`feeding_periods_id` ASC),
  CONSTRAINT `fk_travel_feeding_feeding_periods1`
    FOREIGN KEY (`feeding_periods_id`)
    REFERENCES `lcdmb_budget+portal`.`feeding_periods` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`training`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`training` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `training_venues_id` INT NOT NULL,
  `training_location_id` INT NOT NULL,
  `travel_feeding_id` INT NOT NULL,
  `travel_accomodation_id` INT NOT NULL,
  `start_date` DATETIME NULL,
  `expiry_date` DATETIME NULL,
  `no_of_days` INT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_training_training_venues1_idx` (`training_venues_id` ASC),
  INDEX `fk_training_training_location1_idx` (`training_location_id` ASC),
  INDEX `fk_training_travel_feeding1_idx` (`travel_feeding_id` ASC),
  INDEX `fk_training_travel_accomodation1_idx` (`travel_accomodation_id` ASC),
  INDEX `fk_training_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_training_training_venues1`
    FOREIGN KEY (`training_venues_id`)
    REFERENCES `lcdmb_budget+portal`.`training_venues` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_training_training_location1`
    FOREIGN KEY (`training_location_id`)
    REFERENCES `lcdmb_budget+portal`.`training_location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_training_travel_feeding1`
    FOREIGN KEY (`travel_feeding_id`)
    REFERENCES `lcdmb_budget+portal`.`travel_feeding` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_training_travel_accomodation1`
    FOREIGN KEY (`travel_accomodation_id`)
    REFERENCES `lcdmb_budget+portal`.`travel_accomodation` (`idtravel_accomodation`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_training_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `lcdmb_budget+portal`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`training_TP`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`training_TP` (
  `id` INT NOT NULL,
  `cost` DECIMAL(10,3) NULL,
  `description` VARCHAR(100) NULL,
  `date` DATETIME NULL,
  `TP_types_id` INT NOT NULL,
  `training_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_training_TP_TP_types1_idx` (`TP_types_id` ASC),
  INDEX `fk_training_TP_training1_idx` (`training_id` ASC),
  CONSTRAINT `fk_training_TP_TP_types1`
    FOREIGN KEY (`TP_types_id`)
    REFERENCES `lcdmb_budget+portal`.`TP_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_training_TP_training1`
    FOREIGN KEY (`training_id`)
    REFERENCES `lcdmb_budget+portal`.`training` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`claim`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`claim` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `claim_types_id` INT NOT NULL,
  `training_id` INT NOT NULL,
  `process_status_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_claim_claim_types1_idx` (`claim_types_id` ASC),
  INDEX `fk_claim_training1_idx` (`training_id` ASC),
  INDEX `fk_claim_process_status1_idx` (`process_status_id` ASC),
  CONSTRAINT `fk_claim_claim_types1`
    FOREIGN KEY (`claim_types_id`)
    REFERENCES `lcdmb_budget+portal`.`claim_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_claim_training1`
    FOREIGN KEY (`training_id`)
    REFERENCES `lcdmb_budget+portal`.`training` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_claim_process_status1`
    FOREIGN KEY (`process_status_id`)
    REFERENCES `lcdmb_budget+portal`.`process_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`refund`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`refund` (
  `id` INT NOT NULL,
  `training_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_refund_training1_idx` (`training_id` ASC),
  CONSTRAINT `fk_refund_training1`
    FOREIGN KEY (`training_id`)
    REFERENCES `lcdmb_budget+portal`.`training` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lcdmb_budget+portal`.`sub_budget_head_details_has_borrow_request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lcdmb_budget+portal`.`sub_budget_head_details_has_borrow_request` (
  `sub_budget_head_details_id` INT NOT NULL,
  `borrow_request_id` INT NOT NULL,
  `process_status_id` INT NOT NULL,
  PRIMARY KEY (`sub_budget_head_details_id`, `borrow_request_id`),
  INDEX `fk_sub_budget_head_details_has_borrow_request_borrow_reques_idx` (`borrow_request_id` ASC),
  INDEX `fk_sub_budget_head_details_has_borrow_request_sub_budget_he_idx` (`sub_budget_head_details_id` ASC),
  INDEX `fk_sub_budget_head_details_has_borrow_request_process_statu_idx` (`process_status_id` ASC),
  CONSTRAINT `fk_sub_budget_head_details_has_borrow_request_sub_budget_head1`
    FOREIGN KEY (`sub_budget_head_details_id`)
    REFERENCES `lcdmb_budget+portal`.`sub_budget_head_details` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_budget_head_details_has_borrow_request_borrow_request1`
    FOREIGN KEY (`borrow_request_id`)
    REFERENCES `lcdmb_budget+portal`.`borrow_request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sub_budget_head_details_has_borrow_request_process_status1`
    FOREIGN KEY (`process_status_id`)
    REFERENCES `lcdmb_budget+portal`.`process_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
