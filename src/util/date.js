import {format, register} from 'timeago.js';
import KoLocale from 'timeago.js/lib/lang/ko';

register('ko', KoLocale)

export function formatAgo(data, lang='en_US'){
  return format(data, lang)
}