import { TianGan } from './tianGan';
import { ElementRelations } from './basicTypes';

function elementOrder(char: TianGan) {
  if (char.gender == '阴') {
    return (char.order - 1) / 2;
  } else {
    return char.order / 2;
  }
}

function getElementRelation(
  otherChar: TianGan,
  selfChar: TianGan
): ElementRelations {
  let otherOrder = elementOrder(otherChar);
  let selfOrder = elementOrder(selfChar);
  let diff = otherOrder - selfOrder;
  if (selfOrder < otherOrder) {
    switch (diff) {
      case 1:
        return '我生';
      case 2:
        return '我克';
      case 3:
        return '克我';
      case 4:
        return '生我';
    }
  } else if (selfOrder == otherOrder) {
    return '同我';
  } else {
    switch (diff) {
      case -1:
        return '生我';
      case -2:
        return '克我';
      case -3:
        return '我克';
      case -4:
        return '我生';
    }
  }
  return undefined;
}

export { getElementRelation };
