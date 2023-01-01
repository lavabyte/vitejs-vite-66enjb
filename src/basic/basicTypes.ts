type Gender = '阴' | '阳';

type Sex = '男' | '女';

type TianGanName =
  | '甲'
  | '乙'
  | '丙'
  | '丁'
  | '戊'
  | '己'
  | '庚'
  | '辛'
  | '壬'
  | '癸';

type DiZhiName =
  | '寅'
  | '卯'
  | '辰'
  | '巳'
  | '午'
  | '未'
  | '申'
  | '酉'
  | '戌'
  | '亥'
  | '子'
  | '丑';

type FiveElements = '金' | '木' | '水' | '火' | '土';

type ElementRelations = '生我' | '克我' | '同我' | '我生' | '我克' | undefined;

type Era = [
  {zodiac:'坎',star:'贪狼',element:'水',color:'白'}
  {zodiac:'坤',star:'巨门',element:'土',color:'黑'}
  {zodiac:'震',star:'禄存',element:'木',color:'碧'}
  {zodiac:'巽',star:'文曲',element:'木',color:'绿'}
  {zodiac:'中',star:'廉贞',element:'土',color:'黄'}
  {zodiac:'乾',star:'武曲',element:'金',color:'白'}
  {zodiac:'兑',star:'破军',element:'金',color:'赤'}
  {zodiac:'艮',star:'左辅',element:'土',color:'白'}
  {zodiac:'离',star:'右弼',element:'火',color:'紫'}
]

type FullInfo = {
  sex: Sex,
  year: {
    gan: TianGan,
    zhi: DiZhi
  },
  month: {
    gan: TianGan,
    zhi: DiZhi
  },
  day: {
    gan: TianGan,
    zhi: DiZhi
  },
  hour: {
    gan: TianGan,
    zhi: DiZhi
  },
  birthYear?: number
}

export type { Gender, TianGanName, DiZhiName, FiveElements, ElementRelations, Sex, FullInfo, Era };
