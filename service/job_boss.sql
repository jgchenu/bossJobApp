/*
Navicat MySQL Data Transfer

Source Server         : localmysql
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : job_boss

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-08-29 11:57:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `desc` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('前端', 'bull', 'genius', '9a6f462744415db0a3ff6b4d56e7c509', 'jgchen', '前端', '', null, '8');
INSERT INTO `user` VALUES ('后端也要会前端', 'tiger', 'genius', '9a6f462744415db0a3ff6b4d56e7c509', 'jgchen1', '后端php', '', null, '9');
INSERT INTO `user` VALUES ('我前端后端都会', 'boy', 'genius', '9a6f462744415db0a3ff6b4d56e7c509', 'jgchen2', '全栈', '', null, '10');
INSERT INTO `user` VALUES ('安全第一', 'girl', 'genius', '9a6f462744415db0a3ff6b4d56e7c509', 'jgchen4', '运维', '', null, '11');
INSERT INTO `user` VALUES ('只要你来，钱不是问题', 'koala', 'boss', '9a6f462744415db0a3ff6b4d56e7c509', 'jg', '招聘资深架构师', 'sd', 'sd', '12');
