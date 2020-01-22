/*
 Navicat Premium Data Transfer

 Source Server         : island
 Source Server Type    : MySQL
 Source Server Version : 50505
 Source Host           : localhost
 Source Database       : island

 Target Server Type    : MySQL
 Target Server Version : 50505
 File Encoding         : utf-8

 Date: 05/17/2019 16:46:57 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `movie`
-- ----------------------------
DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(64) DEFAULT NULL,
  `content` varchar(300) DEFAULT NULL,
  `pubdate` date DEFAULT NULL,
  `fav_nums` smallint(6) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `movie`
-- ----------------------------
BEGIN;
INSERT INTO `movie` VALUES ('0000-00-00 00:00:00', '1', '1', 'images/movie.8.png', '人生不能像做菜，把所有的料准备好才下锅', '2018-06-22', '165', '李安《饮食男女 》', '100', '2019-04-18 02:40:48', null), ('0000-00-00 00:00:00', '1', '2', 'images/movie.4.png', '在变换的生命里，岁月原来是最大的小偷', '2018-06-22', '46', '罗启锐《岁月神偷》', '100', '2019-04-09 04:34:38', null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
