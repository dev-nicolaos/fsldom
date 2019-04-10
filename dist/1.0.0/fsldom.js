/* FSLDOM */
/* Version: 1.0.0 */
/* Author: Nicolaos Skimas */
/* License: MIT */
/* https://github.com/dev-nicolaos/fsldom */

(function() {
  const fD = {
    byId(id) {
      if (typeof id === 'string') {
        return document.getElementById(id);
      } else {
        console.error('id must be a string');
      }
    },

    byClass(className) {
      if (typeof className === 'string') {
        const elements = document.getElementsByClassName(className);
        return elements.length === 0 ? null : Array.from(elements);
      } else {
        console.error('className must be a string');
      }
    },

    byTag(tagName) {
      if (typeof tagName === 'string') {
        const elements = document.getElementsByTagName(tagName);
        return elements.length === 0 ? null : Array.from(elements);
      } else {
        console.error('tagName must be a string');
      }
    },

    query(selectors) {
      if (typeof selectors === 'string') {
        return document.querySelector(selectors);
      } else {
        console.error('selectors must be a string');
      }
    },

    queryAll(selectors) {
      if (typeof selectors === 'string') {
        const elements = document.querySelectorAll(selectors);
        return elements.length === 0 ? null : Array.from(elements);
      } else {
        console.error('selectors must be a string');
      }
    },

    newEl(elementType, { classList, id, html, text } = {}) {
      if (typeof elementType === 'string') {
        let elem = document.createElement(elementType);
        if (classList) {
          if (typeof classList === 'string') {
            elem.className = classList;
          } else {
            console.warn('classList must be a string');
          }
        }
        if (id) {
          if (typeof id === 'string') {
            elem.id = id;
          } else {
            console.warn('id must be a string');
          }
        }
        if (html) {
          if (typeof html === 'string') {
            elem.innerHTML = html;
          } else {
            console.warn('html must be a string');
          }
        } else if (text) {
          if (typeof text === 'string') {
            elem.textContent = text;
          } else {
            console.warn('text must be a string');
          }
        }
        return elem;
      } else {
        console.error('elementType must be a string');
      }
    },

    before(targetElem, newContent) {
      fDAddContent('beforebegin', targetElem, newContent);
    },

    prepend(targetElem, newContent) {
      fDAddContent('afterbegin', targetElem, newContent);
    },

    append(targetElem, newContent) {
      fDAddContent('beforeend', targetElem, newContent);
    },

    after(targetElem, newContent) {
      fDAddContent('afterend', targetElem, newContent);
    },
  };

  function fDAddContent(position, targetElem, newContent) {
    if (targetElem instanceof HTMLElement) {
      if (newContent instanceof HTMLElement) {
        targetElem.insertAdjacentElement(position, newContent);
        return true;
      } else if (typeof newContent === 'string') {
        targetElem.insertAdjacentHTML(position, newContent);
        return true;
      } else {
        console.error('newContent must be either an HTMLElement or a string');
      }
    } else {
      console.error('targetElem must be an HTMLElement');
    }
  }

  if (typeof module === 'undefined') {
    window.fD = fD;
  } else {
    module.exports = fD;
  }
})();
