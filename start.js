const fs = require("fs");

var fileList = {
  normal: [],
  剑指Offer: [],
  "剑指Offer II": [],
  面试题: [],
};

// 获取question文件下的所有文件名，并格式化文件名
async function getFiles() {
  const dir = await fs.opendirSync("./question");
  for await (const dirent of dir) {
    const [sub, ...rest] = dirent.name.split("-");
    const arr = rest.join("-").split(".");
    if (arr[arr.length - 1] !== "js") return;

    if (!Number.isNaN(+sub)) {
      fileList.normal.push({
        order: sub,
        name: `${sub} ${arr[arr.length - 2]}`,
      });
    } else if (fileList[sub]) {
      fileList[sub].push({
        order: arr.slice(0, -2).join("."),
        name: `${sub} ${arr.slice(0, -2).join(".")}.${arr[arr.length - 2]}`,
      });
    }
  }
}

// 文件名排序
async function getOrderFiles() {
  const typeList = Object.keys(fileList);

  for (let i = 0; i < typeList.length; i++) {
    fileList[typeList[i]].sort((a, b) => {
      const aorr = a.order.split(".");
      const borr = b.order.split(".");
      const len = Math.min(aorr.length, borr.length);

      for (let j = 0; j < len; j++) {
        if (aorr[j] !== borr[j]) {
          return aorr[j] - borr[j];
        }
      }
    });
  }
}

// 生成markdown目录
async function writeFile() {
  const typeList = Object.keys(fileList);
  const sum = typeList.reduce((total, type) => {
    return total + fileList[type].length;
  }, 0);

  const content = typeList.reduce((text, type) => {
    return (
      text +
      fileList[type]
        .map((item) => {
          return `- ${item.name}`;
        })
        .join("\n") +
      "\n"
    );
  }, "");

  await fs.writeFileSync(
    "README.md",
    `# 目录生成命令\nnode start.js\n\n## leetcode 题目(共 ${sum} 题)\n\n${content}`
  );
}

async function init() {
  try {
    console.log("生成markdown目录中...");
    await getFiles();
    await getOrderFiles();
    await writeFile();
    console.log("生成markdown目录成功！");
  } catch (err) {
    console.log("出错啦...", err);
  }
}

init();
