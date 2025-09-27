-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: employee_db
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `emp_name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `mobile_number` varchar(20) DEFAULT NULL,
  `onbording_date` date DEFAULT NULL,
  `address` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `empId` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'emp001','pass123','John Doe','john@example.com','employee','9876543210','2022-01-15',NULL),(2,'emp002','secret','Jane Smith','jane@example.com','employee','9876501234','2023-03-20',NULL),(3,'emp003','pass1234','karthik','Karthik@example.com','webdev','9876543212','2024-02-16',NULL);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaves`
--

DROP TABLE IF EXISTS `leaves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaves` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `emp_name` varchar(100) DEFAULT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `manager_mail` varchar(100) DEFAULT NULL,
  `description` text,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `session` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employee_id` (`emp_id`),
  CONSTRAINT `leaves_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaves`
--

LOCK TABLES `leaves` WRITE;
/*!40000 ALTER TABLE `leaves` DISABLE KEYS */;
INSERT INTO `leaves` VALUES (1,1,'John Doe','2025-09-25','2025-09-30','szveaVfe','dsveVr','2025-09-25 08:01:00','From: Morning, To: Morning');
/*!40000 ALTER TABLE `leaves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payslip`
--

DROP TABLE IF EXISTS `payslip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payslip` (
  `emp_id` varchar(20) NOT NULL,
  `Emp_Name` varchar(100) DEFAULT NULL,
  `JoiningDate` date DEFAULT NULL,
  `Designation` varchar(100) DEFAULT NULL,
  `Department` varchar(100) DEFAULT NULL,
  `Location` varchar(100) DEFAULT NULL,
  `BankName` varchar(100) DEFAULT NULL,
  `BankAccountNo` varchar(20) DEFAULT NULL,
  `PANNumber` varchar(20) DEFAULT NULL,
  `EffectiveWorkDays` int DEFAULT NULL,
  `Basic_Full` int DEFAULT NULL,
  `Basic_Actual` int DEFAULT NULL,
  `HRA_Full` int DEFAULT NULL,
  `HRA_Actual` int DEFAULT NULL,
  `Conveyance_Full` int DEFAULT NULL,
  `Conveyance_Actual` int DEFAULT NULL,
  `MedicalAllowance_Full` int DEFAULT NULL,
  `MedicalAllowance_Actual` int DEFAULT NULL,
  `LTA_Full` int DEFAULT NULL,
  `LTA_Actual` int DEFAULT NULL,
  `SpecialAllowance_Full` int DEFAULT NULL,
  `SpecialAllowance_Actual` int DEFAULT NULL,
  `TotalEarnings` int DEFAULT NULL,
  `ProfTax` int DEFAULT NULL,
  `TotalDeductions` int DEFAULT NULL,
  `NetPay` int DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payslip`
--

LOCK TABLES `payslip` WRITE;
/*!40000 ALTER TABLE `payslip` DISABLE KEYS */;
INSERT INTO `payslip` VALUES ('ADS-019','karthik','2025-01-27','IT-Development','Information Technology','Hyderabad','State Bank Of India','62459646745','NIPPS1850E',20,18000,18000,7200,7200,1600,1600,1250,1250,0,0,11950,11950,40200,200,200,40000),('emp001','John Doe','2025-01-27','IT-Development','Information Technology','Hyderabad','State Bank Of India','62459646745','NIPPS1850E',20,17000,17000,7000,7000,1500,1500,1250,1250,0,0,11950,11950,40200,200,200,34000);
/*!40000 ALTER TABLE `payslip` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-25 16:34:18
