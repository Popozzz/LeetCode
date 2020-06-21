/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
  var mapObj = {};
  var result = [];
  for (var i=0; i<names.length; i++) {
    let index = names[i].lastIndexOf('(');
        
    if (index > -1 && names[i].substr(-1) === ')') {
      let key = names[i].substring(0, index);
      if (mapObj[key] == null) {
            mapObj[key] = {}
      }
      mapObj[key][names[i].substring(index + 1, names[i].length-1)] = true;
    }

    if(mapObj[names[i]] == null) {
        
      mapObj[names[i]] = {
        '-1': true,
      };
      result.push(names[i]);
    } else {
      var k = -1;
      while (mapObj[names[i]][k] != null) {
        k++;
        if (k === 0) {
          k++;
        }
      }
      
      if (k === -1) {
        result.push(names[i]); 
      } else {
        result.push(names[i]+'('+k+')');
        
        if (mapObj[names[i]+'('+k+')'] == null) {
          mapObj[names[i]+'('+k+')'] = {
            '-1': true
          };
        } else {
          mapObj[names[i]+'('+k+')']['-1'] = true;
        }
      }
      
      mapObj[names[i]][k] = true;
    }
  }
  
  return result;
};