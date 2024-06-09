/*
Navicat MySQL Data Transfer

Source Server         : ww
Source Server Version : 50736
Source Host           : localhost:3306
Source Database       : photo

Target Server Type    : MYSQL
Target Server Version : 50736
File Encoding         : 65001

Date: 2023-11-18 20:42:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for photo
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photoTitle` varchar(100) DEFAULT NULL,
  `photoDesc` text,
  `photoSrc` varchar(200) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of photo
-- ----------------------------
INSERT INTO `photo` VALUES ('1', '照片标题', '照片介绍', '照片来源', '2023-10-31 10:46:03', '上传用户');
INSERT INTO `photo` VALUES ('2', '111', '111', '111', '2023-10-31 10:46:25', 'xmy');
INSERT INTO `photo` VALUES ('3', '111', '星期一', '20231101024505989.png', '2023-11-01 10:45:06', 'xmy');
INSERT INTO `photo` VALUES ('4', '222', '星期二', '20231101024701189.png', '2023-11-01 10:47:01', 'xmy');
INSERT INTO `photo` VALUES ('5', '333', '星期三', '20231101024713669.png', '2023-11-01 10:47:13', 'xmy');
INSERT INTO `photo` VALUES ('6', 'bdlg', '布达拉宫', '20231101024813499.jpg', '2023-11-01 10:48:13', 'xmy');
INSERT INTO `photo` VALUES ('7', '444', '星期四', '20231101031115300.png', '2023-11-01 11:11:15', 'xmy');
INSERT INTO `photo` VALUES ('8', '555', '星期五', '20231101031125202.png', '2023-11-01 11:11:25', 'xmy');
INSERT INTO `photo` VALUES ('20', '雅安10周年', '雅安10周年纪念日', '20231115223515802.jpg', '2023-11-15 22:35:15', 'xmy');
INSERT INTO `photo` VALUES ('10', '777', '星期天', '20231101031151488.png', '2023-11-01 11:11:51', 'xmy');
INSERT INTO `photo` VALUES ('11', 'wuhan', '武汉', '20231101031217638.jpg', '2023-11-01 11:12:17', 'xmy');
INSERT INTO `photo` VALUES ('18', 'dfb', 'hfdbjnfg jrny', '20231108024729446.jpg', '2023-11-08 10:47:30', 'aaa');
INSERT INTO `photo` VALUES ('13', '77777', '77777', '20231101031320623.png', '2023-11-01 11:13:20', 'admin');
INSERT INTO `photo` VALUES ('14', 'hu', '湖泊', '20231101031335111.jpg', '2023-11-01 11:13:35', 'admin');
INSERT INTO `photo` VALUES ('15', 'fenjing', '风景', '20231101031350716.jpg', '2023-11-01 11:13:50', 'admin');
INSERT INTO `photo` VALUES ('16', 'student', 'student', '20231101031416322.jpg', '2023-11-01 11:14:16', 'admin');
INSERT INTO `photo` VALUES ('17', '10', '10', '20231101031428448.jpg', '2023-11-01 11:14:28', 'admin');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `wx` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'fdg', '123', '123', '123');
INSERT INTO `users` VALUES ('2', 'fdg', '123', '123', '123');
INSERT INTO `users` VALUES ('10', '123', '123', '123', '123');
INSERT INTO `users` VALUES ('11', '123', '123', '123', '123');
INSERT INTO `users` VALUES ('14', 'xmy', '111', '123', '123');
INSERT INTO `users` VALUES ('13', '111', '123', '123', '123');
INSERT INTO `users` VALUES ('15', 'admin', '111', '111', '111');
INSERT INTO `users` VALUES ('16', 'aaa', '111', '111', '111');
INSERT INTO `users` VALUES ('17', 'my', '111', '', '');
