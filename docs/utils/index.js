import fs from "fs";
import path from "path";
//清除数字
function replaceNum(list) {
  list.forEach((item) => {
    const numStr = String(parseInt(item.text));
    item.text = item.text.replace(numStr, "");
  });
  return list;
}
//排序
function sort(list) {
  list.sort((a, b) => {
    return parseInt(a.text) - parseInt(b.text);
  });
  return replaceNum(list);
}
//获取指定目录下的所有md文件
function getAllItems(dir) {
  const allMd = fs
    .readdirSync(path.join(__dirname, `../${dir}`))
    .filter((f) => /\.md$/.test(f));
  const allItems = [];
  allMd.forEach((item) => {
    const name = item.split(".md")[0];
    allItems.push({
      text: name,
      link: name === "index" ? `/${dir}/` : `/${dir}/${name}`,
    });
  });

  return allItems;
}
//获取指定路径下的md文件路由，并根据开头数字进行排序，开头数字不在页面展示
export function getSideBar(dir) {
  const list = fs.readdirSync(path.join(__dirname, "../", dir));
  const folder = list.filter((f) => !/\.md$/.test(f)&&f!=='images');
  const sidebar = {
    [`/${dir}/`]: [],
  };
  if (folder.length) {
    folder.forEach((item, index) => {
      sidebar[`/${dir}/`].push({
        text: item,
        items: sort(getAllItems(`${dir}/${item}`)),
      });
    });
  } else {
    sidebar[`/${dir}/`].push({
      text: dir,
      items: sort(getAllItems(`${dir}`)),
    });
  }
  sidebar[`/${dir}/`] = sort(sidebar[`/${dir}/`]);
  return sidebar;
}
