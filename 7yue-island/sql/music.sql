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

 Date: 05/17/2019 16:47:10 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `music`
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(64) DEFAULT NULL,
  `content` varchar(300) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `pubdate` date DEFAULT NULL,
  `fav_nums` smallint(6) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
--  Records of `music`
-- ----------------------------
BEGIN;
INSERT INTO `music` VALUES ('0000-00-00 00:00:00', '1', '1', 'images/music.7.png', '无人问我粥可温 风雨不见江湖人', 'http://music.163.com/song/media/outer/url?id=393926.mp3', '2018-06-22', '95', '200', '月之门《枫华谷的枫林》', null, '2019-04-17 18:25:12'), ('0000-00-00 00:00:00', '1', '2', 'images/music.1.png', '你陪我步入蝉夏 越过城市喧嚣', 'http://music.163.com/song/media/outer/url?id=516076896.mp3', '2018-06-22', '47', '200', '花粥 《纸短情长》', null, '2019-04-10 09:13:12'), ('0000-00-00 00:00:00', '1', '3', 'images/music.3.png', '岁月长，衣裳薄', 'http://music.163.com/song/media/outer/url?id=317245.mp3', '2018-06-22', '44', '200', '杨千嬅《再见二丁目》', null, '2019-04-12 11:59:49'), ('0000-00-00 00:00:00', '1', '4', 'images/music.5.png', '许多人来来去去，相聚又别离', 'http://music.163.com/song/media/outer/url?id=26427662.mp3', '2018-06-22', '68', '200', '好妹妹 《一个人的北京》', null, null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
