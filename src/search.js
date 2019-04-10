export function byId(id) {
  if (typeof id === 'string') {
    return document.getElementById(id);
  } else {
    console.error('FSLDOM - byID: id must be a string');
  }
}

export function byClass(className) {
  if (typeof className === 'string') {
    return Array.from(document.getElementsByClassName(className));
  } else {
    console.error('FSLDOM - byClass: className must be a string');
  }
}

export function byTag(tagName) {
  if (typeof tagName === 'string') {
    return Array.from(document.getElementsByTagName(tagName));
  } else {
    console.error('FSLDOM - byTag: tagName must be a string');
  }
}

export function query(selectors) {
  if (typeof selectors === 'string') {
    return document.querySelector(selectors);
  } else {
    console.error('FSLDOM - query: selectors must be a string');
  }
}

export function queryAll(selectors) {
  if (typeof selectors === 'string') {
    return Array.from(document.querySelectorAll(selectors));
  } else {
    console.error('FSLDOM - queryAll: selectors must be a string');
  }
}
