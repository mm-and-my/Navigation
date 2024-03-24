/*
Navicat MySQL Data Transfer

Source Server         : ww
Source Server Version : 50736
Source Host           : localhost:3306
Source Database       : photo

Target Server Type    : MYSQL
Target Server Version : 50736
File Encoding         : 65001

Date: 2023-11-18 21:10:58
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
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of photo
-- ----------------------------
INSERT INTO `photo` VALUES ('1', '照片标题', '照片介绍', '照片来源', '2023-10-31 10:46:03', '上传用户');
INSERT INTO `photo` VALUES ('21', '2周年', '原神2周年', '20231118210455280.jpg', '2023-11-18 21:04:55', 'xmy');
INSERT INTO `photo` VALUES ('22', '不动鸣神，泡影断灭', '不动鸣神，泡影断灭', '20231118210555894.jpg', '2023-11-18 21:05:55', 'xmy');
INSERT INTO `photo` VALUES ('23', '盛夏！海岛？大冒险！', '盛夏！海岛？大冒险！', '20231118210608673.jpg', '2023-11-18 21:06:08', 'xmy');
INSERT INTO `photo` VALUES ('24', '雷电将军心海', '雷电将军心海', '20231118210647804.jpg', '2023-11-18 21:06:47', 'xmy');
INSERT INTO `photo` VALUES ('25', '纳西妲', '纳西妲', '20231118210658454.jpg', '2023-11-18 21:06:59', 'xmy');
INSERT INTO `photo` VALUES ('26', '原神1周年', '原神1周年', '20231118210715320.jpg', '2023-11-18 21:07:15', 'xmy');
INSERT INTO `photo` VALUES ('18', 'dfb', 'hfdbjnfg jrny', '20231108024729446.jpg', '2023-11-08 10:47:30', 'aaa');
INSERT INTO `photo` VALUES ('13', '77777', '77777', '20231101031320623.png', '2023-11-01 11:13:20', 'admin');
INSERT INTO `photo` VALUES ('14', 'hu', '湖泊', '20231101031335111.jpg', '2023-11-01 11:13:35', 'admin');
INSERT INTO `photo` VALUES ('15', 'fenjing', '风景', '20231101031350716.jpg', '2023-11-01 11:13:50', 'admin');
INSERT INTO `photo` VALUES ('16', 'student', 'student', '20231101031416322.jpg', '2023-11-01 11:14:16', 'admin');
INSERT INTO `photo` VALUES ('17', '10', '10', '20231101031428448.jpg', '2023-11-01 11:14:28', 'admin');
INSERT INTO `photo` VALUES ('27', '决战群玉阁', '决战群玉阁', '20231118210738776.jpg', '2023-11-18 21:07:38', 'xmy');
INSERT INTO `photo` VALUES ('28', '风花节', '风花节', '20231118210757259.jpg', '2023-11-18 21:07:57', 'xmy');
INSERT INTO `photo` VALUES ('29', '和煦希望之风', '和煦希望之风', '20231118210818818.jpg', '2023-11-18 21:08:18', 'xmy');
INSERT INTO `photo` VALUES ('30', '群玉阁', '群玉阁', '20231118210844374.png', '2023-11-18 21:08:44', 'xmy');
INSERT INTO `photo` VALUES ('31', '虚空鼓动，劫火高扬', '虚空鼓动，劫火高扬', '20231118210908271.jpg', '2023-11-18 21:09:08', 'xmy');
INSERT INTO `photo` VALUES ('32', '枫丹歌剧院', '枫丹歌剧院', '20231118210924523.jpg', '2023-11-18 21:09:24', 'xmy');

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
INSERT INTO `users` VALUES ('14', 'xmy', '111', '257184474', '17818523390');
INSERT INTO `users` VALUES ('13', '111', '123', '123', '123');
INSERT INTO `users` VALUES ('15', 'admin', '111', '111', '111');
INSERT INTO `users` VALUES ('16', 'aaa', '111', '111', '111');
INSERT INTO `users` VALUES ('17', 'my', '111', '', '');
