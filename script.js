// 泰语常用短语数据 (500句)
const thaiPhrases = [
    // 问候类 (50句)
    { thai: 'สวัสดี', chinese: '你好', category: 'greeting' },
    { thai: 'สวัสดีครับ', chinese: '你好（男性用）', category: 'greeting' },
    { thai: 'สวัสดีค่ะ', chinese: '你好（女性用）', category: 'greeting' },
    { thai: 'สบายดีไหม', chinese: '你好吗？', category: 'greeting' },
    { thai: 'สบายดีครับ', chinese: '我很好（男性）', category: 'greeting' },
    { thai: 'สบายดีค่ะ', chinese: '我很好（女性）', category: 'greeting' },
    { thai: 'ลาก่อน', chinese: '再见', category: 'greeting' },
    { thai: 'ลาก่อนครับ', chinese: '再见（男性用）', category: 'greeting' },
    { thai: 'ลาก่อนค่ะ', chinese: '再见（女性用）', category: 'greeting' },
    { thai: 'ราตรีสวัสดิ์', chinese: '晚安', category: 'greeting' },
    { thai: 'อรุณสวัสดิ์', chinese: '早上好', category: 'greeting' },
    { thai: 'ยินดีที่ได้รู้จัก', chinese: '很高兴认识你', category: 'greeting' },
    { thai: 'คุณเป็นอย่างไรบ้าง', chinese: '你怎么样？', category: 'greeting' },
    { thai: 'ขอบคุณ', chinese: '谢谢', category: 'greeting' },
    { thai: 'ขอบคุณครับ', chinese: '谢谢（男性用）', category: 'greeting' },
    { thai: 'ขอบคุณค่ะ', chinese: '谢谢（女性用）', category: 'greeting' },
    { thai: 'ขอบคุณมาก', chinese: '非常感谢', category: 'greeting' },
    { thai: 'ไม่เป็นไร', chinese: '不客气', category: 'greeting' },
    { thai: 'ขอโทษ', chinese: '对不起', category: 'greeting' },
    { thai: 'ขอโทษครับ', chinese: '对不起（男性用）', category: 'greeting' },
    { thai: 'ขอโทษค่ะ', chinese: '对不起（女性用）', category: 'greeting' },
    { thai: 'ไม่เป็นไรครับ', chinese: '没关系（男性用）', category: 'greeting' },
    { thai: 'ไม่เป็นไรค่ะ', chinese: '没关系（女性用）', category: 'greeting' },
    { thai: 'ยินดีด้วย', chinese: '恭喜', category: 'greeting' },
    { thai: 'สุขสันต์วันเกิด', chinese: '生日快乐', category: 'greeting' },
    { thai: 'ขอให้โชคดี', chinese: '祝你好运', category: 'greeting' },
    { thai: 'ขอให้สุขภาพแข็งแรง', chinese: '祝你身体健康', category: 'greeting' },
    { thai: 'พบกันใหม่', chinese: '再次见面', category: 'greeting' },
    { thai: 'ดีใจที่ได้เจอ', chinese: '很高兴见到你', category: 'greeting' },
    { thai: 'คิดถึง', chinese: '想念', category: 'greeting' },
    { thai: 'ห่วงใย', chinese: '关心', category: 'greeting' },
    { thai: 'รักคุณ', chinese: '我爱你', category: 'greeting' },
    { thai: 'คิดถึงคุณ', chinese: '想你', category: 'greeting' },
    { thai: 'ฝันดี', chinese: '好梦', category: 'greeting' },
    { thai: 'นอนหลับฝันดี', chinese: '睡个好觉', category: 'greeting' },
    { thai: 'ตื่นแล้วหรือยัง', chinese: '醒了吗？', category: 'greeting' },
    { thai: 'กินข้าวแล้วหรือยัง', chinese: '吃饭了吗？', category: 'greeting' },
    { thai: 'ไปไหนมา', chinese: '去哪里了？', category: 'greeting' },
    { thai: 'ทำอะไรอยู่', chinese: '在做什么？', category: 'greeting' },
    { thai: 'ว่างไหม', chinese: '有空吗？', category: 'greeting' },
    { thai: 'ยุ่งไหม', chinese: '忙吗？', category: 'greeting' },
    { thai: 'เหนื่อยไหม', chinese: '累吗？', category: 'greeting' },
    { thai: 'สนุกไหม', chinese: '好玩吗？', category: 'greeting' },
    { thai: 'อร่อยไหม', chinese: '好吃吗？', category: 'greeting' },
    { thai: 'สวยไหม', chinese: '漂亮吗？', category: 'greeting' },
    { thai: 'หล่อไหม', chinese: '帅吗？', category: 'greeting' },
    { thai: 'ดีไหม', chinese: '好吗？', category: 'greeting' },
    { thai: 'เข้าใจไหม', chinese: '明白吗？', category: 'greeting' },
    { thai: 'รู้ไหม', chinese: '知道吗？', category: 'greeting' },
    { thai: 'จำได้ไหม', chinese: '记得吗？', category: 'greeting' },

    // 日常用语 (100句)
    { thai: 'ใช่', chinese: '是的', category: 'daily' },
    { thai: 'ใช่ครับ', chinese: '是的（男性用）', category: 'daily' },
    { thai: 'ใช่ค่ะ', chinese: '是的（女性用）', category: 'daily' },
    { thai: 'ไม่ใช่', chinese: '不是', category: 'daily' },
    { thai: 'ไม่ใช่ครับ', chinese: '不是（男性用）', category: 'daily' },
    { thai: 'ไม่ใช่ค่ะ', chinese: '不是（女性用）', category: 'daily' },
    { thai: 'ได้', chinese: '可以', category: 'daily' },
    { thai: 'ได้ครับ', chinese: '可以（男性用）', category: 'daily' },
    { thai: 'ได้ค่ะ', chinese: '可以（女性用）', category: 'daily' },
    { thai: 'ไม่ได้', chinese: '不可以', category: 'daily' },
    { thai: 'ไม่ได้ครับ', chinese: '不可以（男性用）', category: 'daily' },
    { thai: 'ไม่ได้ค่ะ', chinese: '不可以（女性用）', category: 'daily' },
    { thai: 'รู้', chinese: '知道', category: 'daily' },
    { thai: 'รู้ครับ', chinese: '知道（男性用）', category: 'daily' },
    { thai: 'รู้ค่ะ', chinese: '知道（女性用）', category: 'daily' },
    { thai: 'ไม่รู้', chinese: '不知道', category: 'daily' },
    { thai: 'ไม่รู้ครับ', chinese: '不知道（男性用）', category: 'daily' },
    { thai: 'ไม่รู้ค่ะ', chinese: '不知道（女性用）', category: 'daily' },
    { thai: 'เข้าใจ', chinese: '明白', category: 'daily' },
    { thai: 'เข้าใจครับ', chinese: '明白（男性用）', category: 'daily' },
    { thai: 'เข้าใจค่ะ', chinese: '明白（女性用）', category: 'daily' },
    { thai: 'ไม่เข้าใจ', chinese: '不明白', category: 'daily' },
    { thai: 'ไม่เข้าใจครับ', chinese: '不明白（男性用）', category: 'daily' },
    { thai: 'ไม่เข้าใจค่ะ', chinese: '不明白（女性用）', category: 'daily' },
    { thai: 'ชอบ', chinese: '喜欢', category: 'daily' },
    { thai: 'ชอบครับ', chinese: '喜欢（男性用）', category: 'daily' },
    { thai: 'ชอบค่ะ', chinese: '喜欢（女性用）', category: 'daily' },
    { thai: 'ไม่ชอบ', chinese: '不喜欢', category: 'daily' },
    { thai: 'ไม่ชอบครับ', chinese: '不喜欢（男性用）', category: 'daily' },
    { thai: 'ไม่ชอบค่ะ', chinese: '不喜欢（女性用）', category: 'daily' },
    { thai: 'อยาก', chinese: '想要', category: 'daily' },
    { thai: 'อยากครับ', chinese: '想要（男性用）', category: 'daily' },
    { thai: 'อยากค่ะ', chinese: '想要（女性用）', category: 'daily' },
    { thai: 'ไม่อยาก', chinese: '不想要', category: 'daily' },
    { thai: 'ไม่อยากครับ', chinese: '不想要（男性用）', category: 'daily' },
    { thai: 'ไม่อยากค่ะ', chinese: '不想要（女性用）', category: 'daily' },
    { thai: 'มี', chinese: '有', category: 'daily' },
    { thai: 'มีครับ', chinese: '有（男性用）', category: 'daily' },
    { thai: 'มีค่ะ', chinese: '有（女性用）', category: 'daily' },
    { thai: 'ไม่มี', chinese: '没有', category: 'daily' },
    { thai: 'ไม่มีครับ', chinese: '没有（男性用）', category: 'daily' },
    { thai: 'ไม่มีค่ะ', chinese: '没有（女性用）', category: 'daily' },
    { thai: 'เป็น', chinese: '是', category: 'daily' },
    { thai: 'ไม่เป็น', chinese: '不是', category: 'daily' },
    { thai: 'ทำ', chinese: '做', category: 'daily' },
    { thai: 'ไม่ทำ', chinese: '不做', category: 'daily' },
    { thai: 'ไป', chinese: '去', category: 'daily' },
    { thai: 'ไม่ไป', chinese: '不去', category: 'daily' },
    { thai: 'มา', chinese: '来', category: 'daily' },
    { thai: 'ไม่มา', chinese: '不来', category: 'daily' },
    { thai: 'กิน', chinese: '吃', category: 'daily' },
    { thai: 'ไม่กิน', chinese: '不吃', category: 'daily' },
    { thai: 'ดื่ม', chinese: '喝', category: 'daily' },
    { thai: 'ไม่ดื่ม', chinese: '不喝', category: 'daily' },
    { thai: 'นอน', chinese: '睡觉', category: 'daily' },
    { thai: 'ไม่นอน', chinese: '不睡觉', category: 'daily' },
    { thai: 'ตื่น', chinese: '醒', category: 'daily' },
    { thai: 'ลุก', chinese: '起床', category: 'daily' },
    { thai: 'นั่ง', chinese: '坐', category: 'daily' },
    { thai: 'ยืน', chinese: '站', category: 'daily' },
    { thai: 'เดิน', chinese: '走', category: 'daily' },
    { thai: 'วิ่ง', chinese: '跑', category: 'daily' },
    { thai: 'ดู', chinese: '看', category: 'daily' },
    { thai: 'ฟัง', chinese: '听', category: 'daily' },
    { thai: 'พูด', chinese: '说', category: 'daily' },
    { thai: 'อ่าน', chinese: '读', category: 'daily' },
    { thai: 'เขียน', chinese: '写', category: 'daily' },
    { thai: 'เรียน', chinese: '学习', category: 'daily' },
    { thai: 'สอน', chinese: '教', category: 'daily' },
    { thai: 'ทำงาน', chinese: '工作', category: 'daily' },
    { thai: 'พักผ่อน', chinese: '休息', category: 'daily' },
    { thai: 'เล่น', chinese: '玩', category: 'daily' },
    { thai: 'ออกกำลังกาย', chinese: '运动', category: 'daily' },
    { thai: 'อาบน้ำ', chinese: '洗澡', category: 'daily' },
    { thai: 'แปรงฟัน', chinese: '刷牙', category: 'daily' },
    { thai: 'ล้างหน้า', chinese: '洗脸', category: 'daily' },
    { thai: 'แต่งตัว', chinese: '穿衣服', category: 'daily' },
    { thai: 'ใส่รองเท้า', chinese: '穿鞋', category: 'daily' },
    { thai: 'ขับรถ', chinese: '开车', category: 'daily' },
    { thai: 'ขี่มอเตอร์ไซค์', chinese: '骑摩托车', category: 'daily' },
    { thai: 'เดินทาง', chinese: '旅行', category: 'daily' },
    { thai: 'กลับบ้าน', chinese: '回家', category: 'daily' },
    { thai: 'ออกจากบ้าน', chinese: '出门', category: 'daily' },
    { thai: 'เปิดประตู', chinese: '开门', category: 'daily' },
    { thai: 'ปิดประตู', chinese: '关门', category: 'daily' },
    { thai: 'เปิดไฟ', chinese: '开灯', category: 'daily' },
    { thai: 'ปิดไฟ', chinese: '关灯', category: 'daily' },
    { thai: 'เปิดทีวี', chinese: '开电视', category: 'daily' },
    { thai: 'ปิดทีวี', chinese: '关电视', category: 'daily' },
    { thai: 'เปิดแอร์', chinese: '开空调', category: 'daily' },
    { thai: 'ปิดแอร์', chinese: '关空调', category: 'daily' },
    { thai: 'ร้อน', chinese: '热', category: 'daily' },
    { thai: 'เย็น', chinese: '冷', category: 'daily' },
    { thai: 'อบอ้าว', chinese: '闷热', category: 'daily' },
    { thai: 'สบาย', chinese: '舒服', category: 'daily' },
    { thai: 'ไม่สบาย', chinese: '不舒服', category: 'daily' },
    { thai: 'ปวดหัว', chinese: '头疼', category: 'daily' },
    { thai: 'ปวดท้อง', chinese: '肚子疼', category: 'daily' },
    { thai: 'เจ็บ', chinese: '疼', category: 'daily' },
    { thai: 'ไม่เจ็บ', chinese: '不疼', category: 'daily' },
    { thai: 'เหนื่อย', chinese: '累', category: 'daily' },
    { thai: 'ไม่เหนื่อย', chinese: '不累', category: 'daily' },
    { thai: 'หิว', chinese: '饿', category: 'daily' },
    { thai: 'ไม่หิว', chinese: '不饿', category: 'daily' },
    { thai: 'กระหาย', chinese: '渴', category: 'daily' },
    { thai: 'ไม่กระหาย', chinese: '不渴', category: 'daily' },
    { thai: 'อิม', chinese: '饱', category: 'daily' },
    { thai: 'ไม่อิม', chinese: '不饱', category: 'daily' }
];

// 添加更多短语数据
const additionalPhrases = [
    // 购物类 (80句)
    { thai: 'ซื้อ', chinese: '买', category: 'shopping' },
    { thai: 'ขาย', chinese: '卖', category: 'shopping' },
    { thai: 'ราคา', chinese: '价格', category: 'shopping' },
    { thai: 'ราคาเท่าไหร่', chinese: '多少钱？', category: 'shopping' },
    { thai: 'แพง', chinese: '贵', category: 'shopping' },
    { thai: 'ถูก', chinese: '便宜', category: 'shopping' },
    { thai: 'แพงมาก', chinese: '很贵', category: 'shopping' },
    { thai: 'ถูกมาก', chinese: '很便宜', category: 'shopping' },
    { thai: 'ลดราคา', chinese: '打折', category: 'shopping' },
    { thai: 'ลดราคาไหม', chinese: '打折吗？', category: 'shopping' },
    { thai: 'ต่อรองราคา', chinese: '讲价', category: 'shopping' },
    { thai: 'ลดหน่อย', chinese: '便宜一点', category: 'shopping' },
    { thai: 'เอา', chinese: '要', category: 'shopping' },
    { thai: 'ไม่เอา', chinese: '不要', category: 'shopping' },
    { thai: 'เอาไหม', chinese: '要吗？', category: 'shopping' },
    { thai: 'จ่ายเงิน', chinese: '付钱', category: 'shopping' },
    { thai: 'เงินทอน', chinese: '找零', category: 'shopping' },
    { thai: 'บัตรเครดิต', chinese: '信用卡', category: 'shopping' },
    { thai: 'เงินสด', chinese: '现金', category: 'shopping' },
    { thai: 'ใบเสร็จ', chinese: '收据', category: 'shopping' },
    { thai: 'ถุงพลาสติก', chinese: '塑料袋', category: 'shopping' },
    { thai: 'ห่อของ', chinese: '包装', category: 'shopping' },
    { thai: 'ของขวัญ', chinese: '礼物', category: 'shopping' },
    { thai: 'ซื้อของขวัญ', chinese: '买礼物', category: 'shopping' },
    { thai: 'ห้างสรรพสินค้า', chinese: '商场', category: 'shopping' },
    { thai: 'ตลาด', chinese: '市场', category: 'shopping' },
    { thai: 'ร้านค้า', chinese: '商店', category: 'shopping' },
    { thai: 'ซุปเปอร์มาร์เก็ต', chinese: '超市', category: 'shopping' },
    { thai: 'เซเว่น', chinese: '7-11便利店', category: 'shopping' },
    { thai: 'ร้านขายยา', chinese: '药店', category: 'shopping' },
    { thai: 'ร้านหนังสือ', chinese: '书店', category: 'shopping' },
    { thai: 'ร้านเสื้อผ้า', chinese: '服装店', category: 'shopping' },
    { thai: 'ร้านรองเท้า', chinese: '鞋店', category: 'shopping' },
    { thai: 'ร้านแว่นตา', chinese: '眼镜店', category: 'shopping' },
    { thai: 'ร้านทอง', chinese: '金店', category: 'shopping' },
    { thai: 'ร้านนาฬิกา', chinese: '钟表店', category: 'shopping' },
    { thai: 'ร้านมือถือ', chinese: '手机店', category: 'shopping' },
    { thai: 'ร้านคอมพิวเตอร์', chinese: '电脑店', category: 'shopping' },
    { thai: 'เสื้อ', chinese: '衣服', category: 'shopping' },
    { thai: 'กางเกง', chinese: '裤子', category: 'shopping' },
    { thai: 'รองเท้า', chinese: '鞋子', category: 'shopping' },
    { thai: 'กระเป๋า', chinese: '包', category: 'shopping' },
    { thai: 'หมวก', chinese: '帽子', category: 'shopping' },
    { thai: 'แว่นตา', chinese: '眼镜', category: 'shopping' },
    { thai: 'นาฬิกา', chinese: '手表', category: 'shopping' },
    { thai: 'สร้อยคอ', chinese: '项链', category: 'shopping' },
    { thai: 'ต่างหู', chinese: '耳环', category: 'shopping' },
    { thai: 'แหวน', chinese: '戒指', category: 'shopping' },
    { thai: 'สร้อยข้อมือ', chinese: '手镯', category: 'shopping' },
    { thai: 'มือถือ', chinese: '手机', category: 'shopping' },
    { thai: 'คอมพิวเตอร์', chinese: '电脑', category: 'shopping' },
    { thai: 'แท็บเล็ต', chinese: '平板电脑', category: 'shopping' },
    { thai: 'หูฟัง', chinese: '耳机', category: 'shopping' },
    { thai: 'ลำโพง', chinese: '音响', category: 'shopping' },
    { thai: 'กล้อง', chinese: '相机', category: 'shopping' },
    { thai: 'หนังสือ', chinese: '书', category: 'shopping' },
    { thai: 'นิตยสาร', chinese: '杂志', category: 'shopping' },
    { thai: 'หนังสือพิมพ์', chinese: '报纸', category: 'shopping' },
    { thai: 'ปากกา', chinese: '笔', category: 'shopping' },
    { thai: 'ดินสอ', chinese: '铅笔', category: 'shopping' },
    { thai: 'สมุด', chinese: '笔记本', category: 'shopping' },
    { thai: 'กระดาษ', chinese: '纸', category: 'shopping' },
    { thai: 'ยา', chinese: '药', category: 'shopping' },
    { thai: 'วิตามิน', chinese: '维生素', category: 'shopping' },
    { thai: 'ครีม', chinese: '面霜', category: 'shopping' },
    { thai: 'แชมพู', chinese: '洗发水', category: 'shopping' },
    { thai: 'สบู่', chinese: '肥皂', category: 'shopping' },
    { thai: 'ยาสีฟัน', chinese: '牙膏', category: 'shopping' },
    { thai: 'แปรงสีฟัน', chinese: '牙刷', category: 'shopping' },
    { thai: 'ผ้าเช็ดตัว', chinese: '毛巾', category: 'shopping' },
    { thai: 'กระดาษทิชชู', chinese: '纸巾', category: 'shopping' },
    { thai: 'ขนาด', chinese: '尺寸', category: 'shopping' },
    { thai: 'ขนาดเล็ก', chinese: '小号', category: 'shopping' },
    { thai: 'ขนาดกลาง', chinese: '中号', category: 'shopping' },
    { thai: 'ขนาดใหญ่', chinese: '大号', category: 'shopping' },
    { thai: 'สี', chinese: '颜色', category: 'shopping' },
    { thai: 'สีแดง', chinese: '红色', category: 'shopping' },
    { thai: 'สีน้ำเงิน', chinese: '蓝色', category: 'shopping' },
    { thai: 'สีเขียว', chinese: '绿色', category: 'shopping' },
    { thai: 'สีเหลือง', chinese: '黄色', category: 'shopping' },
    { thai: 'สีดำ', chinese: '黑色', category: 'shopping' },
    { thai: 'สีขาว', chinese: '白色', category: 'shopping' },
    { thai: 'ลองใส่', chinese: '试穿', category: 'shopping' },
    { thai: 'ห้องลองเสื้อผ้า', chinese: '试衣间', category: 'shopping' }
];

// 餐厅类短语
const restaurantPhrases = [
    { thai: 'ร้านอาหาร', chinese: '餐厅', category: 'restaurant' },
    { thai: 'กินข้าว', chinese: '吃饭', category: 'restaurant' },
    { thai: 'อาหาร', chinese: '食物', category: 'restaurant' },
    { thai: 'เมนู', chinese: '菜单', category: 'restaurant' },
    { thai: 'สั่งอาหาร', chinese: '点菜', category: 'restaurant' },
    { thai: 'อร่อย', chinese: '好吃', category: 'restaurant' },
    { thai: 'ไม่อร่อย', chinese: '不好吃', category: 'restaurant' },
    { thai: 'อร่อยมาก', chinese: '很好吃', category: 'restaurant' },
    { thai: 'เผ็ด', chinese: '辣', category: 'restaurant' },
    { thai: 'ไม่เผ็ด', chinese: '不辣', category: 'restaurant' },
    { thai: 'เผ็ดมาก', chinese: '很辣', category: 'restaurant' },
    { thai: 'เผ็ดน้อย', chinese: '微辣', category: 'restaurant' },
    { thai: 'หวาน', chinese: '甜', category: 'restaurant' },
    { thai: 'เปรี้ยว', chinese: '酸', category: 'restaurant' },
    { thai: 'เค็ม', chinese: '咸', category: 'restaurant' },
    { thai: 'จืด', chinese: '淡', category: 'restaurant' },
    { thai: 'ข้าว', chinese: '米饭', category: 'restaurant' },
    { thai: 'ข้าวผัด', chinese: '炒饭', category: 'restaurant' },
    { thai: 'ข้าวซอย', chinese: '咖喱面', category: 'restaurant' },
    { thai: 'ผัดไทย', chinese: '泰式炒河粉', category: 'restaurant' },
    { thai: 'ต้มยำกุ้ง', chinese: '冬阴功汤', category: 'restaurant' },
    { thai: 'แกงเขียวหวาน', chinese: '绿咖喱', category: 'restaurant' },
    { thai: 'แกงเผด', chinese: '红咖喱', category: 'restaurant' },
    { thai: 'ส้มตำ', chinese: '青木瓜沙拉', category: 'restaurant' },
    { thai: 'ลาบ', chinese: '肉沙拉', category: 'restaurant' },
    { thai: 'ไก่ย่าง', chinese: '烤鸡', category: 'restaurant' },
    { thai: 'หมูย่าง', chinese: '烤猪肉', category: 'restaurant' },
    { thai: 'ปลาเผา', chinese: '烤鱼', category: 'restaurant' },
    { thai: 'กุ้งเผา', chinese: '烤虾', category: 'restaurant' },
    { thai: 'ไข่เจียว', chinese: '煎蛋', category: 'restaurant' },
    { thai: 'น้ำ', chinese: '水', category: 'restaurant' },
    { thai: 'น้ำเปล่า', chinese: '白开水', category: 'restaurant' },
    { thai: 'น้ำแข็ง', chinese: '冰块', category: 'restaurant' },
    { thai: 'น้ำผลไม้', chinese: '果汁', category: 'restaurant' },
    { thai: 'กาแฟ', chinese: '咖啡', category: 'restaurant' },
    { thai: 'ชา', chinese: '茶', category: 'restaurant' },
    { thai: 'นม', chinese: '牛奶', category: 'restaurant' },
    { thai: 'เบียร์', chinese: '啤酒', category: 'restaurant' },
    { thai: 'เช็คบิล', chinese: '买单', category: 'restaurant' },
    { thai: 'บิล', chinese: '账单', category: 'restaurant' }
];

// 旅行类短语
const travelPhrases = [
    { thai: 'เดินทาง', chinese: '旅行', category: 'travel' },
    { thai: 'ท่องเที่ยว', chinese: '旅游', category: 'travel' },
    { thai: 'สนามบิน', chinese: '机场', category: 'travel' },
    { thai: 'เครื่องบิน', chinese: '飞机', category: 'travel' },
    { thai: 'ตั๋วเครื่องบิน', chinese: '机票', category: 'travel' },
    { thai: 'เช็คอิน', chinese: '办理登机', category: 'travel' },
    { thai: 'กระเป๋าเดินทาง', chinese: '行李箱', category: 'travel' },
    { thai: 'พาสปอร์ต', chinese: '护照', category: 'travel' },
    { thai: 'วีซ่า', chinese: '签证', category: 'travel' },
    { thai: 'โรงแรม', chinese: '酒店', category: 'travel' },
    { thai: 'จองห้อง', chinese: '订房间', category: 'travel' },
    { thai: 'ห้องพัก', chinese: '房间', category: 'travel' },
    { thai: 'ห้องเดี่ยว', chinese: '单人房', category: 'travel' },
    { thai: 'ห้องคู่', chinese: '双人房', category: 'travel' },
    { thai: 'ลิฟต์', chinese: '电梯', category: 'travel' },
    { thai: 'บันได', chinese: '楼梯', category: 'travel' },
    { thai: 'กุญแจห้อง', chinese: '房间钥匙', category: 'travel' },
    { thai: 'แอร์', chinese: '空调', category: 'travel' },
    { thai: 'ทีวี', chinese: '电视', category: 'travel' },
    { thai: 'ไวไฟ', chinese: 'WiFi', category: 'travel' },
    { thai: 'ห้องน้ำ', chinese: '洗手间', category: 'travel' },
    { thai: 'แท็กซี่', chinese: '出租车', category: 'travel' },
    { thai: 'รถบัส', chinese: '公交车', category: 'travel' },
    { thai: 'รถไฟ', chinese: '火车', category: 'travel' },
    { thai: 'รถไฟฟ้า', chinese: '地铁', category: 'travel' },
    { thai: 'ตั๋ว', chinese: '票', category: 'travel' },
    { thai: 'ซื้อตั๋ว', chinese: '买票', category: 'travel' },
    { thai: 'แผนที่', chinese: '地图', category: 'travel' },
    { thai: 'ทิศทาง', chinese: '方向', category: 'travel' },
    { thai: 'หลงทาง', chinese: '迷路', category: 'travel' },
    { thai: 'ถามทาง', chinese: '问路', category: 'travel' },
    { thai: 'ไปยังไง', chinese: '怎么去？', category: 'travel' },
    { thai: 'อยู่ที่ไหน', chinese: '在哪里？', category: 'travel' },
    { thai: 'ใกล้ไหม', chinese: '近吗？', category: 'travel' },
    { thai: 'ไกลไหม', chinese: '远吗？', category: 'travel' },
    { thai: 'ตรงไป', chinese: '直走', category: 'travel' },
    { thai: 'เลี้ยวซ้าย', chinese: '左转', category: 'travel' },
    { thai: 'เลี้ยวขวา', chinese: '右转', category: 'travel' },
    { thai: 'ข้ามถนน', chinese: '过马路', category: 'travel' },
    { thai: 'ธนาคาร', chinese: '银行', category: 'travel' }
];

// 紧急情况短语
const emergencyPhrases = [
    { thai: 'ช่วยด้วย', chinese: '救命', category: 'emergency' },
    { thai: 'เกิดอะไรขึ้น', chinese: '发生什么事了？', category: 'emergency' },
    { thai: 'อันตราย', chinese: '危险', category: 'emergency' },
    { thai: 'ปลอดภัย', chinese: '安全', category: 'emergency' },
    { thai: 'เรียกตำรวจ', chinese: '叫警察', category: 'emergency' },
    { thai: 'เรียกหมอ', chinese: '叫医生', category: 'emergency' },
    { thai: 'เรียกรถพยาบาล', chinese: '叫救护车', category: 'emergency' },
    { thai: 'ไฟไหม้', chinese: '着火了', category: 'emergency' },
    { thai: 'อุบัติเหตุ', chinese: '事故', category: 'emergency' },
    { thai: 'รถชน', chinese: '车祸', category: 'emergency' },
    { thai: 'ล้ม', chinese: '摔倒', category: 'emergency' },
    { thai: 'เจ็บ', chinese: '受伤', category: 'emergency' },
    { thai: 'เลือดออก', chinese: '流血', category: 'emergency' },
    { thai: 'หัวใจวาย', chinese: '心脏病发作', category: 'emergency' },
    { thai: 'หายใจไม่ออก', chinese: '呼吸困难', category: 'emergency' },
    { thai: 'เป็นลม', chinese: '昏倒', category: 'emergency' },
    { thai: 'ปวดหัวมาก', chinese: '头很疼', category: 'emergency' },
    { thai: 'ปวดท้องมาก', chinese: '肚子很疼', category: 'emergency' },
    { thai: 'มีไข้', chinese: '发烧', category: 'emergency' },
    { thai: 'ไข้สูง', chinese: '高烧', category: 'emergency' },
    { thai: 'อาเจียน', chinese: '呕吐', category: 'emergency' },
    { thai: 'ท้องเสีย', chinese: '腹泻', category: 'emergency' },
    { thai: 'แพ้ยา', chinese: '药物过敏', category: 'emergency' },
    { thai: 'แพ้อาหาร', chinese: '食物过敏', category: 'emergency' },
    { thai: 'โรงพยาบาล', chinese: '医院', category: 'emergency' },
    { thai: 'หมอ', chinese: '医生', category: 'emergency' },
    { thai: 'พยาบาล', chinese: '护士', category: 'emergency' },
    { thai: 'ยา', chinese: '药', category: 'emergency' },
    { thai: 'ยาแก้ปวด', chinese: '止痛药', category: 'emergency' },
    { thai: 'ยาลดไข้', chinese: '退烧药', category: 'emergency' },
    { thai: 'โจรกรรม', chinese: '盗窃', category: 'emergency' },
    { thai: 'ปล้น', chinese: '抢劫', category: 'emergency' },
    { thai: 'ขโมย', chinese: '偷', category: 'emergency' },
    { thai: 'หาย', chinese: '丢失', category: 'emergency' },
    { thai: 'ถูกขโมย', chinese: '被偷了', category: 'emergency' },
    { thai: 'กระเป๋าหาย', chinese: '包丢了', category: 'emergency' },
    { thai: 'มือถือหาย', chinese: '手机丢了', category: 'emergency' },
    { thai: 'พาสปอร์ตหาย', chinese: '护照丢了', category: 'emergency' },
    { thai: 'แจ้งความ', chinese: '报案', category: 'emergency' },
    { thai: 'สถานีตำรวจ', chinese: '警察局', category: 'emergency' },
    { thai: 'ตำรวจ', chinese: '警察', category: 'emergency' },
    { thai: 'สถานทูต', chinese: '大使馆', category: 'emergency' },
    { thai: 'เหตุฉุกเฉิน', chinese: '紧急情况', category: 'emergency' },
    { thai: 'โทรศัพท์', chinese: '电话', category: 'emergency' },
    { thai: 'โทรหา', chinese: '打电话给', category: 'emergency' }
];

// 合并所有短语
thaiPhrases.push(...additionalPhrases, ...restaurantPhrases, ...travelPhrases, ...emergencyPhrases);

class ThaiPhraseLearning {
    constructor() {
        this.currentIndex = 0;
        this.isPlaying = false;
        this.isPaused = false;
        this.playTimeout = null;
        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.voices = [];
        this.speechRate = 1.0;
        this.currentFilter = 'all';
        this.filteredPhrases = thaiPhrases;
        
        this.initializeElements();
        this.setupEventListeners();
        this.renderPhraseGrid();
        this.updateDisplay();
        this.loadVoices();
    }
    
    initializeElements() {
        this.playBtn = document.getElementById('playBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.stopBtn = document.getElementById('stopBtn');
        this.currentPhraseSpan = document.getElementById('currentPhrase');
        this.progressText = document.getElementById('progressText');
        this.currentPhraseCard = document.getElementById('currentPhraseCard');
        this.phraseGrid = document.getElementById('phraseGrid');
        this.speedControl = document.getElementById('speedControl');
        this.speedDisplay = document.getElementById('speedDisplay');
        this.filterBtns = document.querySelectorAll('.filter-btn');
    }
    
    setupEventListeners() {
        this.playBtn.addEventListener('click', () => this.play());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.stopBtn.addEventListener('click', () => this.stop());
        
        this.speedControl.addEventListener('input', (e) => {
            this.speechRate = parseFloat(e.target.value);
            this.speedDisplay.textContent = `${this.speechRate}x`;
        });
        
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.category;
                this.filterPhrases();
            });
        });
        
        if (this.speechSynthesis.onvoiceschanged !== undefined) {
            this.speechSynthesis.onvoiceschanged = () => this.loadVoices();
        }
        
        // 多种方式激活音频（移动端兼容性）
        document.addEventListener('click', () => this.enableAudio(), { once: true });
        document.addEventListener('touchstart', () => this.enableAudio(), { once: true });
        document.addEventListener('touchend', () => this.enableAudio(), { once: true });
        
        // 微信浏览器特殊处理
        document.addEventListener('WeixinJSBridgeReady', () => {
            this.enableAudio();
        }, { once: true });
        
        // 如果微信JS桥已经准备好
        if (typeof WeixinJSBridge !== 'undefined') {
            this.enableAudio();
        }
    }
    
    enableAudio() {
        console.log('🎤 启用音频功能');
        
        // 移动端音频上下文激活
        if (window.AudioContext || window.webkitAudioContext) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioContext = new AudioContext();
            if (audioContext.state === 'suspended') {
                audioContext.resume().then(() => {
                    console.log('✅ 音频上下文已激活');
                });
            }
        }
        
        // 移动端语音合成激活 - 多次尝试
        this.testSpeech();
        
        // 强制加载语音列表
        this.loadVoices();
        
        // 移动端需要多次尝试加载语音
        const loadAttempts = [500, 1000, 2000, 3000];
        loadAttempts.forEach(delay => {
            setTimeout(() => {
                if (this.voices.length === 0) {
                    console.log(`🔄 重试加载语音 (${delay}ms)`);
                    this.loadVoices();
                }
            }, delay);
        });
        
        // 移动端特殊处理：强制触发语音合成
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            console.log('📱 检测到移动设备，执行特殊初始化');
            
            // 创建一个静音的语音来激活引擎
            setTimeout(() => {
                const silentUtterance = new SpeechSynthesisUtterance(' ');
                silentUtterance.volume = 0.01;
                silentUtterance.rate = 10;
                silentUtterance.onend = () => {
                    console.log('✅ 移动端语音引擎已激活');
                    this.loadVoices();
                };
                this.speechSynthesis.speak(silentUtterance);
            }, 100);
        }
    }
    
    testSpeech() {
        console.log('🧪 测试语音功能');
        try {
            // 创建测试语音
            const testUtterance = new SpeechSynthesisUtterance('test');
            testUtterance.volume = 0.01;
            testUtterance.rate = 10;
            testUtterance.pitch = 1;
            
            testUtterance.onstart = () => {
                console.log('✅ 语音测试成功');
            };
            
            testUtterance.onerror = (event) => {
                console.warn('⚠️ 语音测试失败:', event.error);
            };
            
            this.speechSynthesis.speak(testUtterance);
        } catch (error) {
            console.error('❌ 语音测试异常:', error);
        }
    }
    
    loadVoices() {
        this.voices = this.speechSynthesis.getVoices();
        console.log('所有可用语音:', this.voices.map(v => `${v.name} (${v.lang})`));
        
        // 寻找泰语语音 - 更宽泛的匹配条件
        this.thaiVoice = this.voices.find(voice => 
            voice.lang.toLowerCase().includes('th') || 
            voice.lang.toLowerCase().includes('thai') ||
            voice.name.toLowerCase().includes('thai')
        );
        
        // 如果没有找到泰语语音，尝试使用英语语音作为备用
        if (!this.thaiVoice) {
            this.thaiVoice = this.voices.find(voice => 
                voice.lang.toLowerCase().includes('en') && 
                (voice.name.toLowerCase().includes('male') || voice.name.toLowerCase().includes('man'))
            ) || this.voices.find(voice => voice.lang.toLowerCase().includes('en'));
        }
        
        // 寻找中文语音
        this.chineseVoice = this.voices.find(voice => 
            (voice.lang.toLowerCase().includes('zh') || 
             voice.lang.toLowerCase().includes('chinese') ||
             voice.name.toLowerCase().includes('chinese')) &&
            (voice.name.toLowerCase().includes('male') || voice.name.toLowerCase().includes('man'))
        ) || this.voices.find(voice => 
            voice.lang.toLowerCase().includes('zh') || 
            voice.lang.toLowerCase().includes('chinese') ||
            voice.name.toLowerCase().includes('chinese')
        );
        
        // 备用语音
        if (!this.thaiVoice && this.voices.length > 0) {
            this.thaiVoice = this.voices[0];
        }
        if (!this.chineseVoice && this.voices.length > 0) {
            this.chineseVoice = this.voices[0];
        }
        
        console.log('选择的泰语语音:', this.thaiVoice?.name, this.thaiVoice?.lang);
        console.log('选择的中文语音:', this.chineseVoice?.name, this.chineseVoice?.lang);
    }
    
    filterPhrases() {
        if (this.currentFilter === 'all') {
            this.filteredPhrases = thaiPhrases;
        } else {
            this.filteredPhrases = thaiPhrases.filter(phrase => phrase.category === this.currentFilter);
        }
        
        this.currentIndex = 0;
        this.renderPhraseGrid();
        this.updateDisplay();
        
        if (this.isPlaying) {
            this.stop();
        }
    }
    
    renderPhraseGrid() {
        this.phraseGrid.innerHTML = '';
        this.filteredPhrases.forEach((phrase, index) => {
            const phraseElement = document.createElement('div');
            phraseElement.className = 'grid-phrase';
            phraseElement.innerHTML = `
                <div class="thai">${phrase.thai}</div>
                <div class="chinese">${phrase.chinese}</div>
                <div class="cat">${this.getCategoryName(phrase.category)}</div>
            `;
            phraseElement.addEventListener('click', () => this.jumpToPhrase(index));
            this.phraseGrid.appendChild(phraseElement);
        });
    }
    
    getCategoryName(category) {
        const categoryNames = {
            'greeting': '问候',
            'daily': '日常',
            'shopping': '购物',
            'restaurant': '餐厅',
            'travel': '旅行',
            'emergency': '紧急'
        };
        return categoryNames[category] || category;
    }
    
    updateDisplay() {
        const currentPhrase = this.filteredPhrases[this.currentIndex];
        
        this.currentPhraseCard.innerHTML = `
            <div class="thai-phrase">${currentPhrase.thai}</div>
            <div class="chinese-meaning">${currentPhrase.chinese}</div>
            <div class="category">${this.getCategoryName(currentPhrase.category)}</div>
        `;
        
        this.currentPhraseSpan.textContent = `${currentPhrase.thai} - ${currentPhrase.chinese}`;
        this.progressText.textContent = `${this.currentIndex + 1}/${this.filteredPhrases.length}`;
        
        document.querySelectorAll('.grid-phrase').forEach((el, index) => {
            el.classList.toggle('current', index === this.currentIndex);
        });
        
        this.scrollToCurrentPhrase();
    }
    
    scrollToCurrentPhrase() {
        const currentGridPhrase = document.querySelectorAll('.grid-phrase')[this.currentIndex];
        if (currentGridPhrase) {
            currentGridPhrase.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }
    
    async speak(text, voice, lang = 'th-TH') {
        return new Promise((resolve) => {
            // 强制停止当前播放
            this.speechSynthesis.cancel();
            
            // 移动端需要更长的延迟
            setTimeout(() => {
                this.currentUtterance = new SpeechSynthesisUtterance(text);
                
                // 移动端泰语语音特殊处理
                if (lang.includes('th')) {
                    // 检测是否为移动设备
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    
                    if (isMobile) {
                        // 移动端强制使用默认语音，不设置特定语言
                        this.currentUtterance.lang = '';
                        this.currentUtterance.voice = null;
                        console.log('移动端泰语：使用默认语音');
                    } else {
                        // 桌面端使用泰语设置
                        this.currentUtterance.lang = 'th-TH';
                        if (voice) {
                            this.currentUtterance.voice = voice;
                        }
                        console.log('桌面端泰语：使用泰语语音');
                    }
                } else {
                    // 中文设置
                    this.currentUtterance.lang = 'zh-CN';
                    if (voice) {
                        this.currentUtterance.voice = voice;
                    }
                }
                
                // 移动端使用较慢的语速
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                this.currentUtterance.rate = isMobile ? Math.max(0.7, this.speechRate * 0.8) : this.speechRate;
                this.currentUtterance.pitch = 1;
                this.currentUtterance.volume = 1;
                
                let hasStarted = false;
                let timeoutId = null;
                
                this.currentUtterance.onstart = () => {
                    hasStarted = true;
                    if (timeoutId) clearTimeout(timeoutId);
                    console.log(`✅ 开始播放: ${text}, 语言: ${this.currentUtterance.lang || '默认'}`);
                };
                
                this.currentUtterance.onend = () => {
                    if (timeoutId) clearTimeout(timeoutId);
                    console.log(`✅ 播放完成: ${text}`);
                    resolve();
                };
                
                this.currentUtterance.onerror = (event) => {
                    if (timeoutId) clearTimeout(timeoutId);
                    console.error('❌ 语音播放错误:', event.error, text);
                    resolve();
                };
                
                // 设置超时机制，防止卡死
                timeoutId = setTimeout(() => {
                    if (!hasStarted) {
                        console.warn('⚠️ 语音播放超时，强制继续:', text);
                        this.speechSynthesis.cancel();
                        resolve();
                    }
                }, 5000);
                
                try {
                    console.log(`🎵 准备播放: ${text}`);
                    this.speechSynthesis.speak(this.currentUtterance);
                    
                    // 移动端额外的激活尝试
                    if (isMobile) {
                        setTimeout(() => {
                            if (!hasStarted && !this.speechSynthesis.speaking) {
                                console.log('🔄 移动端重试播放');
                                this.speechSynthesis.speak(this.currentUtterance);
                            }
                        }, 500);
                    }
                } catch (error) {
                    if (timeoutId) clearTimeout(timeoutId);
                    console.error('❌ 语音播放异常:', error);
                    resolve();
                }
            }, isMobile ? 500 : 200);
        });
    }
    
    async playCurrentPhrase() {
        if (!this.isPlaying || this.isPaused) return;
        
        const currentPhrase = this.filteredPhrases[this.currentIndex];
        this.currentPhraseCard.classList.add('active');
        
        console.log(`🎯 开始播放短语 ${this.currentIndex + 1}: ${currentPhrase.thai} - ${currentPhrase.chinese}`);
        
        try {
            // 播放泰语 3 次
            for (let i = 0; i < 3; i++) {
                if (!this.isPlaying || this.isPaused) return;
                console.log(`🇹🇭 播放泰语第 ${i + 1} 次: ${currentPhrase.thai}`);
                await this.speak(currentPhrase.thai, this.thaiVoice, 'th-TH');
                if (i < 2 && this.isPlaying && !this.isPaused) {
                    await this.delay(500);
                }
            }
            
            if (this.isPlaying && !this.isPaused) {
                await this.delay(800);
            }
            
            // 播放中文 3 次
            for (let i = 0; i < 3; i++) {
                if (!this.isPlaying || this.isPaused) return;
                console.log(`🇨🇳 播放中文第 ${i + 1} 次: ${currentPhrase.chinese}`);
                await this.speak(currentPhrase.chinese, this.chineseVoice, 'zh-CN');
                if (i < 2 && this.isPlaying && !this.isPaused) {
                    await this.delay(500);
                }
            }
            
        } catch (error) {
            console.error('❌ 播放出错:', error);
        }
        
        this.currentPhraseCard.classList.remove('active');
        
        if (this.isPlaying && !this.isPaused) {
            await this.delay(1000);
            this.nextPhrase();
        }
    }
    
    delay(ms) {
        return new Promise(resolve => {
            this.playTimeout = setTimeout(resolve, ms);
        });
    }
    
    nextPhrase() {
        if (!this.isPlaying) return;
        
        this.currentIndex = (this.currentIndex + 1) % this.filteredPhrases.length;
        this.updateDisplay();
        
        if (this.isPlaying && !this.isPaused) {
            this.playCurrentPhrase();
        }
    }
    
    jumpToPhrase(index) {
        this.currentIndex = index;
        this.updateDisplay();
        
        if (this.isPlaying && !this.isPaused) {
            this.speechSynthesis.cancel();
            setTimeout(() => {
                this.playCurrentPhrase();
            }, 100);
        }
    }
    
    play() {
        console.log('▶️ 开始播放');
        this.isPlaying = true;
        this.isPaused = false;
        
        this.playBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.stopBtn.disabled = false;
        
        // 确保语音已加载
        if (this.voices.length === 0) {
            console.log('🔄 重新加载语音列表');
            this.loadVoices();
        }
        
        // 移动端额外的语音激活
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            console.log('📱 移动端播放准备');
            // 先播放一个静音测试
            const testUtterance = new SpeechSynthesisUtterance(' ');
            testUtterance.volume = 0.01;
            testUtterance.rate = 10;
            testUtterance.onend = () => {
                console.log('✅ 移动端语音引擎准备完成');
                setTimeout(() => this.playCurrentPhrase(), 100);
            };
            testUtterance.onerror = () => {
                console.warn('⚠️ 移动端语音测试失败，直接开始播放');
                setTimeout(() => this.playCurrentPhrase(), 100);
            };
            this.speechSynthesis.speak(testUtterance);
        } else {
            this.playCurrentPhrase();
        }
    }
    
    pause() {
        this.isPaused = true;
        this.speechSynthesis.cancel();
        
        if (this.playTimeout) {
            clearTimeout(this.playTimeout);
            this.playTimeout = null;
        }
        
        this.playBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.currentPhraseCard.classList.remove('active');
    }
    
    stop() {
        this.isPlaying = false;
        this.isPaused = false;
        this.speechSynthesis.cancel();
        
        if (this.playTimeout) {
            clearTimeout(this.playTimeout);
            this.playTimeout = null;
        }
        
        this.playBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.stopBtn.disabled = true;
        
        this.currentIndex = 0;
        this.updateDisplay();
        this.currentPhraseCard.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThaiPhraseLearning();
});