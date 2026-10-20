// 传声筒.pptx：封面不收录；有疑问的五条已经用户确认全部归梗句。
export const presentationSupplement = [
  [2, '四六级考试', 'general'],
  [3, '十年树木百年树人', 'sentence'],
  [4, '牛马面包', 'meme'],
  [5, '手动选课', 'general'],
  [6, '马到成功', 'general'],
  [7, '犹豫就会败北', 'meme'],
  [8, '人生是一场豪赌', 'meme'],
  [9, '不知道，我的身材很曼妙', 'meme'],
  [10, '爱你老己', 'meme'],
  [11, '前人栽树，后人乘凉', 'sentence'],
  [12, '好了好了，这下好了', 'meme'],
].map(([page, text, type]) => ({
  text, type, difficulty: 'normal', tags: [], notes: `原课件第 ${page} 页`,
  source: '传声筒.pptx', isClassic: false, isDemo: false,
}));
