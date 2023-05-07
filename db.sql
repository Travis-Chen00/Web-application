-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: webcourse
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `t_city`
--

DROP TABLE IF EXISTS `t_city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_city` (
  `id` int NOT NULL,
  `city_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_deleted` int DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_city`
--

LOCK TABLES `t_city` WRITE;
/*!40000 ALTER TABLE `t_city` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_review`
--

DROP TABLE IF EXISTS `t_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `service_id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `ima_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_deleted` int DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `uid_idx` (`user_id`),
  KEY `service_id_idx` (`service_id`),
  CONSTRAINT `service_id` FOREIGN KEY (`service_id`) REFERENCES `t_service` (`id`),
  CONSTRAINT `uid` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_review`
--

LOCK TABLES `t_review` WRITE;
/*!40000 ALTER TABLE `t_review` DISABLE KEYS */;
INSERT INTO `t_review` VALUES (1,3,1,'Good','Nice Job',4.5,NULL,NULL,'2023-05-06 00:00:00',NULL),(2,32,1,'Bad','No way',0.1,NULL,NULL,'2023-05-06 00:00:00',NULL),(3,32,6,'Normal','Just so so ',3,NULL,NULL,'2023-05-06 00:00:00',NULL);
/*!40000 ALTER TABLE `t_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_service`
--

DROP TABLE IF EXISTS `t_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_service` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `service_provider` int NOT NULL,
  `open_time` datetime DEFAULT NULL,
  `price` float NOT NULL,
  `is_effective` int DEFAULT NULL,
  `is_deleted` int DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `service_description` varchar(1000) NOT NULL,
  `service_provider_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `service_provider_idx` (`service_provider`),
  CONSTRAINT `service_provider` FOREIGN KEY (`service_provider`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_service`
--

LOCK TABLES `t_service` WRITE;
/*!40000 ALTER TABLE `t_service` DISABLE KEYS */;
INSERT INTO `t_service` VALUES (1,'tommy cleaning','clean',28,NULL,100,1,0,'2023-05-05 00:00:00',NULL,'https://hips.hearstapps.com/vidthumb/images/gettyimages-928334498-1645223822.jpg?crop=1.00xw:0.878xh;0,0.0898xh','tommy cleaning, best one','provider1'),(2,'tommy repairs','repair',29,NULL,100,1,0,'2023-05-05 00:00:00',NULL,'https://guide-images.cdn.ifixit.com/igi/5twrYhDKEGm4XWUg.large','tommy repairs, best one','provider2'),(3,'Jimmy Cleaning','clean',28,NULL,120,1,0,'2023-05-05 00:00:00',NULL,'https://nypost.com/wp-content/uploads/sites/2/2022/03/Best-House-Cleaning-Products-feature-image.jpg?quality=75&strip=all','Jimmy cleaning, better than Tommy','provider1'),(4,'ABC','clean',29,NULL,150,1,NULL,NULL,NULL,'https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg?h=600&iar=0&w=640&rev=2bd4d26e45c54499acab7a4007dbb210&hash=DF30C911968BFFF87F68DCC47D2B169A','ABC cleaning, better than others','provider2'),(5,'Baby care','baby',29,NULL,300,1,NULL,NULL,NULL,'https://parentingscience.com/wp-content/uploads/xWhen-do-babies-sit-up-by-themselves-by-Rawpixel-500x-min.jpg.pagespeed.ic_.WG8bYqljSV.jpg','Baby setting','provider2'),(6,'Pest destroyer','pest',28,NULL,200,1,NULL,NULL,NULL,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_05QGvbIlUFh7-uXa2pXMR02DdG5LM-d0xg&usqp=CAU','Super destroyer of pest','provider1');
/*!40000 ALTER TABLE `t_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_service_city`
--

DROP TABLE IF EXISTS `t_service_city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_service_city` (
  `id` int NOT NULL,
  `service_id` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `is_deleted` int DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_service_city`
--

LOCK TABLES `t_service_city` WRITE;
/*!40000 ALTER TABLE `t_service_city` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_service_city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_service_request`
--

DROP TABLE IF EXISTS `t_service_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_service_request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `request_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `requirements` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` int DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `time` datetime NOT NULL,
  `is_deleted` int DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `service_id` int NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userid_idx` (`user_id`),
  KEY `providerid_idx` (`service_id`),
  CONSTRAINT `providerid` FOREIGN KEY (`service_id`) REFERENCES `t_user` (`id`),
  CONSTRAINT `userid` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_service_request`
--

LOCK TABLES `t_service_request` WRITE;
/*!40000 ALTER TABLE `t_service_request` DISABLE KEYS */;
INSERT INTO `t_service_request` VALUES (1,3,'House Clean','Keep my House Cleaner',0,'SO17 3BD','2023-05-07 00:00:00',NULL,'2023-05-06 05:30:34',NULL,28,NULL),(3,32,'Request test','<p>Request testing</p>',0,'SO17 3BD','2023-05-06 06:48:59',NULL,'2023-05-06 06:48:59',NULL,28,NULL),(4,32,'Single cleaning request test','<p>SCRT</p>',0,'SO17 3BD','2023-05-06 06:50:11',NULL,'2023-05-06 06:50:11',NULL,28,NULL),(7,32,'Test','<p>I want repair</p>',0,'SO17 3BD','2023-05-08 02:40:45',NULL,'2023-05-08 02:40:45',NULL,29,NULL),(8,36,'1','<p>1</p>',0,'SO17 3BD','2023-05-08 04:41:50',NULL,'2023-05-08 04:41:50',NULL,28,NULL);
/*!40000 ALTER TABLE `t_service_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_type` int NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img_url` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `proof_url` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_effective` int DEFAULT NULL,
  `is_deleted` int DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `username` (`username`) USING BTREE,
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (1,'admin1',2,'Southampton','$2a$10$y08jkYh/vSG2hbw94WPBvObe7FnBK0CzazoVhqFDrHBxMNkPKv4i6','admin1@gmail.com','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRhpLxutTzsEm6V8vq6NK41pXIzROrTR5OboZrhPwEsFX7HHPBZlW16BMx6rUUDYL-Zy4&usqp=CAU',NULL,NULL,1,NULL,NULL,NULL,'London'),(3,'user1',1,'London','$2a$10$y08jkYh/vSG2hbw94WPBvObe7FnBK0CzazoVhqFDrHBxMNkPKv4i6','user1@gmail.com','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQQx6yTanuEI0jGtkzpwaV8H1b1VOK3SefQXGCZXOgybFw0QfiuB4KKzTY5zwCF4uSBs&usqp=CAU',NULL,NULL,1,NULL,NULL,NULL,'Southampton'),(28,'provider1',3,'Southampton','$2a$10$y08jkYh/vSG2hbw94WPBvObe7FnBK0CzazoVhqFDrHBxMNkPKv4i6','provider1@gmail.com','http://localhost:3000/static/media/logo.223c6d8a54474284f446.png',NULL,NULL,1,NULL,NULL,NULL,'Southampton'),(29,'provider2',3,'London','$2a$10$y08jkYh/vSG2hbw94WPBvObe7FnBK0CzazoVhqFDrHBxMNkPKv4i6','provider2@gmail.com','https://i.ssjz8.com/upload/1/img2.baidu.com%2Fit%2Fu%3D2842026810%2C4122414000%26fm%3D253%26fmt%3Dauto%26app%3D138%26f%3DJPEG%3Fw%3D500%26h%3D500',NULL,NULL,1,NULL,NULL,NULL,'Southampton'),(31,'admin2',2,'London','$2a$10$RpBqGNvkvr/wrm7BclN8SeQAqLzjpLAOAwsB8LmW9OLxG5.exUHPO','admin@gmail.com','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvL8Yz51SCjnBQrvD4Ib9CRfF8jsjbUWl_uUrDjqRhElcboZVfDa6F5py4BlFtsvnFow&usqp=CAU',NULL,NULL,1,NULL,NULL,NULL,'London'),(32,'123',1,'Southampton','$2a$10$y08jkYh/vSG2hbw94WPBvObe7FnBK0CzazoVhqFDrHBxMNkPKv4i6','boyuchen00@hotmail.com','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyKPCO61vJyKItpXnJXKu9vtWpgbsb2kcSoIvcmvhxkNqYLpJL85z0U9Owhs6dpoJlMQ&usqp=CAU',NULL,NULL,1,NULL,NULL,NULL,'London'),(33,'provider_test',3,'Southampton','$2a$10$ZuuKvuS9KV3TZRjmTWFHzOJtdCgnZHtfTxzpbYBphTZMvQVxEOxcG','providerTest@gmail.com',NULL,NULL,'Best provider in Southampton',0,NULL,NULL,NULL,NULL),(34,'user_test_2',1,'London','$2a$10$MXf3j6tDSDEkVMiR9p0kdumayFF19u3xIBV8sefv/2wbgy3BZS0La','usertset2@gmail.com',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(35,'provider_test2',3,'London','$2a$10$oovoxZNVjf.bLUSaSV116OAcixhRpcg8eSNkg3ozavi8ENOkOVzGe','ptest@hotmail.com','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyKPCO61vJyKItpXnJXKu9vtWpgbsb2kcSoIvcmvhxkNqYLpJL85z0U9Owhs6dpoJlMQ&usqp=CAU',NULL,'',0,NULL,NULL,NULL,NULL),(36,'3test',1,'London','$2a$10$q9gzkuk2hh5RO9JWb.XswOKB5zeSWEtLQSgNoJJBUXj4AKcL6Jcby','aaaaa@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user_service`
--

DROP TABLE IF EXISTS `t_user_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_user_service` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `service_id` int DEFAULT NULL,
  `is_finish` int DEFAULT NULL,
  `is_deleted` int DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user_service`
--

LOCK TABLES `t_user_service` WRITE;
/*!40000 ALTER TABLE `t_user_service` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_user_service` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-08  5:30:48
