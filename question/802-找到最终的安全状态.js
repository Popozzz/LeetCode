/**
 * @param {number[][]} graph
 * @return {number[]}
 */

var eventualSafeNodes = function (graph) {
  var i = 0,
    len = graph.length;
  var safeWayMap = {}; // 存储安全的起点
  var unSafeWayMap = {}; // 存储不安全的起点

  // 如果某起点 => 到终点是ok的，那么途中经过的点到终点也是ok的;
  // 反过来，如果某起点 => 终点是不ok的，那么作为途中的点也是不ok的;
  function reachLess(start, wayCount = 0) {
    const way = graph[start];

    if (unSafeWayMap[start]) return true;
    if (safeWayMap[start]) return false;
    if (way === null) return false;
    if (wayCount >= len) return true;

    wayCount++;
    const flag = way.some((w) => {
      return reachLess(w, wayCount);
    });

    if (flag) {
      unSafeWayMap[start] = true;
    } else {
      safeWayMap[start] = true;
    }

    return flag;
  }

  while (i < len) {
    if (!unSafeWayMap[i]) {
      reachLess(i);
    }

    i++;
  }

  return Object.keys(safeWayMap);
};
