const list_cityData = [{"id":110000,"name":"北京","subList":[{"id":110100,"name":"北京市","subList":[{"id":110101,"name":"东城区","subList":[]},{"id":110102,
"name":"西城区","subList":[]},{"id":110105,"name":"朝阳区","subList":[]},{"id":110106,"name":"丰台区","subList":[]},{"id":110107,"name":"石景山区",
"subList":[]},{"id":110108,"name":"海淀区","subList":[]},{"id":110109,"name":"门头沟区","subList":[]},{"id":110111,"name":"房山区","subList":[]},
{"id":110112,"name":"通州区","subList":[]},{"id":110113,"name":"顺义区","subList":[]},{"id":110114,"name":"昌平区","subList":[]},{"id":110115,
"name":"大兴区","subList":[]},{"id":110116,"name":"怀柔区","subList":[]},{"id":110117,"name":"平谷区","subList":[]},{"id":110118,"name":"密云区","subList":[]},
{"id":110119,"name":"延庆区","subList":[]}]}]},{"id":120000,"name":"天津","subList":[{"id":120100,"name":"天津市","subList":[{"id":120101,"name":"和平区",
"subList":[]},{"id":120102,"name":"河东区","subList":[]},{"id":120103,"name":"河西区","subList":[]},{"id":120104,"name":"南开区","subList":[]},{"id":120105,
"name":"河北区","subList":[]},{"id":120106,"name":"红桥区","subList":[]},{"id":120110,"name":"东丽区","subList":[]},{"id":120111,"name":"西青区","subList":[]},
{"id":120112,"name":"津南区","subList":[]},{"id":120113,"name":"北辰区","subList":[]},{"id":120114,"name":"武清区","subList":[]},{"id":120115,"name":"宝坻区",
"subList":[]},{"id":120116,"name":"滨海新区","subList":[]},{"id":120117,"name":"宁河区","subList":[]},{"id":120118,"name":"静海区","subList":[]}]},
{"id":120200,"name":"天津郊县","subList":[{"id":120225,"name":"蓟县","subList":[]}]}]},{"id":130000,"name":"河北省","subList":[{"id":130100,"name":"石家庄市",
"subList":[{"id":130102,"name":"长安区","subList":[]},{"id":130104,"name":"桥西区","subList":[]},{"id":130105,"name":"新华区","subList":[]},{"id":130107,
"name":"井陉矿区","subList":[]},{"id":130108,"name":"裕华区","subList":[]},{"id":130109,"name":"藁城区","subList":[]},{"id":130110,"name":"鹿泉区","subList":[]},
{"id":130111,"name":"栾城区","subList":[]},{"id":130121,"name":"井陉县","subList":[]},{"id":130123,"name":"正定县","subList":[]},{"id":130125,"name":"行唐县",
"subList":[]},{"id":130126,"name":"灵寿县","subList":[]},{"id":130127,"name":"高邑县","subList":[]},{"id":130128,"name":"深泽县","subList":[]},{"id":130129,
"name":"赞皇县","subList":[]},{"id":130130,"name":"无极县","subList":[]},{"id":130131,"name":"平山县","subList":[]},{"id":130132,"name":"元氏县","subList":[]},
{"id":130133,"name":"赵县","subList":[]},{"id":130181,"name":"辛集市","subList":[]},{"id":130183,"name":"晋州市","subList":[]},{"id":130184,"name":"新乐市",
"subList":[]}]},{"id":130200,"name":"唐山市","subList":[{"id":130202,"name":"路南区","subList":[]},{"id":130203,"name":"路北区","subList":[]},{"id":130204,
"name":"古冶区","subList":[]},{"id":130205,"name":"开平区","subList":[]},{"id":130207,"name":"丰南区","subList":[]},{"id":130208,"name":"丰润区","subList":[]},
{"id":130209,"name":"曹妃甸区","subList":[]},{"id":130223,"name":"滦县","subList":[]},{"id":130224,"name":"滦南县","subList":[]},{"id":130225,"name":"乐亭县",
"subList":[]},{"id":130227,"name":"迁西县","subList":[]},{"id":130229,"name":"玉田县","subList":[]},{"id":130281,"name":"遵化市","subList":[]},{"id":130283,
"name":"迁安市","subList":[]}]},{"id":130300,"name":"秦皇岛市","subList":[{"id":130302,"name":"海港区","subList":[]},{"id":130303,"name":"山海关区","subList":[]},
{"id":130304,"name":"北戴河区","subList":[]},{"id":130306,"name":"抚宁区","subList":[]},{"id":130321,"name":"青龙满族自治县","subList":[]},{"id":130322,
"name":"昌黎县","subList":[]},{"id":130324,"name":"卢龙县","subList":[]}]},{"id":130400,"name":"邯郸市","subList":[{"id":130402,"name":"邯山区","subList":[]},
{"id":130403,"name":"丛台区","subList":[]},{"id":130404,"name":"复兴区","subList":[]},{"id":130406,"name":"峰峰矿区","subList":[]},{"id":130421,"name":"邯郸县",
"subList":[]},{"id":130423,"name":"临漳县","subList":[]},{"id":130424,"name":"成安县","subList":[]},{"id":130425,"name":"大名县","subList":[]},{"id":130426,
"name":"涉县","subList":[]},{"id":130427,"name":"磁县","subList":[]},{"id":130428,"name":"肥乡县","subList":[]},{"id":130429,"name":"永年县","subList":[]},
{"id":130430,"name":"邱县","subList":[]},{"id":130431,"name":"鸡泽县","subList":[]},{"id":130432,"name":"广平县","subList":[]},{"id":130433,"name":"馆陶县",
"subList":[]},{"id":130434,"name":"魏县","subList":[]},{"id":130435,"name":"曲周县","subList":[]},{"id":130481,"name":"武安市","subList":[]}]},{"id":130500,
"name":"邢台市","subList":[{"id":130502,"name":"桥东区","subList":[]},{"id":130503,"name":"桥西区","subList":[]},{"id":130521,"name":"邢台县","subList":[]},
{"id":130522,"name":"临城县","subList":[]},{"id":130523,"name":"内丘县","subList":[]},{"id":130524,"name":"柏乡县","subList":[]},{"id":130525,"name":"隆尧县",
"subList":[]},{"id":130526,"name":"任县","subList":[]},{"id":130527,"name":"南和县","subList":[]},{"id":130528,"name":"宁晋县","subList":[]},{"id":130529,
"name":"巨鹿县","subList":[]},{"id":130530,"name":"新河县","subList":[]},{"id":130531,"name":"广宗县","subList":[]},{"id":130532,"name":"平乡县","subList":[]},
{"id":130533,"name":"威县","subList":[]},{"id":130534,"name":"清河县","subList":[]},{"id":130535,"name":"临西县","subList":[]},{"id":130581,"name":"南宫市",
"subList":[]},{"id":130582,"name":"沙河市","subList":[]}]},{"id":130600,"name":"保定市","subList":[{"id":130602,"name":"竞秀区","subList":[]},{"id":130606,
"name":"莲池区","subList":[]},{"id":130607,"name":"满城区","subList":[]},{"id":130608,"name":"清苑区","subList":[]},{"id":130609,"name":"徐水区","subList":[]},
{"id":130623,"name":"涞水县","subList":[]},{"id":130624,"name":"阜平县","subList":[]},{"id":130626,"name":"定兴县","subList":[]},{"id":130627,"name":"唐县",
"subList":[]},{"id":130628,"name":"高阳县","subList":[]},{"id":130629,"name":"容城县","subList":[]},{"id":130630,"name":"涞源县","subList":[]},{"id":130631,
"name":"望都县","subList":[]},{"id":130632,"name":"安新县","subList":[]},{"id":130633,"name":"易县","subList":[]},{"id":130634,"name":"曲阳县","subList":[]},
{"id":130635,"name":"蠡县","subList":[]},{"id":130636,"name":"顺平县","subList":[]},{"id":130637,"name":"博野县","subList":[]},{"id":130638,"name":"雄县","subList":[]},{"id":130681,"name":"涿州市","subList":[]},{"id":130682,"name":"定州市",
"subList":[]},{"id":130683,"name":"安国市","subList":[]},{"id":130684,"name":"高碑店市","subList":[]}]},{"id":130700,"name":"张家口市","subList":[{"id":130702,"name":"桥东区","subList":[]},{"id":130703,"name":"桥西区","subList":[]},{"id":130705,"name":"宣化区","subList":[]},{"id":130706,"name":"下花园区","subList":[]},{"id":130722,"name":"张北县","subList":[]},{"id":130723,"name":"康保县","subList":[]},{"id":130724,"name":"沽源县","subList":[]},{"id":130725,"name":"尚义县","subList":[]},{"id":130726,"name":"蔚县","subList":[]},{"id":130727,"name":"阳原县","subList":[]},{"id":130728,"name":"怀安县","subList":[]},{"id":130729,"name":"万全区","subList":[]},{"id":130730,"name":"怀来县","subList":[]},
{"id":130731,"name":"涿鹿县","subList":[]},{"id":130732,"name":"赤城县","subList":[]},{"id":130733,"name":"崇礼区","subList":[]}]},{"id":130800,"name":"承德市","subList":[{"id":130802,"name":"双桥区","subList":[]},{"id":130803,"name":"双滦区","subList":[]},{"id":130804,"name":"鹰手营子矿区","subList":[]},{"id":130821,"name":"承德县","subList":[]},{"id":130822,"name":"兴隆县","subList":[]},{"id":130823,"name":"平泉县","subList":[]},{"id":130824,"name":"滦平县","subList":[]},{"id":130825,"name":"隆化县","subList":[]},{"id":130826,"name":"丰宁满族自治县","subList":[]},{"id":130827,"name":"宽城满族自治县","subList":[]},{"id":130828,"name":"围场满族蒙古族自治县","subList":[]}]},{"id":130900,"name":"沧州市","subList":[{"id":130902,"name":"新华区","subList":[]},
{"id":130903,"name":"运河区","subList":[]},{"id":130921,"name":"沧县","subList":[]},{"id":130922,"name":"青县","subList":[]},{"id":130923,"name":"东光县","subList":[]},{"id":130924,"name":"海兴县","subList":[]},{"id":130925,"name":"盐山县","subList":[]},{"id":130926,"name":"肃宁县","subList":[]},{"id":130927,"name":"南皮县","subList":[]},{"id":130928,"name":"吴桥县","subList":[]},{"id":130929,"name":"献县","subList":[]},{"id":130930,"name":"孟村回族自治县","subList":[]},{"id":130981,"name":"泊头市","subList":[]},{"id":130982,"name":"任丘市","subList":[]},{"id":130983,"name":"黄骅市","subList":[]},{"id":130984,"name":"河间市","subList":[]}]},{"id":131000,"name":"廊坊市","subList":[{"id":131002,"name":"安次区","subList":[]},{"id":131003,"name":"广阳区","subList":[]},{"id":131022,"name":"固安县","subList":[]},{"id":131023,"name":"永清县","subList":[]},
{"id":131024,"name":"香河县","subList":[]},{"id":131025,"name":"大城县","subList":[]},{"id":131026,"name":"文安县","subList":[]},{"id":131028,"name":"大厂回族自治县","subList":[]},{"id":131081,"name":"霸州市","subList":[]},{"id":131082,"name":"三河市","subList":[]}]},{"id":131100,"name":"衡水市","subList":[{"id":131102,"name":"桃城区","subList":[]},{"id":131121,"name":"枣强县","subList":[]},{"id":131122,"name":"武邑县","subList":[]},{"id":131123,"name":"武强县","subList":[]},{"id":131124,"name":"饶阳县","subList":[]},{"id":131125,"name":"安平县","subList":[]},{"id":131126,"name":"故城县","subList":[]},{"id":131127,"name":"景县","subList":[]},{"id":131128,"name":"阜城县","subList":[]},{"id":131181,"name":"冀州市","subList":[]},{"id":131182,"name":"深州市","subList":[]}]},{"id":130101,"name":"市辖区","subList":[]},{"id":130201,"name":"市辖区","subList":[]},
{"id":130301,"name":"市辖区","subList":[]},{"id":130401,"name":"市辖区","subList":[]},{"id":130501,"name":"市辖区","subList":[]},{"id":130601,"name":"市辖区","subList":[]},{"id":130701,"name":"市辖区","subList":[]},{"id":130801,"name":"市辖区","subList":[]},{"id":130901,"name":"市辖区","subList":[]},{"id":131001,"name":"市辖区","subList":[]},{"id":131101,"name":"市辖区","subList":[]}]},{"id":140000,"name":"山西省","subList":[{"id":140100,"name":"太原市","subList":[{"id":140105,"name":"小店区","subList":[]},{"id":140106,"name":"迎泽区","subList":[]},{"id":140107,"name":"杏花岭区","subList":[]},{"id":140108,"name":"尖草坪区","subList":[]},{"id":140109,"name":"万柏林区","subList":[]},{"id":140110,"name":"晋源区","subList":[]},{"id":140121,"name":"清徐县","subList":[]},
{"id":140122,"name":"阳曲县","subList":[]},{"id":140123,"name":"娄烦县","subList":[]},{"id":140181,"name":"古交市","subList":[]}]},{"id":140200,"name":"大同市","subList":[{"id":140202,"name":"城区","subList":[]},{"id":140203,"name":"矿区","subList":[]},{"id":140211,"name":"南郊区","subList":[]},{"id":140212,"name":"新荣区","subList":[]},{"id":140221,"name":"阳高县","subList":[]},{"id":140222,"name":"天镇县","subList":[]},{"id":140223,"name":"广灵县","subList":[]},{"id":140224,"name":"灵丘县","subList":[]},{"id":140225,"name":"浑源县","subList":[]},{"id":140226,"name":"左云县","subList":[]},{"id":140227,"name":"大同县","subList":[]}]},{"id":140300,"name":"阳泉市","subList":[{"id":140302,"name":"城区","subList":[]},{"id":140303,"name":"矿区","subList":[]},{"id":140311,"name":"郊区","subList":[]},
{"id":140321,"name":"平定县","subList":[]},{"id":140322,"name":"盂县","subList":[]}]},{"id":140400,"name":"长治市","subList":[{"id":140402,"name":"城区","subList":[]},{"id":140411,"name":"郊区","subList":[]},{"id":140421,"name":"长治县","subList":[]},{"id":140423,"name":"襄垣县","subList":[]},{"id":140424,"name":"屯留县","subList":[]},{"id":140425,"name":"平顺县","subList":[]},{"id":140426,"name":"黎城县","subList":[]},{"id":140427,"name":"壶关县","subList":[]},{"id":140428,"name":"长子县","subList":[]},{"id":140429,"name":"武乡县","subList":[]},{"id":140430,"name":"沁县","subList":[]},{"id":140431,"name":"沁源县","subList":[]},{"id":140481,"name":"潞城市","subList":[]}]},{"id":140500,"name":"晋城市","subList":[{"id":140502,"name":"城区","subList":[]},{"id":140521,"name":"沁水县","subList":[]},
{"id":140522,"name":"阳城县","subList":[]},{"id":140524,"name":"陵川县","subList":[]},{"id":140525,"name":"泽州县","subList":[]},{"id":140581,"name":"高平市","subList":[]}]},{"id":140600,"name":"朔州市","subList":[{"id":140602,"name":"朔城区","subList":[]},{"id":140603,"name":"平鲁区","subList":[]},{"id":140621,"name":"山阴县","subList":[]},{"id":140622,"name":"应县","subList":[]},{"id":140623,"name":"右玉县","subList":[]},{"id":140624,"name":"怀仁县","subList":[]}]},{"id":140700,"name":"晋中市","subList":[{"id":140702,"name":"榆次区","subList":[]},{"id":140721,"name":"榆社县","subList":[]},{"id":140722,"name":"左权县","subList":[]},{"id":140723,"name":"和顺县","subList":[]},{"id":140724,"name":"昔阳县","subList":[]},{"id":140725,"name":"寿阳县","subList":[]},{"id":140726,"name":"太谷县","subList":[]},
{"id":140727,"name":"祁县","subList":[]},{"id":140728,"name":"平遥县","subList":[]},{"id":140729,"name":"灵石县","subList":[]},{"id":140781,"name":"介休市","subList":[]}]},{"id":140800,"name":"运城市","subList":[{"id":140802,"name":"盐湖区","subList":[]},{"id":140821,"name":"临猗县","subList":[]},{"id":140822,"name":"万荣县","subList":[]},{"id":140823,"name":"闻喜县","subList":[]},{"id":140824,"name":"稷山县","subList":[]},{"id":140825,"name":"新绛县","subList":[]},{"id":140826,"name":"绛县","subList":[]},{"id":140827,"name":"垣曲县","subList":[]},{"id":140828,"name":"夏县","subList":[]},{"id":140829,"name":"平陆县","subList":[]},{"id":140830,"name":"芮城县","subList":[]},{"id":140881,"name":"永济市","subList":[]},{"id":140882,"name":"河津市","subList":[]}]},{"id":140900,"name":"忻州市","subList":[{"id":140902,"name":"忻府区","subList":[]},
{"id":140921,"name":"定襄县","subList":[]},{"id":140922,"name":"五台县","subList":[]},{"id":140923,"name":"代县","subList":[]},{"id":140924,"name":"繁峙县","subList":[]},{"id":140925,"name":"宁武县","subList":[]},{"id":140926,"name":"静乐县","subList":[]},{"id":140927,"name":"神池县","subList":[]},{"id":140928,"name":"五寨县","subList":[]},{"id":140929,"name":"岢岚县","subList":[]},{"id":140930,"name":"河曲县","subList":[]},{"id":140931,"name":"保德县","subList":[]},{"id":140932,"name":"偏关县","subList":[]},{"id":140981,"name":"原平市","subList":[]}]},{"id":141000,"name":"临汾市","subList":[{"id":141002,"name":"尧都区","subList":[]},{"id":141021,"name":"曲沃县","subList":[]},{"id":141022,"name":"翼城县","subList":[]},{"id":141023,"name":"襄汾县","subList":[]},{"id":141024,"name":"洪洞县","subList":[]},{"id":141025,"name":"古县","subList":[]},
{"id":141026,"name":"安泽县","subList":[]},{"id":141027,"name":"浮山县","subList":[]},{"id":141028,"name":"吉县","subList":[]},{"id":141029,"name":"乡宁县","subList":[]},{"id":141030,"name":"大宁县","subList":[]},{"id":141031,"name":"隰县","subList":[]},{"id":141032,"name":"永和县","subList":[]},{"id":141033,"name":"蒲县","subList":[]},{"id":141034,"name":"汾西县","subList":[]},{"id":141081,"name":"侯马市","subList":[]},{"id":141082,"name":"霍州市","subList":[]}]},{"id":141100,"name":"吕梁市","subList":[{"id":141102,"name":"离石区","subList":[]},{"id":141121,"name":"文水县","subList":[]},{"id":141122,"name":"交城县","subList":[]},{"id":141123,"name":"兴县","subList":[]},{"id":141124,"name":"临县","subList":[]},{"id":141125,"name":"柳林县","subList":[]},{"id":141126,"name":"石楼县","subList":[]},{"id":141127,"name":"岚县","subList":[]},
{"id":141128,"name":"方山县","subList":[]},{"id":141129,"name":"中阳县","subList":[]},{"id":141130,"name":"交口县","subList":[]},{"id":141181,"name":"孝义市","subList":[]},{"id":141182,"name":"汾阳市","subList":[]}]},{"id":140101,"name":"市辖区","subList":[]},{"id":140201,"name":"市辖区","subList":[]},{"id":140301,"name":"市辖区","subList":[]},{"id":140401,"name":"市辖区","subList":[]},{"id":140501,"name":"市辖区","subList":[]},{"id":140601,"name":"市辖区","subList":[]},{"id":140701,"name":"市辖区","subList":[]},{"id":140801,"name":"市辖区","subList":[]},{"id":140901,"name":"市辖区","subList":[]},{"id":141001,"name":"市辖区","subList":[]},{"id":141101,"name":"市辖区","subList":[]}]},{"id":150000,"name":"内蒙古自治区","subList":[{"id":150100,"name":"呼和浩特市","subList":[{"id":150102,"name":"新城区","subList":[]},{"id":150103,"name":"回民区","subList":[]},
{"id":150104,"name":"玉泉区","subList":[]},{"id":150105,"name":"赛罕区","subList":[]},{"id":150121,"name":"土默特左旗","subList":[]},{"id":150122,"name":"托克托县","subList":[]},{"id":150123,"name":"和林格尔县","subList":[]},{"id":150124,"name":"清水河县","subList":[]},{"id":150125,"name":"武川县","subList":[]}]},{"id":150200,"name":"包头市","subList":[{"id":150202,"name":"东河区","subList":[]},{"id":150203,"name":"昆都仑区","subList":[]},{"id":150204,"name":"青山区","subList":[]},{"id":150205,"name":"石拐区","subList":[]},{"id":150206,"name":"白云鄂博矿区","subList":[]},{"id":150207,"name":"九原区","subList":[]},{"id":150221,"name":"土默特右旗","subList":[]},{"id":150222,"name":"固阳县","subList":[]},{"id":150223,"name":"达尔罕茂明安联合旗","subList":[]}]},{"id":150300,"name":"乌海市","subList":[{"id":150302,"name":"海勃湾区","subList":[]},
{"id":150303,"name":"海南区","subList":[]},{"id":150304,"name":"乌达区","subList":[]}]},{"id":150400,"name":"赤峰市","subList":[{"id":150402,"name":"红山区","subList":[]},{"id":150403,"name":"元宝山区","subList":[]},{"id":150404,"name":"松山区","subList":[]},{"id":150421,"name":"阿鲁科尔沁旗","subList":[]},{"id":150422,"name":"巴林左旗","subList":[]},{"id":150423,"name":"巴林右旗","subList":[]},{"id":150424,"name":"林西县","subList":[]},{"id":150425,"name":"克什克腾旗","subList":[]},{"id":150426,"name":"翁牛特旗","subList":[]},{"id":150428,"name":"喀喇沁旗","subList":[]},{"id":150429,"name":"宁城县","subList":[]},{"id":150430,"name":"敖汉旗","subList":[]}]},{"id":150500,"name":"通辽市","subList":[{"id":150502,"name":"科尔沁区","subList":[]},{"id":150521,"name":"科尔沁左翼中旗","subList":[]},{"id":150522,"name":"科尔沁左翼后旗","subList":[]},{"id":150523,"name":"开鲁县","subList":[]},
{"id":150524,"name":"库伦旗","subList":[]},{"id":150525,"name":"奈曼旗","subList":[]},{"id":150526,"name":"扎鲁特旗","subList":[]},{"id":150581,"name":"霍林郭勒市","subList":[]}]},{"id":150600,"name":"鄂尔多斯市","subList":[{"id":150602,"name":"东胜区","subList":[]},{"id":150621,"name":"达拉特旗","subList":[]},{"id":150622,"name":"准格尔旗","subList":[]},{"id":150623,"name":"鄂托克前旗","subList":[]},{"id":150624,"name":"鄂托克旗","subList":[]},{"id":150625,"name":"杭锦旗","subList":[]},{"id":150626,"name":"乌审旗","subList":[]},{"id":150627,"name":"伊金霍洛旗","subList":[]}]},{"id":150700,"name":"呼伦贝尔市","subList":[{"id":150702,"name":"海拉尔区","subList":[]},{"id":150703,"name":"扎赉诺尔区","subList":[]},{"id":150721,"name":"阿荣旗","subList":[]},{"id":150722,"name":"莫力达瓦达斡尔族自治旗","subList":[]},{"id":150723,"name":"鄂伦春自治旗","subList":[]},
{"id":150724,"name":"鄂温克族自治旗","subList":[]},{"id":150725,"name":"陈巴尔虎旗","subList":[]},{"id":150726,"name":"新巴尔虎左旗","subList":[]},{"id":150727,"name":"新巴尔虎右旗","subList":[]},{"id":150781,"name":"满洲里市","subList":[]},{"id":150782,"name":"牙克石市","subList":[]},{"id":150783,"name":"扎兰屯市","subList":[]},{"id":150784,"name":"额尔古纳市","subList":[]},{"id":150785,"name":"根河市","subList":[]}]},{"id":150800,"name":"巴彦淖尔市","subList":[{"id":150802,"name":"临河区","subList":[]},{"id":150821,"name":"五原县","subList":[]},{"id":150822,"name":"磴口县","subList":[]},{"id":150823,"name":"乌拉特前旗","subList":[]},{"id":150824,"name":"乌拉特中旗","subList":[]},{"id":150825,"name":"乌拉特后旗","subList":[]},{"id":150826,"name":"杭锦后旗","subList":[]}]},{"id":150900,"name":"乌兰察布市","subList":[{"id":150902,"name":"集宁区","subList":[]},{"id":150921,"name":"卓资县","subList":[]},
{"id":150922,"name":"化德县","subList":[]},{"id":150923,"name":"商都县","subList":[]},{"id":150924,"name":"兴和县","subList":[]},{"id":150925,"name":"凉城县","subList":[]},{"id":150926,"name":"察哈尔右翼前旗","subList":[]},{"id":150927,"name":"察哈尔右翼中旗","subList":[]},{"id":150928,"name":"察哈尔右翼后旗","subList":[]},{"id":150929,"name":"四子王旗","subList":[]},{"id":150981,"name":"丰镇市","subList":[]}]},{"id":152200,"name":"兴安盟","subList":[{"id":152201,"name":"乌兰浩特市","subList":[]},{"id":152202,"name":"阿尔山市","subList":[]},{"id":152221,"name":"科尔沁右翼前旗","subList":[]},{"id":152222,"name":"科尔沁右翼中旗","subList":[]},{"id":152223,"name":"扎赉特旗","subList":[]},{"id":152224,"name":"突泉县","subList":[]}]},{"id":152500,"name":"锡林郭勒盟","subList":[{"id":152501,"name":"二连浩特市","subList":[]},{"id":152502,"name":"锡林浩特市","subList":[]},{"id":152522,"name":"阿巴嘎旗","subList":[]},
{"id":152523,"name":"苏尼特左旗","subList":[]},{"id":152524,"name":"苏尼特右旗","subList":[]},{"id":152525,"name":"东乌珠穆沁旗","subList":[]},{"id":152526,"name":"西乌珠穆沁旗","subList":[]},{"id":152527,"name":"太仆寺旗","subList":[]},{"id":152528,"name":"镶黄旗","subList":[]},{"id":152529,"name":"正镶白旗","subList":[]},{"id":152530,"name":"正蓝旗","subList":[]},{"id":152531,"name":"多伦县","subList":[]}]},{"id":152900,"name":"阿拉善盟","subList":[{"id":152921,"name":"阿拉善左旗","subList":[]},{"id":152922,"name":"阿拉善右旗","subList":[]},{"id":152923,"name":"额济纳旗","subList":[]}]},{"id":150101,"name":"市辖区","subList":[]},{"id":150201,"name":"市辖区","subList":[]},{"id":150301,"name":"市辖区","subList":[]},{"id":150401,"name":"市辖区","subList":[]},{"id":150501,"name":"市辖区","subList":[]},{"id":150601,"name":"市辖区","subList":[]},{"id":150701,"name":"市辖区","subList":[]},{"id":150801,"name":"市辖区","subList":[]},
{"id":150901,"name":"市辖区","subList":[]},{"id":152901,"name":"市辖区","subList":[]}]},{"id":210000,"name":"辽宁省","subList":[{"id":210100,"name":"沈阳市","subList":[{"id":210102,"name":"和平区","subList":[]},{"id":210103,"name":"沈河区","subList":[]},{"id":210104,"name":"大东区","subList":[]},{"id":210105,"name":"皇姑区","subList":[]},{"id":210106,"name":"铁西区","subList":[]},{"id":210111,"name":"苏家屯区","subList":[]},{"id":210112,"name":"浑南区","subList":[]},{"id":210113,"name":"沈北新区","subList":[]},{"id":210114,"name":"于洪区","subList":[]},{"id":210122,"name":"辽中区","subList":[]},{"id":210123,"name":"康平县","subList":[]},{"id":210124,"name":"法库县","subList":[]},{"id":210181,"name":"新民市","subList":[]}]},{"id":210200,"name":"大连市","subList":[{"id":210202,"name":"中山区","subList":[]},{"id":210203,"name":"西岗区","subList":[]},{"id":210204,"name":"沙河口区","subList":[]},{"id":210211,"name":"甘井子区","subList":[]},{"id":210212,"name":"旅顺口区","subList":[]},
{"id":210213,"name":"金州区","subList":[]},{"id":210214,"name":"普兰店区","subList":[]},{"id":210224,"name":"长海县","subList":[]},{"id":210281,"name":"瓦房店市","subList":[]},{"id":210283,"name":"庄河市","subList":[]}]},{"id":210300,"name":"鞍山市","subList":[{"id":210302,"name":"铁东区","subList":[]},{"id":210303,"name":"铁西区","subList":[]},{"id":210304,"name":"立山区","subList":[]},{"id":210311,"name":"千山区","subList":[]},{"id":210321,"name":"台安县","subList":[]},{"id":210323,"name":"岫岩满族自治县","subList":[]},{"id":210381,"name":"海城市","subList":[]}]},{"id":210400,"name":"抚顺市","subList":[{"id":210402,"name":"新抚区","subList":[]},{"id":210403,"name":"东洲区","subList":[]},{"id":210404,"name":"望花区","subList":[]},{"id":210411,"name":"顺城区","subList":[]},{"id":210421,"name":"抚顺县","subList":[]},{"id":210422,"name":"新宾满族自治县","subList":[]},{"id":210423,"name":"清原满族自治县","subList":[]}]},{"id":210500,"name":"本溪市","subList":[{"id":210502,"name":"平山区","subList":[]},{"id":210503,"name":"溪湖区","subList":[]},
{"id":210504,"name":"明山区","subList":[]},{"id":210505,"name":"南芬区","subList":[]},{"id":210521,"name":"本溪满族自治县","subList":[]},{"id":210522,"name":"桓仁满族自治县","subList":[]}]},{"id":210600,"name":"丹东市","subList":[{"id":210602,"name":"元宝区","subList":[]},{"id":210603,"name":"振兴区","subList":[]},{"id":210604,"name":"振安区","subList":[]},{"id":210624,"name":"宽甸满族自治县","subList":[]},{"id":210681,"name":"东港市","subList":[]},{"id":210682,"name":"凤城市","subList":[]}]},{"id":210700,"name":"锦州市","subList":[{"id":210702,"name":"古塔区","subList":[]},{"id":210703,"name":"凌河区","subList":[]},{"id":210711,"name":"太和区","subList":[]},{"id":210726,"name":"黑山县","subList":[]},{"id":210727,"name":"义县","subList":[]},{"id":210781,"name":"凌海市","subList":[]},{"id":210782,"name":"北镇市","subList":[]}]},{"id":210800,"name":"营口市","subList":[{"id":210802,"name":"站前区","subList":[]},{"id":210803,"name":"西市区","subList":[]},{"id":210804,"name":"鲅鱼圈区","subList":[]},{"id":210811,"name":"老边区","subList":[]},
{"id":210881,"name":"盖州市","subList":[]},{"id":210882,"name":"大石桥市","subList":[]}]},{"id":210900,"name":"阜新市","subList":[{"id":210902,"name":"海州区","subList":[]},{"id":210903,"name":"新邱区","subList":[]},{"id":210904,"name":"太平区","subList":[]},{"id":210905,"name":"清河门区","subList":[]},{"id":210911,"name":"细河区","subList":[]},{"id":210921,"name":"阜新蒙古族自治县","subList":[]},{"id":210922,"name":"彰武县","subList":[]}]},{"id":211000,"name":"辽阳市","subList":[{"id":211002,"name":"白塔区","subList":[]},{"id":211003,"name":"文圣区","subList":[]},{"id":211004,"name":"宏伟区","subList":[]},{"id":211005,"name":"弓长岭区","subList":[]},{"id":211011,"name":"太子河区","subList":[]},{"id":211021,"name":"辽阳县","subList":[]},{"id":211081,"name":"灯塔市","subList":[]}]},{"id":211100,"name":"盘锦市","subList":[{"id":211102,"name":"双台子区","subList":[]},{"id":211103,"name":"兴隆台区","subList":[]},{"id":211121,"name":"大洼区","subList":[]},{"id":211122,"name":"盘山县","subList":[]}]},
{"id":211200,"name":"铁岭市","subList":[{"id":211202,"name":"银州区","subList":[]},{"id":211204,"name":"清河区","subList":[]},{"id":211221,"name":"铁岭县","subList":[]},{"id":211223,"name":"西丰县","subList":[]},{"id":211224,"name":"昌图县","subList":[]},{"id":211281,"name":"调兵山市","subList":[]},{"id":211282,"name":"开原市","subList":[]}]},{"id":211300,"name":"朝阳市","subList":[{"id":211302,"name":"双塔区","subList":[]},{"id":211303,"name":"龙城区","subList":[]},{"id":211321,"name":"朝阳县","subList":[]},{"id":211322,"name":"建平县","subList":[]},{"id":211324,"name":"喀喇沁左翼蒙古族自治县","subList":[]},{"id":211381,"name":"北票市","subList":[]},{"id":211382,"name":"凌源市","subList":[]}]},{"id":211400,"name":"葫芦岛市","subList":[{"id":211402,"name":"连山区","subList":[]},{"id":211403,"name":"龙港区","subList":[]},{"id":211404,"name":"南票区","subList":[]},{"id":211421,"name":"绥中县","subList":[]},{"id":211422,"name":"建昌县","subList":[]},{"id":211481,"name":"兴城市","subList":[]}]},{"id":210101,"name":"市辖区","subList":[]},
{"id":210201,"name":"市辖区","subList":[]},{"id":210301,"name":"市辖区","subList":[]},{"id":210401,"name":"市辖区","subList":[]},{"id":210501,"name":"市辖区","subList":[]},{"id":210601,"name":"市辖区","subList":[]},{"id":210701,"name":"市辖区","subList":[]},{"id":210801,"name":"市辖区","subList":[]},{"id":210901,"name":"市辖区","subList":[]},{"id":211001,"name":"市辖区","subList":[]},{"id":211101,"name":"市辖区","subList":[]},{"id":211201,"name":"市辖区","subList":[]},{"id":211301,"name":"市辖区","subList":[]},{"id":211401,"name":"市辖区","subList":[]}]},{"id":220000,"name":"吉林省","subList":[{"id":220100,"name":"长春市","subList":[{"id":220102,"name":"南关区","subList":[]},{"id":220103,"name":"宽城区","subList":[]},{"id":220104,"name":"朝阳区","subList":[]},{"id":220105,"name":"二道区","subList":[]},{"id":220106,"name":"绿园区","subList":[]},{"id":220112,"name":"双阳区","subList":[]},{"id":220113,"name":"九台区","subList":[]},{"id":220122,"name":"农安县","subList":[]},{"id":220182,"name":"榆树市","subList":[]},{"id":220183,"name":"德惠市","subList":[]}]},
{"id":220200,"name":"吉林市","subList":[{"id":220202,"name":"昌邑区","subList":[]},{"id":220203,"name":"龙潭区","subList":[]},{"id":220204,"name":"船营区","subList":[]},{"id":220211,"name":"丰满区","subList":[]},{"id":220221,"name":"永吉县","subList":[]},{"id":220281,"name":"蛟河市","subList":[]},{"id":220282,"name":"桦甸市","subList":[]},{"id":220283,"name":"舒兰市","subList":[]},{"id":220284,"name":"磐石市","subList":[]}]},{"id":220300,"name":"四平市","subList":[{"id":220302,"name":"铁西区","subList":[]},{"id":220303,"name":"铁东区","subList":[]},{"id":220322,"name":"梨树县","subList":[]},{"id":220323,"name":"伊通满族自治县","subList":[]},{"id":220381,"name":"公主岭市","subList":[]},{"id":220382,"name":"双辽市","subList":[]}]},{"id":220400,"name":"辽源市","subList":[{"id":220402,"name":"龙山区","subList":[]},{"id":220403,"name":"西安区","subList":[]},{"id":220421,"name":"东丰县","subList":[]},{"id":220422,"name":"东辽县","subList":[]}]},{"id":220500,"name":"通化市","subList":[{"id":220502,"name":"东昌区","subList":[]},{"id":220503,"name":"二道江区","subList":[]},
{"id":220521,"name":"通化县","subList":[]},{"id":220523,"name":"辉南县","subList":[]},{"id":220524,"name":"柳河县","subList":[]},{"id":220581,"name":"梅河口市","subList":[]},{"id":220582,"name":"集安市","subList":[]}]},{"id":220600,"name":"白山市","subList":[{"id":220602,"name":"浑江区","subList":[]},{"id":220605,"name":"江源区","subList":[]},{"id":220621,"name":"抚松县","subList":[]},{"id":220622,"name":"靖宇县","subList":[]},{"id":220623,"name":"长白朝鲜族自治县","subList":[]},{"id":220681,"name":"临江市","subList":[]}]},{"id":220700,"name":"松原市","subList":[{"id":220702,"name":"宁江区","subList":[]},{"id":220721,"name":"前郭尔罗斯蒙古族自治县","subList":[]},{"id":220722,"name":"长岭县","subList":[]},{"id":220723,"name":"乾安县","subList":[]},{"id":220781,"name":"扶余市","subList":[]}]},{"id":220800,"name":"白城市","subList":[{"id":220802,"name":"洮北区","subList":[]},{"id":220821,"name":"镇赉县","subList":[]},{"id":220822,"name":"通榆县","subList":[]},{"id":220881,"name":"洮南市","subList":[]},{"id":220882,"name":"大安市","subList":[]}]},
{"id":222400,"name":"延边朝鲜族自治州","subList":[{"id":222401,"name":"延吉市","subList":[]},{"id":222402,"name":"图们市","subList":[]},{"id":222403,"name":"敦化市","subList":[]},{"id":222404,"name":"珲春市","subList":[]},{"id":222405,"name":"龙井市","subList":[]},{"id":222406,"name":"和龙市","subList":[]},{"id":222424,"name":"汪清县","subList":[]},{"id":222426,"name":"安图县","subList":[]}]},{"id":220101,"name":"市辖区","subList":[]},{"id":220201,"name":"市辖区","subList":[]},{"id":220301,"name":"市辖区","subList":[]},{"id":220401,"name":"市辖区","subList":[]},{"id":220501,"name":"市辖区","subList":[]},{"id":220601,"name":"市辖区","subList":[]},{"id":220701,"name":"市辖区","subList":[]},{"id":220801,"name":"市辖区","subList":[]}]},{"id":230000,"name":"黑龙江省","subList":[{"id":230100,"name":"哈尔滨市","subList":[{"id":230102,"name":"道里区","subList":[]},{"id":230103,"name":"南岗区","subList":[]},{"id":230104,"name":"道外区","subList":[]},{"id":230108,"name":"平房区","subList":[]},{"id":230109,"name":"松北区","subList":[]},
{"id":230110,"name":"香坊区","subList":[]},{"id":230111,"name":"呼兰区","subList":[]},{"id":230112,"name":"阿城区","subList":[]},{"id":230113,"name":"双城区","subList":[]},{"id":230123,"name":"依兰县","subList":[]},{"id":230124,"name":"方正县","subList":[]},{"id":230125,"name":"宾县","subList":[]},{"id":230126,"name":"巴彦县","subList":[]},{"id":230127,"name":"木兰县","subList":[]},{"id":230128,"name":"通河县","subList":[]},{"id":230129,"name":"延寿县","subList":[]},{"id":230183,"name":"尚志市","subList":[]},{"id":230184,"name":"五常市","subList":[]}]},{"id":230200,"name":"齐齐哈尔市","subList":[{"id":230202,"name":"龙沙区","subList":[]},{"id":230203,"name":"建华区","subList":[]},{"id":230204,"name":"铁锋区","subList":[]},{"id":230205,"name":"昂昂溪区","subList":[]},{"id":230206,"name":"富拉尔基区","subList":[]},{"id":230207,"name":"碾子山区","subList":[]},{"id":230208,"name":"梅里斯达斡尔族区","subList":[]},{"id":230221,"name":"龙江县","subList":[]},{"id":230223,"name":"依安县","subList":[]},{"id":230224,"name":"泰来县","subList":[]},
{"id":230225,"name":"甘南县","subList":[]},{"id":230227,"name":"富裕县","subList":[]},{"id":230229,"name":"克山县","subList":[]},{"id":230230,"name":"克东县","subList":[]},{"id":230231,"name":"拜泉县","subList":[]},{"id":230281,"name":"讷河市","subList":[]}]},{"id":230300,"name":"鸡西市","subList":[{"id":230302,"name":"鸡冠区","subList":[]},{"id":230303,"name":"恒山区","subList":[]},{"id":230304,"name":"滴道区","subList":[]},{"id":230305,"name":"梨树区","subList":[]},{"id":230306,"name":"城子河区","subList":[]},{"id":230307,"name":"麻山区","subList":[]},{"id":230321,"name":"鸡东县","subList":[]},{"id":230381,"name":"虎林市","subList":[]},{"id":230382,"name":"密山市","subList":[]}]},{"id":230400,"name":"鹤岗市","subList":[{"id":230402,"name":"向阳区","subList":[]},{"id":230403,"name":"工农区","subList":[]},{"id":230404,"name":"南山区","subList":[]},{"id":230405,"name":"兴安区","subList":[]},{"id":230406,"name":"东山区","subList":[]},{"id":230407,"name":"兴山区","subList":[]},
{"id":230421,"name":"萝北县","subList":[]},{"id":230422,"name":"绥滨县","subList":[]}]},{"id":230500,"name":"双鸭山市","subList":[{"id":230502,"name":"尖山区","subList":[]},{"id":230503,"name":"岭东区","subList":[]},{"id":230505,"name":"四方台区","subList":[]},{"id":230506,"name":"宝山区","subList":[]},{"id":230521,"name":"集贤县","subList":[]},{"id":230522,"name":"友谊县","subList":[]},{"id":230523,"name":"宝清县","subList":[]},{"id":230524,"name":"饶河县","subList":[]}]},{"id":230600,"name":"大庆市","subList":[{"id":230602,"name":"萨尔图区","subList":[]},{"id":230603,"name":"龙凤区","subList":[]},{"id":230604,"name":"让胡路区","subList":[]},{"id":230605,"name":"红岗区","subList":[]},{"id":230606,"name":"大同区","subList":[]},{"id":230621,"name":"肇州县","subList":[]},{"id":230622,"name":"肇源县","subList":[]},{"id":230623,"name":"林甸县","subList":[]},{"id":230624,"name":"杜尔伯特蒙古族自治县","subList":[]}]},
{"id":230700,"name":"伊春市","subList":[{"id":230702,"name":"伊春区","subList":[]},{"id":230703,"name":"南岔区","subList":[]},{"id":230704,"name":"友好区","subList":[]},{"id":230705,"name":"西林区","subList":[]},{"id":230706,"name":"翠峦区","subList":[]},{"id":230707,"name":"新青区","subList":[]},{"id":230708,"name":"美溪区","subList":[]},{"id":230709,"name":"金山屯区","subList":[]},{"id":230710,"name":"五营区","subList":[]},{"id":230711,"name":"乌马河区","subList":[]},{"id":230712,"name":"汤旺河区","subList":[]},{"id":230713,"name":"带岭区","subList":[]},{"id":230714,"name":"乌伊岭区","subList":[]},{"id":230715,"name":"红星区","subList":[]},{"id":230716,"name":"上甘岭区","subList":[]},{"id":230722,"name":"嘉荫县","subList":[]},{"id":230781,"name":"铁力市","subList":[]}]},{"id":230800,"name":"佳木斯市","subList":[{"id":230803,"name":"向阳区","subList":[]},{"id":230804,"name":"前进区","subList":[]},{"id":230805,"name":"东风区","subList":[]},{"id":230811,"name":"郊区","subList":[]},
{"id":230822,"name":"桦南县","subList":[]},{"id":230826,"name":"桦川县","subList":[]},{"id":230828,"name":"汤原县","subList":[]},{"id":230833,"name":"抚远市","subList":[]},{"id":230881,"name":"同江市","subList":[]},{"id":230882,"name":"富锦市","subList":[]}]},{"id":230900,"name":"七台河市","subList":[{"id":230902,"name":"新兴区","subList":[]},{"id":230903,"name":"桃山区","subList":[]},{"id":230904,"name":"茄子河区","subList":[]},{"id":230921,"name":"勃利县","subList":[]}]},{"id":231000,"name":"牡丹江市","subList":[{"id":231002,"name":"东安区","subList":[]},{"id":231003,"name":"阳明区","subList":[]},{"id":231004,"name":"爱民区","subList":[]},{"id":231005,"name":"西安区","subList":[]},{"id":231025,"name":"林口县","subList":[]},{"id":231081,"name":"绥芬河市","subList":[]},{"id":231083,"name":"海林市","subList":[]},{"id":231084,"name":"宁安市","subList":[]},{"id":231085,"name":"穆棱市","subList":[]},{"id":231086,"name":"东宁市","subList":[]}]},
{"id":231100,"name":"黑河市","subList":[{"id":231102,"name":"爱辉区","subList":[]},{"id":231121,"name":"嫩江县","subList":[]},{"id":231123,"name":"逊克县","subList":[]},{"id":231124,"name":"孙吴县","subList":[]},{"id":231181,"name":"北安市","subList":[]},{"id":231182,"name":"五大连池市","subList":[]}]},{"id":231200,"name":"绥化市","subList":[{"id":231202,"name":"北林区","subList":[]},{"id":231221,"name":"望奎县","subList":[]},{"id":231222,"name":"兰西县","subList":[]},{"id":231223,"name":"青冈县","subList":[]},{"id":231224,"name":"庆安县","subList":[]},{"id":231225,"name":"明水县","subList":[]},{"id":231226,"name":"绥棱县","subList":[]},{"id":231281,"name":"安达市","subList":[]},{"id":231282,"name":"肇东市","subList":[]},{"id":231283,"name":"海伦市","subList":[]}]},{"id":232700,"name":"大兴安岭地区","subList":[{"id":232701,"name":"加格达奇区","subList":[]},{"id":232721,"name":"呼玛县","subList":[]},
{"id":232722,"name":"塔河县","subList":[]},{"id":232723,"name":"漠河县","subList":[]}]},{"id":230101,"name":"市辖区","subList":[]},{"id":230201,"name":"市辖区","subList":[]},{"id":230301,"name":"市辖区","subList":[]},{"id":230401,"name":"市辖区","subList":[]},{"id":230501,"name":"市辖区","subList":[]},{"id":230601,"name":"市辖区","subList":[]},{"id":230701,"name":"市辖区","subList":[]},{"id":230801,"name":"市辖区","subList":[]},{"id":230901,"name":"市辖区","subList":[]},{"id":231001,"name":"市辖区","subList":[]},{"id":231101,"name":"市辖区","subList":[]},{"id":231201,"name":"市辖区","subList":[]}]},{"id":310000,"name":"上海","subList":[{"id":310100,"name":"上海市","subList":[{"id":310101,"name":"黄浦区","subList":[]},{"id":310104,"name":"徐汇区","subList":[]},{"id":310105,"name":"长宁区","subList":[]},{"id":310106,"name":"静安区","subList":[]},{"id":310107,"name":"普陀区","subList":[]},{"id":310109,"name":"虹口区","subList":[]},
{"id":310110,"name":"杨浦区","subList":[]},{"id":310112,"name":"闵行区","subList":[]},{"id":310113,"name":"宝山区","subList":[]},{"id":310114,"name":"嘉定区","subList":[]},{"id":310115,"name":"浦东新区","subList":[]},{"id":310116,"name":"金山区","subList":[]},{"id":310117,"name":"松江区","subList":[]},{"id":310118,"name":"青浦区","subList":[]},{"id":310120,"name":"奉贤区","subList":[]}]},{"id":310200,"name":"上海郊县","subList":[{"id":310230,"name":"崇明县","subList":[]}]},{"id":310201,"name":"市辖区","subList":[]}]},{"id":320000,"name":"江苏省","subList":[{"id":320100,"name":"南京市","subList":[{"id":320102,"name":"玄武区","subList":[]},{"id":320104,"name":"秦淮区","subList":[]},{"id":320105,"name":"建邺区","subList":[]},{"id":320106,"name":"鼓楼区","subList":[]},{"id":320111,"name":"浦口区","subList":[]},{"id":320113,"name":"栖霞区","subList":[]},{"id":320114,"name":"雨花台区","subList":[]},{"id":320115,"name":"江宁区","subList":[]},
{"id":320116,"name":"六合区","subList":[]},{"id":320117,"name":"溧水区","subList":[]},{"id":320118,"name":"高淳区","subList":[]}]},{"id":320200,"name":"无锡市","subList":[{"id":320205,"name":"锡山区","subList":[]},{"id":320206,"name":"惠山区","subList":[]},{"id":320211,"name":"滨湖区","subList":[]},{"id":320213,"name":"梁溪区","subList":[]},{"id":320214,"name":"新吴区","subList":[]},{"id":320281,"name":"江阴市","subList":[]},{"id":320282,"name":"宜兴市","subList":[]}]},{"id":320300,"name":"徐州市","subList":[{"id":320302,"name":"鼓楼区","subList":[]},{"id":320303,"name":"云龙区","subList":[]},{"id":320305,"name":"贾汪区","subList":[]},{"id":320311,"name":"泉山区","subList":[]},{"id":320312,"name":"铜山区","subList":[]},{"id":320321,"name":"丰县","subList":[]},{"id":320322,"name":"沛县","subList":[]},{"id":320324,"name":"睢宁县","subList":[]},{"id":320381,"name":"新沂市","subList":[]},{"id":320382,"name":"邳州市","subList":[]}]},
{"id":320400,"name":"常州市","subList":[{"id":320402,"name":"天宁区","subList":[]},{"id":320404,"name":"钟楼区","subList":[]},{"id":320411,"name":"新北区","subList":[]},{"id":320412,"name":"武进区","subList":[]},{"id":320413,"name":"金坛区","subList":[]},{"id":320481,"name":"溧阳市","subList":[]}]},{"id":320500,"name":"苏州市","subList":[{"id":320505,"name":"虎丘区","subList":[]},{"id":320506,"name":"吴中区","subList":[]},{"id":320507,"name":"相城区","subList":[]},{"id":320508,"name":"姑苏区","subList":[]},{"id":320509,"name":"吴江区","subList":[]},{"id":320581,"name":"常熟市","subList":[]},{"id":320582,"name":"张家港市","subList":[]},{"id":320583,"name":"昆山市","subList":[]},{"id":320585,"name":"太仓市","subList":[]}]},{"id":320600,"name":"南通市","subList":[{"id":320602,"name":"崇川区","subList":[]},{"id":320611,"name":"港闸区","subList":[]},{"id":320612,"name":"通州区","subList":[]},{"id":320621,"name":"海安县","subList":[]},
{"id":320623,"name":"如东县","subList":[]},{"id":320681,"name":"启东市","subList":[]},{"id":320682,"name":"如皋市","subList":[]},{"id":320684,"name":"海门市","subList":[]}]},{"id":320700,"name":"连云港市","subList":[{"id":320703,"name":"连云区","subList":[]},{"id":320706,"name":"海州区","subList":[]},{"id":320707,"name":"赣榆区","subList":[]},{"id":320722,"name":"东海县","subList":[]},{"id":320723,"name":"灌云县","subList":[]},{"id":320724,"name":"灌南县","subList":[]}]},{"id":320800,"name":"淮安市","subList":[{"id":320802,"name":"清河区","subList":[]},{"id":320803,"name":"淮安区","subList":[]},{"id":320804,"name":"淮阴区","subList":[]},{"id":320811,"name":"清浦区","subList":[]},{"id":320826,"name":"涟水县","subList":[]},{"id":320829,"name":"洪泽县","subList":[]},{"id":320830,"name":"盱眙县","subList":[]},{"id":320831,"name":"金湖县","subList":[]}]},{"id":320900,"name":"盐城市","subList":[{"id":320902,"name":"亭湖区","subList":[]},
{"id":320903,"name":"盐都区","subList":[]},{"id":320904,"name":"大丰区","subList":[]},{"id":320921,"name":"响水县","subList":[]},{"id":320922,"name":"滨海县","subList":[]},{"id":320923,"name":"阜宁县","subList":[]},{"id":320924,"name":"射阳县","subList":[]},{"id":320925,"name":"建湖县","subList":[]},{"id":320981,"name":"东台市","subList":[]}]},
{"id":321000,"name":"扬州市","subList":[{"id":321002,"name":"广陵区","subList":[]},{"id":321003,"name":"邗江区","subList":[]},{"id":321012,"name":"江都区","subList":[]},{"id":321023,"name":"宝应县","subList":[]},{"id":321081,"name":"仪征市","subList":[]},{"id":321084,"name":"高邮市","subList":[]}]},{"id":321100,"name":"镇江市","subList":[{"id":321102,"name":"京口区","subList":[]},{"id":321111,"name":"润州区","subList":[]},
{"id":321112,"name":"丹徒区","subList":[]},{"id":321181,"name":"丹阳市","subList":[]},{"id":321182,"name":"扬中市","subList":[]},{"id":321183,"name":"句容市","subList":[]}]},{"id":321200,"name":"泰州市","subList":[{"id":321202,"name":"海陵区","subList":[]},{"id":321203,"name":"高港区","subList":[]},{"id":321204,"name":"姜堰区","subList":[]},{"id":321281,"name":"兴化市","subList":[]},{"id":321282,"name":"靖江市","subList":[]},{"id":321283,"name":"泰兴市","subList":[]}]},
{"id":321300,"name":"宿迁市","subList":[{"id":321302,"name":"宿城区","subList":[]},{"id":321311,"name":"宿豫区","subList":[]},{"id":321322,"name":"沭阳县","subList":[]},{"id":321323,"name":"泗阳县","subList":[]},{"id":321324,"name":"泗洪县","subList":[]}]},{"id":320101,"name":"市辖区","subList":[]},{"id":320201,"name":"市辖区","subList":[]},{"id":320301,"name":"市辖区","subList":[]},{"id":320401,"name":"市辖区","subList":[]},{"id":320501,"name":"市辖区","subList":[]},{"id":320601,"name":"市辖区","subList":[]},{"id":320701,"name":"市辖区","subList":[]},
{"id":320801,"name":"市辖区","subList":[]},{"id":320901,"name":"市辖区","subList":[]},{"id":321001,"name":"市辖区","subList":[]},{"id":321101,"name":"市辖区","subList":[]},{"id":321201,"name":"市辖区","subList":[]},{"id":321301,"name":"市辖区","subList":[]}]},{"id":330000,"name":"浙江省","subList":[{"id":330100,"name":"杭州市","subList":[{"id":330102,"name":"上城区","subList":[]},{"id":330103,"name":"下城区","subList":[]},{"id":330104,"name":"江干区","subList":[]},{"id":330105,"name":"拱墅区","subList":[]},{"id":330106,"name":"西湖区","subList":[]},{"id":330108,"name":"滨江区","subList":[]},
{"id":330109,"name":"萧山区","subList":[]},{"id":330110,"name":"余杭区","subList":[]},{"id":330111,"name":"富阳区","subList":[]},{"id":330122,"name":"桐庐县","subList":[]},{"id":330127,"name":"淳安县","subList":[]},{"id":330182,"name":"建德市","subList":[]},{"id":330185,"name":"临安市","subList":[]}]},{"id":330200,"name":"宁波市","subList":[{"id":330203,"name":"海曙区","subList":[]},{"id":330204,"name":"江东区","subList":[]},{"id":330205,"name":"江北区","subList":[]},{"id":330206,"name":"北仑区","subList":[]},{"id":330211,"name":"镇海区","subList":[]},{"id":330212,"name":"鄞州区","subList":[]},
{"id":330225,"name":"象山县","subList":[]},{"id":330226,"name":"宁海县","subList":[]},{"id":330281,"name":"余姚市","subList":[]},{"id":330282,"name":"慈溪市","subList":[]},{"id":330283,"name":"奉化市","subList":[]}]},{"id":330300,"name":"温州市","subList":[{"id":330302,"name":"鹿城区","subList":[]},{"id":330303,"name":"龙湾区","subList":[]},{"id":330304,"name":"瓯海区","subList":[]},{"id":330305,"name":"洞头区","subList":[]},{"id":330324,"name":"永嘉县","subList":[]},{"id":330326,"name":"平阳县","subList":[]},{"id":330327,"name":"苍南县","subList":[]},{"id":330328,"name":"文成县","subList":[]},{"id":330329,"name":"泰顺县","subList":[]},{"id":330381,"name":"瑞安市","subList":[]},{"id":330382,"name":"乐清市","subList":[]}]},{"id":330400,"name":"嘉兴市","subList":[{"id":330402,"name":"南湖区","subList":[]},{"id":330411,"name":"秀洲区","subList":[]},
{"id":330421,"name":"嘉善县","subList":[]},{"id":330424,"name":"海盐县","subList":[]},{"id":330481,"name":"海宁市","subList":[]},{"id":330482,"name":"平湖市","subList":[]},{"id":330483,"name":"桐乡市","subList":[]}]},{"id":330500,"name":"湖州市","subList":[{"id":330502,"name":"吴兴区","subList":[]},
{"id":330503,"name":"南浔区","subList":[]},{"id":330521,"name":"德清县","subList":[]},{"id":330522,"name":"长兴县","subList":[]},{"id":330523,"name":"安吉县","subList":[]},{"id":330501,"name":"市辖区","subList":[]},{"id":330511,"name":"郊区","subList":[]}]},{"id":330600,"name":"绍兴市","subList":[{"id":330602,"name":"越城区","subList":[]},{"id":330603,"name":"柯桥区","subList":[]},{"id":330604,"name":"上虞区","subList":[]},{"id":330624,"name":"新昌县","subList":[]},{"id":330681,"name":"诸暨市","subList":[]},{"id":330683,"name":"嵊州市","subList":[]}]},
{"id":330700,"name":"金华市","subList":[{"id":330702,"name":"婺城区","subList":[]},{"id":330703,"name":"金东区","subList":[]},{"id":330723,"name":"武义县","subList":[]},{"id":330726,"name":"浦江县","subList":[]},{"id":330727,"name":"磐安县","subList":[]},{"id":330781,"name":"兰溪市","subList":[]},{"id":330782,"name":"义乌市","subList":[]},{"id":330783,"name":"东阳市","subList":[]},{"id":330784,"name":"永康市","subList":[]}]},{"id":330800,"name":"衢州市","subList":[{"id":330802,"name":"柯城区","subList":[]},{"id":330803,"name":"衢江区","subList":[]},{"id":330822,"name":"常山县","subList":[]},{"id":330824,"name":"开化县","subList":[]},{"id":330825,"name":"龙游县","subList":[]},{"id":330881,"name":"江山市","subList":[]}]},{"id":330900,"name":"舟山市","subList":[{"id":330902,"name":"定海区","subList":[]},{"id":330903,"name":"普陀区","subList":[]},{"id":330921,"name":"岱山县","subList":[]},{"id":330922,"name":"嵊泗县","subList":[]}]},{"id":331000,"name":"台州市","subList":[{"id":331002,"name":"椒江区","subList":[]},
{"id":331003,"name":"黄岩区","subList":[]},{"id":331004,"name":"路桥区","subList":[]},{"id":331021,"name":"玉环县","subList":[]},{"id":331022,"name":"三门县","subList":[]},{"id":331023,"name":"天台县","subList":[]},{"id":331024,"name":"仙居县","subList":[]},{"id":331081,"name":"温岭市","subList":[]},{"id":331082,"name":"临海市","subList":[]}]},{"id":331100,"name":"丽水市","subList":[{"id":331102,"name":"莲都区","subList":[]},{"id":331121,"name":"青田县","subList":[]},{"id":331122,"name":"缙云县","subList":[]},{"id":331123,"name":"遂昌县","subList":[]},{"id":331124,"name":"松阳县","subList":[]},{"id":331125,"name":"云和县","subList":[]},{"id":331126,"name":"庆元县","subList":[]},{"id":331127,"name":"景宁畲族自治县","subList":[]},{"id":331181,"name":"龙泉市","subList":[]}]},{"id":330101,"name":"市辖区","subList":[]},{"id":330201,"name":"市辖区","subList":[]},
{"id":330301,"name":"市辖区","subList":[]},{"id":330401,"name":"市辖区","subList":[]},{"id":330601,"name":"市辖区","subList":[]},{"id":330701,"name":"市辖区","subList":[]},{"id":330801,"name":"市辖区","subList":[]},{"id":330901,"name":"市辖区","subList":[]},{"id":331001,"name":"市辖区","subList":[]},{"id":331101,"name":"市辖区","subList":[]}]},{"id":340000,"name":"安徽省","subList":[{"id":340100,"name":"合肥市","subList":[{"id":340102,"name":"瑶海区","subList":[]},{"id":340103,"name":"庐阳区","subList":[]},{"id":340104,"name":"蜀山区","subList":[]},{"id":340111,"name":"包河区","subList":[]},{"id":340121,"name":"长丰县","subList":[]},{"id":340122,"name":"肥东县","subList":[]},
{"id":340123,"name":"肥西县","subList":[]},{"id":340124,"name":"庐江县","subList":[]},{"id":340181,"name":"巢湖市","subList":[]}]},{"id":340200,"name":"芜湖市","subList":[{"id":340202,"name":"镜湖区","subList":[]},{"id":340203,"name":"弋江区","subList":[]},{"id":340207,"name":"鸠江区","subList":[]},{"id":340208,"name":"三山区","subList":[]},{"id":340221,"name":"芜湖县","subList":[]},{"id":340222,"name":"繁昌县","subList":[]},{"id":340223,"name":"南陵县","subList":[]},{"id":340225,"name":"无为县","subList":[]}]},{"id":340300,"name":"蚌埠市","subList":[{"id":340302,"name":"龙子湖区","subList":[]},
{"id":340303,"name":"蚌山区","subList":[]},{"id":340304,"name":"禹会区","subList":[]},{"id":340311,"name":"淮上区","subList":[]},{"id":340321,"name":"怀远县","subList":[]},{"id":340322,"name":"五河县","subList":[]},{"id":340323,"name":"固镇县","subList":[]}]},{"id":340400,"name":"淮南市","subList":[{"id":340402,"name":"大通区","subList":[]},
{"id":340403,"name":"田家庵区","subList":[]},{"id":340404,"name":"谢家集区","subList":[]},{"id":340405,"name":"八公山区","subList":[]},{"id":340406,"name":"潘集区","subList":[]},{"id":340421,"name":"凤台县","subList":[]},{"id":340422,"name":"寿县","subList":[]}]},{"id":340500,"name":"马鞍山市","subList":[{"id":340503,"name":"花山区","subList":[]},{"id":340504,"name":"雨山区","subList":[]},{"id":340506,"name":"博望区","subList":[]},
{"id":340521,"name":"当涂县","subList":[]},{"id":340522,"name":"含山县","subList":[]},{"id":340523,"name":"和县","subList":[]}]},{"id":340600,"name":"淮北市","subList":[{"id":340602,"name":"杜集区","subList":[]},{"id":340603,"name":"相山区","subList":[]},{"id":340604,"name":"烈山区","subList":[]},{"id":340621,"name":"濉溪县","subList":[]}]},{"id":340700,"name":"铜陵市","subList":[{"id":340705,"name":"铜官区","subList":[]},{"id":340706,"name":"义安区","subList":[]},{"id":340711,"name":"郊区","subList":[]},{"id":340722,"name":"枞阳县","subList":[]}]},{"id":340800,"name":"安庆市","subList":[{"id":340802,"name":"迎江区","subList":[]},{"id":340803,"name":"大观区","subList":[]},{"id":340811,"name":"宜秀区","subList":[]},{"id":340822,"name":"怀宁县","subList":[]},{"id":340824,"name":"潜山县","subList":[]},{"id":340825,"name":"太湖县","subList":[]},
{"id":340826,"name":"宿松县","subList":[]},{"id":340827,"name":"望江县","subList":[]},{"id":340828,"name":"岳西县","subList":[]},{"id":340881,"name":"桐城市","subList":[]}]},{"id":341000,"name":"黄山市","subList":[{"id":341002,"name":"屯溪区","subList":[]},{"id":341003,"name":"黄山区","subList":[]},{"id":341004,"name":"徽州区","subList":[]},{"id":341021,"name":"歙县","subList":[]},{"id":341022,"name":"休宁县","subList":[]},{"id":341023,"name":"黟县","subList":[]},{"id":341024,"name":"祁门县","subList":[]}]},{"id":341100,"name":"滁州市","subList":[{"id":341102,"name":"琅琊区","subList":[]},{"id":341103,"name":"南谯区","subList":[]},{"id":341122,"name":"来安县","subList":[]},{"id":341124,"name":"全椒县","subList":[]},{"id":341125,"name":"定远县","subList":[]},
{"id":341126,"name":"凤阳县","subList":[]},{"id":341181,"name":"天长市","subList":[]},{"id":341182,"name":"明光市","subList":[]}]},{"id":341200,"name":"阜阳市","subList":[{"id":341202,"name":"颍州区","subList":[]},{"id":341203,"name":"颍东区","subList":[]},{"id":341204,"name":"颍泉区","subList":[]},{"id":341221,"name":"临泉县","subList":[]},{"id":341222,"name":"太和县","subList":[]},{"id":341225,"name":"阜南县","subList":[]},{"id":341226,"name":"颍上县","subList":[]},{"id":341282,"name":"界首市","subList":[]}]},{"id":341300,"name":"宿州市","subList":[{"id":341302,"name":"埇桥区","subList":[]},{"id":341321,"name":"砀山县","subList":[]},{"id":341322,"name":"萧县","subList":[]},{"id":341323,"name":"灵璧县","subList":[]},
{"id":341324,"name":"泗县","subList":[]}]},{"id":341500,"name":"六安市","subList":[{"id":341502,"name":"金安区","subList":[]},{"id":341503,"name":"裕安区","subList":[]},{"id":341504,"name":"叶集区","subList":[]},{"id":341522,"name":"霍邱县","subList":[]},{"id":341523,"name":"舒城县","subList":[]},{"id":341524,"name":"金寨县","subList":[]},{"id":341525,"name":"霍山县","subList":[]}]},{"id":341600,"name":"亳州市","subList":[{"id":341602,"name":"谯城区","subList":[]},{"id":341621,"name":"涡阳县","subList":[]},{"id":341622,"name":"蒙城县","subList":[]},{"id":341623,"name":"利辛县","subList":[]}]},{"id":341700,"name":"池州市","subList":[{"id":341702,"name":"贵池区","subList":[]},{"id":341721,"name":"东至县","subList":[]},{"id":341722,"name":"石台县","subList":[]},{"id":341723,"name":"青阳县","subList":[]}]},{"id":341800,"name":"宣城市","subList":[{"id":341802,"name":"宣州区","subList":[]},{"id":341821,"name":"郎溪县","subList":[]},{"id":341822,"name":"广德县","subList":[]},{"id":341823,"name":"泾县","subList":[]},
{"id":341824,"name":"绩溪县","subList":[]},{"id":341825,"name":"旌德县","subList":[]},{"id":341881,"name":"宁国市","subList":[]}]},{"id":340101,"name":"市辖区","subList":[]},{"id":340201,"name":"市辖区","subList":[]},{"id":340301,"name":"市辖区","subList":[]},{"id":340401,"name":"市辖区","subList":[]},{"id":340501,"name":"市辖区","subList":[]},{"id":340601,"name":"市辖区","subList":[]},{"id":340701,"name":"市辖区","subList":[]},{"id":340801,"name":"市辖区","subList":[]},{"id":341001,"name":"市辖区","subList":[]},{"id":341101,"name":"市辖区","subList":[]},{"id":341201,"name":"市辖区","subList":[]},{"id":341301,"name":"市辖区","subList":[]},{"id":341501,"name":"市辖区","subList":[]},{"id":341601,"name":"市辖区","subList":[]},{"id":341701,"name":"市辖区","subList":[]},{"id":341801,"name":"市辖区","subList":[]}]},{"id":350000,"name":"福建省","subList":[{"id":350100,"name":"福州市","subList":[{"id":350102,"name":"鼓楼区","subList":[]},{"id":350103,"name":"台江区","subList":[]},{"id":350104,"name":"仓山区","subList":[]},{"id":350105,"name":"马尾区","subList":[]},
{"id":350111,"name":"晋安区","subList":[]},{"id":350121,"name":"闽侯县","subList":[]},{"id":350122,"name":"连江县","subList":[]},{"id":350123,"name":"罗源县","subList":[]},
{"id":350124,"name":"闽清县","subList":[]},{"id":350125,"name":"永泰县","subList":[]},{"id":350128,"name":"平潭县","subList":[]},{"id":350181,"name":"福清市","subList":[]},{"id":350182,"name":"长乐市","subList":[]}]},{"id":350200,"name":"厦门市","subList":[{"id":350203,"name":"思明区","subList":[]},{"id":350205,"name":"海沧区","subList":[]},{"id":350206,"name":"湖里区","subList":[]},{"id":350211,"name":"集美区","subList":[]},{"id":350212,"name":"同安区","subList":[]},{"id":350213,"name":"翔安区","subList":[]}]},{"id":350300,"name":"莆田市","subList":[{"id":350302,"name":"城厢区","subList":[]},
{"id":350303,"name":"涵江区","subList":[]},{"id":350304,"name":"荔城区","subList":[]},{"id":350305,"name":"秀屿区","subList":[]},{"id":350322,"name":"仙游县","subList":[]}]},{"id":350400,"name":"三明市","subList":[{"id":350402,"name":"梅列区","subList":[]},{"id":350403,"name":"三元区","subList":[]},{"id":350421,"name":"明溪县","subList":[]},{"id":350423,"name":"清流县","subList":[]},{"id":350424,"name":"宁化县","subList":[]},{"id":350425,"name":"大田县","subList":[]},{"id":350426,"name":"尤溪县","subList":[]},{"id":350427,"name":"沙县","subList":[]},{"id":350428,"name":"将乐县","subList":[]},{"id":350429,"name":"泰宁县","subList":[]},{"id":350430,"name":"建宁县","subList":[]},{"id":350481,"name":"永安市","subList":[]}]},{"id":350500,"name":"泉州市","subList":[{"id":350502,"name":"鲤城区","subList":[]},
{"id":350503,"name":"丰泽区","subList":[]},{"id":350504,"name":"洛江区","subList":[]},{"id":350505,"name":"泉港区","subList":[]},{"id":350521,"name":"惠安县","subList":[]},{"id":350524,"name":"安溪县","subList":[]},{"id":350525,"name":"永春县","subList":[]},{"id":350526,"name":"德化县","subList":[]},{"id":350527,"name":"金门县","subList":[]},
{"id":350581,"name":"石狮市","subList":[]},{"id":350582,"name":"晋江市","subList":[]},{"id":350583,"name":"南安市","subList":[]}]},{"id":350600,"name":"漳州市","subList":[{"id":350602,"name":"芗城区","subList":[]},{"id":350603,"name":"龙文区","subList":[]},{"id":350622,"name":"云霄县","subList":[]},{"id":350623,"name":"漳浦县","subList":[]},{"id":350624,"name":"诏安县","subList":[]},
{"id":350625,"name":"长泰县","subList":[]},{"id":350626,"name":"东山县","subList":[]},{"id":350627,"name":"南靖县","subList":[]},{"id":350628,"name":"平和县","subList":[]},{"id":350629,"name":"华安县","subList":[]},{"id":350681,"name":"龙海市","subList":[]}]},{"id":350700,"name":"南平市","subList":[{"id":350702,"name":"延平区","subList":[]},{"id":350703,"name":"建阳区","subList":[]},{"id":350721,"name":"顺昌县","subList":[]},{"id":350722,"name":"浦城县","subList":[]},{"id":350723,"name":"光泽县","subList":[]},{"id":350724,"name":"松溪县","subList":[]},{"id":350725,"name":"政和县","subList":[]},{"id":350781,"name":"邵武市","subList":[]},{"id":350782,"name":"武夷山市","subList":[]},
{"id":350783,"name":"建瓯市","subList":[]}]},{"id":350800,"name":"龙岩市","subList":[{"id":350802,"name":"新罗区","subList":[]},{"id":350803,"name":"永定区","subList":[]},{"id":350821,"name":"长汀县","subList":[]},{"id":350823,"name":"上杭县","subList":[]},{"id":350824,"name":"武平县","subList":[]},{"id":350825,"name":"连城县","subList":[]},{"id":350881,"name":"漳平市","subList":[]}]},{"id":350900,"name":"宁德市","subList":[{"id":350902,"name":"蕉城区","subList":[]},{"id":350921,"name":"霞浦县","subList":[]},{"id":350922,"name":"古田县","subList":[]},{"id":350923,"name":"屏南县","subList":[]},{"id":350924,"name":"寿宁县","subList":[]},{"id":350925,"name":"周宁县","subList":[]},{"id":350926,"name":"柘荣县","subList":[]},{"id":350981,"name":"福安市","subList":[]},{"id":350982,"name":"福鼎市","subList":[]}]},{"id":350101,"name":"市辖区","subList":[]},{"id":350201,"name":"市辖区","subList":[]},{"id":350301,"name":"市辖区","subList":[]},{"id":350401,"name":"市辖区","subList":[]},{"id":350501,"name":"市辖区","subList":[]},{"id":350601,"name":"市辖区","subList":[]},
{"id":350701,"name":"市辖区","subList":[]},{"id":350801,"name":"市辖区","subList":[]},{"id":350901,"name":"市辖区","subList":[]}]},{"id":360000,"name":"江西省","subList":[{"id":360100,"name":"南昌市","subList":[{"id":360102,"name":"东湖区","subList":[]},{"id":360103,"name":"西湖区","subList":[]},{"id":360104,"name":"青云谱区","subList":[]},{"id":360105,"name":"湾里区","subList":[]},{"id":360111,"name":"青山湖区","subList":[]},{"id":360112,"name":"新建区","subList":[]},{"id":360121,"name":"南昌县","subList":[]},{"id":360123,"name":"安义县","subList":[]},{"id":360124,"name":"进贤县","subList":[]}]},{"id":360200,"name":"景德镇市","subList":[{"id":360202,"name":"昌江区","subList":[]},{"id":360203,"name":"珠山区","subList":[]},{"id":360222,"name":"浮梁县","subList":[]},{"id":360281,"name":"乐平市","subList":[]}]},{"id":360300,"name":"萍乡市","subList":[{"id":360302,"name":"安源区","subList":[]},{"id":360313,"name":"湘东区","subList":[]},{"id":360321,"name":"莲花县","subList":[]},{"id":360322,"name":"上栗县","subList":[]},{"id":360323,"name":"芦溪县","subList":[]}]},
{"id":360400,"name":"九江市","subList":[{"id":360402,"name":"濂溪区","subList":[]},{"id":360403,"name":"浔阳区","subList":[]},{"id":360421,"name":"九江县","subList":[]},
{"id":360423,"name":"武宁县","subList":[]},{"id":360424,"name":"修水县","subList":[]},{"id":360425,"name":"永修县","subList":[]},{"id":360426,"name":"德安县","subList":[]},{"id":360427,"name":"庐山市","subList":[]},{"id":360428,"name":"都昌县","subList":[]},{"id":360429,"name":"湖口县","subList":[]},{"id":360430,"name":"彭泽县","subList":[]},{"id":360481,"name":"瑞昌市","subList":[]},{"id":360482,"name":"共青城市","subList":[]}]},{"id":360500,"name":"新余市","subList":[{"id":360502,"name":"渝水区","subList":[]},{"id":360521,"name":"分宜县","subList":[]}]},{"id":360600,"name":"鹰潭市","subList":[{"id":360602,"name":"月湖区","subList":[]},{"id":360622,"name":"余江县","subList":[]},{"id":360681,"name":"贵溪市","subList":[]}]},{"id":360700,"name":"赣州市","subList":[{"id":360702,"name":"章贡区","subList":[]},{"id":360703,"name":"南康区","subList":[]},{"id":360721,"name":"赣县","subList":[]},
{"id":360722,"name":"信丰县","subList":[]},{"id":360723,"name":"大余县","subList":[]},{"id":360724,"name":"上犹县","subList":[]},{"id":360725,"name":"崇义县","subList":[]},{"id":360726,"name":"安远县","subList":[]},{"id":360727,"name":"龙南县","subList":[]},{"id":360728,"name":"定南县","subList":[]},{"id":360729,"name":"全南县","subList":[]},{"id":360730,"name":"宁都县","subList":[]},{"id":360731,"name":"于都县","subList":[]},{"id":360732,"name":"兴国县","subList":[]},{"id":360733,"name":"会昌县","subList":[]},{"id":360734,"name":"寻乌县","subList":[]},
{"id":360735,"name":"石城县","subList":[]},{"id":360781,"name":"瑞金市","subList":[]}]},{"id":360800,"name":"吉安市","subList":[{"id":360802,"name":"吉州区","subList":[]},{"id":360803,"name":"青原区","subList":[]},{"id":360821,"name":"吉安县","subList":[]},{"id":360822,"name":"吉水县","subList":[]},{"id":360823,"name":"峡江县","subList":[]},{"id":360824,"name":"新干县","subList":[]},{"id":360825,"name":"永丰县","subList":[]},{"id":360826,"name":"泰和县","subList":[]},{"id":360827,"name":"遂川县","subList":[]},{"id":360828,"name":"万安县","subList":[]},{"id":360829,"name":"安福县","subList":[]},{"id":360830,"name":"永新县","subList":[]},{"id":360881,"name":"井冈山市","subList":[]}]},{"id":360900,"name":"宜春市","subList":[{"id":360902,"name":"袁州区","subList":[]},{"id":360921,"name":"奉新县","subList":[]},{"id":360922,"name":"万载县","subList":[]},{"id":360923,"name":"上高县","subList":[]},{"id":360924,"name":"宜丰县","subList":[]},{"id":360925,"name":"靖安县","subList":[]},{"id":360926,"name":"铜鼓县","subList":[]},{"id":360981,"name":"丰城市","subList":[]},
{"id":360982,"name":"樟树市","subList":[]},{"id":360983,"name":"高安市","subList":[]}]},{"id":361000,"name":"抚州市","subList":[{"id":361002,"name":"临川区","subList":[]},{"id":361021,"name":"南城县","subList":[]},{"id":361022,"name":"黎川县","subList":[]},{"id":361023,"name":"南丰县","subList":[]},{"id":361024,"name":"崇仁县","subList":[]},{"id":361025,"name":"乐安县","subList":[]},{"id":361026,"name":"宜黄县","subList":[]},{"id":361027,"name":"金溪县","subList":[]},{"id":361028,"name":"资溪县","subList":[]},{"id":361029,"name":"东乡县","subList":[]},{"id":361030,"name":"广昌县","subList":[]}]},{"id":361100,"name":"上饶市","subList":[{"id":361102,"name":"信州区","subList":[]},{"id":361103,"name":"广丰区","subList":[]},{"id":361121,"name":"上饶县","subList":[]},{"id":361123,"name":"玉山县","subList":[]},{"id":361124,"name":"铅山县","subList":[]},{"id":361125,"name":"横峰县","subList":[]},{"id":361126,"name":"弋阳县","subList":[]},{"id":361127,"name":"余干县","subList":[]},{"id":361128,"name":"鄱阳县","subList":[]},{"id":361129,"name":"万年县","subList":[]},
{"id":361130,"name":"婺源县","subList":[]},{"id":361181,"name":"德兴市","subList":[]}]},{"id":360101,"name":"市辖区","subList":[]},{"id":360201,"name":"市辖区","subList":[]},{"id":360301,"name":"市辖区","subList":[]},{"id":360401,"name":"市辖区","subList":[]},{"id":360501,"name":"市辖区","subList":[]},{"id":360601,"name":"市辖区","subList":[]},{"id":360701,"name":"市辖区","subList":[]},{"id":360801,"name":"市辖区","subList":[]},{"id":360901,"name":"市辖区","subList":[]},{"id":361001,"name":"市辖区","subList":[]},{"id":361101,"name":"市辖区","subList":[]}]},{"id":370000,"name":"山东省","subList":[{"id":370100,"name":"济南市","subList":[{"id":370102,"name":"历下区","subList":[]},{"id":370103,"name":"市中区","subList":[]},{"id":370104,"name":"槐荫区","subList":[]},{"id":370105,"name":"天桥区","subList":[]},{"id":370112,"name":"历城区","subList":[]},{"id":370113,"name":"长清区","subList":[]},{"id":370124,"name":"平阴县","subList":[]},{"id":370125,"name":"济阳县","subList":[]},{"id":370126,"name":"商河县","subList":[]},{"id":370181,"name":"章丘市","subList":[]}]},
{"id":370200,"name":"青岛市","subList":[{"id":370202,"name":"市南区","subList":[]},{"id":370203,"name":"市北区","subList":[]},{"id":370211,"name":"黄岛区","subList":[]},{"id":370212,"name":"崂山区","subList":[]},{"id":370213,"name":"李沧区","subList":[]},{"id":370214,"name":"城阳区","subList":[]},{"id":370281,"name":"胶州市","subList":[]},{"id":370282,"name":"即墨市","subList":[]},{"id":370283,"name":"平度市","subList":[]},{"id":370285,"name":"莱西市","subList":[]}]},{"id":370300,"name":"淄博市","subList":[{"id":370302,"name":"淄川区","subList":[]},{"id":370303,"name":"张店区","subList":[]},{"id":370304,"name":"博山区","subList":[]},{"id":370305,"name":"临淄区","subList":[]},{"id":370306,"name":"周村区","subList":[]},{"id":370321,"name":"桓台县","subList":[]},{"id":370322,"name":"高青县","subList":[]},{"id":370323,"name":"沂源县","subList":[]}]},{"id":370400,"name":"枣庄市","subList":[{"id":370402,"name":"市中区","subList":[]},{"id":370403,"name":"薛城区","subList":[]},{"id":370404,"name":"峄城区","subList":[]},{"id":370405,"name":"台儿庄区","subList":[]},
{"id":370406,"name":"山亭区","subList":[]},{"id":370481,"name":"滕州市","subList":[]}]},{"id":370500,"name":"东营市","subList":[{"id":370502,"name":"东营区","subList":[]},{"id":370503,"name":"河口区","subList":[]},{"id":370521,"name":"垦利县","subList":[]},{"id":370522,"name":"利津县","subList":[]},{"id":370523,"name":"广饶县","subList":[]}]},{"id":370600,"name":"烟台市","subList":[{"id":370602,"name":"芝罘区","subList":[]},{"id":370611,"name":"福山区","subList":[]},{"id":370612,"name":"牟平区","subList":[]},{"id":370613,"name":"莱山区","subList":[]},{"id":370634,"name":"长岛县","subList":[]},{"id":370681,"name":"龙口市","subList":[]},{"id":370682,"name":"莱阳市","subList":[]},{"id":370683,"name":"莱州市","subList":[]},{"id":370684,"name":"蓬莱市","subList":[]},{"id":370685,"name":"招远市","subList":[]},{"id":370686,"name":"栖霞市","subList":[]},{"id":370687,"name":"海阳市","subList":[]}]},{"id":370700,"name":"潍坊市","subList":[{"id":370702,"name":"潍城区","subList":[]},{"id":370703,"name":"寒亭区","subList":[]},{"id":370704,"name":"坊子区","subList":[]},
{"id":370705,"name":"奎文区","subList":[]},{"id":370724,"name":"临朐县","subList":[]},{"id":370725,"name":"昌乐县","subList":[]},{"id":370781,"name":"青州市","subList":[]},{"id":370782,"name":"诸城市","subList":[]},{"id":370783,"name":"寿光市","subList":[]},{"id":370784,"name":"安丘市","subList":[]},{"id":370785,"name":"高密市","subList":[]},{"id":370786,"name":"昌邑市","subList":[]}]},{"id":370800,"name":"济宁市","subList":[{"id":370811,"name":"任城区","subList":[]},{"id":370812,"name":"兖州区","subList":[]},{"id":370826,"name":"微山县","subList":[]},{"id":370827,"name":"鱼台县","subList":[]},{"id":370828,"name":"金乡县","subList":[]},{"id":370829,"name":"嘉祥县","subList":[]},{"id":370830,"name":"汶上县","subList":[]},{"id":370831,"name":"泗水县","subList":[]},{"id":370832,"name":"梁山县","subList":[]},{"id":370881,"name":"曲阜市","subList":[]},{"id":370883,"name":"邹城市","subList":[]}]},{"id":370900,"name":"泰安市","subList":[{"id":370902,"name":"泰山区","subList":[]},{"id":370911,"name":"岱岳区","subList":[]},{"id":370921,"name":"宁阳县","subList":[]},
{"id":370923,"name":"东平县","subList":[]},{"id":370982,"name":"新泰市","subList":[]},{"id":370983,"name":"肥城市","subList":[]}]},{"id":371000,"name":"威海市","subList":[{"id":371002,"name":"环翠区","subList":[]},{"id":371003,"name":"文登区","subList":[]},{"id":371082,"name":"荣成市","subList":[]},{"id":371083,"name":"乳山市","subList":[]}]},{"id":371100,"name":"日照市","subList":[{"id":371102,"name":"东港区","subList":[]},{"id":371103,"name":"岚山区","subList":[]},{"id":371121,"name":"五莲县","subList":[]},{"id":371122,"name":"莒县","subList":[]}]},{"id":371200,"name":"莱芜市","subList":[{"id":371202,"name":"莱城区","subList":[]},{"id":371203,"name":"钢城区","subList":[]}]},{"id":371300,"name":"临沂市","subList":[{"id":371302,"name":"兰山区","subList":[]},{"id":371311,"name":"罗庄区","subList":[]},{"id":371312,"name":"河东区","subList":[]},{"id":371321,"name":"沂南县","subList":[]},{"id":371322,"name":"郯城县","subList":[]},{"id":371323,"name":"沂水县","subList":[]},{"id":371324,"name":"兰陵县","subList":[]},{"id":371325,"name":"费县","subList":[]},
{"id":371326,"name":"平邑县","subList":[]},{"id":371327,"name":"莒南县","subList":[]},{"id":371328,"name":"蒙阴县","subList":[]},{"id":371329,"name":"临沭县","subList":[]}]},{"id":371400,"name":"德州市","subList":[{"id":371402,"name":"德城区","subList":[]},{"id":371403,"name":"陵城区","subList":[]},{"id":371422,"name":"宁津县","subList":[]},{"id":371423,"name":"庆云县","subList":[]},{"id":371424,"name":"临邑县","subList":[]},{"id":371425,"name":"齐河县","subList":[]},{"id":371426,"name":"平原县","subList":[]},{"id":371427,"name":"夏津县","subList":[]},{"id":371428,"name":"武城县","subList":[]},{"id":371481,"name":"乐陵市","subList":[]},{"id":371482,"name":"禹城市","subList":[]}]},{"id":371500,"name":"聊城市","subList":[{"id":371502,"name":"东昌府区","subList":[]},{"id":371521,"name":"阳谷县","subList":[]},{"id":371522,"name":"莘县","subList":[]},{"id":371523,"name":"茌平县","subList":[]},{"id":371524,"name":"东阿县","subList":[]},{"id":371525,"name":"冠县","subList":[]},{"id":371526,"name":"高唐县","subList":[]},{"id":371581,"name":"临清市","subList":[]}]},
{"id":371600,"name":"滨州市","subList":[{"id":371602,"name":"滨城区","subList":[]},{"id":371603,"name":"沾化区","subList":[]},{"id":371621,"name":"惠民县","subList":[]},{"id":371622,"name":"阳信县","subList":[]},{"id":371623,"name":"无棣县","subList":[]},{"id":371625,"name":"博兴县","subList":[]},{"id":371626,"name":"邹平县","subList":[]}]},{"id":371700,"name":"菏泽市","subList":[{"id":371702,"name":"牡丹区","subList":[]},{"id":371721,"name":"曹县","subList":[]},{"id":371722,"name":"单县","subList":[]},{"id":371723,"name":"成武县","subList":[]},{"id":371724,"name":"巨野县","subList":[]},{"id":371725,"name":"郓城县","subList":[]},{"id":371726,"name":"鄄城县","subList":[]},{"id":371727,"name":"定陶区","subList":[]},{"id":371728,"name":"东明县","subList":[]}]},{"id":370101,"name":"市辖区","subList":[]},{"id":370201,"name":"市辖区","subList":[]},{"id":370301,"name":"市辖区","subList":[]},{"id":370401,"name":"市辖区","subList":[]},{"id":370501,"name":"市辖区","subList":[]},{"id":370601,"name":"市辖区","subList":[]},{"id":370701,"name":"市辖区","subList":[]},
{"id":370801,"name":"市辖区","subList":[]},{"id":370901,"name":"市辖区","subList":[]},{"id":371001,"name":"市辖区","subList":[]},{"id":371101,"name":"市辖区","subList":[]},{"id":371201,"name":"市辖区","subList":[]},{"id":371301,"name":"市辖区","subList":[]},{"id":371401,"name":"市辖区","subList":[]},{"id":371501,"name":"市辖区","subList":[]},{"id":371601,"name":"市辖区","subList":[]},{"id":371701,"name":"市辖区","subList":[]}]},{"id":410000,"name":"河南省","subList":[{"id":410100,"name":"郑州市","subList":[{"id":410102,"name":"中原区","subList":[]},{"id":410103,"name":"二七区","subList":[]},{"id":410104,"name":"管城回族区","subList":[]},{"id":410105,"name":"金水区","subList":[]},{"id":410106,"name":"上街区","subList":[]},{"id":410108,"name":"惠济区","subList":[]},{"id":410122,"name":"中牟县","subList":[]},{"id":410181,"name":"巩义市","subList":[]},{"id":410182,"name":"荥阳市","subList":[]},{"id":410183,"name":"新密市","subList":[]},{"id":410184,"name":"新郑市","subList":[]},{"id":410185,"name":"登封市","subList":[]}]},
{"id":410200,"name":"开封市","subList":[{"id":410202,"name":"龙亭区","subList":[]},{"id":410203,"name":"顺河回族区","subList":[]},{"id":410204,"name":"鼓楼区","subList":[]},{"id":410205,"name":"禹王台区","subList":[]},{"id":410212,"name":"祥符区","subList":[]},{"id":410221,"name":"杞县","subList":[]},{"id":410222,"name":"通许县","subList":[]},{"id":410223,"name":"尉氏县","subList":[]},{"id":410225,"name":"兰考县","subList":[]}]},{"id":410300,"name":"洛阳市","subList":[{"id":410302,"name":"老城区","subList":[]},{"id":410303,"name":"西工区","subList":[]},{"id":410304,"name":"瀍河回族区","subList":[]},{"id":410305,"name":"涧西区","subList":[]},{"id":410306,"name":"吉利区","subList":[]},{"id":410311,"name":"洛龙区","subList":[]},{"id":410322,"name":"孟津县","subList":[]},{"id":410323,"name":"新安县","subList":[]},{"id":410324,"name":"栾川县","subList":[]},{"id":410325,"name":"嵩县","subList":[]},{"id":410326,"name":"汝阳县","subList":[]},{"id":410327,"name":"宜阳县","subList":[]},{"id":410328,"name":"洛宁县","subList":[]},
{"id":410329,"name":"伊川县","subList":[]},{"id":410381,"name":"偃师市","subList":[]}]},{"id":410400,"name":"平顶山市","subList":[{"id":410402,"name":"新华区","subList":[]},{"id":410403,"name":"卫东区","subList":[]},{"id":410404,"name":"石龙区","subList":[]},{"id":410411,"name":"湛河区","subList":[]},{"id":410421,"name":"宝丰县","subList":[]},{"id":410422,"name":"叶县","subList":[]},{"id":410423,"name":"鲁山县","subList":[]},{"id":410425,"name":"郏县","subList":[]},{"id":410481,"name":"舞钢市","subList":[]},{"id":410482,"name":"汝州市","subList":[]}]},{"id":410500,"name":"安阳市","subList":[{"id":410502,"name":"文峰区","subList":[]},{"id":410503,"name":"北关区","subList":[]},{"id":410505,"name":"殷都区","subList":[]},{"id":410506,"name":"龙安区","subList":[]},{"id":410522,"name":"安阳县","subList":[]},{"id":410523,"name":"汤阴县","subList":[]},{"id":410526,"name":"滑县","subList":[]},{"id":410527,"name":"内黄县","subList":[]},{"id":410581,"name":"林州市","subList":[]}]},{"id":410600,"name":"鹤壁市","subList":[{"id":410602,"name":"鹤山区","subList":[]},
{"id":410603,"name":"山城区","subList":[]},{"id":410611,"name":"淇滨区","subList":[]},{"id":410621,"name":"浚县","subList":[]},{"id":410622,"name":"淇县","subList":[]}]},{"id":410700,"name":"新乡市","subList":[{"id":410702,"name":"红旗区","subList":[]},{"id":410703,"name":"卫滨区","subList":[]},{"id":410704,"name":"凤泉区","subList":[]},{"id":410711,"name":"牧野区","subList":[]},{"id":410721,"name":"新乡县","subList":[]},{"id":410724,"name":"获嘉县","subList":[]},{"id":410725,"name":"原阳县","subList":[]},{"id":410726,"name":"延津县","subList":[]},{"id":410727,"name":"封丘县","subList":[]},{"id":410728,"name":"长垣县","subList":[]},{"id":410781,"name":"卫辉市","subList":[]},{"id":410782,"name":"辉县市","subList":[]}]},{"id":410800,"name":"焦作市","subList":[{"id":410802,"name":"解放区","subList":[]},{"id":410803,"name":"中站区","subList":[]},{"id":410804,"name":"马村区","subList":[]},{"id":410811,"name":"山阳区","subList":[]},{"id":410821,"name":"修武县","subList":[]},{"id":410822,"name":"博爱县","subList":[]},{"id":410823,"name":"武陟县","subList":[]},
{"id":410825,"name":"温县","subList":[]},{"id":410882,"name":"沁阳市","subList":[]},{"id":410883,"name":"孟州市","subList":[]}]},{"id":410900,"name":"濮阳市","subList":[{"id":410902,"name":"华龙区","subList":[]},{"id":410922,"name":"清丰县","subList":[]},{"id":410923,"name":"南乐县","subList":[]},{"id":410926,"name":"范县","subList":[]},{"id":410927,"name":"台前县","subList":[]},{"id":410928,"name":"濮阳县","subList":[]}]},{"id":411000,"name":"许昌市","subList":[{"id":411002,"name":"魏都区","subList":[]},{"id":411023,"name":"许昌县","subList":[]},{"id":411024,"name":"鄢陵县","subList":[]},{"id":411025,"name":"襄城县","subList":[]},{"id":411081,"name":"禹州市","subList":[]},{"id":411082,"name":"长葛市","subList":[]}]},{"id":411100,"name":"漯河市","subList":[{"id":411102,"name":"源汇区","subList":[]},{"id":411103,"name":"郾城区","subList":[]},{"id":411104,"name":"召陵区","subList":[]},{"id":411121,"name":"舞阳县","subList":[]},{"id":411122,"name":"临颍县","subList":[]}]},{"id":411200,"name":"三门峡市","subList":[{"id":411202,"name":"湖滨区","subList":[]},
{"id":411203,"name":"陕州区","subList":[]},{"id":411221,"name":"渑池县","subList":[]},{"id":411224,"name":"卢氏县","subList":[]},{"id":411281,"name":"义马市","subList":[]},{"id":411282,"name":"灵宝市","subList":[]}]},{"id":411300,"name":"南阳市","subList":[{"id":411302,"name":"宛城区","subList":[]},{"id":411303,"name":"卧龙区","subList":[]},{"id":411321,"name":"南召县","subList":[]},{"id":411322,"name":"方城县","subList":[]},{"id":411323,"name":"西峡县","subList":[]},{"id":411324,"name":"镇平县","subList":[]},{"id":411325,"name":"内乡县","subList":[]},{"id":411326,"name":"淅川县","subList":[]},{"id":411327,"name":"社旗县","subList":[]},{"id":411328,"name":"唐河县","subList":[]},{"id":411329,"name":"新野县","subList":[]},{"id":411330,"name":"桐柏县","subList":[]},{"id":411381,"name":"邓州市","subList":[]}]},{"id":411400,"name":"商丘市","subList":[{"id":411402,"name":"梁园区","subList":[]},{"id":411403,"name":"睢阳区","subList":[]},{"id":411421,"name":"民权县","subList":[]},{"id":411422,"name":"睢县","subList":[]},{"id":411423,"name":"宁陵县","subList":[]},
{"id":411424,"name":"柘城县","subList":[]},{"id":411425,"name":"虞城县","subList":[]},{"id":411426,"name":"夏邑县","subList":[]},{"id":411481,"name":"永城市","subList":[]}]},{"id":411500,"name":"信阳市","subList":[{"id":411502,"name":"浉河区","subList":[]},{"id":411503,"name":"平桥区","subList":[]},{"id":411521,"name":"罗山县","subList":[]},{"id":411522,"name":"光山县","subList":[]},{"id":411523,"name":"新县","subList":[]},{"id":411524,"name":"商城县","subList":[]},{"id":411525,"name":"固始县","subList":[]},{"id":411526,"name":"潢川县","subList":[]},{"id":411527,"name":"淮滨县","subList":[]},{"id":411528,"name":"息县","subList":[]}]},{"id":411600,"name":"周口市","subList":[{"id":411602,"name":"川汇区","subList":[]},{"id":411621,"name":"扶沟县","subList":[]},{"id":411622,"name":"西华县","subList":[]},{"id":411623,"name":"商水县","subList":[]},{"id":411624,"name":"沈丘县","subList":[]},{"id":411625,"name":"郸城县","subList":[]},{"id":411626,"name":"淮阳县","subList":[]},{"id":411627,"name":"太康县","subList":[]},{"id":411628,"name":"鹿邑县","subList":[]},
{"id":411681,"name":"项城市","subList":[]}]},{"id":411700,"name":"驻马店市","subList":[{"id":411702,"name":"驿城区","subList":[]},{"id":411721,"name":"西平县","subList":[]},{"id":411722,"name":"上蔡县","subList":[]},{"id":411723,"name":"平舆县","subList":[]},{"id":411724,"name":"正阳县","subList":[]},{"id":411725,"name":"确山县","subList":[]},{"id":411726,"name":"泌阳县","subList":[]},{"id":411727,"name":"汝南县","subList":[]},{"id":411728,"name":"遂平县","subList":[]},{"id":411729,"name":"新蔡县","subList":[]}]},{"id":419001,"name":"济源市","subList":[]},{"id":410101,"name":"市辖区","subList":[]},{"id":410201,"name":"市辖区","subList":[]},{"id":410301,"name":"市辖区","subList":[]},{"id":410401,"name":"市辖区","subList":[]},{"id":410501,"name":"市辖区","subList":[]},{"id":410601,"name":"市辖区","subList":[]},{"id":410701,"name":"市辖区","subList":[]},{"id":410801,"name":"市辖区","subList":[]},{"id":410901,"name":"市辖区","subList":[]},{"id":411001,"name":"市辖区","subList":[]},{"id":411101,"name":"市辖区","subList":[]},
{"id":411201,"name":"市辖区","subList":[]},{"id":411301,"name":"市辖区","subList":[]},{"id":411401,"name":"市辖区","subList":[]},{"id":411501,"name":"市辖区","subList":[]},{"id":411601,"name":"市辖区","subList":[]},{"id":411701,"name":"市辖区","subList":[]}]},{"id":420000,"name":"湖北省","subList":[{"id":420100,"name":"武汉市","subList":[{"id":420102,"name":"江岸区","subList":[]},{"id":420103,"name":"江汉区","subList":[]},{"id":420104,"name":"硚口区","subList":[]},{"id":420105,"name":"汉阳区","subList":[]},{"id":420106,"name":"武昌区","subList":[]},{"id":420107,"name":"青山区","subList":[]},{"id":420111,"name":"洪山区","subList":[]},{"id":420112,"name":"东西湖区","subList":[]},{"id":420113,"name":"汉南区","subList":[]},{"id":420114,"name":"蔡甸区","subList":[]},{"id":420115,"name":"江夏区","subList":[]},{"id":420116,"name":"黄陂区","subList":[]},{"id":420117,"name":"新洲区","subList":[]}]},{"id":420200,"name":"黄石市","subList":[{"id":420202,"name":"黄石港区","subList":[]},{"id":420203,"name":"西塞山区","subList":[]},
{"id":420204,"name":"下陆区","subList":[]},{"id":420205,"name":"铁山区","subList":[]},{"id":420222,"name":"阳新县","subList":[]},{"id":420281,"name":"大冶市","subList":[]}]},{"id":420300,"name":"十堰市","subList":[{"id":420302,"name":"茅箭区","subList":[]},{"id":420303,"name":"张湾区","subList":[]},{"id":420304,"name":"郧阳区","subList":[]},{"id":420322,"name":"郧西县","subList":[]},{"id":420323,"name":"竹山县","subList":[]},{"id":420324,"name":"竹溪县","subList":[]},{"id":420325,"name":"房县","subList":[]},{"id":420381,"name":"丹江口市","subList":[]}]},{"id":420500,"name":"宜昌市","subList":[{"id":420502,"name":"西陵区","subList":[]},{"id":420503,"name":"伍家岗区","subList":[]},{"id":420504,"name":"点军区","subList":[]},{"id":420505,"name":"猇亭区","subList":[]},{"id":420506,"name":"夷陵区","subList":[]},{"id":420525,"name":"远安县","subList":[]},{"id":420526,"name":"兴山县","subList":[]},{"id":420527,"name":"秭归县","subList":[]},{"id":420528,"name":"长阳土家族自治县","subList":[]},{"id":420529,"name":"五峰土家族自治县","subList":[]},
{"id":420581,"name":"宜都市","subList":[]},{"id":420582,"name":"当阳市","subList":[]},{"id":420583,"name":"枝江市","subList":[]}]},{"id":420600,"name":"襄阳市","subList":[{"id":420602,"name":"襄城区","subList":[]},{"id":420606,"name":"樊城区","subList":[]},{"id":420607,"name":"襄州区","subList":[]},{"id":420624,"name":"南漳县","subList":[]},{"id":420625,"name":"谷城县","subList":[]},{"id":420626,"name":"保康县","subList":[]},{"id":420682,"name":"老河口市","subList":[]},{"id":420683,"name":"枣阳市","subList":[]},{"id":420684,"name":"宜城市","subList":[]}]},{"id":420700,"name":"鄂州市","subList":[{"id":420702,"name":"梁子湖区","subList":[]},{"id":420703,"name":"华容区","subList":[]},{"id":420704,"name":"鄂城区","subList":[]}]},{"id":420800,"name":"荆门市","subList":[{"id":420802,"name":"东宝区","subList":[]},{"id":420804,"name":"掇刀区","subList":[]},{"id":420821,"name":"京山县","subList":[]},{"id":420822,"name":"沙洋县","subList":[]},{"id":420881,"name":"钟祥市","subList":[]}]},{"id":420900,"name":"孝感市","subList":[{"id":420902,"name":"孝南区","subList":[]},
{"id":420921,"name":"孝昌县","subList":[]},{"id":420922,"name":"大悟县","subList":[]},
{"id":420923,"name":"云梦县","subList":[]},{"id":420981,"name":"应城市","subList":[]},{"id":420982,"name":"安陆市","subList":[]},{"id":420984,"name":"汉川市","subList":[]}]},{"id":421000,"name":"荆州市","subList":[{"id":421002,"name":"沙市区","subList":[]},{"id":421003,"name":"荆州区","subList":[]},{"id":421022,"name":"公安县","subList":[]},{"id":421023,"name":"监利县","subList":[]},{"id":421024,"name":"江陵县","subList":[]},{"id":421081,"name":"石首市","subList":[]},{"id":421083,"name":"洪湖市","subList":[]},{"id":421087,"name":"松滋市","subList":[]}]},{"id":421100,"name":"黄冈市","subList":[{"id":421102,"name":"黄州区","subList":[]},{"id":421121,"name":"团风县","subList":[]},{"id":421122,"name":"红安县","subList":[]},{"id":421123,"name":"罗田县","subList":[]},{"id":421124,"name":"英山县","subList":[]},{"id":421125,"name":"浠水县","subList":[]},{"id":421126,"name":"蕲春县","subList":[]},{"id":421127,"name":"黄梅县","subList":[]},{"id":421181,"name":"麻城市","subList":[]},{"id":421182,"name":"武穴市","subList":[]}]},
{"id":421200,"name":"咸宁市","subList":[{"id":421202,"name":"咸安区","subList":[]},{"id":421221,"name":"嘉鱼县","subList":[]},{"id":421222,"name":"通城县","subList":[]},{"id":421223,"name":"崇阳县","subList":[]},{"id":421224,"name":"通山县","subList":[]},{"id":421281,"name":"赤壁市","subList":[]}]},{"id":421300,"name":"随州市","subList":[{"id":421303,"name":"曾都区","subList":[]},{"id":421321,"name":"随县","subList":[]},{"id":421381,"name":"广水市","subList":[]}]},{"id":422800,"name":"恩施土家族苗族自治州","subList":[{"id":422801,"name":"恩施市","subList":[]},{"id":422802,"name":"利川市","subList":[]},{"id":422822,"name":"建始县","subList":[]},{"id":422823,"name":"巴东县","subList":[]},{"id":422825,"name":"宣恩县","subList":[]},{"id":422826,"name":"咸丰县","subList":[]},{"id":422827,"name":"来凤县","subList":[]},{"id":422828,"name":"鹤峰县","subList":[]}]},{"id":429004,"name":"仙桃市","subList":[]},{"id":429005,"name":"潜江市","subList":[]},{"id":429006,"name":"天门市","subList":[]},{"id":429021,"name":"神农架林区","subList":[]},
{"id":420101,"name":"市辖区","subList":[]},{"id":420201,"name":"市辖区","subList":[]},{"id":420301,"name":"市辖区","subList":[]},{"id":420501,"name":"市辖区","subList":[]},{"id":420601,"name":"市辖区","subList":[]},{"id":420701,"name":"市辖区","subList":[]},{"id":420801,"name":"市辖区","subList":[]},{"id":420901,"name":"市辖区","subList":[]},{"id":421001,"name":"市辖区","subList":[]},{"id":421101,"name":"市辖区","subList":[]},{"id":421201,"name":"市辖区","subList":[]},{"id":421301,"name":"市辖区","subList":[]}]},{"id":430000,"name":"湖南省","subList":[{"id":430100,"name":"长沙市","subList":[{"id":430102,"name":"芙蓉区","subList":[]},{"id":430103,"name":"天心区","subList":[]},{"id":430104,"name":"岳麓区","subList":[]},{"id":430105,"name":"开福区","subList":[]},{"id":430111,"name":"雨花区","subList":[]},{"id":430112,"name":"望城区","subList":[]},{"id":430121,"name":"长沙县","subList":[]},{"id":430124,"name":"宁乡县","subList":[]},{"id":430181,"name":"浏阳市","subList":[]}]},
{"id":430200,"name":"株洲市","subList":[{"id":430202,"name":"荷塘区","subList":[]},{"id":430203,"name":"芦淞区","subList":[]},{"id":430204,"name":"石峰区","subList":[]},{"id":430211,"name":"天元区","subList":[]},{"id":430221,"name":"株洲县","subList":[]},{"id":430223,"name":"攸县","subList":[]},{"id":430224,"name":"茶陵县","subList":[]},{"id":430225,"name":"炎陵县","subList":[]},{"id":430281,"name":"醴陵市","subList":[]}]},{"id":430300,"name":"湘潭市","subList":[{"id":430302,"name":"雨湖区","subList":[]},{"id":430304,"name":"岳塘区","subList":[]},{"id":430321,"name":"湘潭县","subList":[]},{"id":430381,"name":"湘乡市","subList":[]},{"id":430382,"name":"韶山市","subList":[]}]},{"id":430400,"name":"衡阳市","subList":[{"id":430405,"name":"珠晖区","subList":[]},{"id":430406,"name":"雁峰区","subList":[]},{"id":430407,"name":"石鼓区","subList":[]},{"id":430408,"name":"蒸湘区","subList":[]},{"id":430412,"name":"南岳区","subList":[]},{"id":430421,"name":"衡阳县","subList":[]},
{"id":430422,"name":"衡南县","subList":[]},{"id":430423,"name":"衡山县","subList":[]},{"id":430424,"name":"衡东县","subList":[]},{"id":430426,"name":"祁东县","subList":[]},{"id":430481,"name":"耒阳市","subList":[]},{"id":430482,"name":"常宁市","subList":[]}]},{"id":430500,"name":"邵阳市","subList":[{"id":430502,"name":"双清区","subList":[]},{"id":430503,"name":"大祥区","subList":[]},{"id":430511,"name":"北塔区","subList":[]},{"id":430521,"name":"邵东县","subList":[]},{"id":430522,"name":"新邵县","subList":[]},{"id":430523,"name":"邵阳县","subList":[]},{"id":430524,"name":"隆回县","subList":[]},{"id":430525,"name":"洞口县","subList":[]},{"id":430527,"name":"绥宁县","subList":[]},{"id":430528,"name":"新宁县","subList":[]},{"id":430529,"name":"城步苗族自治县","subList":[]},{"id":430581,"name":"武冈市","subList":[]}]},{"id":430600,"name":"岳阳市","subList":[{"id":430602,"name":"岳阳楼区","subList":[]},{"id":430603,"name":"云溪区","subList":[]},{"id":430611,"name":"君山区","subList":[]},{"id":430621,"name":"岳阳县","subList":[]},
{"id":430623,"name":"华容县","subList":[]},{"id":430624,"name":"湘阴县","subList":[]},{"id":430626,"name":"平江县","subList":[]},{"id":430681,"name":"汨罗市","subList":[]},{"id":430682,"name":"临湘市","subList":[]}]},{"id":430700,"name":"常德市","subList":[{"id":430702,"name":"武陵区","subList":[]},{"id":430703,"name":"鼎城区","subList":[]},{"id":430721,"name":"安乡县","subList":[]},{"id":430722,"name":"汉寿县","subList":[]},{"id":430723,"name":"澧县","subList":[]},{"id":430724,"name":"临澧县","subList":[]},{"id":430725,"name":"桃源县","subList":[]},{"id":430726,"name":"石门县","subList":[]},{"id":430781,"name":"津市市","subList":[]}]},{"id":430800,"name":"张家界市","subList":[{"id":430802,"name":"永定区","subList":[]},{"id":430811,"name":"武陵源区","subList":[]},{"id":430821,"name":"慈利县","subList":[]},{"id":430822,"name":"桑植县","subList":[]}]},{"id":430900,"name":"益阳市","subList":[{"id":430902,"name":"资阳区","subList":[]},{"id":430903,"name":"赫山区","subList":[]},{"id":430921,"name":"南县","subList":[]},
{"id":430922,"name":"桃江县","subList":[]},{"id":430923,"name":"安化县","subList":[]},{"id":430981,"name":"沅江市","subList":[]}]},{"id":431000,"name":"郴州市","subList":[{"id":431002,"name":"北湖区","subList":[]},{"id":431003,"name":"苏仙区","subList":[]},{"id":431021,"name":"桂阳县","subList":[]},{"id":431022,"name":"宜章县","subList":[]},{"id":431023,"name":"永兴县","subList":[]},{"id":431024,"name":"嘉禾县","subList":[]},{"id":431025,"name":"临武县","subList":[]},{"id":431026,"name":"汝城县","subList":[]},{"id":431027,"name":"桂东县","subList":[]},{"id":431028,"name":"安仁县","subList":[]},{"id":431081,"name":"资兴市","subList":[]}]},{"id":431100,"name":"永州市","subList":[{"id":431102,"name":"零陵区","subList":[]},{"id":431103,"name":"冷水滩区","subList":[]},{"id":431121,"name":"祁阳县","subList":[]},{"id":431122,"name":"东安县","subList":[]},{"id":431123,"name":"双牌县","subList":[]},{"id":431124,"name":"道县","subList":[]},{"id":431125,"name":"江永县","subList":[]},{"id":431126,"name":"宁远县","subList":[]},
{"id":431127,"name":"蓝山县","subList":[]},{"id":431128,"name":"新田县","subList":[]},{"id":431129,"name":"江华瑶族自治县","subList":[]}]},{"id":431200,"name":"怀化市","subList":[{"id":431202,"name":"鹤城区","subList":[]},{"id":431221,"name":"中方县","subList":[]},{"id":431222,"name":"沅陵县","subList":[]},{"id":431223,"name":"辰溪县","subList":[]},{"id":431224,"name":"溆浦县","subList":[]},{"id":431225,"name":"会同县","subList":[]},{"id":431226,"name":"麻阳苗族自治县","subList":[]},{"id":431227,"name":"新晃侗族自治县","subList":[]},{"id":431228,"name":"芷江侗族自治县","subList":[]},{"id":431229,"name":"靖州苗族侗族自治县","subList":[]},{"id":431230,"name":"通道侗族自治县","subList":[]},{"id":431281,"name":"洪江市","subList":[]}]},{"id":431300,"name":"娄底市","subList":[{"id":431302,"name":"娄星区","subList":[]},{"id":431321,"name":"双峰县","subList":[]},{"id":431322,"name":"新化县","subList":[]},{"id":431381,"name":"冷水江市","subList":[]},{"id":431382,"name":"涟源市","subList":[]}]},
{"id":433100,"name":"湘西土家族苗族自治州","subList":[{"id":433101,"name":"吉首市","subList":[]},{"id":433122,"name":"泸溪县","subList":[]},{"id":433123,"name":"凤凰县","subList":[]},{"id":433124,"name":"花垣县","subList":[]},{"id":433125,"name":"保靖县","subList":[]},{"id":433126,"name":"古丈县","subList":[]},{"id":433127,"name":"永顺县","subList":[]},{"id":433130,"name":"龙山县","subList":[]}]},{"id":430101,"name":"市辖区","subList":[]},{"id":430201,"name":"市辖区","subList":[]},{"id":430301,"name":"市辖区","subList":[]},{"id":430401,"name":"市辖区","subList":[]},{"id":430501,"name":"市辖区","subList":[]},{"id":430601,"name":"市辖区","subList":[]},{"id":430701,"name":"市辖区","subList":[]},{"id":430801,"name":"市辖区","subList":[]},{"id":430901,"name":"市辖区","subList":[]},{"id":431001,"name":"市辖区","subList":[]},{"id":431101,"name":"市辖区","subList":[]},{"id":431201,"name":"市辖区","subList":[]},{"id":431301,"name":"市辖区","subList":[]}]},
{"id":440000,"name":"广东省","subList":[{"id":440100,"name":"广州市","subList":[{"id":440103,"name":"荔湾区","subList":[]},{"id":440104,"name":"越秀区","subList":[]},{"id":440105,"name":"海珠区","subList":[]},{"id":440106,"name":"天河区","subList":[]},{"id":440111,"name":"白云区","subList":[]},{"id":440112,"name":"黄埔区","subList":[]},{"id":440113,"name":"番禺区","subList":[]},{"id":440114,"name":"花都区","subList":[]},{"id":440115,"name":"南沙区","subList":[]},{"id":440117,"name":"从化区","subList":[]},{"id":440118,"name":"增城区","subList":[]}]},{"id":440200,"name":"韶关市","subList":[{"id":440203,"name":"武江区","subList":[]},{"id":440204,"name":"浈江区","subList":[]},{"id":440205,"name":"曲江区","subList":[]},{"id":440222,"name":"始兴县","subList":[]},{"id":440224,"name":"仁化县","subList":[]},{"id":440229,"name":"翁源县","subList":[]},{"id":440232,"name":"乳源瑶族自治县","subList":[]},{"id":440233,"name":"新丰县","subList":[]},{"id":440281,"name":"乐昌市","subList":[]},{"id":440282,"name":"南雄市","subList":[]}]},
{"id":440300,"name":"深圳市","subList":[{"id":440303,"name":"罗湖区","subList":[]},{"id":440304,"name":"福田区","subList":[]},
{"id":440305,"name":"南山区","subList":[]},{"id":440306,"name":"宝安区","subList":[]},{"id":440307,"name":"龙岗区","subList":[]},{"id":440308,"name":"盐田区","subList":[]}]},{"id":440400,"name":"珠海市","subList":[{"id":440402,"name":"香洲区","subList":[]},{"id":440403,"name":"斗门区","subList":[]},{"id":440404,"name":"金湾区","subList":[]}]},{"id":440500,"name":"汕头市","subList":[{"id":440507,"name":"龙湖区","subList":[]},
{"id":440511,"name":"金平区","subList":[]},{"id":440512,"name":"濠江区","subList":[]},{"id":440513,"name":"潮阳区","subList":[]},{"id":440514,"name":"潮南区","subList":[]},{"id":440515,"name":"澄海区","subList":[]},{"id":440523,"name":"南澳县","subList":[]}]},{"id":440600,"name":"佛山市","subList":[{"id":440604,"name":"禅城区","subList":[]},{"id":440605,"name":"南海区","subList":[]},{"id":440606,"name":"顺德区","subList":[]},{"id":440607,"name":"三水区","subList":[]},{"id":440608,"name":"高明区","subList":[]}]},{"id":440700,"name":"江门市","subList":[{"id":440703,"name":"蓬江区","subList":[]},{"id":440704,"name":"江海区","subList":[]},{"id":440705,"name":"新会区","subList":[]},{"id":440781,"name":"台山市","subList":[]},{"id":440783,"name":"开平市","subList":[]},{"id":440784,"name":"鹤山市","subList":[]},{"id":440785,"name":"恩平市","subList":[]}]},{"id":440800,"name":"湛江市","subList":[{"id":440802,"name":"赤坎区","subList":[]},{"id":440803,"name":"霞山区","subList":[]},{"id":440804,"name":"坡头区","subList":[]},{"id":440811,"name":"麻章区","subList":[]},
{"id":440823,"name":"遂溪县","subList":[]},{"id":440825,"name":"徐闻县","subList":[]},{"id":440881,"name":"廉江市","subList":[]},{"id":440882,"name":"雷州市","subList":[]},{"id":440883,"name":"吴川市","subList":[]}]},{"id":440900,"name":"茂名市","subList":[{"id":440902,"name":"茂南区","subList":[]},{"id":440904,"name":"电白区","subList":[]},{"id":440981,"name":"高州市","subList":[]},{"id":440982,"name":"化州市","subList":[]},{"id":440983,"name":"信宜市","subList":[]}]},{"id":441200,"name":"肇庆市","subList":[{"id":441202,"name":"端州区","subList":[]},{"id":441203,"name":"鼎湖区","subList":[]},{"id":441204,"name":"高要区","subList":[]},{"id":441223,"name":"广宁县","subList":[]},{"id":441224,"name":"怀集县","subList":[]},{"id":441225,"name":"封开县","subList":[]},{"id":441226,"name":"德庆县","subList":[]},{"id":441284,"name":"四会市","subList":[]}]},{"id":441300,"name":"惠州市","subList":[{"id":441302,"name":"惠城区","subList":[]},{"id":441303,"name":"惠阳区","subList":[]},{"id":441322,"name":"博罗县","subList":[]},{"id":441323,"name":"惠东县","subList":[]},
{"id":441324,"name":"龙门县","subList":[]}]},{"id":441400,"name":"梅州市","subList":[{"id":441402,"name":"梅江区","subList":[]},{"id":441403,"name":"梅县区","subList":[]},{"id":441422,"name":"大埔县","subList":[]},{"id":441423,"name":"丰顺县","subList":[]},{"id":441424,"name":"五华县","subList":[]},{"id":441426,"name":"平远县","subList":[]},{"id":441427,"name":"蕉岭县","subList":[]},{"id":441481,"name":"兴宁市","subList":[]}]},{"id":441500,"name":"汕尾市","subList":[{"id":441502,"name":"城区","subList":[]},{"id":441521,"name":"海丰县","subList":[]},{"id":441523,"name":"陆河县","subList":[]},{"id":441581,"name":"陆丰市","subList":[]}]},{"id":441600,"name":"河源市","subList":[{"id":441602,"name":"源城区","subList":[]},{"id":441621,"name":"紫金县","subList":[]},{"id":441622,"name":"龙川县","subList":[]},{"id":441623,"name":"连平县","subList":[]},{"id":441624,"name":"和平县","subList":[]},{"id":441625,"name":"东源县","subList":[]}]},{"id":441700,"name":"阳江市","subList":[{"id":441702,"name":"江城区","subList":[]},{"id":441704,"name":"阳东区","subList":[]},
{"id":441721,"name":"阳西县","subList":[]},{"id":441781,"name":"阳春市","subList":[]}]},{"id":441800,"name":"清远市","subList":[{"id":441802,"name":"清城区","subList":[]},{"id":441803,"name":"清新区","subList":[]},{"id":441821,"name":"佛冈县","subList":[]},{"id":441823,"name":"阳山县","subList":[]},{"id":441825,"name":"连山壮族瑶族自治县","subList":[]},{"id":441826,"name":"连南瑶族自治县","subList":[]},{"id":441881,"name":"英德市","subList":[]},{"id":441882,"name":"连州市","subList":[]}]},{"id":441900,"name":"东莞市","subList":[]},{"id":442000,"name":"中山市","subList":[]},{"id":442100,"name":"东沙群岛","subList":[{"id":442101,"name":"东沙群岛","subList":[]}]},{"id":445100,"name":"潮州市","subList":[{"id":445102,"name":"湘桥区","subList":[]},{"id":445103,"name":"潮安区","subList":[]},{"id":445122,"name":"饶平县","subList":[]}]},{"id":445200,"name":"揭阳市","subList":[{"id":445202,"name":"榕城区","subList":[]},{"id":445203,"name":"揭东区","subList":[]},{"id":445222,"name":"揭西县","subList":[]},{"id":445224,"name":"惠来县","subList":[]},
{"id":445281,"name":"普宁市","subList":[]}]},{"id":445300,"name":"云浮市","subList":[{"id":445302,"name":"云城区","subList":[]},{"id":445303,"name":"云安区","subList":[]},{"id":445321,"name":"新兴县","subList":[]},{"id":445322,"name":"郁南县","subList":[]},{"id":445381,"name":"罗定市","subList":[]}]},{"id":440101,"name":"市辖区","subList":[]},{"id":440201,"name":"市辖区","subList":[]},{"id":440301,"name":"市辖区","subList":[]},{"id":440401,"name":"市辖区","subList":[]},{"id":440501,"name":"市辖区","subList":[]},{"id":440601,"name":"市辖区","subList":[]},{"id":440701,"name":"市辖区","subList":[]},{"id":440801,"name":"市辖区","subList":[]},{"id":440901,"name":"市辖区","subList":[]},{"id":441201,"name":"市辖区","subList":[]},{"id":441301,"name":"市辖区","subList":[]},{"id":441401,"name":"市辖区","subList":[]},{"id":441501,"name":"市辖区","subList":[]},
{"id":441601,"name":"市辖区","subList":[]},{"id":441701,"name":"市辖区","subList":[]},{"id":441801,"name":"市辖区","subList":[]},{"id":441901,"name":"市辖区","subList":[]},{"id":442001,"name":"市辖区","subList":[]},{"id":445101,"name":"市辖区","subList":[]},{"id":445201,"name":"市辖区","subList":[]},{"id":445301,"name":"市辖区","subList":[]}]},{"id":450000,"name":"广西壮族自治区","subList":[{"id":450100,"name":"南宁市","subList":[{"id":450102,"name":"兴宁区","subList":[]},{"id":450103,"name":"青秀区","subList":[]},{"id":450105,"name":"江南区","subList":[]},{"id":450107,"name":"西乡塘区","subList":[]},{"id":450108,"name":"良庆区","subList":[]},{"id":450109,"name":"邕宁区","subList":[]},{"id":450110,"name":"武鸣区","subList":[]},{"id":450123,"name":"隆安县","subList":[]},{"id":450124,"name":"马山县","subList":[]},{"id":450125,"name":"上林县","subList":[]},{"id":450126,"name":"宾阳县","subList":[]},{"id":450127,"name":"横县","subList":[]}]},{"id":450200,"name":"柳州市","subList":[{"id":450202,"name":"城中区","subList":[]},{"id":450203,"name":"鱼峰区","subList":[]},
{"id":450204,"name":"柳南区","subList":[]},{"id":450205,"name":"柳北区","subList":[]},{"id":450221,"name":"柳江区","subList":[]},
{"id":450222,"name":"柳城县","subList":[]},{"id":450223,"name":"鹿寨县","subList":[]},{"id":450224,"name":"融安县","subList":[]},{"id":450225,"name":"融水苗族自治县","subList":[]},{"id":450226,"name":"三江侗族自治县","subList":[]}]},{"id":450300,"name":"桂林市","subList":[{"id":450302,"name":"秀峰区","subList":[]},{"id":450303,"name":"叠彩区","subList":[]},{"id":450304,"name":"象山区","subList":[]},{"id":450305,"name":"七星区","subList":[]},{"id":450311,"name":"雁山区","subList":[]},{"id":450312,"name":"临桂区","subList":[]},{"id":450321,"name":"阳朔县","subList":[]},{"id":450323,"name":"灵川县","subList":[]},{"id":450324,"name":"全州县","subList":[]},{"id":450325,"name":"兴安县","subList":[]},{"id":450326,"name":"永福县","subList":[]},{"id":450327,"name":"灌阳县","subList":[]},{"id":450328,"name":"龙胜各族自治县","subList":[]},{"id":450329,"name":"资源县","subList":[]},{"id":450330,"name":"平乐县","subList":[]},{"id":450331,"name":"荔浦县","subList":[]},{"id":450332,"name":"恭城瑶族自治县","subList":[]}]},
{"id":450400,"name":"梧州市","subList":[{"id":450403,"name":"万秀区","subList":[]},{"id":450405,"name":"长洲区","subList":[]},{"id":450406,"name":"龙圩区","subList":[]},{"id":450421,"name":"苍梧县","subList":[]},{"id":450422,"name":"藤县","subList":[]},{"id":450423,"name":"蒙山县","subList":[]},{"id":450481,"name":"岑溪市","subList":[]}]},{"id":450500,"name":"北海市","subList":[{"id":450502,"name":"海城区","subList":[]},{"id":450503,"name":"银海区","subList":[]},{"id":450512,"name":"铁山港区","subList":[]},{"id":450521,"name":"合浦县","subList":[]}]},{"id":450600,"name":"防城港市","subList":[{"id":450602,"name":"港口区","subList":[]},{"id":450603,"name":"防城区","subList":[]},{"id":450621,"name":"上思县","subList":[]},{"id":450681,"name":"东兴市","subList":[]}]},{"id":450700,"name":"钦州市","subList":[{"id":450702,"name":"钦南区","subList":[]},{"id":450703,"name":"钦北区","subList":[]},{"id":450721,"name":"灵山县","subList":[]},{"id":450722,"name":"浦北县","subList":[]}]},{"id":450800,"name":"贵港市","subList":[{"id":450802,"name":"港北区","subList":[]},
{"id":450803,"name":"港南区","subList":[]},{"id":450804,"name":"覃塘区","subList":[]},{"id":450821,"name":"平南县","subList":[]},{"id":450881,"name":"桂平市","subList":[]}]},{"id":450900,"name":"玉林市","subList":[{"id":450902,"name":"玉州区","subList":[]},{"id":450903,"name":"福绵区","subList":[]},{"id":450921,"name":"容县","subList":[]},{"id":450922,"name":"陆川县","subList":[]},{"id":450923,"name":"博白县","subList":[]},{"id":450924,"name":"兴业县","subList":[]},{"id":450981,"name":"北流市","subList":[]}]},{"id":451000,"name":"百色市","subList":[{"id":451002,"name":"右江区","subList":[]},{"id":451021,"name":"田阳县","subList":[]},{"id":451022,"name":"田东县","subList":[]},{"id":451023,"name":"平果县","subList":[]},{"id":451024,"name":"德保县","subList":[]},{"id":451026,"name":"那坡县","subList":[]},{"id":451027,"name":"凌云县","subList":[]},{"id":451028,"name":"乐业县","subList":[]},{"id":451029,"name":"田林县","subList":[]},{"id":451030,"name":"西林县","subList":[]},{"id":451031,"name":"隆林各族自治县","subList":[]},
{"id":451081,"name":"靖西市","subList":[]}]},{"id":451100,"name":"贺州市","subList":[{"id":451102,"name":"八步区","subList":[]},{"id":451121,"name":"昭平县","subList":[]},{"id":451122,"name":"钟山县","subList":[]},{"id":451123,"name":"富川瑶族自治县","subList":[]}]},{"id":451200,"name":"河池市","subList":[{"id":451202,"name":"金城江区","subList":[]},{"id":451221,"name":"南丹县","subList":[]},{"id":451222,"name":"天峨县","subList":[]},{"id":451223,"name":"凤山县","subList":[]},{"id":451224,"name":"东兰县","subList":[]},{"id":451225,"name":"罗城仫佬族自治县","subList":[]},{"id":451226,"name":"环江毛南族自治县","subList":[]},{"id":451227,"name":"巴马瑶族自治县","subList":[]},{"id":451228,"name":"都安瑶族自治县","subList":[]},{"id":451229,"name":"大化瑶族自治县","subList":[]},{"id":451281,"name":"宜州市","subList":[]}]},{"id":451300,"name":"来宾市","subList":[{"id":451302,"name":"兴宾区","subList":[]},{"id":451321,"name":"忻城县","subList":[]},
{"id":451322,"name":"象州县","subList":[]},{"id":451323,"name":"武宣县","subList":[]},{"id":451324,"name":"金秀瑶族自治县","subList":[]},{"id":451381,"name":"合山市","subList":[]}]},{"id":451400,"name":"崇左市","subList":[{"id":451402,"name":"江州区","subList":[]},
{"id":451421,"name":"扶绥县","subList":[]},{"id":451422,"name":"宁明县","subList":[]},{"id":451423,"name":"龙州县","subList":[]},{"id":451424,"name":"大新县","subList":[]},{"id":451425,"name":"天等县","subList":[]},{"id":451481,"name":"凭祥市","subList":[]}]},{"id":450101,"name":"市辖区","subList":[]},{"id":450201,"name":"市辖区","subList":[]},{"id":450301,"name":"市辖区","subList":[]},{"id":450401,"name":"市辖区","subList":[]},{"id":450501,"name":"市辖区","subList":[]},{"id":450601,"name":"市辖区","subList":[]},{"id":450701,"name":"市辖区","subList":[]},{"id":450801,"name":"市辖区","subList":[]},{"id":450901,"name":"市辖区","subList":[]},{"id":451001,"name":"市辖区","subList":[]},{"id":451101,"name":"市辖区","subList":[]},{"id":451201,"name":"市辖区","subList":[]},{"id":451301,"name":"市辖区","subList":[]},{"id":451401,"name":"市辖区","subList":[]}]},{"id":460000,"name":"海南省","subList":[{"id":460100,"name":"海口市","subList":[{"id":460105,"name":"秀英区","subList":[]},{"id":460106,"name":"龙华区","subList":[]},
{"id":460107,"name":"琼山区","subList":[]},{"id":460108,"name":"美兰区","subList":[]}]},{"id":460200,"name":"三亚市","subList":[{"id":460202,"name":"海棠区","subList":[]},{"id":460203,"name":"吉阳区","subList":[]},{"id":460204,"name":"天涯区","subList":[]},{"id":460205,"name":"崖州区","subList":[]}]},{"id":460300,"name":"三沙市","subList":[{"id":460321,"name":"西沙群岛","subList":[]},{"id":460322,"name":"南沙群岛","subList":[]},{"id":460323,"name":"中沙群岛的岛礁及其海域","subList":[]}]},{"id":460400,"name":"儋州市","subList":[]},{"id":469001,"name":"五指山市","subList":[]},{"id":469002,"name":"琼海市","subList":[]},{"id":469005,"name":"文昌市","subList":[]},{"id":469006,"name":"万宁市","subList":[]},{"id":469007,"name":"东方市","subList":[]},{"id":469021,"name":"定安县","subList":[]},{"id":469022,"name":"屯昌县","subList":[]},{"id":469023,"name":"澄迈县","subList":[]},{"id":469024,"name":"临高县","subList":[]},{"id":469025,"name":"白沙黎族自治县","subList":[]},{"id":469026,"name":"昌江黎族自治县","subList":[]},
{"id":469027,"name":"乐东黎族自治县","subList":[]},{"id":469028,"name":"陵水黎族自治县","subList":[]},{"id":469029,"name":"保亭黎族苗族自治县","subList":[]},{"id":469030,"name":"琼中黎族苗族自治县","subList":[]},{"id":460101,"name":"市辖区","subList":[]},{"id":460201,"name":"市辖区","subList":[]},{"id":460301,"name":"市辖区","subList":[]},{"id":460401,"name":"市辖区","subList":[]}]},{"id":500000,"name":"重庆","subList":[{"id":500100,"name":"重庆市","subList":[{"id":500101,"name":"万州区","subList":[]},{"id":500102,"name":"涪陵区","subList":[]},{"id":500103,"name":"渝中区","subList":[]},{"id":500104,"name":"大渡口区","subList":[]},{"id":500105,"name":"江北区","subList":[]},{"id":500106,"name":"沙坪坝区","subList":[]},{"id":500107,"name":"九龙坡区","subList":[]},{"id":500108,"name":"南岸区","subList":[]},{"id":500109,"name":"北碚区","subList":[]},{"id":500110,"name":"綦江区","subList":[]},{"id":500111,"name":"大足区","subList":[]},{"id":500112,"name":"渝北区","subList":[]},{"id":500113,"name":"巴南区","subList":[]},
{"id":500114,"name":"黔江区","subList":[]},{"id":500115,"name":"长寿区","subList":[]},{"id":500116,"name":"江津区","subList":[]},{"id":500117,"name":"合川区","subList":[]},{"id":500118,"name":"永川区","subList":[]},{"id":500119,"name":"南川区","subList":[]},{"id":500120,"name":"璧山区","subList":[]},{"id":500151,"name":"铜梁区","subList":[]},{"id":500152,"name":"潼南区","subList":[]},{"id":500153,"name":"荣昌区","subList":[]}]},{"id":500200,"name":"重庆郊县","subList":[{"id":500228,"name":"梁平县","subList":[]},{"id":500229,"name":"城口县","subList":[]},{"id":500230,"name":"丰都县","subList":[]},{"id":500231,"name":"垫江县","subList":[]},{"id":500232,"name":"武隆县","subList":[]},{"id":500233,"name":"忠县","subList":[]},{"id":500234,"name":"开县","subList":[]},{"id":500235,"name":"云阳县","subList":[]},{"id":500236,"name":"奉节县","subList":[]},{"id":500237,"name":"巫山县","subList":[]},{"id":500238,"name":"巫溪县","subList":[]},
{"id":500240,"name":"石柱土家族自治县","subList":[]},{"id":500241,"name":"秀山土家族苗族自治县","subList":[]},{"id":500242,"name":"酉阳土家族苗族自治县","subList":[]},{"id":500243,"name":"彭水苗族土家族自治县","subList":[]}]},{"id":500201,"name":"市辖区","subList":[]}]},{"id":510000,"name":"四川省","subList":[{"id":510100,"name":"成都市","subList":[{"id":510104,"name":"锦江区","subList":[]},{"id":510105,"name":"青羊区","subList":[]},{"id":510106,"name":"金牛区","subList":[]},{"id":510107,"name":"武侯区","subList":[]},{"id":510108,"name":"成华区","subList":[]},{"id":510112,"name":"龙泉驿区","subList":[]},{"id":510113,"name":"青白江区","subList":[]},{"id":510114,"name":"新都区","subList":[]},{"id":510115,"name":"温江区","subList":[]},{"id":510116,"name":"双流区","subList":[]},{"id":510121,"name":"金堂县","subList":[]},{"id":510124,"name":"郫县","subList":[]},{"id":510129,"name":"大邑县","subList":[]},{"id":510131,"name":"蒲江县","subList":[]},{"id":510132,"name":"新津县","subList":[]},{"id":510181,"name":"都江堰市","subList":[]},
{"id":510182,"name":"彭州市","subList":[]},{"id":510183,"name":"邛崃市","subList":[]},{"id":510184,"name":"崇州市","subList":[]}]},{"id":510300,"name":"自贡市","subList":[{"id":510302,"name":"自流井区","subList":[]},{"id":510303,"name":"贡井区","subList":[]},{"id":510304,"name":"大安区","subList":[]},{"id":510311,"name":"沿滩区","subList":[]},{"id":510321,"name":"荣县","subList":[]},{"id":510322,"name":"富顺县","subList":[]}]},{"id":510400,"name":"攀枝花市","subList":[{"id":510402,"name":"东区","subList":[]},{"id":510403,"name":"西区","subList":[]},{"id":510411,"name":"仁和区","subList":[]},{"id":510421,"name":"米易县","subList":[]},{"id":510422,"name":"盐边县","subList":[]}]},{"id":510500,"name":"泸州市","subList":[{"id":510502,"name":"江阳区","subList":[]},{"id":510503,"name":"纳溪区","subList":[]},{"id":510504,"name":"龙马潭区","subList":[]},{"id":510521,"name":"泸县","subList":[]},{"id":510522,"name":"合江县","subList":[]},{"id":510524,"name":"叙永县","subList":[]},{"id":510525,"name":"古蔺县","subList":[]}]},
{"id":510600,"name":"德阳市","subList":[{"id":510603,"name":"旌阳区","subList":[]},{"id":510623,"name":"中江县","subList":[]},{"id":510626,"name":"罗江县","subList":[]},{"id":510681,"name":"广汉市","subList":[]},{"id":510682,"name":"什邡市","subList":[]},{"id":510683,"name":"绵竹市","subList":[]}]},{"id":510700,"name":"绵阳市","subList":[{"id":510703,"name":"涪城区","subList":[]},{"id":510704,"name":"游仙区","subList":[]},{"id":510722,"name":"三台县","subList":[]},{"id":510723,"name":"盐亭县","subList":[]},{"id":510724,"name":"安州区","subList":[]},{"id":510725,"name":"梓潼县","subList":[]},{"id":510726,"name":"北川羌族自治县","subList":[]},{"id":510727,"name":"平武县","subList":[]},{"id":510781,"name":"江油市","subList":[]}]},{"id":510800,"name":"广元市","subList":[{"id":510802,"name":"利州区","subList":[]},{"id":510811,"name":"昭化区","subList":[]},{"id":510812,"name":"朝天区","subList":[]},{"id":510821,"name":"旺苍县","subList":[]},{"id":510822,"name":"青川县","subList":[]},{"id":510823,"name":"剑阁县","subList":[]},
{"id":510824,"name":"苍溪县","subList":[]}]},{"id":510900,"name":"遂宁市","subList":[{"id":510903,"name":"船山区","subList":[]},{"id":510904,"name":"安居区","subList":[]},{"id":510921,"name":"蓬溪县","subList":[]},{"id":510922,"name":"射洪县","subList":[]},{"id":510923,"name":"大英县","subList":[]}]},{"id":511000,"name":"内江市","subList":[{"id":511002,"name":"市中区","subList":[]},{"id":511011,"name":"东兴区","subList":[]},{"id":511024,"name":"威远县","subList":[]},{"id":511025,"name":"资中县","subList":[]},{"id":511028,"name":"隆昌县","subList":[]}]},{"id":511100,"name":"乐山市","subList":[{"id":511102,"name":"市中区","subList":[]},{"id":511111,"name":"沙湾区","subList":[]},{"id":511112,"name":"五通桥区","subList":[]},{"id":511113,"name":"金口河区","subList":[]},{"id":511123,"name":"犍为县","subList":[]},{"id":511124,"name":"井研县","subList":[]},{"id":511126,"name":"夹江县","subList":[]},{"id":511129,"name":"沐川县","subList":[]},{"id":511132,"name":"峨边彝族自治县","subList":[]},{"id":511133,"name":"马边彝族自治县","subList":[]},
{"id":511181,"name":"峨眉山市","subList":[]}]},{"id":511300,"name":"南充市","subList":[{"id":511302,"name":"顺庆区","subList":[]},{"id":511303,"name":"高坪区","subList":[]},{"id":511304,"name":"嘉陵区","subList":[]},{"id":511321,"name":"南部县","subList":[]},{"id":511322,"name":"营山县","subList":[]},{"id":511323,"name":"蓬安县","subList":[]},{"id":511324,"name":"仪陇县","subList":[]},{"id":511325,"name":"西充县","subList":[]},{"id":511381,"name":"阆中市","subList":[]}]},{"id":511400,"name":"眉山市","subList":[{"id":511402,"name":"东坡区","subList":[]},{"id":511403,"name":"彭山区","subList":[]},{"id":511421,"name":"仁寿县","subList":[]},
{"id":511423,"name":"洪雅县","subList":[]},{"id":511424,"name":"丹棱县","subList":[]},{"id":511425,"name":"青神县","subList":[]}]},{"id":511500,"name":"宜宾市","subList":[{"id":511502,"name":"翠屏区","subList":[]},{"id":511503,"name":"南溪区","subList":[]},{"id":511521,"name":"宜宾县","subList":[]},{"id":511523,"name":"江安县","subList":[]},{"id":511524,"name":"长宁县","subList":[]},{"id":511525,"name":"高县","subList":[]},{"id":511526,"name":"珙县","subList":[]},{"id":511527,"name":"筠连县","subList":[]},{"id":511528,"name":"兴文县","subList":[]},{"id":511529,"name":"屏山县","subList":[]}]},{"id":511600,"name":"广安市","subList":[{"id":511602,"name":"广安区","subList":[]},{"id":511603,"name":"前锋区","subList":[]},{"id":511621,"name":"岳池县","subList":[]},{"id":511622,"name":"武胜县","subList":[]},{"id":511623,"name":"邻水县","subList":[]},{"id":511681,"name":"华蓥市","subList":[]}]},
{"id":511700,"name":"达州市","subList":[{"id":511702,"name":"通川区","subList":[]},{"id":511703,"name":"达川区","subList":[]},{"id":511722,"name":"宣汉县","subList":[]},{"id":511723,"name":"开江县","subList":[]},{"id":511724,"name":"大竹县","subList":[]},{"id":511725,"name":"渠县","subList":[]},{"id":511781,"name":"万源市","subList":[]}]},{"id":511800,"name":"雅安市","subList":[{"id":511802,"name":"雨城区","subList":[]},{"id":511803,"name":"名山区","subList":[]},{"id":511822,"name":"荥经县","subList":[]},{"id":511823,"name":"汉源县","subList":[]},{"id":511824,"name":"石棉县","subList":[]},{"id":511825,"name":"天全县","subList":[]},{"id":511826,"name":"芦山县","subList":[]},{"id":511827,"name":"宝兴县","subList":[]}]},{"id":511900,"name":"巴中市","subList":[{"id":511902,"name":"巴州区","subList":[]},{"id":511903,"name":"恩阳区","subList":[]},{"id":511921,"name":"通江县","subList":[]},{"id":511922,"name":"南江县","subList":[]},{"id":511923,"name":"平昌县","subList":[]}]},
{"id":512000,"name":"资阳市","subList":[{"id":512002,"name":"雁江区","subList":[]},{"id":512021,"name":"安岳县","subList":[]},{"id":512022,"name":"乐至县","subList":[]},{"id":512081,"name":"简阳市","subList":[]}]},{"id":513200,"name":"阿坝藏族羌族自治州","subList":[{"id":513201,"name":"马尔康市","subList":[]},{"id":513221,"name":"汶川县","subList":[]},{"id":513222,"name":"理县","subList":[]},{"id":513223,"name":"茂县","subList":[]},{"id":513224,"name":"松潘县","subList":[]},{"id":513225,"name":"九寨沟县","subList":[]},{"id":513226,"name":"金川县","subList":[]},{"id":513227,"name":"小金县","subList":[]},{"id":513228,"name":"黑水县","subList":[]},{"id":513230,"name":"壤塘县","subList":[]},{"id":513231,"name":"阿坝县","subList":[]},{"id":513232,"name":"若尔盖县","subList":[]},{"id":513233,"name":"红原县","subList":[]}]},{"id":513300,"name":"甘孜藏族自治州","subList":[{"id":513301,"name":"康定市","subList":[]},{"id":513322,"name":"泸定县","subList":[]},
{"id":513323,"name":"丹巴县","subList":[]},{"id":513324,"name":"九龙县","subList":[]},{"id":513325,"name":"雅江县","subList":[]},{"id":513326,"name":"道孚县","subList":[]},{"id":513327,"name":"炉霍县","subList":[]},{"id":513328,"name":"甘孜县","subList":[]},{"id":513329,"name":"新龙县","subList":[]},{"id":513330,"name":"德格县","subList":[]},{"id":513331,"name":"白玉县","subList":[]},{"id":513332,"name":"石渠县","subList":[]},{"id":513333,"name":"色达县","subList":[]},{"id":513334,"name":"理塘县","subList":[]},{"id":513335,"name":"巴塘县","subList":[]},{"id":513336,"name":"乡城县","subList":[]},{"id":513337,"name":"稻城县","subList":[]},{"id":513338,"name":"得荣县","subList":[]}]},{"id":513400,"name":"凉山彝族自治州","subList":[{"id":513401,"name":"西昌市","subList":[]},{"id":513422,"name":"木里藏族自治县","subList":[]},{"id":513423,"name":"盐源县","subList":[]},{"id":513424,"name":"德昌县","subList":[]},{"id":513425,"name":"会理县","subList":[]},{"id":513426,"name":"会东县","subList":[]},{"id":513427,"name":"宁南县","subList":[]},
{"id":513428,"name":"普格县","subList":[]},{"id":513429,"name":"布拖县","subList":[]},{"id":513430,"name":"金阳县","subList":[]},{"id":513431,"name":"昭觉县","subList":[]},{"id":513432,"name":"喜德县","subList":[]},{"id":513433,"name":"冕宁县","subList":[]},{"id":513434,"name":"越西县","subList":[]},{"id":513435,"name":"甘洛县","subList":[]},{"id":513436,"name":"美姑县","subList":[]},{"id":513437,"name":"雷波县","subList":[]}]},{"id":510101,"name":"市辖区","subList":[]},{"id":510301,"name":"市辖区","subList":[]},{"id":510401,"name":"市辖区","subList":[]},{"id":510501,"name":"市辖区","subList":[]},{"id":510601,"name":"市辖区","subList":[]},{"id":510701,"name":"市辖区","subList":[]},{"id":510801,"name":"市辖区","subList":[]},{"id":510901,"name":"市辖区","subList":[]},{"id":511001,"name":"市辖区","subList":[]},{"id":511101,"name":"市辖区","subList":[]},{"id":511301,"name":"市辖区","subList":[]},{"id":511401,"name":"市辖区","subList":[]},{"id":511501,"name":"市辖区","subList":[]},{"id":511601,"name":"市辖区","subList":[]},
{"id":511701,"name":"市辖区","subList":[]},{"id":511801,"name":"市辖区","subList":[]},{"id":511901,"name":"市辖区","subList":[]},{"id":512001,"name":"市辖区","subList":[]}]},{"id":520000,"name":"贵州省","subList":[{"id":520100,"name":"贵阳市","subList":[{"id":520102,"name":"南明区","subList":[]},{"id":520103,"name":"云岩区","subList":[]},{"id":520111,"name":"花溪区","subList":[]},{"id":520112,"name":"乌当区","subList":[]},{"id":520113,"name":"白云区","subList":[]},{"id":520115,"name":"观山湖区","subList":[]},{"id":520121,"name":"开阳县","subList":[]},{"id":520122,"name":"息烽县","subList":[]},{"id":520123,"name":"修文县","subList":[]},{"id":520181,"name":"清镇市","subList":[]}]},{"id":520200,"name":"六盘水市","subList":[{"id":520201,"name":"钟山区","subList":[]},{"id":520203,"name":"六枝特区","subList":[]},{"id":520221,"name":"水城县","subList":[]},
{"id":520222,"name":"盘县","subList":[]}]},{"id":520300,"name":"遵义市","subList":[{"id":520302,"name":"红花岗区","subList":[]},{"id":520303,"name":"汇川区","subList":[]},{"id":520321,"name":"播州区","subList":[]},{"id":520322,"name":"桐梓县","subList":[]},{"id":520323,"name":"绥阳县","subList":[]},{"id":520324,"name":"正安县","subList":[]},{"id":520325,"name":"道真仡佬族苗族自治县","subList":[]},{"id":520326,"name":"务川仡佬族苗族自治县","subList":[]},{"id":520327,"name":"凤冈县","subList":[]},{"id":520328,"name":"湄潭县","subList":[]},{"id":520329,"name":"余庆县","subList":[]},{"id":520330,"name":"习水县","subList":[]},{"id":520381,"name":"赤水市","subList":[]},{"id":520382,"name":"仁怀市","subList":[]}]},{"id":520400,"name":"安顺市","subList":[{"id":520402,"name":"西秀区","subList":[]},{"id":520403,"name":"平坝区","subList":[]},{"id":520422,"name":"普定县","subList":[]},{"id":520423,"name":"镇宁布依族苗族自治县","subList":[]},{"id":520424,"name":"关岭布依族苗族自治县","subList":[]},
{"id":520425,"name":"紫云苗族布依族自治县","subList":[]}]},{"id":520500,"name":"毕节市","subList":[{"id":520502,"name":"七星关区","subList":[]},{"id":520521,"name":"大方县","subList":[]},
{"id":520522,"name":"黔西县","subList":[]},{"id":520523,"name":"金沙县","subList":[]},{"id":520524,"name":"织金县","subList":[]},{"id":520525,"name":"纳雍县","subList":[]},{"id":520526,"name":"威宁彝族回族苗族自治县","subList":[]},{"id":520527,"name":"赫章县","subList":[]}]},{"id":520600,"name":"铜仁市","subList":[{"id":520602,"name":"碧江区","subList":[]},{"id":520603,"name":"万山区","subList":[]},{"id":520621,"name":"江口县","subList":[]},{"id":520622,"name":"玉屏侗族自治县","subList":[]},{"id":520623,"name":"石阡县","subList":[]},{"id":520624,"name":"思南县","subList":[]},{"id":520625,"name":"印江土家族苗族自治县","subList":[]},{"id":520626,"name":"德江县","subList":[]},{"id":520627,"name":"沿河土家族自治县","subList":[]},{"id":520628,"name":"松桃苗族自治县","subList":[]}]},{"id":522300,"name":"黔西南布依族苗族自治州","subList":[{"id":522301,"name":"兴义市","subList":[]},{"id":522322,"name":"兴仁县","subList":[]},{"id":522323,"name":"普安县","subList":[]},{"id":522324,"name":"晴隆县","subList":[]},
{"id":522325,"name":"贞丰县","subList":[]},{"id":522326,"name":"望谟县","subList":[]},{"id":522327,"name":"册亨县","subList":[]},{"id":522328,"name":"安龙县","subList":[]}]},{"id":522600,"name":"黔东南苗族侗族自治州","subList":[{"id":522601,"name":"凯里市","subList":[]},{"id":522622,"name":"黄平县","subList":[]},{"id":522623,"name":"施秉县","subList":[]},{"id":522624,"name":"三穗县","subList":[]},{"id":522625,"name":"镇远县","subList":[]},{"id":522626,"name":"岑巩县","subList":[]},{"id":522627,"name":"天柱县","subList":[]},{"id":522628,"name":"锦屏县","subList":[]},{"id":522629,"name":"剑河县","subList":[]},{"id":522630,"name":"台江县","subList":[]},{"id":522631,"name":"黎平县","subList":[]},{"id":522632,"name":"榕江县","subList":[]},{"id":522633,"name":"从江县","subList":[]},{"id":522634,"name":"雷山县","subList":[]},
{"id":522635,"name":"麻江县","subList":[]},{"id":522636,"name":"丹寨县","subList":[]}]},{"id":522700,"name":"黔南布依族苗族自治州","subList":[{"id":522701,"name":"都匀市","subList":[]},{"id":522702,"name":"福泉市","subList":[]},{"id":522722,"name":"荔波县","subList":[]},{"id":522723,"name":"贵定县","subList":[]},{"id":522725,"name":"瓮安县","subList":[]},{"id":522726,"name":"独山县","subList":[]},{"id":522727,"name":"平塘县","subList":[]},{"id":522728,"name":"罗甸县","subList":[]},{"id":522729,"name":"长顺县","subList":[]},{"id":522730,"name":"龙里县","subList":[]},{"id":522731,"name":"惠水县","subList":[]},{"id":522732,"name":"三都水族自治县","subList":[]}]},{"id":520101,"name":"市辖区","subList":[]},{"id":520301,"name":"市辖区","subList":[]},{"id":520401,"name":"市辖区","subList":[]},{"id":520501,"name":"市辖区","subList":[]},{"id":520601,"name":"市辖区","subList":[]}]},{"id":530000,"name":"云南省","subList":[{"id":530100,"name":"昆明市","subList":[{"id":530102,"name":"五华区","subList":[]},{"id":530103,"name":"盘龙区","subList":[]},
{"id":530111,"name":"官渡区","subList":[]},{"id":530112,"name":"西山区","subList":[]},{"id":530113,"name":"东川区","subList":[]},
{"id":530114,"name":"呈贡区","subList":[]},{"id":530122,"name":"晋宁县","subList":[]},{"id":530124,"name":"富民县","subList":[]},{"id":530125,"name":"宜良县","subList":[]},{"id":530126,"name":"石林彝族自治县","subList":[]},{"id":530127,"name":"嵩明县","subList":[]},{"id":530128,"name":"禄劝彝族苗族自治县","subList":[]},{"id":530129,"name":"寻甸回族彝族自治县","subList":[]},{"id":530181,"name":"安宁市","subList":[]}]},{"id":530300,"name":"曲靖市","subList":[{"id":530302,"name":"麒麟区","subList":[]},{"id":530321,"name":"马龙县","subList":[]},{"id":530322,"name":"陆良县","subList":[]},{"id":530323,"name":"师宗县","subList":[]},{"id":530324,"name":"罗平县","subList":[]},{"id":530325,"name":"富源县","subList":[]},{"id":530326,"name":"会泽县","subList":[]},{"id":530328,"name":"沾益区","subList":[]},{"id":530381,"name":"宣威市","subList":[]}]},{"id":530400,"name":"玉溪市","subList":[{"id":530402,"name":"红塔区","subList":[]},{"id":530403,"name":"江川区","subList":[]},{"id":530422,"name":"澄江县","subList":[]},
{"id":530423,"name":"通海县","subList":[]},{"id":530424,"name":"华宁县","subList":[]},{"id":530425,"name":"易门县","subList":[]},
{"id":530426,"name":"峨山彝族自治县","subList":[]},{"id":530427,"name":"新平彝族傣族自治县","subList":[]},{"id":530428,"name":"元江哈尼族彝族傣族自治县","subList":[]}]},{"id":530500,"name":"保山市","subList":[{"id":530502,"name":"隆阳区","subList":[]},
{"id":530521,"name":"施甸县","subList":[]},{"id":530523,"name":"龙陵县","subList":[]},{"id":530524,"name":"昌宁县","subList":[]},{"id":530581,"name":"腾冲市","subList":[]}]},{"id":530600,"name":"昭通市","subList":[{"id":530602,"name":"昭阳区","subList":[]},{"id":530621,"name":"鲁甸县","subList":[]},{"id":530622,"name":"巧家县","subList":[]},{"id":530623,"name":"盐津县","subList":[]},{"id":530624,"name":"大关县","subList":[]},{"id":530625,"name":"永善县","subList":[]},{"id":530626,"name":"绥江县","subList":[]},{"id":530627,"name":"镇雄县","subList":[]},{"id":530628,"name":"彝良县","subList":[]},{"id":530629,"name":"威信县","subList":[]},{"id":530630,"name":"水富县","subList":[]}]},{"id":530700,"name":"丽江市","subList":[{"id":530702,"name":"古城区","subList":[]},{"id":530721,"name":"玉龙纳西族自治县","subList":[]},{"id":530722,"name":"永胜县","subList":[]},{"id":530723,"name":"华坪县","subList":[]},{"id":530724,"name":"宁蒗彝族自治县","subList":[]}]},
{"id":530800,"name":"普洱市","subList":[{"id":530802,"name":"思茅区","subList":[]},{"id":530821,"name":"宁洱哈尼族彝族自治县","subList":[]},{"id":530822,"name":"墨江哈尼族自治县","subList":[]},{"id":530823,"name":"景东彝族自治县","subList":[]},
{"id":530824,"name":"景谷傣族彝族自治县","subList":[]},{"id":530825,"name":"镇沅彝族哈尼族拉祜族自治县","subList":[]},{"id":530826,"name":"江城哈尼族彝族自治县","subList":[]},{"id":530827,"name":"孟连傣族拉祜族佤族自治县","subList":[]},{"id":530828,"name":"澜沧拉祜族自治县","subList":[]},
{"id":530829,"name":"西盟佤族自治县","subList":[]}]},{"id":530900,"name":"临沧市","subList":[{"id":530902,"name":"临翔区","subList":[]},
{"id":530921,"name":"凤庆县","subList":[]},{"id":530922,"name":"云县","subList":[]},{"id":530923,"name":"永德县","subList":[]},
{"id":530924,"name":"镇康县","subList":[]},{"id":530925,"name":"双江拉祜族佤族布朗族傣族自治县","subList":[]},{"id":530926,"name":"耿马傣族佤族自治县","subList":[]},{"id":530927,"name":"沧源佤族自治县","subList":[]}]},{"id":532300,"name":"楚雄彝族自治州","subList":[{"id":532301,"name":"楚雄市","subList":[]},{"id":532322,"name":"双柏县","subList":[]},{"id":532323,"name":"牟定县","subList":[]},{"id":532324,"name":"南华县","subList":[]},{"id":532325,"name":"姚安县","subList":[]},{"id":532326,"name":"大姚县","subList":[]},{"id":532327,"name":"永仁县","subList":[]},{"id":532328,"name":"元谋县","subList":[]},{"id":532329,"name":"武定县","subList":[]},{"id":532331,"name":"禄丰县","subList":[]}]},{"id":532500,"name":"红河哈尼族彝族自治州","subList":[{"id":532501,"name":"个旧市","subList":[]},{"id":532502,"name":"开远市","subList":[]},{"id":532503,"name":"蒙自市","subList":[]},{"id":532504,"name":"弥勒市","subList":[]},{"id":532523,"name":"屏边苗族自治县","subList":[]},{"id":532524,"name":"建水县","subList":[]},
{"id":532525,"name":"石屏县","subList":[]},{"id":532527,"name":"泸西县","subList":[]},{"id":532528,"name":"元阳县","subList":[]},{"id":532529,"name":"红河县","subList":[]},{"id":532530,"name":"金平苗族瑶族傣族自治县","subList":[]},{"id":532531,"name":"绿春县","subList":[]},{"id":532532,"name":"河口瑶族自治县","subList":[]}]},{"id":532600,"name":"文山壮族苗族自治州","subList":[{"id":532601,"name":"文山市","subList":[]},{"id":532622,"name":"砚山县","subList":[]},{"id":532623,"name":"西畴县","subList":[]},{"id":532624,"name":"麻栗坡县","subList":[]},{"id":532625,"name":"马关县","subList":[]},{"id":532626,"name":"丘北县","subList":[]},{"id":532627,"name":"广南县","subList":[]},{"id":532628,"name":"富宁县","subList":[]}]},{"id":532800,"name":"西双版纳傣族自治州","subList":[{"id":532801,"name":"景洪市","subList":[]},{"id":532822,"name":"勐海县","subList":[]},{"id":532823,"name":"勐腊县","subList":[]}]},{"id":532900,"name":"大理白族自治州","subList":[{"id":532901,"name":"大理市","subList":[]},
{"id":532922,"name":"漾濞彝族自治县","subList":[]},{"id":532923,"name":"祥云县","subList":[]},{"id":532924,"name":"宾川县","subList":[]},{"id":532925,"name":"弥渡县","subList":[]},{"id":532926,"name":"南涧彝族自治县","subList":[]},{"id":532927,"name":"巍山彝族回族自治县","subList":[]},{"id":532928,"name":"永平县","subList":[]},{"id":532929,"name":"云龙县","subList":[]},{"id":532930,"name":"洱源县","subList":[]},{"id":532931,"name":"剑川县","subList":[]},{"id":532932,"name":"鹤庆县","subList":[]}]},{"id":533100,"name":"德宏傣族景颇族自治州","subList":[{"id":533102,"name":"瑞丽市","subList":[]},{"id":533103,"name":"芒市","subList":[]},{"id":533122,"name":"梁河县","subList":[]},{"id":533123,"name":"盈江县","subList":[]},{"id":533124,"name":"陇川县","subList":[]}]},{"id":533300,"name":"怒江傈僳族自治州","subList":[{"id":533321,"name":"泸水县","subList":[]},{"id":533323,"name":"福贡县","subList":[]},{"id":533324,"name":"贡山独龙族怒族自治县","subList":[]},{"id":533325,"name":"兰坪白族普米族自治县","subList":[]}]},
{"id":533400,"name":"迪庆藏族自治州","subList":[{"id":533401,"name":"香格里拉市","subList":[]},{"id":533422,"name":"德钦县","subList":[]},{"id":533423,"name":"维西傈僳族自治县","subList":[]}]},{"id":530101,"name":"市辖区","subList":[]},{"id":530301,"name":"市辖区","subList":[]},{"id":530401,"name":"市辖区","subList":[]},{"id":530501,"name":"市辖区","subList":[]},{"id":530601,"name":"市辖区","subList":[]},{"id":530701,"name":"市辖区","subList":[]},{"id":530801,"name":"市辖区","subList":[]},{"id":530901,"name":"市辖区","subList":[]},{"id":533101,"name":"市辖区","subList":[]},{"id":533301,"name":"市辖区","subList":[]}]},{"id":540000,"name":"西藏自治区","subList":[{"id":540100,"name":"拉萨市","subList":[{"id":540102,"name":"城关区","subList":[]},{"id":540103,"name":"堆龙德庆区","subList":[]},{"id":540121,"name":"林周县","subList":[]},{"id":540122,"name":"当雄县","subList":[]},{"id":540123,"name":"尼木县","subList":[]},{"id":540124,"name":"曲水县","subList":[]},{"id":540126,"name":"达孜县","subList":[]},
{"id":540127,"name":"墨竹工卡县","subList":[]}]},{"id":540200,"name":"日喀则市","subList":[{"id":540202,"name":"桑珠孜区","subList":[]},{"id":540221,"name":"南木林县","subList":[]},{"id":540222,"name":"江孜县","subList":[]},{"id":540223,"name":"定日县","subList":[]},{"id":540224,"name":"萨迦县","subList":[]},{"id":540225,"name":"拉孜县","subList":[]},{"id":540226,"name":"昂仁县","subList":[]},{"id":540227,"name":"谢通门县","subList":[]},{"id":540228,"name":"白朗县","subList":[]},{"id":540229,"name":"仁布县","subList":[]},{"id":540230,"name":"康马县","subList":[]},{"id":540231,"name":"定结县","subList":[]},{"id":540232,"name":"仲巴县","subList":[]},{"id":540233,"name":"亚东县","subList":[]},{"id":540234,"name":"吉隆县","subList":[]},{"id":540235,"name":"聂拉木县","subList":[]},{"id":540236,"name":"萨嘎县","subList":[]},{"id":540237,"name":"岗巴县","subList":[]}]},{"id":540300,"name":"昌都市","subList":[{"id":540302,"name":"卡若区","subList":[]},{"id":540321,"name":"江达县","subList":[]},
{"id":540322,"name":"贡觉县","subList":[]},{"id":540323,"name":"类乌齐县","subList":[]},{"id":540324,"name":"丁青县","subList":[]},{"id":540325,"name":"察雅县","subList":[]},{"id":540326,"name":"八宿县","subList":[]},{"id":540327,"name":"左贡县","subList":[]},{"id":540328,"name":"芒康县","subList":[]},{"id":540329,"name":"洛隆县","subList":[]},{"id":540330,"name":"边坝县","subList":[]}]},{"id":540400,"name":"林芝市","subList":[{"id":540402,"name":"巴宜区","subList":[]},{"id":540421,"name":"工布江达县","subList":[]},{"id":540422,"name":"米林县","subList":[]},{"id":540423,"name":"墨脱县","subList":[]},{"id":540424,"name":"波密县","subList":[]},{"id":540425,"name":"察隅县","subList":[]},{"id":540426,"name":"朗县","subList":[]}]},{"id":542200,"name":"山南市","subList":[{"id":542221,"name":"乃东区","subList":[]},{"id":542222,"name":"扎囊县","subList":[]},{"id":542223,"name":"贡嘎县","subList":[]},{"id":542224,"name":"桑日县","subList":[]},{"id":542225,"name":"琼结县","subList":[]},{"id":542226,"name":"曲松县","subList":[]},
{"id":542227,"name":"措美县","subList":[]},{"id":542228,"name":"洛扎县","subList":[]},{"id":542229,"name":"加查县","subList":[]},{"id":542231,"name":"隆子县","subList":[]},{"id":542232,"name":"错那县","subList":[]},{"id":542233,"name":"浪卡子县","subList":[]}]},{"id":542400,"name":"那曲地区","subList":[{"id":542421,"name":"那曲县","subList":[]},{"id":542422,"name":"嘉黎县","subList":[]},{"id":542423,"name":"比如县","subList":[]},{"id":542424,"name":"聂荣县","subList":[]},{"id":542425,"name":"安多县","subList":[]},{"id":542426,"name":"申扎县","subList":[]},{"id":542427,"name":"索县","subList":[]},{"id":542428,"name":"班戈县","subList":[]},{"id":542429,"name":"巴青县","subList":[]},{"id":542430,"name":"尼玛县","subList":[]},{"id":542431,"name":"双湖县","subList":[]}]},{"id":542500,"name":"阿里地区","subList":[{"id":542521,"name":"普兰县","subList":[]},{"id":542522,"name":"札达县","subList":[]},{"id":542523,"name":"噶尔县","subList":[]},{"id":542524,"name":"日土县","subList":[]},{"id":542525,"name":"革吉县","subList":[]},
{"id":542526,"name":"改则县","subList":[]},{"id":542527,"name":"措勤县","subList":[]}]},{"id":540101,"name":"市辖区","subList":[]},{"id":540201,"name":"市辖区","subList":[]},{"id":540301,"name":"市辖区","subList":[]},{"id":540401,"name":"市辖区","subList":[]},{"id":542201,"name":"市辖区","subList":[]},{"id":542401,"name":"市辖区","subList":[]},{"id":542501,"name":"市辖区","subList":[]}]},{"id":610000,"name":"陕西省","subList":[{"id":610100,"name":"西安市","subList":[{"id":610102,"name":"新城区","subList":[]},{"id":610103,"name":"碑林区","subList":[]},
{"id":610104,"name":"莲湖区","subList":[]},{"id":610111,"name":"灞桥区","subList":[]},{"id":610112,"name":"未央区","subList":[]},{"id":610113,"name":"雁塔区","subList":[]},{"id":610114,"name":"阎良区","subList":[]},{"id":610115,"name":"临潼区","subList":[]},{"id":610116,"name":"长安区","subList":[]},{"id":610117,"name":"高陵区","subList":[]},{"id":610122,"name":"蓝田县","subList":[]},{"id":610124,"name":"周至县","subList":[]},{"id":610125,"name":"户县","subList":[]}]},{"id":610200,"name":"铜川市","subList":[{"id":610202,"name":"王益区","subList":[]},
{"id":610203,"name":"印台区","subList":[]},{"id":610204,"name":"耀州区","subList":[]},{"id":610222,"name":"宜君县","subList":[]}]},{"id":610300,"name":"宝鸡市","subList":[{"id":610302,"name":"渭滨区","subList":[]},{"id":610303,"name":"金台区","subList":[]},{"id":610304,"name":"陈仓区","subList":[]},{"id":610322,"name":"凤翔县","subList":[]},{"id":610323,"name":"岐山县","subList":[]},{"id":610324,"name":"扶风县","subList":[]},{"id":610326,"name":"眉县","subList":[]},{"id":610327,"name":"陇县","subList":[]},{"id":610328,"name":"千阳县","subList":[]},
{"id":610329,"name":"麟游县","subList":[]},{"id":610330,"name":"凤县","subList":[]},{"id":610331,"name":"太白县","subList":[]}]},{"id":610400,"name":"咸阳市","subList":[{"id":610402,"name":"秦都区","subList":[]},{"id":610403,"name":"杨陵区","subList":[]},{"id":610404,"name":"渭城区","subList":[]},{"id":610422,"name":"三原县","subList":[]},{"id":610423,"name":"泾阳县","subList":[]},{"id":610424,"name":"乾县","subList":[]},{"id":610425,"name":"礼泉县","subList":[]},{"id":610426,"name":"永寿县","subList":[]},{"id":610427,"name":"彬县","subList":[]},{"id":610428,"name":"长武县","subList":[]},{"id":610429,"name":"旬邑县","subList":[]},{"id":610430,"name":"淳化县","subList":[]},{"id":610431,"name":"武功县","subList":[]},{"id":610481,"name":"兴平市","subList":[]}]},{"id":610500,"name":"渭南市","subList":[{"id":610502,"name":"临渭区","subList":[]},{"id":610503,"name":"华州区","subList":[]},{"id":610522,"name":"潼关县","subList":[]},{"id":610523,"name":"大荔县","subList":[]},
{"id":610524,"name":"合阳县","subList":[]},{"id":610525,"name":"澄城县","subList":[]},{"id":610526,"name":"蒲城县","subList":[]},{"id":610527,"name":"白水县","subList":[]},{"id":610528,"name":"富平县","subList":[]},{"id":610581,"name":"韩城市","subList":[]},{"id":610582,"name":"华阴市","subList":[]}]},{"id":610600,"name":"延安市","subList":[{"id":610602,"name":"宝塔区","subList":[]},
{"id":610621,"name":"延长县","subList":[]},{"id":610622,"name":"延川县","subList":[]},{"id":610623,"name":"子长县","subList":[]},{"id":610624,"name":"安塞县","subList":[]},{"id":610625,"name":"志丹县","subList":[]},{"id":610626,"name":"吴起县","subList":[]},{"id":610627,"name":"甘泉县","subList":[]},{"id":610628,"name":"富县","subList":[]},{"id":610629,"name":"洛川县","subList":[]},{"id":610630,"name":"宜川县","subList":[]},{"id":610631,"name":"黄龙县","subList":[]},{"id":610632,"name":"黄陵县","subList":[]}]},{"id":610700,"name":"汉中市","subList":[{"id":610702,"name":"汉台区","subList":[]},{"id":610721,"name":"南郑县","subList":[]},{"id":610722,"name":"城固县","subList":[]},{"id":610723,"name":"洋县","subList":[]},{"id":610724,"name":"西乡县","subList":[]},{"id":610725,"name":"勉县","subList":[]},{"id":610726,"name":"宁强县","subList":[]},{"id":610727,"name":"略阳县","subList":[]},{"id":610728,"name":"镇巴县","subList":[]},{"id":610729,"name":"留坝县","subList":[]},
{"id":610730,"name":"佛坪县","subList":[]}]},{"id":610800,"name":"榆林市","subList":[{"id":610802,"name":"榆阳区","subList":[]},{"id":610803,"name":"横山区","subList":[]},{"id":610821,"name":"神木县","subList":[]},{"id":610822,"name":"府谷县","subList":[]},{"id":610824,"name":"靖边县","subList":[]},{"id":610825,"name":"定边县","subList":[]},{"id":610826,"name":"绥德县","subList":[]},{"id":610827,"name":"米脂县","subList":[]},{"id":610828,"name":"佳县","subList":[]},{"id":610829,"name":"吴堡县","subList":[]},{"id":610830,"name":"清涧县","subList":[]},{"id":610831,"name":"子洲县","subList":[]}]},{"id":610900,"name":"安康市","subList":[{"id":610902,"name":"汉滨区","subList":[]},{"id":610921,"name":"汉阴县","subList":[]},{"id":610922,"name":"石泉县","subList":[]},{"id":610923,"name":"宁陕县","subList":[]},{"id":610924,"name":"紫阳县","subList":[]},{"id":610925,"name":"岚皋县","subList":[]},{"id":610926,"name":"平利县","subList":[]},{"id":610927,"name":"镇坪县","subList":[]},
{"id":610928,"name":"旬阳县","subList":[]},{"id":610929,"name":"白河县","subList":[]}]},{"id":611000,"name":"商洛市","subList":[{"id":611002,"name":"商州区","subList":[]},{"id":611021,"name":"洛南县","subList":[]},{"id":611022,"name":"丹凤县","subList":[]},{"id":611023,"name":"商南县","subList":[]},{"id":611024,"name":"山阳县","subList":[]},{"id":611025,"name":"镇安县","subList":[]},{"id":611026,"name":"柞水县","subList":[]}]},{"id":610101,"name":"市辖区","subList":[]},{"id":610201,"name":"市辖区","subList":[]},{"id":610301,"name":"市辖区","subList":[]},{"id":610401,"name":"市辖区","subList":[]},{"id":610501,"name":"市辖区","subList":[]},{"id":610601,"name":"市辖区","subList":[]},{"id":610701,"name":"市辖区","subList":[]},{"id":610801,"name":"市辖区","subList":[]},{"id":610901,"name":"市辖区","subList":[]},{"id":611001,"name":"市辖区","subList":[]}]},{"id":620000,"name":"甘肃省","subList":[{"id":620100,"name":"兰州市","subList":[{"id":620102,"name":"城关区","subList":[]},{"id":620103,"name":"七里河区","subList":[]},{"id":620104,"name":"西固区","subList":[]},
{"id":620105,"name":"安宁区","subList":[]},{"id":620111,"name":"红古区","subList":[]},{"id":620121,"name":"永登县","subList":[]},{"id":620122,"name":"皋兰县","subList":[]},{"id":620123,"name":"榆中县","subList":[]}]},{"id":620200,"name":"嘉峪关市","subList":[]},{"id":620300,"name":"金昌市","subList":[{"id":620302,"name":"金川区","subList":[]},{"id":620321,"name":"永昌县","subList":[]}]},{"id":620400,"name":"白银市","subList":[{"id":620402,"name":"白银区","subList":[]},{"id":620403,"name":"平川区","subList":[]},{"id":620421,"name":"靖远县","subList":[]},{"id":620422,"name":"会宁县","subList":[]},{"id":620423,"name":"景泰县","subList":[]}]},{"id":620500,"name":"天水市","subList":[{"id":620502,"name":"秦州区","subList":[]},{"id":620503,"name":"麦积区","subList":[]},{"id":620521,"name":"清水县","subList":[]},{"id":620522,"name":"秦安县","subList":[]},{"id":620523,"name":"甘谷县","subList":[]},{"id":620524,"name":"武山县","subList":[]},{"id":620525,"name":"张家川回族自治县","subList":[]}]},
{"id":620600,"name":"武威市","subList":[{"id":620602,"name":"凉州区","subList":[]},{"id":620621,"name":"民勤县","subList":[]},{"id":620622,"name":"古浪县","subList":[]},{"id":620623,"name":"天祝藏族自治县","subList":[]}]},{"id":620700,"name":"张掖市","subList":[{"id":620702,"name":"甘州区","subList":[]},{"id":620721,"name":"肃南裕固族自治县","subList":[]},{"id":620722,"name":"民乐县","subList":[]},{"id":620723,"name":"临泽县","subList":[]},{"id":620724,"name":"高台县","subList":[]},{"id":620725,"name":"山丹县","subList":[]}]},{"id":620800,"name":"平凉市","subList":[{"id":620802,"name":"崆峒区","subList":[]},{"id":620821,"name":"泾川县","subList":[]},{"id":620822,"name":"灵台县","subList":[]},{"id":620823,"name":"崇信县","subList":[]},{"id":620824,"name":"华亭县","subList":[]},{"id":620825,"name":"庄浪县","subList":[]},{"id":620826,"name":"静宁县","subList":[]}]},{"id":620900,"name":"酒泉市","subList":[{"id":620902,"name":"肃州区","subList":[]},{"id":620921,"name":"金塔县","subList":[]},
{"id":620922,"name":"瓜州县","subList":[]},{"id":620923,"name":"肃北蒙古族自治县","subList":[]},{"id":620924,"name":"阿克塞哈萨克族自治县","subList":[]},{"id":620981,"name":"玉门市","subList":[]},{"id":620982,"name":"敦煌市","subList":[]}]},{"id":621000,"name":"庆阳市","subList":[{"id":621002,"name":"西峰区","subList":[]},{"id":621021,"name":"庆城县","subList":[]},{"id":621022,"name":"环县","subList":[]},{"id":621023,"name":"华池县","subList":[]},{"id":621024,"name":"合水县","subList":[]},{"id":621025,"name":"正宁县","subList":[]},{"id":621026,"name":"宁县","subList":[]},{"id":621027,"name":"镇原县","subList":[]}]},{"id":621100,"name":"定西市","subList":[{"id":621102,"name":"安定区","subList":[]},{"id":621121,"name":"通渭县","subList":[]},{"id":621122,"name":"陇西县","subList":[]},{"id":621123,"name":"渭源县","subList":[]},{"id":621124,"name":"临洮县","subList":[]},{"id":621125,"name":"漳县","subList":[]},{"id":621126,"name":"岷县","subList":[]}]},{"id":621200,"name":"陇南市","subList":[{"id":621202,"name":"武都区","subList":[]},
{"id":621221,"name":"成县","subList":[]},{"id":621222,"name":"文县","subList":[]},{"id":621223,"name":"宕昌县","subList":[]},{"id":621224,"name":"康县","subList":[]},{"id":621225,"name":"西和县","subList":[]},{"id":621226,"name":"礼县","subList":[]},{"id":621227,"name":"徽县","subList":[]},{"id":621228,"name":"两当县","subList":[]}]},{"id":622900,"name":"临夏回族自治州","subList":[{"id":622901,"name":"临夏市","subList":[]},{"id":622921,"name":"临夏县","subList":[]},{"id":622922,"name":"康乐县","subList":[]},{"id":622923,"name":"永靖县","subList":[]},{"id":622924,"name":"广河县","subList":[]},{"id":622925,"name":"和政县","subList":[]},{"id":622926,"name":"东乡族自治县","subList":[]},{"id":622927,"name":"积石山保安族东乡族撒拉族自治县","subList":[]}]},{"id":623000,"name":"甘南藏族自治州","subList":[{"id":623001,"name":"合作市","subList":[]},{"id":623021,"name":"临潭县","subList":[]},{"id":623022,"name":"卓尼县","subList":[]},{"id":623023,"name":"舟曲县","subList":[]},{"id":623024,"name":"迭部县","subList":[]},{"id":623025,"name":"玛曲县","subList":[]},
{"id":623026,"name":"碌曲县","subList":[]},{"id":623027,"name":"夏河县","subList":[]}]},{"id":620101,"name":"市辖区","subList":[]},{"id":620201,"name":"市辖区","subList":[]},{"id":620301,"name":"市辖区","subList":[]},{"id":620401,"name":"市辖区","subList":[]},{"id":620501,"name":"市辖区","subList":[]},{"id":620601,"name":"市辖区","subList":[]},{"id":620701,"name":"市辖区","subList":[]},{"id":620801,"name":"市辖区","subList":[]},{"id":620901,"name":"市辖区","subList":[]},{"id":621001,"name":"市辖区","subList":[]},{"id":621101,"name":"市辖区","subList":[]},{"id":621201,"name":"市辖区","subList":[]}]},{"id":630000,"name":"青海省","subList":[{"id":630100,"name":"西宁市","subList":[{"id":630102,"name":"城东区","subList":[]},{"id":630103,"name":"城中区","subList":[]},{"id":630104,"name":"城西区","subList":[]},{"id":630105,"name":"城北区","subList":[]},{"id":630121,"name":"大通回族土族自治县","subList":[]},{"id":630122,"name":"湟中县","subList":[]},{"id":630123,"name":"湟源县","subList":[]}]},
{"id":630200,"name":"海东市","subList":[{"id":630202,"name":"乐都区","subList":[]},{"id":630203,"name":"平安区","subList":[]},{"id":630222,"name":"民和回族土族自治县","subList":[]},{"id":630223,"name":"互助土族自治县","subList":[]},{"id":630224,"name":"化隆回族自治县","subList":[]},{"id":630225,"name":"循化撒拉族自治县","subList":[]}]},{"id":632200,"name":"海北藏族自治州","subList":[{"id":632221,"name":"门源回族自治县","subList":[]},{"id":632222,"name":"祁连县","subList":[]},{"id":632223,"name":"海晏县","subList":[]},{"id":632224,"name":"刚察县","subList":[]}]},{"id":632300,"name":"黄南藏族自治州","subList":[{"id":632321,"name":"同仁县","subList":[]},{"id":632322,"name":"尖扎县","subList":[]},{"id":632323,"name":"泽库县","subList":[]},{"id":632324,"name":"河南蒙古族自治县","subList":[]}]},{"id":632500,"name":"海南藏族自治州","subList":[{"id":632521,"name":"共和县","subList":[]},{"id":632522,"name":"同德县","subList":[]},{"id":632523,"name":"贵德县","subList":[]},{"id":632524,"name":"兴海县","subList":[]},
{"id":632525,"name":"贵南县","subList":[]}]},{"id":632600,"name":"果洛藏族自治州","subList":[{"id":632621,"name":"玛沁县","subList":[]},{"id":632622,"name":"班玛县","subList":[]},{"id":632623,"name":"甘德县","subList":[]},{"id":632624,"name":"达日县","subList":[]},{"id":632625,"name":"久治县","subList":[]},{"id":632626,"name":"玛多县","subList":[]}]},{"id":632700,"name":"玉树藏族自治州","subList":[{"id":632701,"name":"玉树市","subList":[]},{"id":632722,"name":"杂多县","subList":[]},{"id":632723,"name":"称多县","subList":[]},{"id":632724,"name":"治多县","subList":[]},{"id":632725,"name":"囊谦县","subList":[]},{"id":632726,"name":"曲麻莱县","subList":[]}]},{"id":632800,"name":"海西蒙古族藏族自治州","subList":[{"id":632801,"name":"格尔木市","subList":[]},{"id":632802,"name":"德令哈市","subList":[]},{"id":632821,"name":"乌兰县","subList":[]},{"id":632822,"name":"都兰县","subList":[]},{"id":632823,"name":"天峻县","subList":[]},{"id":632825,"name":"海西蒙古族藏族自治州直辖","subList":[]}]},
{"id":630101,"name":"市辖区","subList":[]},{"id":630201,"name":"市辖区","subList":[]},{"id":632201,"name":"市辖区","subList":[]},{"id":632301,"name":"市辖区","subList":[]},{"id":632501,"name":"市辖区","subList":[]},{"id":632601,"name":"市辖区","subList":[]}]},{"id":640000,"name":"宁夏回族自治区","subList":[{"id":640100,"name":"银川市","subList":[{"id":640104,"name":"兴庆区","subList":[]},{"id":640105,"name":"西夏区","subList":[]},{"id":640106,"name":"金凤区","subList":[]},{"id":640121,"name":"永宁县","subList":[]},{"id":640122,"name":"贺兰县","subList":[]},
{"id":640181,"name":"灵武市","subList":[]}]},{"id":640200,"name":"石嘴山市","subList":[{"id":640202,"name":"大武口区","subList":[]},{"id":640205,"name":"惠农区","subList":[]},{"id":640221,"name":"平罗县","subList":[]}]},{"id":640300,"name":"吴忠市","subList":[{"id":640302,"name":"利通区","subList":[]},{"id":640303,"name":"红寺堡区","subList":[]},{"id":640323,"name":"盐池县","subList":[]},{"id":640324,"name":"同心县","subList":[]},{"id":640381,"name":"青铜峡市","subList":[]}]},{"id":640400,"name":"固原市","subList":[{"id":640402,"name":"原州区","subList":[]},{"id":640422,"name":"西吉县","subList":[]},{"id":640423,"name":"隆德县","subList":[]},{"id":640424,"name":"泾源县","subList":[]},{"id":640425,"name":"彭阳县","subList":[]}]},{"id":640500,"name":"中卫市","subList":[{"id":640502,"name":"沙坡头区","subList":[]},{"id":640521,"name":"中宁县","subList":[]},{"id":640522,"name":"海原县","subList":[]}]},{"id":640101,"name":"市辖区","subList":[]},{"id":640201,"name":"市辖区","subList":[]},
{"id":640301,"name":"市辖区","subList":[]},{"id":640401,"name":"市辖区","subList":[]},{"id":640501,"name":"市辖区","subList":[]}]},{"id":650000,"name":"新疆维吾尔自治区","subList":[{"id":650100,"name":"乌鲁木齐市","subList":[{"id":650102,"name":"天山区","subList":[]},{"id":650103,"name":"沙依巴克区","subList":[]},{"id":650104,"name":"新市区","subList":[]},{"id":650105,"name":"水磨沟区","subList":[]},{"id":650106,"name":"头屯河区","subList":[]},{"id":650107,"name":"达坂城区","subList":[]},{"id":650109,"name":"米东区","subList":[]},{"id":650121,"name":"乌鲁木齐县","subList":[]}]},{"id":650200,"name":"克拉玛依市","subList":[{"id":650202,"name":"独山子区","subList":[]},{"id":650203,"name":"克拉玛依区","subList":[]},{"id":650204,"name":"白碱滩区","subList":[]},{"id":650205,"name":"乌尔禾区","subList":[]}]},{"id":650400,"name":"吐鲁番市","subList":[{"id":650402,"name":"高昌区","subList":[]},{"id":650421,"name":"鄯善县","subList":[]},{"id":650422,"name":"托克逊县","subList":[]}]},
{"id":652200,"name":"哈密市","subList":[{"id":652201,"name":"伊州区","subList":[]},{"id":652222,"name":"巴里坤哈萨克自治县","subList":[]},{"id":652223,"name":"伊吾县","subList":[]}]},{"id":652300,"name":"昌吉回族自治州","subList":[{"id":652301,"name":"昌吉市","subList":[]},{"id":652302,"name":"阜康市","subList":[]},{"id":652323,"name":"呼图壁县","subList":[]},{"id":652324,"name":"玛纳斯县","subList":[]},{"id":652325,"name":"奇台县","subList":[]},{"id":652327,"name":"吉木萨尔县","subList":[]},{"id":652328,"name":"木垒哈萨克自治县","subList":[]}]},{"id":652700,"name":"博尔塔拉蒙古自治州","subList":[{"id":652701,"name":"博乐市","subList":[]},{"id":652702,"name":"阿拉山口市","subList":[]},{"id":652722,"name":"精河县","subList":[]},{"id":652723,"name":"温泉县","subList":[]}]},{"id":652800,"name":"巴音郭楞蒙古自治州","subList":[{"id":652801,"name":"库尔勒市","subList":[]},{"id":652822,"name":"轮台县","subList":[]},{"id":652823,"name":"尉犁县","subList":[]},{"id":652824,"name":"若羌县","subList":[]},
{"id":652825,"name":"且末县","subList":[]},{"id":652826,"name":"焉耆回族自治县","subList":[]},{"id":652827,"name":"和静县","subList":[]},{"id":652828,"name":"和硕县","subList":[]},{"id":652829,"name":"博湖县","subList":[]}]},{"id":652900,"name":"阿克苏地区","subList":[{"id":652901,"name":"阿克苏市","subList":[]},{"id":652922,"name":"温宿县","subList":[]},{"id":652923,"name":"库车县","subList":[]},{"id":652924,"name":"沙雅县","subList":[]},{"id":652925,"name":"新和县","subList":[]},{"id":652926,"name":"拜城县","subList":[]},{"id":652927,"name":"乌什县","subList":[]},{"id":652928,"name":"阿瓦提县","subList":[]},{"id":652929,"name":"柯坪县","subList":[]}]},{"id":653000,"name":"克孜勒苏柯尔克孜自治州","subList":[{"id":653001,"name":"阿图什市","subList":[]},{"id":653022,"name":"阿克陶县","subList":[]},{"id":653023,"name":"阿合奇县","subList":[]},{"id":653024,"name":"乌恰县","subList":[]}]},{"id":653100,"name":"喀什地区","subList":[{"id":653101,"name":"喀什市","subList":[]},
{"id":653121,"name":"疏附县","subList":[]},{"id":653122,"name":"疏勒县","subList":[]},{"id":653123,"name":"英吉沙县","subList":[]},{"id":653124,"name":"泽普县","subList":[]},{"id":653125,"name":"莎车县","subList":[]},{"id":653126,"name":"叶城县","subList":[]},{"id":653127,"name":"麦盖提县","subList":[]},{"id":653128,"name":"岳普湖县","subList":[]},{"id":653129,"name":"伽师县","subList":[]},{"id":653130,"name":"巴楚县","subList":[]},{"id":653131,"name":"塔什库尔干塔吉克自治县","subList":[]}]},{"id":653200,"name":"和田地区","subList":[{"id":653201,"name":"和田市","subList":[]},{"id":653221,"name":"和田县","subList":[]},{"id":653222,"name":"墨玉县","subList":[]},{"id":653223,"name":"皮山县","subList":[]},{"id":653224,"name":"洛浦县","subList":[]},{"id":653225,"name":"策勒县","subList":[]},{"id":653226,"name":"于田县","subList":[]},{"id":653227,"name":"民丰县","subList":[]}]},{"id":654000,"name":"伊犁哈萨克自治州","subList":[{"id":654002,"name":"伊宁市","subList":[]},{"id":654003,"name":"奎屯市","subList":[]},
{"id":654004,"name":"霍尔果斯市","subList":[]},{"id":654021,"name":"伊宁县","subList":[]},{"id":654022,"name":"察布查尔锡伯自治县","subList":[]},{"id":654023,"name":"霍城县","subList":[]},{"id":654024,"name":"巩留县","subList":[]},{"id":654025,"name":"新源县","subList":[]},{"id":654026,"name":"昭苏县","subList":[]},{"id":654027,"name":"特克斯县","subList":[]},{"id":654028,"name":"尼勒克县","subList":[]}]},{"id":654200,"name":"塔城地区","subList":[{"id":654201,"name":"塔城市","subList":[]},{"id":654202,"name":"乌苏市","subList":[]},{"id":654221,"name":"额敏县","subList":[]},{"id":654223,"name":"沙湾县","subList":[]},{"id":654224,"name":"托里县","subList":[]},{"id":654225,"name":"裕民县","subList":[]},{"id":654226,"name":"和布克赛尔蒙古自治县","subList":[]}]},{"id":654300,"name":"阿勒泰地区","subList":[{"id":654301,"name":"阿勒泰市","subList":[]},{"id":654321,"name":"布尔津县","subList":[]},{"id":654322,"name":"富蕴县","subList":[]},{"id":654323,"name":"福海县","subList":[]},{"id":654324,"name":"哈巴河县","subList":[]},
{"id":654325,"name":"青河县","subList":[]},{"id":654326,"name":"吉木乃县","subList":[]}]},{"id":659001,"name":"石河子市","subList":[]},{"id":659002,"name":"阿拉尔市","subList":[]},{"id":659003,"name":"图木舒克市","subList":[]},{"id":659004,"name":"五家渠市","subList":[]},{"id":659005,"name":"北屯市","subList":[]},{"id":659006,"name":"铁门关市","subList":[]},{"id":659007,"name":"双河市","subList":[]},{"id":659008,"name":"可克达拉市","subList":[]},{"id":659009,"name":"昆玉市","subList":[]},{"id":650101,"name":"市辖区","subList":[]},{"id":650201,"name":"市辖区","subList":[]},{"id":650401,"name":"市辖区","subList":[]},{"id":654001,"name":"市辖区","subList":[]}]},{"id":710000,"name":"台湾省","subList":[{"id":710100,"name":"台北市","subList":[{"id":710101,"name":"中正区","subList":[]},{"id":710102,"name":"大同区","subList":[]},{"id":710103,"name":"中山区","subList":[]},{"id":710104,"name":"松山区","subList":[]},{"id":710105,"name":"大安区","subList":[]},{"id":710106,"name":"万华区","subList":[]},{"id":710107,"name":"信义区","subList":[]},
{"id":710108,"name":"士林区","subList":[]},{"id":710109,"name":"北投区","subList":[]},{"id":710110,"name":"内湖区","subList":[]},{"id":710111,"name":"南港区","subList":[]},{"id":710112,"name":"文山区","subList":[]},{"id":710113,"name":"其它区","subList":[]}]},{"id":710200,"name":"高雄市","subList":[{"id":710201,"name":"新兴区","subList":[]},{"id":710202,"name":"前金区","subList":[]},{"id":710203,"name":"芩雅区","subList":[]},{"id":710204,"name":"盐埕区","subList":[]},{"id":710205,"name":"鼓山区","subList":[]},{"id":710206,"name":"旗津区","subList":[]},{"id":710207,"name":"前镇区","subList":[]},{"id":710208,"name":"三民区","subList":[]},{"id":710209,"name":"左营区","subList":[]},{"id":710210,"name":"楠梓区","subList":[]},{"id":710211,"name":"小港区","subList":[]},{"id":710212,"name":"其它区","subList":[]},
{"id":710241,"name":"苓雅区","subList":[]},{"id":710242,"name":"仁武区","subList":[]},{"id":710243,"name":"大社区","subList":[]},{"id":710244,"name":"冈山区","subList":[]},{"id":710245,"name":"路竹区","subList":[]},{"id":710246,"name":"阿莲区","subList":[]},{"id":710247,"name":"田寮区","subList":[]},{"id":710248,"name":"燕巢区","subList":[]},{"id":710249,"name":"桥头区","subList":[]},{"id":710250,"name":"梓官区","subList":[]},{"id":710251,"name":"弥陀区","subList":[]},{"id":710252,"name":"永安区","subList":[]},{"id":710253,"name":"湖内区","subList":[]},{"id":710254,"name":"凤山区","subList":[]},{"id":710255,"name":"大寮区","subList":[]},{"id":710256,"name":"林园区","subList":[]},{"id":710257,"name":"鸟松区","subList":[]},{"id":710258,"name":"大树区","subList":[]},{"id":710259,"name":"旗山区","subList":[]},{"id":710260,"name":"美浓区","subList":[]},{"id":710261,"name":"六龟区","subList":[]},{"id":710262,"name":"内门区","subList":[]},{"id":710263,"name":"杉林区","subList":[]},
{"id":710264,"name":"甲仙区","subList":[]},{"id":710265,"name":"桃源区","subList":[]},{"id":710266,"name":"那玛夏区","subList":[]},{"id":710267,"name":"茂林区","subList":[]},{"id":710268,"name":"茄萣区","subList":[]}]},{"id":710300,"name":"台南市","subList":[{"id":710301,"name":"中西区","subList":[]},{"id":710302,"name":"东区","subList":[]},{"id":710303,"name":"南区","subList":[]},{"id":710304,"name":"北区","subList":[]},{"id":710305,"name":"安平区","subList":[]},{"id":710306,"name":"安南区","subList":[]},{"id":710307,"name":"其它区","subList":[]},{"id":710339,"name":"永康区","subList":[]},{"id":710340,"name":"归仁区","subList":[]},{"id":710341,"name":"新化区","subList":[]},{"id":710342,"name":"左镇区","subList":[]},{"id":710343,"name":"玉井区","subList":[]},{"id":710344,"name":"楠西区","subList":[]},{"id":710345,"name":"南化区","subList":[]},{"id":710346,"name":"仁德区","subList":[]},{"id":710347,"name":"关庙区","subList":[]},{"id":710348,"name":"龙崎区","subList":[]},
{"id":710349,"name":"官田区","subList":[]},{"id":710350,"name":"麻豆区","subList":[]},{"id":710351,"name":"佳里区","subList":[]},{"id":710352,"name":"西港区","subList":[]},{"id":710353,"name":"七股区","subList":[]},{"id":710354,"name":"将军区","subList":[]},{"id":710355,"name":"学甲区","subList":[]},{"id":710356,"name":"北门区","subList":[]},{"id":710357,"name":"新营区","subList":[]},{"id":710358,"name":"后壁区","subList":[]},{"id":710359,"name":"白河区","subList":[]},{"id":710360,"name":"东山区","subList":[]},{"id":710361,"name":"六甲区","subList":[]},{"id":710362,"name":"下营区","subList":[]},{"id":710363,"name":"柳营区","subList":[]},{"id":710364,"name":"盐水区","subList":[]},{"id":710365,"name":"善化区","subList":[]},{"id":710366,"name":"大内区","subList":[]},{"id":710367,"name":"山上区","subList":[]},
{"id":710368,"name":"新市区","subList":[]},{"id":710369,"name":"安定区","subList":[]}]},{"id":710400,"name":"台中市","subList":[{"id":710401,"name":"中区","subList":[]},{"id":710402,"name":"东区","subList":[]},{"id":710403,"name":"南区","subList":[]},{"id":710404,"name":"西区","subList":[]},{"id":710405,"name":"北区","subList":[]},{"id":710406,"name":"北屯区","subList":[]},{"id":710407,"name":"西屯区","subList":[]},{"id":710408,"name":"南屯区","subList":[]},{"id":710409,"name":"其它区","subList":[]},{"id":710431,"name":"太平区","subList":[]},{"id":710432,"name":"大里区","subList":[]},{"id":710433,"name":"雾峰区","subList":[]},{"id":710434,"name":"乌日区","subList":[]},{"id":710435,"name":"丰原区","subList":[]},{"id":710436,"name":"后里区","subList":[]},{"id":710437,"name":"石冈区","subList":[]},{"id":710438,"name":"东势区","subList":[]},{"id":710439,"name":"和平区","subList":[]},{"id":710440,"name":"新社区","subList":[]},{"id":710441,"name":"潭子区","subList":[]},
{"id":710442,"name":"大雅区","subList":[]},{"id":710443,"name":"神冈区","subList":[]},{"id":710444,"name":"大肚区","subList":[]},{"id":710445,"name":"沙鹿区","subList":[]},{"id":710446,"name":"龙井区","subList":[]},{"id":710447,"name":"梧栖区","subList":[]},{"id":710448,"name":"清水区","subList":[]},{"id":710449,"name":"大甲区","subList":[]},{"id":710450,"name":"外埔区","subList":[]},{"id":710451,"name":"大安区","subList":[]}]},{"id":710500,"name":"金门县","subList":[{"id":710507,"name":"金沙镇","subList":[]},{"id":710508,"name":"金湖镇","subList":[]},{"id":710509,"name":"金宁乡","subList":[]},{"id":710510,"name":"金城镇","subList":[]},{"id":710511,"name":"烈屿乡","subList":[]},{"id":710512,"name":"乌坵乡","subList":[]}]},{"id":710600,"name":"南投县","subList":[{"id":710614,"name":"南投市","subList":[]},{"id":710615,"name":"中寮乡","subList":[]},
{"id":710616,"name":"草屯镇","subList":[]},{"id":710617,"name":"国姓乡","subList":[]},{"id":710618,"name":"埔里镇","subList":[]},{"id":710619,"name":"仁爱乡","subList":[]},{"id":710620,"name":"名间乡","subList":[]},{"id":710621,"name":"集集镇","subList":[]},{"id":710622,"name":"水里乡","subList":[]},{"id":710623,"name":"鱼池乡","subList":[]},{"id":710624,"name":"信义乡","subList":[]},{"id":710625,"name":"竹山镇","subList":[]},{"id":710626,"name":"鹿谷乡","subList":[]}]},
{"id":710700,"name":"基隆市","subList":[{"id":710701,"name":"仁爱区","subList":[]},{"id":710702,"name":"信义区","subList":[]},{"id":710703,"name":"中正区","subList":[]},{"id":710704,"name":"中山区","subList":[]},{"id":710705,"name":"安乐区","subList":[]},{"id":710706,"name":"暖暖区","subList":[]},{"id":710707,"name":"七堵区","subList":[]},{"id":710708,"name":"其它区","subList":[]}]},{"id":710800,"name":"新竹市","subList":[{"id":710801,"name":"东区","subList":[]},{"id":710802,"name":"北区","subList":[]},
{"id":710803,"name":"香山区","subList":[]},{"id":710804,"name":"其它区","subList":[]}]},{"id":710900,"name":"嘉义市","subList":[{"id":710901,"name":"东区","subList":[]},{"id":710902,"name":"西区","subList":[]},{"id":710903,"name":"其它区","subList":[]}]},{"id":711100,"name":"新北市","subList":[{"id":711130,"name":"万里区","subList":[]},{"id":711131,"name":"金山区","subList":[]},{"id":711132,"name":"板桥区","subList":[]},{"id":711133,"name":"汐止区","subList":[]},{"id":711134,"name":"深坑区","subList":[]},{"id":711135,"name":"石碇区","subList":[]},{"id":711136,"name":"瑞芳区","subList":[]},{"id":711137,"name":"平溪区","subList":[]},{"id":711138,"name":"双溪区","subList":[]},{"id":711139,"name":"贡寮区","subList":[]},{"id":711140,"name":"新店区","subList":[]},{"id":711141,"name":"坪林区","subList":[]},{"id":711142,"name":"乌来区","subList":[]},
{"id":711143,"name":"永和区","subList":[]},{"id":711144,"name":"中和区","subList":[]},{"id":711145,"name":"土城区","subList":[]},{"id":711146,"name":"三峡区","subList":[]},{"id":711147,"name":"树林区","subList":[]},{"id":711148,"name":"莺歌区","subList":[]},{"id":711149,"name":"三重区","subList":[]},{"id":711150,"name":"新庄区","subList":[]},{"id":711151,"name":"泰山区","subList":[]},{"id":711152,"name":"林口区","subList":[]},{"id":711153,"name":"芦洲区","subList":[]},{"id":711154,"name":"五股区","subList":[]},{"id":711155,"name":"八里区","subList":[]},{"id":711156,"name":"淡水区","subList":[]},{"id":711157,"name":"三芝区","subList":[]},{"id":711158,"name":"石门区","subList":[]}]},{"id":711200,"name":"宜兰县","subList":[{"id":711214,"name":"宜兰市","subList":[]},
{"id":711215,"name":"头城镇","subList":[]},{"id":711216,"name":"礁溪乡","subList":[]},{"id":711217,"name":"壮围乡","subList":[]},{"id":711218,"name":"员山乡","subList":[]},{"id":711219,"name":"罗东镇","subList":[]},{"id":711220,"name":"三星乡","subList":[]},{"id":711221,"name":"大同乡","subList":[]},{"id":711222,"name":"五结乡","subList":[]},{"id":711223,"name":"冬山乡","subList":[]},{"id":711224,"name":"苏澳镇","subList":[]},{"id":711225,"name":"南澳乡","subList":[]},{"id":711226,"name":"钓鱼台","subList":[]}]},{"id":711300,"name":"新竹县","subList":[{"id":711314,"name":"竹北市","subList":[]},{"id":711315,"name":"湖口乡","subList":[]},{"id":711316,"name":"新丰乡","subList":[]},{"id":711317,"name":"新埔镇","subList":[]},{"id":711318,"name":"关西镇","subList":[]},
{"id":711319,"name":"芎林乡","subList":[]},{"id":711320,"name":"宝山乡","subList":[]},{"id":711321,"name":"竹东镇","subList":[]},{"id":711322,"name":"五峰乡","subList":[]},{"id":711323,"name":"横山乡","subList":[]},{"id":711324,"name":"尖石乡","subList":[]},{"id":711325,"name":"北埔乡","subList":[]},{"id":711326,"name":"峨眉乡","subList":[]}]},{"id":711400,"name":"桃园县","subList":[{"id":711414,"name":"中坜市","subList":[]},{"id":711415,"name":"平镇市","subList":[]},{"id":711416,"name":"龙潭乡","subList":[]},{"id":711417,"name":"杨梅市","subList":[]},{"id":711418,"name":"新屋乡","subList":[]},{"id":711419,"name":"观音乡","subList":[]},{"id":711420,"name":"桃园市","subList":[]},{"id":711421,"name":"龟山乡","subList":[]},{"id":711422,"name":"八德市","subList":[]},{"id":711423,"name":"大溪镇","subList":[]},
{"id":711424,"name":"复兴乡","subList":[]},{"id":711425,"name":"大园乡","subList":[]},{"id":711426,"name":"芦竹乡","subList":[]}]},{"id":711500,"name":"苗栗县","subList":[{"id":711519,"name":"竹南镇","subList":[]},{"id":711520,"name":"头份镇","subList":[]},{"id":711521,"name":"三湾乡","subList":[]},{"id":711522,"name":"南庄乡","subList":[]},{"id":711523,"name":"狮潭乡","subList":[]},{"id":711524,"name":"后龙镇","subList":[]},{"id":711525,"name":"通霄镇","subList":[]},{"id":711526,"name":"苑里镇","subList":[]},{"id":711527,"name":"苗栗市","subList":[]},{"id":711528,"name":"造桥乡","subList":[]},{"id":711529,"name":"头屋乡","subList":[]},{"id":711530,"name":"公馆乡","subList":[]},{"id":711531,"name":"大湖乡","subList":[]},{"id":711532,"name":"泰安乡","subList":[]},{"id":711533,"name":"铜锣乡","subList":[]},{"id":711534,"name":"三义乡","subList":[]},{"id":711535,"name":"西湖乡","subList":[]},{"id":711536,"name":"卓兰镇","subList":[]}]},
{"id":711700,"name":"彰化县","subList":[{"id":711727,"name":"彰化市","subList":[]},{"id":711728,"name":"芬园乡","subList":[]},{"id":711729,"name":"花坛乡","subList":[]},{"id":711730,"name":"秀水乡","subList":[]},{"id":711731,"name":"鹿港镇","subList":[]},{"id":711732,"name":"福兴乡","subList":[]},{"id":711733,"name":"线西乡","subList":[]},{"id":711734,"name":"和美镇","subList":[]},{"id":711735,"name":"伸港乡","subList":[]},{"id":711736,"name":"员林镇","subList":[]},{"id":711737,"name":"社头乡","subList":[]},{"id":711738,"name":"永靖乡","subList":[]},{"id":711739,"name":"埔心乡","subList":[]},{"id":711740,"name":"溪湖镇","subList":[]},{"id":711741,"name":"大村乡","subList":[]},{"id":711742,"name":"埔盐乡","subList":[]},{"id":711743,"name":"田中镇","subList":[]},{"id":711744,"name":"北斗镇","subList":[]},{"id":711745,"name":"田尾乡","subList":[]},{"id":711746,"name":"埤头乡","subList":[]},{"id":711747,"name":"溪州乡","subList":[]},{"id":711748,"name":"竹塘乡","subList":[]},{"id":711749,"name":"二林镇","subList":[]},{"id":711750,"name":"大城乡","subList":[]},
{"id":711751,"name":"芳苑乡","subList":[]},{"id":711752,"name":"二水乡","subList":[]}]},{"id":711900,"name":"嘉义县","subList":[{"id":711919,"name":"番路乡","subList":[]},{"id":711920,"name":"梅山乡","subList":[]},{"id":711921,"name":"竹崎乡","subList":[]},{"id":711922,"name":"阿里山乡","subList":[]},{"id":711923,"name":"中埔乡","subList":[]},{"id":711924,"name":"大埔乡","subList":[]},{"id":711925,"name":"水上乡","subList":[]},{"id":711926,"name":"鹿草乡","subList":[]},{"id":711927,"name":"太保市","subList":[]},{"id":711928,"name":"朴子市","subList":[]},{"id":711929,"name":"东石乡","subList":[]},{"id":711930,"name":"六脚乡","subList":[]},{"id":711931,"name":"新港乡","subList":[]},{"id":711932,"name":"民雄乡","subList":[]},{"id":711933,"name":"大林镇","subList":[]},{"id":711934,"name":"溪口乡","subList":[]},{"id":711935,"name":"义竹乡","subList":[]},{"id":711936,"name":"布袋镇","subList":[]}]},
{"id":712100,"name":"云林县","subList":[{"id":712121,"name":"斗南镇","subList":[]},{"id":712122,"name":"大埤乡","subList":[]},{"id":712123,"name":"虎尾镇","subList":[]},{"id":712124,"name":"土库镇","subList":[]},{"id":712125,"name":"褒忠乡","subList":[]},{"id":712126,"name":"东势乡","subList":[]},{"id":712127,"name":"台西乡","subList":[]},{"id":712128,"name":"仑背乡","subList":[]},{"id":712129,"name":"麦寮乡","subList":[]},{"id":712130,"name":"斗六市","subList":[]},{"id":712131,"name":"林内乡","subList":[]},{"id":712132,"name":"古坑乡","subList":[]},{"id":712133,"name":"莿桐乡","subList":[]},{"id":712134,"name":"西螺镇","subList":[]},{"id":712135,"name":"二仑乡","subList":[]},{"id":712136,"name":"北港镇","subList":[]},{"id":712137,"name":"水林乡","subList":[]},{"id":712138,"name":"口湖乡","subList":[]},{"id":712139,"name":"四湖乡","subList":[]},{"id":712140,"name":"元长乡","subList":[]}]},{"id":712400,"name":"屏东县","subList":[{"id":712434,"name":"屏东市","subList":[]},{"id":712435,"name":"三地门乡","subList":[]},
{"id":712436,"name":"雾台乡","subList":[]},{"id":712437,"name":"玛家乡","subList":[]},{"id":712438,"name":"九如乡","subList":[]},{"id":712439,"name":"里港乡","subList":[]},{"id":712440,"name":"高树乡","subList":[]},{"id":712441,"name":"盐埔乡","subList":[]},{"id":712442,"name":"长治乡","subList":[]},{"id":712443,"name":"麟洛乡","subList":[]},{"id":712444,"name":"竹田乡","subList":[]},{"id":712445,"name":"内埔乡","subList":[]},{"id":712446,"name":"万丹乡","subList":[]},{"id":712447,"name":"潮州镇","subList":[]},{"id":712448,"name":"泰武乡","subList":[]},{"id":712449,"name":"来义乡","subList":[]},{"id":712450,"name":"万峦乡","subList":[]},{"id":712451,"name":"崁顶乡","subList":[]},
{"id":712452,"name":"新埤乡","subList":[]},{"id":712453,"name":"南州乡","subList":[]},{"id":712454,"name":"林边乡","subList":[]},{"id":712455,"name":"东港镇","subList":[]},{"id":712456,"name":"琉球乡","subList":[]},{"id":712457,"name":"佳冬乡","subList":[]},{"id":712458,"name":"新园乡","subList":[]},{"id":712459,"name":"枋寮乡","subList":[]},{"id":712460,"name":"枋山乡","subList":[]},{"id":712461,"name":"春日乡","subList":[]},{"id":712462,"name":"狮子乡","subList":[]},{"id":712463,"name":"车城乡","subList":[]},{"id":712464,"name":"牡丹乡","subList":[]},{"id":712465,"name":"恒春镇","subList":[]},{"id":712466,"name":"满州乡","subList":[]}]},{"id":712500,"name":"台东县","subList":[{"id":712517,"name":"台东市","subList":[]},{"id":712518,"name":"绿岛乡","subList":[]},{"id":712519,"name":"兰屿乡","subList":[]},{"id":712520,"name":"延平乡","subList":[]},{"id":712521,"name":"卑南乡","subList":[]},{"id":712522,"name":"鹿野乡","subList":[]},{"id":712523,"name":"关山镇","subList":[]},{"id":712524,"name":"海端乡","subList":[]},
{"id":712525,"name":"池上乡","subList":[]},{"id":712526,"name":"东河乡","subList":[]},{"id":712527,"name":"成功镇","subList":[]},{"id":712528,"name":"长滨乡","subList":[]},{"id":712529,"name":"金峰乡","subList":[]},{"id":712530,"name":"大武乡","subList":[]},{"id":712531,"name":"达仁乡","subList":[]},{"id":712532,"name":"太麻里乡","subList":[]}]},{"id":712600,"name":"花莲县","subList":[{"id":712615,"name":"花莲市","subList":[]},{"id":712616,"name":"新城乡","subList":[]},{"id":712617,"name":"太鲁阁","subList":[]},{"id":712618,"name":"秀林乡","subList":[]},{"id":712619,"name":"吉安乡","subList":[]},{"id":712620,"name":"寿丰乡","subList":[]},{"id":712621,"name":"凤林镇","subList":[]},{"id":712622,"name":"光复乡","subList":[]},{"id":712623,"name":"丰滨乡","subList":[]},{"id":712624,"name":"瑞穗乡","subList":[]},{"id":712625,"name":"万荣乡","subList":[]},{"id":712626,"name":"玉里镇","subList":[]},{"id":712627,"name":"卓溪乡","subList":[]},{"id":712628,"name":"富里乡","subList":[]}]},
{"id":712700,"name":"澎湖县","subList":[{"id":712707,"name":"马公市","subList":[]},{"id":712708,"name":"西屿乡","subList":[]},{"id":712709,"name":"望安乡","subList":[]},{"id":712710,"name":"七美乡","subList":[]},{"id":712711,"name":"白沙乡","subList":[]},{"id":712712,"name":"湖西乡","subList":[]}]},{"id":712800,"name":"连江县","subList":[{"id":712805,"name":"南竿乡","subList":[]},{"id":712806,"name":"北竿乡","subList":[]},{"id":712807,"name":"莒光乡","subList":[]},{"id":712808,"name":"东引乡","subList":[]}]},{"id":710501,"name":"市辖区","subList":[]},{"id":710601,"name":"市辖区","subList":[]},{"id":711101,"name":"市辖区","subList":[]},{"id":711201,"name":"市辖区","subList":[]},{"id":711301,"name":"市辖区","subList":[]},{"id":711401,"name":"市辖区","subList":[]},{"id":711501,"name":"市辖区","subList":[]},{"id":711701,"name":"市辖区","subList":[]},{"id":711901,"name":"市辖区","subList":[]},{"id":712101,"name":"市辖区","subList":[]},{"id":712401,"name":"市辖区","subList":[]},{"id":712501,"name":"市辖区","subList":[]},{"id":712601,"name":"市辖区","subList":[]},
{"id":712701,"name":"市辖区","subList":[]},{"id":712801,"name":"市辖区","subList":[]}]},{"id":810000,"name":"香港特别行政区","subList":[{"id":810001,"name":"中西区","subList":[]},{"id":810002,"name":"湾仔区","subList":[]},{"id":810003,"name":"东区","subList":[]},{"id":810004,"name":"南区","subList":[]},{"id":810005,"name":"油尖旺区","subList":[]},{"id":810006,"name":"深水埗区","subList":[]},{"id":810007,"name":"九龙城区","subList":[]},{"id":810008,"name":"黄大仙区","subList":[]},{"id":810009,"name":"观塘区","subList":[]},{"id":810010,"name":"荃湾区","subList":[]},{"id":810011,"name":"屯门区","subList":[]},{"id":810012,"name":"元朗区","subList":[]},{"id":810013,"name":"北区","subList":[]},{"id":810014,"name":"大埔区","subList":[]},{"id":810015,"name":"西贡区","subList":[]},{"id":810016,"name":"沙田区","subList":[]},{"id":810017,"name":"葵青区","subList":[]},{"id":810018,"name":"离岛区","subList":[]}]},{"id":820000,"name":"澳门特别行政区","subList":[{"id":820001,"name":"花地玛堂区","subList":[]},{"id":820002,"name":"花王堂区","subList":[]},
{"id":820003,"name":"望德堂区","subList":[]},{"id":820004,"name":"大堂区","subList":[]},{"id":820005,"name":"风顺堂区","subList":[]},{"id":820006,"name":"嘉模堂区","subList":[]},{"id":820007,"name":"路凼填海区","subList":[]},{"id":820008,"name":"圣方济各堂区","subList":[]}]}]

var app = getApp();
var buildingType = ['板楼','塔楼','板塔结合','平板'];
var towards=['朝东','朝南','朝西','朝北','东南','西北','东北','西南'];
var decoration=['毛坯','简装','精装','豪装'];
Page({
  data: {
    buildingTypes:buildingType,
    buildingType:'',
    imgurl:app.globalData.baseImgUrl_whj,
    provinces: [],
    province: "",
    provinceId:'',
    provinceCode:'',
    citys: [],
    city: "",
    cityId:'',
    cityCode:'',
    countys: [],
    county: '',
    countyId:'',
    countyCode: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    dist:'',
    village:'',
    longitude:'',
    latitude:'',
    images:[],
    img:'',
    canAddImg:true,
    upload:false,
    datatime:'2018-01-01',
    type:1,
    
    huxingList:[],
    huxing:'',
    roomcount:0,
    hallcount:0,
    houseNo:'',
    showToward:false,
    towardsArray:towards,
    decorationArray:decoration,
    chaoxiang:'',
    zhuangxiu:'',
    decorateType:0,
    varea:'',
    vowner:'',
    vownerCard:'',
    ownerTel:'',
    vrelation:'',

    vaddress:'',//楼栋
    unit:'',//单元
    floor:'',//所在楼层
    totalFloor:'',//总层数
    storeyList:[],
    houseFloor:'',
    elevator:false,//是否有电梯


    images:[],
    img1:'',
    img2:'',
    img3:'',
    img4:'',
    canAddImg1:true,
    canAddImg2:true,
    canAddImg3:true,
    canAddImg4:true,
    upload1:false,
    upload2:false,
    upload3:false,
    upload4:false,
    show1:true,
    show2:false,
    show3:true,
    show4:false,

    streetNames:[],//街道名称
    streetCodes:[],//街道编码
    street:'',
    streetId:'',//所选街道编码

    adname:'',//地图选择的小区所在区域名
  },
  onChange: function (e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;


    if (val[0] != t[0]) {
      console.log('province no ');
      const citys = [];
      const countys = [];


      for (let i = 0; i < cityData[val[0]].subList.length; i++) {
        citys.push(cityData[val[0]].subList[i].name)
      }
      for (let i = 0; i < cityData[val[0]].subList[0].subList.length; i++) {
        countys.push(cityData[val[0]].subList[0].subList[i].name)
      }


      this.setData({
        province: this.data.provinces[val[0]],
        provinceId:cityData[val[0]].id,
        city: cityData[val[0]].subList[0].name,
        cityId: cityData[val[0]].subList[0].id,
        citys: citys,
        county: cityData[val[0]].subList[0].subList[0].name,
        countyId: cityData[val[0]].subList[0].subList[0].id,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })


      return;
    }
    if (val[1] != t[1]) {
      console.log('city no');
      const countys = [];


      for (let i = 0; i < cityData[val[0]].subList[val[1]].subList.length; i++) {
        countys.push(cityData[val[0]].subList[val[1]].subList[i].name)
      }


      this.setData({
        city: this.data.citys[val[1]],
        cityId:cityData[val[0]].subList[val[1]].id,
        county:cityData[val[0]].subList[val[1]].subList.length>0? cityData[val[0]].subList[val[1]].subList[0].name:'',
        countys: countys,
        countyId: cityData[val[0]].subList[val[1]].subList.length>0?cityData[val[0]].subList[val[1]].subList[0].id:0,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        countyId:cityData[val[0]].subList[val[1]].subList[val[2]].id,
        values: val
      })
      return;
    }

  },
  onLoad() {
    // my.showLoading();
    this.init();
    var aList=[];
    for(var a=1;a<13;a++){
      var bList=[];
      for(var b=0;b<6;b++){
        var cList=[];
        for(var c=0;c<6;c++){
          var dList=[];
          for(var d=0;d<6;d++){
            var eList=[];
            var obj={
              name:d+"厨",
              subList:eList
            };
            dList.push(obj);
          }
          var obj={
              name:c+"卫",
              subList:dList
            };
          cList.push(obj);
        }
        var obj={
              name:b+"厅",
              subList:cList
            };
        bList.push(obj);
      }
      var obj={
              name:a+"室",
              subList:bList
            };
      aList.push(obj);
    }
    var a1List=[];
    for(var a=1;a<50;a++){
      var b1List=[];
      for(var b=a;b<=50;b++){
        var c1List=[];
        var obj1={
              name:'共'+b+"层",
              subList:c1List
            };
        b1List.push(obj1);
      }
      var obj1={
              name:a+"楼",
              subList:b1List
            };
      a1List.push(obj1);
    }
    console.log(a1List)
    this.setData({
      storeyList:a1List,
      huxingList:aList
    });
    
    // this.setData({
    //   huxingList:aList
    // });
    
  },
  onShow(){

  },
  // getCity(){
  //   var that=this;
  //    my.request({
  //     url: app.globalData.baseUrl_whj+"json/dist.json",
  //     method: 'GET',
  //     dataType: 'json',
  //     success: function(res) {
  //       console.log(res.data.data);
  //       that.setData({
  //         cityData:res.data.data
  //       });
  //       that.init();
  //     },
  //     fail: function(res) {
  //      console.log(res);
  //     },
  //     complete: function(res) {
  //       my.hideLoading();
  //     }
  //   });
  // },
  //打开城市选择
  openCity(){
     my.hideKeyboard();
     this.setData({
      condition: !this.data.condition
    })
  },
  init(){
    var that=this;
    // var cityData = my.getStorageSync({
    //   key: 'list_city', // 缓存数据的key
    // }).data;
    var cityData =list_cityData;
    console.log(cityData)
    that.setData({
      cityData:cityData,
    });
    const provinces = [];
    const citys = [];
    const countys = [];


    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].subList.length; i++) {
      citys.push(cityData[0].subList[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].subList[0].subList.length; i++) {
      countys.push(cityData[0].subList[0].subList[i].name)
    }


    that.setData({
      provinces: provinces,
      citys: citys,
      countys: countys,
      province: cityData[0].name,
      provinceId:cityData[0].id,
      city: cityData[0].subList[0].name,
      cityId: cityData[0].subList[0].id,
      county: cityData[0].subList[0].subList[0].name,
      countyId: cityData[0].subList[0].subList[0].id,
    })

  },
  // //选择建筑类型
  // bindPickerChange1(e){
  //   console.log(e)
  //   var that = this;
  //   var index = e.detail.value*1;
  //   var arr = that.data.buildingTypes;
  //   var buildingType = arr[index]
  //   console.log(buildingType);
  //   that.setData({
  //     buildingType:buildingType,
  //   });
    
  // },


  //楼层选择
  selectStorey(){
    var that =this;
    console.log(this.data.storeyList)
    my.multiLevelSelect({
      title: '选择楼层',
      list: this.data.storeyList,
      success(res){
        var str=''
        for(var i=0;i<2;i++){
          str=str+res.result[i].name;
        }
        console.log(str);
        var index = str.indexOf("楼");
        var num =  str.substring(0,index);
        var index1 = str.indexOf("共")+1;
        var index2 = str.indexOf("层");
        var num1 =  str.substring(index1,index2);
        console.log(num+'-------'+num1);
        that.setData({
          houseFloor:num+'/'+num1,
          floor:num,//所在楼层
          totalFloor:num1,//总层数
        });
      }
    })
  },
  // addImg(){
  //   var that = this;
  //   my.chooseImage({
  //     chooseImage: 1,
  //     success: (res) => {
  //       var tempFilePaths = res.apFilePaths
  //       console.log(tempFilePaths)
  //       that.data.images[0]=tempFilePaths[0];
  //       that.setData({
  //         img:tempFilePaths[0],
  //         upload:true,
  //         canAddImg:false,
  //       });
  //     },
  //   });
  // },
  hideKeyboard(){
    my.hideKeyboard();
  },
  delImg(){
    var that = this;
    that.setData({
      img:'',
      upload:false,
      canAddImg:true,
    });
  },
  confirm(){
    this.openCity();
    console.log(this.data.province+this.data.city+this.data.county)
    this.setData({
      dist:this.data.province+this.data.city+this.data.county,
      provinceCode:this.data.provinceId,
      cityCode:this.data.cityId,
      countryCode:this.data.countyId,
    });
     this.getStreetList(this.data.countyId);
    my.setStorageSync({
      key: 'city', // 缓存数据的key
      data: this.data.city, // 要缓存的数据
    });
  },
  //获取街道列表
  getStreetList(countyId){
    var that = this;
    my.request({
      url: app.globalData.baseUrl_whj+'IF/selectData/getDistListByParentId.do', // 目标服务器url
      // url: 'http://192.168.1.89:8080/LLGY/IF/selectData/getDistListByParentId.do', // 目标服务器url
      method: 'POST',
      headers:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        parenDistId:countyId,
      },
      dataType: 'json',
      success: (res) => {
        console.log('位置')
        console.log(res)
        var list = res.data.distList;
        var streetNames = [];
        var streetCodes = [];
        for(let i=0;i<list.length;i++){
          streetNames.push(list[i].distName);
          streetCodes.push(list[i].distCode);
        }
        that.setData({
          streetNames:streetNames,
          streetCodes:streetCodes,
        });
        // my.setStorageSync({
        //   key: 'streetNames', // 缓存数据的key
        //   data: streetNames, // 要缓存的数据
        // });
        // my.setStorageSync({
        //   key: 'streetCodes', // 缓存数据的key
        //   data: streetCodes, // 要缓存的数据
        // });
      },
    });
  },
  toInput(e){
    console.log(e.detail.value)
    var that = this;

    if(e.target.dataset.t==3){
      that.setData({
        vphone:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        vyear:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        vgreen:e.detail.value,
      });
    }
    if(e.target.dataset.t==6){
      that.setData({
        vcubage:e.detail.value,
      });
    }
  },
  toInputIdCard(e){
    this.setData({
      vownerCard:e.detail.value,
    });
  },
  toInputTel(e){
    this.setData({
      ownerTel:e.detail.value,
    });
  },
  // next1(){
  //   var that = this;
  //   // that.toNext();
  //   var image = that.data.img;
  //   var provinceCode = that.data.provinceCode;
  //   var cityCode = that.data.cityCode;
  //   var countryCode = that.data.countryCode;
  //   var village = that.data.village;
  //   var longitude = that.data.longitude;
  //   var latitude = that.data.latitude;
  //   var vphone = that.data.vphone;
  //   var vyear = that.data.vyear;
  //   var vgreen = that.data.vgreen;
  //   var vcubage = that.data.vcubage;
  //   var buildingType = that.data.buildingType;
  //   if(provinceCode!=''&&cityCode!=''&&countryCode!=''){
  //     if(that.data.village!=''){
  //       // if(buildingType!=''&&vyear!=''&&vgreen!=''&&vcubage!=''){
  //       my.setStorage({
  //         key: 'r_provinceCode', // 缓存数据的key
  //         data: provinceCode, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_cityCode', // 缓存数据的key
  //         data: cityCode, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_countryCode', // 缓存数据的key
  //         data: countryCode, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_longitude', // 经度
  //         data: longitude, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_latitude', // 纬度
  //         data: latitude, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_village', // 小区
  //         data: village, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_vphone', // 小区联系号码
  //         data: vphone, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_vyear', // 小区年份
  //         data: vyear, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_vgreen', // 绿化率
  //         data: vgreen, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_vcubage', // 容积率
  //         data: vcubage, // 要缓存的数据
  //       });
  //       my.setStorageSync({
  //         key: 'r_address', // 缓存数据的key
  //         data: that.data.dist, // 要缓存的数据
  //       });
  //       my.setStorage({
  //         key: 'r_buildingType', // 建筑类型
  //         data: buildingType, // 要缓存的数据
  //       });
        
  //       if(!that.data.canAddImg){
  //         my.uploadFile({
  //           url: app.globalData.baseUrl_oos, // 开发者服务器地址
  //           filePath: image, // 要上传文件资源的本地定位符
  //           fileName: 'file', 
  //           fileType: 'image', // 文件类型，image / video / audio
  //           formData:{savePrefix:'landlord/'},
  //           success: (res) => {
  //             console.log('success');
  //             var json2 = JSON.parse(res.data);
  //             console.log(res);
  //             var newimgs=json2['message'];
  //             console.log(newimgs);
  //             my.setStorageSync({
  //               key: 'r_villageimg', // 缓存数据的key
  //               data: newimgs, // 要缓存的数据
  //             });
  //             that.toNext();
  //           },
  //           fail: (res) => {
  //             console.log(res);
  //             my.alert({ title: '上传失败' });
  //           },
  //         });
  //       }else{
  //         my.setStorageSync({
  //           key: 'r_villageimg', // 缓存数据的key
  //           data: '', // 要缓存的数据
  //         });
  //         that.toNext();
  //       }
        
        
  //       // that.toNext();
  //       // }else{
  //       //   my.alert({
  //       //     title: '请完善建筑信息' 
  //       //   });
  //       // }
      
  //     }else{
  //       my.alert({
  //         title: '请选择小区或公寓位置' 
  //       });
  //     }
  //   }else{
  //     my.alert({
  //       title: '区域信息请填写完整' 
  //     });
  //   }
  // },
  // toNext1(){
  //   console.log('下一步调用')
  //   my.navigateTo({
  //     url: '/pages/index/housedelivery/housedelivery2/',
  //   })
  // },

  selectPoi(){
    console.log(this.data.cityCode)
    if(this.data.cityCode!=''){
      my.navigateTo({
        url: '/pages/index/housedelivery/housedelivery-map/housedelivery-map',
      })
    }else{
      my.alert({
        title: '请先选择地区' 
      });
    }
     
  },
  toAgree(){
    var that = this;
    console.log('已点击同意')
    my.pageScrollTo({
      scrollTop: 0
    });
    that.setData({
      type:2
    })
    that.toLoadHistoryData();
    
  },
  toLoadHistoryData(){
    var that =this;
    var page1 = my.getStorageSync({
      key: 'page1', // 缓存数据的key
    }).data;
    console.log(page1)
    if(page1!=null&&page1!=''){
      var img1 = my.getStorageSync({
        key: 'img1_temp', // 缓存数据的key
      }).data;
      var img2 = my.getStorageSync({
        key: 'img2_temp', // 缓存数据的key
      }).data;
      var img3 = my.getStorageSync({
        key: 'img3_temp', // 缓存数据的key
      }).data;
      var img4 = my.getStorageSync({
        key: 'img4_temp', // 缓存数据的key
      }).data;

      my.confirm({
        title: '温馨提示',
        content: '是否加载上回未提交数据？',
        confirmButtonText: '是',
        cancelButtonText: '否',
        success: (res) => {
          if(res.confirm){
            that.getStreetList(page1.countryCode);
            that.setData({
              adname:page1.adname,
              county:page1.county,
              dist:page1.dist,
              provinceCode:page1.provinceCode,
              cityCode:page1.cityCode,
              countryCode:page1.countryCode,
              longitude:page1.longitude,
              latitude:page1.latitude,
              village:page1.village,
              vaddress:page1.vaddress,
              unit:page1.unit,
              floor:page1.floor,
              totalFloor:page1.totalFloor,
              houseFloor:page1.houseFloor,
              elevator:page1.elevator,
              show3:page1.elevator,
              show4:!page1.elevator,
              houseNo:page1.houseNo,
              huxing:page1.huxing,
              chaoxiang:page1.chaoxiang,
              roomcount:page1.roomcount,
              hallcount:page1.hallcount,
              decorateType:page1.decorateType,
              zhuangxiu:page1.zhuangxiu,
              varea:page1.varea,
              vowner:page1.vowner,
              vownerCard:page1.vownerCard,
              ownerTel:page1.ownerTel,
              vrelation:page1.vrelation,
              streetId:page1.streetId,
              street:page1.street,
              img1:img1,
              img2:img2,
              img3:img3,
              img4:img4,
              upload1:true,
              canAddImg1:false,
              upload2:true,
              canAddImg2:false,
              upload3:true,
              canAddImg3:false,
              upload4:true,
              canAddImg4:false,
            });
          }else{

          }
        },
      });
    }
  },


  //原发布房源第二页
    //选择户型
  selectHuXing(){
    var that=this;
    console.log(JSON.stringify( this.data.huxingList ));
    my.multiLevelSelect({
      title: '户型选择',
      list: this.data.huxingList,
      success(res){
        var str=''
        for(var i=0;i<4;i++){
          str=str+res.result[i].name;
        }
        console.log(str);
        var index = str.indexOf("室");
        var num =  str.substring(0,index);
        var index1 = str.indexOf("厅");
        var num1 =  str.substring(2,index1);
        console.log(num+'-------'+num1);
        that.setData({
          huxing:str,
          roomcount:num*1,
          hallcount:num1*1
        });
      }
    })
  },
  //关闭选择城市
  open(){
    my.hideKeyboard();
    this.setData({
      condition: !this.data.condition
    })
  },
  //选择朝向
  bindPickerChange1(e){
    console.log(e)
    var that = this;
    var index = e.detail.value;
    var arr = that.data.towardsArray;
    this.setData({
      showToward:true,
      chaoxiang:arr[index],
    });
  },
   //选择装修类型
  bindPickerChange2(e){
    console.log(e)
    var that = this;
    var index = e.detail.value;
    var arr = that.data.decorationArray;
    this.setData({
      showToward:true,
      zhuangxiu:arr[index],
      decorateType:index*1+1
    });
  },
    //选择街道
  bindPickerChange3(e){
    console.log(e)
    var that = this;
    var dist = that.data.dist;
    var index = e.detail.value;
    var arr = that.data.streetNames;
    var arr1 = that.data.streetCodes;
    console.log(arr)
    console.log(arr1)
    console.log(dist)
    if(dist!=''&&dist!=null){
      that.setData({
        street:arr[index],
        streetId:arr1[index],
      });
    }else{
      my.alert({
        title: '请先选择地区！' 
      });
    }
  },
  toInput1(e){
    console.log(e.detail.value)
    var that = this;
    if(e.target.dataset.t==1){
      that.setData({
        vaddress:e.detail.value,
      });
    }
    if(e.target.dataset.t==2){
      that.setData({
        varea:e.detail.value,
      });
    }
    if(e.target.dataset.t==3){
      that.setData({
        vowner:e.detail.value,
      });
    }
    if(e.target.dataset.t==4){
      that.setData({
        vownerCard:e.detail.value,
      });
    }
    if(e.target.dataset.t==5){
      that.setData({
        vrelation:e.detail.value,
      });
    }
    if(e.target.dataset.t==6){
      that.setData({
        houseNo:e.detail.value,
      });
    }
    if(e.target.dataset.t==7){
      that.setData({
        ownerTel:e.detail.value,
      });
    }
    if(e.target.dataset.t==8){
      that.setData({
        unit:e.detail.value,
      });
    }
    
  },
  
  //添加图片
  addImg(e){
    var that = this;
    my.chooseImage({
      chooseImage: 1,
      sizeType:['compressed'],
      success: (res) => {
        var tempFilePaths = res.apFilePaths
        console.log(tempFilePaths)
        that.data.images[0]=tempFilePaths[0];
        if(e.target.dataset.t==1){
          that.setData({
            img1:tempFilePaths[0],
            upload1:true,
            canAddImg1:false,
          });
          my.setStorageSync({
            key: 'img1_temp', // 缓存数据的key
            data: tempFilePaths[0], // 要缓存的数据
          });
        }
        if(e.target.dataset.t==2){
          that.data.images[1]=tempFilePaths[0];
          that.setData({
            img2:tempFilePaths[0],
            upload2:true,
            canAddImg2:false,
          });
          my.setStorageSync({
            key: 'img2_temp', // 缓存数据的key
            data: tempFilePaths[0], // 要缓存的数据
          });
        }
        if(e.target.dataset.t==3){
          that.data.images[1]=tempFilePaths[0];
          that.setData({
            img3:tempFilePaths[0],
            upload3:true,
            canAddImg3:false,
          });
          my.setStorageSync({
            key: 'img3_temp', // 缓存数据的key
            data: tempFilePaths[0], // 要缓存的数据
          });
        }
        if(e.target.dataset.t==4){
          that.data.images[1]=tempFilePaths[0];
          that.setData({
            img4:tempFilePaths[0],
            upload4:true,
            canAddImg4:false,
          });
          my.setStorageSync({
            key: 'img4_temp', // 缓存数据的key
            data: tempFilePaths[0], // 要缓存的数据
          });
        }
          
      },
    });
  },
  delImg(e){
    var that = this;
    if(e.target.dataset.t==1){
        that.setData({
        img1:'',
        upload1:false,
        canAddImg1:true,
      });
    }
    if(e.target.dataset.t==2){
        that.setData({
        img2:'',
        upload2:false,
        canAddImg2:true,
      });
    }
    if(e.target.dataset.t==3){
        that.setData({
        img3:'',
        upload3:false,
        canAddImg3:true,
      });
    }
    if(e.target.dataset.t==4){
        that.setData({
        img4:'',
        upload4:false,
        canAddImg4:true,
      });
    }
    
  },
  //图片上传
  uploadImg(img,num){
    var that = this;
    my.uploadFile({
      url: app.globalData.baseUrl_oos, // 开发者服务器地址
      filePath: img, // 要上传文件资源的本地定位符
      fileName: 'file', // 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容
      fileType: 'image', // 文件类型，image / video / audio
      formData:{savePrefix:'landlord/'},
      success: (res) => {
        var json1 = JSON.parse(res.data);
        if(num==1){
          my.setStorageSync({
            key: 'r_img1url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==2){
          my.setStorageSync({
            key: 'r_img2url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==3){
          my.setStorageSync({
            key: 'r_img3url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
        if(num==4){
          my.setStorageSync({
            key: 'r_img4url', // 缓存数据的key
            data: json1['message'], // 要缓存的数据
          });
        }
      },
      fail: function(res) {
        console.log(res);
        // my.alert({ title: '上传失败' });
      },
    });
  },
  next(){
    var that = this;
    // that.toNext();
    var img1 = that.data.img1;
    var img2 = that.data.img2;
    var img3 = that.data.img3;
    var img4 = that.data.img4;
    var vaddress = that.data.vaddress;
    var houseNo = that.data.houseNo;
    var huxing = that.data.huxing;
    var chaoxiang = that.data.chaoxiang;
    var zhuangxiu = that.data.zhuangxiu;//decorateType
    var decorateType = that.data.decorateType;
    var varea = that.data.varea;
    var vowner = that.data.vowner;

    var image = that.data.img;
    var dist = that.data.dist;
    var provinceCode = that.data.provinceCode;
    var cityCode = that.data.cityCode;
    var countryCode = that.data.countryCode;
    var village = that.data.village;
    var longitude = that.data.longitude;
    var latitude = that.data.latitude;
    var vphone = that.data.vphone;
    var vyear = that.data.vyear;
    var vgreen = that.data.vgreen;
    var vcubage = that.data.vcubage;
    var buildingType = that.data.buildingType;
    var vownerCard = that.data.vownerCard;
    if(that.data.show1){
      var vrelation = 1;
    }else if(that.data.show2){
      var vrelation = 2;
    }

    var unit = that.data.unit;
    var floor = that.data.floor;
    var totalFloor = that.data.totalFloor;
    var elevator = that.data.elevator;
    var houseFloor = that.data.houseFloor;

    var streetId = that.data.streetId;
    var street = that.data.street;
    
    var roomcount = that.data.roomcount;
    var hallcount = that.data.hallcount;
    var regNum1=new RegExp('[0-9]','g');
    var regNum2=new RegExp('[0-9]','g');
    var mobileNum =(/^1[3456789]\d{9}$/.test(that.data.ownerTel))
    var ownerTel = that.data.ownerTel;
    var adname = that.data.adname;
    var county = that.data.county;
    if(provinceCode!=''&&cityCode!=''&&countryCode!=''){
      if(street!=''){
        if(that.data.village!=''){
          if(adname==county){
              console.log(huxing)
              console.log(vaddress)
              console.log(chaoxiang)
              console.log(zhuangxiu)
              console.log(varea)
              console.log(vowner)
              console.log(vownerCard)
              console.log(vrelation)
          if(vaddress!=''&&unit&&houseFloor!=''&&chaoxiang!=''&&zhuangxiu!=''&&varea!=''&&vowner!=''&&vownerCard!=''&&ownerTel!=''&&vrelation!=''&&huxing!=''){
            //数据类型验证
            var houseNonum=regNum1.exec(houseNo);
            var vareanum=regNum2.exec(varea);
            // var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/
            // var vownerCardNum = reg.test(vownerCard);

            var res_id = app.checkId(vownerCard);
            console.log('身份证号校验')
            console.log(res_id)
              
            
            if(houseNonum){
              if(vareanum){
                if(res_id==1){
                  if(mobileNum){
                    if(vrelation==1){
                      if(img1!=''&&img2!=''&&img3!=''){
                        that.uploadImg(img1,1);
                        that.uploadImg(img2,2);
                        that.uploadImg(img3,3);
                        my.setStorage({
                          key: 'r_provinceCode', // 缓存数据的key
                          data: provinceCode, // 要缓存的数据
                        });
                        my.setStorage({
                          key: 'r_cityCode', // 缓存数据的key
                          data: cityCode, // 要缓存的数据
                        });
                        my.setStorage({
                          key: 'r_countryCode', // 缓存数据的key
                          data: countryCode, // 要缓存的数据
                        });
                        my.setStorage({
                          key: 'r_longitude', // 经度
                          data: longitude, // 要缓存的数据
                        });
                        my.setStorage({
                          key: 'r_latitude', // 纬度
                          data: latitude, // 要缓存的数据
                        });
                        my.setStorage({
                          key: 'r_village', // 小区
                          data: village, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_vaddress', // 缓存数据的key
                          data: vaddress, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_unit', // 缓存数据的key
                          data: unit, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_floor', // 缓存数据的key
                          data: floor, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_totalFloor', // 缓存数据的key
                          data: totalFloor, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_elevator', // 缓存数据的key
                          data: elevator, // 要缓存的数据
                        });


                        my.setStorageSync({
                          key: 'r_houseNo', // 缓存数据的key
                          data: houseNo, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_huxing', // 缓存数据的key
                          data: huxing, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_chaoxiang', // 缓存数据的key
                          data: chaoxiang, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_roomcount', // 缓存数据的key
                          data: roomcount, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_hallcount', // 缓存数据的key
                          data: hallcount, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_decorateType', // 缓存数据的key
                          data: decorateType, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_houseFloor', // 缓存数据的key
                          data: houseFloor, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_varea', // 缓存数据的key
                          data: varea, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_vowner', // 缓存数据的key
                          data: vowner, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_vownerCard', // 缓存数据的key
                          data: vownerCard, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_vownerTel', // 缓存数据的key
                          data: ownerTel, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_vrelation', // 缓存数据的key
                          data: vrelation, // 要缓存的数据
                        });
                        my.setStorageSync({
                          key: 'r_streetId', // 缓存数据的key
                          data: streetId, // 要缓存的数据
                        });
                        var page1 = {
                          adname:adname,
                          dist:dist,
                          provinceCode:provinceCode,
                          cityCode:cityCode,
                          county:county,
                          countryCode:countryCode,
                          longitude:longitude,
                          latitude:latitude,
                          village:village,
                          zhuangxiu:zhuangxiu,
                          vaddress:vaddress,
                          unit:unit,
                          floor:floor,
                          totalFloor:totalFloor,
                          elevator:elevator,
                          houseNo:houseNo,
                          huxing:huxing,
                          chaoxiang:chaoxiang,
                          roomcount:roomcount,
                          hallcount:hallcount,
                          houseFloor:houseFloor,
                          decorateType:decorateType,
                          varea:varea,
                          vowner:vowner,
                          vownerCard:vownerCard,
                          ownerTel:ownerTel,
                          vrelation:vrelation,
                          streetId:streetId,
                          street:street,
                        }
                        my.setStorageSync({
                          key: 'page1', // 缓存数据的key
                          data: page1, // 要缓存的数据
                        });
                        that.toNext();
                      }else{
                        my.alert({
                          title: '证件齐全方可进行下一步' 
                        });
                      }
                    }
                  }else{
                    my.alert({
                      title: '请输入正确的手机号' 
                    });
                  }
                  
                  if(vrelation==2){
                    if(img4!=''){
                      that.uploadImg(img4,4);
                      my.setStorage({
                        key: 'r_provinceCode', // 缓存数据的key
                        data: provinceCode, // 要缓存的数据
                      });
                      my.setStorage({
                        key: 'r_cityCode', // 缓存数据的key
                        data: cityCode, // 要缓存的数据
                      });
                      my.setStorage({
                        key: 'r_countryCode', // 缓存数据的key
                        data: countryCode, // 要缓存的数据
                      });
                      my.setStorage({
                        key: 'r_longitude', // 经度
                        data: longitude, // 要缓存的数据
                      });
                      my.setStorage({
                        key: 'r_latitude', // 纬度
                        data: latitude, // 要缓存的数据
                      });
                      my.setStorage({
                        key: 'r_village', // 小区
                        data: village, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_vaddress', // 缓存数据的key
                        data: vaddress, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_houseNo', // 缓存数据的key
                        data: houseNo, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_huxing', // 缓存数据的key
                        data: huxing, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_chaoxiang', // 缓存数据的key
                        data: chaoxiang, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_roomcount', // 缓存数据的key
                        data: roomcount, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_hallcount', // 缓存数据的key
                        data: hallcount, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_decorateType', // 缓存数据的key
                        data: decorateType, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_varea', // 缓存数据的key
                        data: varea, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_vowner', // 缓存数据的key
                        data: vowner, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_vownerCard', // 缓存数据的key
                        data: vownerCard, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_vrelation', // 缓存数据的key
                        data: vrelation, // 要缓存的数据
                      });
                      my.setStorageSync({
                        key: 'r_streetId', // 缓存数据的key
                        data: streetId, // 要缓存的数据
                      });
                      that.toNext();
                    }else{
                      my.alert({
                        title: '证件齐全方可进行下一步' 
                      });
                    }
                  }
                  
                }else if(res_id==2){
                  my.alert({
                  title: '身份证号码位数不对',
                  success:() =>{
                    that.setData({
                      vownerCard:'',
                    });
                    },
                  });
                }else if(res_id==3){
                  my.alert({
                  title: '身份证号码出生日期超出范围或含有非法字符',
                  success:() =>{
                    that.setData({
                      vownerCard:'',
                    });
                    },
                  });
                }else if(res_id==4){
                  my.alert({
                  title: '身份证号码校验错误',
                  success:() =>{
                    that.setData({
                      vownerCard:'',
                    });
                    },
                  });
                }else if(res_id==5){
                  my.alert({
                  title: '身份证地区非法',
                  success:() =>{
                    that.setData({
                      vownerCard:'',
                    });
                    },
                  });
                }
              }else{
                my.alert({
                title: '面积请输入数字',
                success:() =>{
                  that.setData({
                    varea:'',
                  });
                },
              });
              }
              
            }else{
              my.alert({
                title: '门牌号请输入数字',
                success:() =>{
                  that.setData({
                    houseNo:'',
                  });
                },
              });
            }

            
          }else{
            my.alert({
              title: '请填写完整' 
            });
          }
          }else{
            my.alert({
              title: '当前小区所在区域为'+adname+',请重新选择区域' 
            });
          }
         
      }else{
          my.alert({
            title: '请选择小区或公寓位置' 
          });
        }
      }else{
        my.alert({
          title: '请选择所在街道' 
        });
      }
    }else{
      my.alert({
        title: '区域信息请填写完整' 
      });
    }
  },
  toNext(){
    my.navigateTo({
      url: '/pages/index/housedelivery/housedelivery3/housedelivery3',
    })
  },
  toChooseType1(){
    var that = this;
    that.setData({
      show3:true,
      show4:false,
      elevator:true,
    });
  },
  toChooseType2(){
    var that = this;
    that.setData({
      show3:false,
      show4:true,
      elevator:false,
    });
  },
});
