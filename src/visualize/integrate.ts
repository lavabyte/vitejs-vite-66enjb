import { godRelation } from '../basic/tenGods';
import { mapToTianGan, TianGan } from '../basic/tianGan';
import { mapToDiZhi, DiZhi } from '../basic/diZhi';
import { TianGanName, DiZhiName, Sex } from '../basic/basicTypes';

function validateChar(arr: string[]) {
  let gan = '甲乙丙丁戊己庚辛壬癸';
  let zhi = '子丑寅卯辰巳午未申酉戌亥';
  return (
    arr.every((char) => zhi.includes(char)) ||
    arr.every((char) => gan.includes(char))
  );
}

function processInput(s: string) {
  let sex: Sex;
  if (s.includes('坤') || s.includes('女')) {
    sex = '女';
  } else {
    sex = '男';
  }

  let tianGanRaw: string[];
  let diZhiRaw: string[];
  let diZhiChar: DiZhi[];
  let tianGanChar: TianGan[];
  if (s.includes('年')) {
    tianGanRaw = '年月日时'.split('').map((item) => s[s.indexOf(item) - 2]);
    diZhiRaw = '年月日时'.split('').map((item) => s[s.indexOf(item) - 1]);
  } else {
    tianGanRaw = [0, 2, 4, 6].map((index) => s[index]);
    diZhiRaw = [1, 3, 5, 7].map((index) => s[index]);
  }
  if (validateChar(tianGanRaw) && validateChar(diZhiRaw)) {
    tianGanChar = tianGanRaw.map(mapToTianGan);
    diZhiChar = diZhiRaw.map(mapToDiZhi);
  } else return 'Invalid Input';

  return diZhiChar.map((diZhi) => diZhi.season).join('');
}

export {processInput}