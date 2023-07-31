import { viVN_avatorDropMenu } from './user/avatorDropMenu';
import { viVN_tagsViewDropMenu } from './user/tagsViewDropMenu';
import { viVN_title } from './menu/title';
import { viVN_globalTips } from './global/tips';
import { viVN_apiAlert } from './apiAlert';
import { viVN_notice } from './notice';

const vi = {
  ...viVN_avatorDropMenu,
  ...viVN_tagsViewDropMenu,
  ...viVN_title,
  ...viVN_globalTips,
  ...viVN_notice,
  ...viVN_apiAlert,
};

export default vi;
