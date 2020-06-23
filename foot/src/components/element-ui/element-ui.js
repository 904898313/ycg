import Vue from "vue";
// 引入ElementUI组件
import {
    Button, Icon, Dialog, Input, Radio, Checkbox, Form, FormItem, Link, Image, Divider, Loading, Progress, Pagination, Collapse
    , Upload, Breadcrumb, BreadcrumbItem, CollapseItem, Message, avatar, Dropdown, DropdownMenu, DropdownItem, DatePicker, Tag, Select, Option
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Link);
Vue.use(Image);
Vue.use(Divider);
Vue.use(Loading);
Vue.use(Progress);
Vue.use(Pagination);
Vue.use(Collapse);
Vue.use(Upload);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(CollapseItem);
Vue.use(DatePicker);
Vue.use(avatar);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tag);
Vue.use(Select);
Vue.use(Option);
Vue.prototype.$message = Message

Vue.prototype.$ELEMENT = { zIndex: 1996 };
