export function newEl(
  elementType,
  { classList, id, html, text, data, listeners, src, alt, href, target } = {}
) {
  if (typeof elementType === 'string') {
    const elem = document.createElement(elementType);
    if (elem instanceof HTMLUnknownElement) {
      console.info(
        'FSLDOM - newEl: elementType is not a recognized tagname. Created element will be an instance of HTMLUnknownElement - https://developer.mozilla.org/en-US/docs/Web/API/HTMLUnknownElement'
      );
    }

    if (classList) {
      if (typeof classList === 'string') {
        elem.className = classList;
      } else if (Array.isArray(classList)) {
        elem.className = classList.join(' ');
      } else {
        console.warn(
          'FSLDOM - newEl: options.classList must be either a string or an array'
        );
      }
    }

    if (id) {
      if (typeof id === 'string') {
        elem.id = id;
      } else {
        console.warn('FSLDOM - newEl: options.id must be a string');
      }
    }

    if (html) {
      if (typeof html === 'string') {
        elem.innerHTML = html;
      } else {
        console.warn('FSLDOM - newEl: options.html must be a string');
      }
    } else if (text) {
      if (typeof text === 'string') {
        elem.textContent = text;
      } else {
        console.warn('FSLDOM - newEl: options.text must be a string');
      }
    }

    if (data) {
      if (typeof data === 'object') {
        for (let key in data) {
          elem.dataset[key] = data[key];
        }
      } else {
        console.warn('FSLDOM - newEl: options.data must be an object');
      }
    }

    if (listeners) {
      if (typeof listeners === 'object' && listeners !== null) {
        for (let event in listeners) {
          if (typeof listeners[event] === 'function') {
            elem.addEventListener(event, listeners[event]);
          } else if (Array.isArray(listeners[event])) {
            listeners[event].forEach((listener, i) => {
              if (typeof listener === 'function') {
                elem.addEventListener(event, listener);
              } else {
                console.warn(
                  `FSLDOM - newEl: Value of options.handlers.${event}[${i}] is not a function`
                );
              }
            });
          } else {
            console.warn(
              `FSLDOM - newEl: Value of options.handlers.${event} is not a function`
            );
          }
        }
      } else {
        console.warn('FSLDOM - newEl: options.handlers must be an object');
      }
    }

    if (src) {
      if (elementType === 'img') {
        if (typeof src === 'string') {
          elem.src = src;
        } else {
          console.error('options.src must be a string');
        }
      } else {
        console.warn(
          'FSLDOM - newEl: elementType is not "img", options.src will be ignored'
        );
      }
    }

    if (alt) {
      if (elementType === 'img') {
        if (typeof alt === 'string') {
          elem.alt = alt;
        } else {
          console.warn('FSLDOM - newEl: options.alt must be a string');
        }
      } else {
        console.warn(
          'FSLDOM - newEl: elementType is not "img", options.alt will be ignored'
        );
      }
    }

    if (href) {
      if (elementType === 'a') {
        if (typeof href === 'string') {
          elem.href = href;
        } else {
          console.error('FSLDOM - newEl: options.href must be a string');
        }
      } else {
        console.warn(
          'FSLDOM - newEl: elementType is not "a", options.href will be ignored'
        );
      }
    }

    if (target) {
      if (elementType === 'a') {
        if (typeof target === 'string') {
          elem.target = target;
        } else {
          console.error('FSLDOM - newEl: options.target must be a string');
        }
      } else {
        console.warn(
          'FSLDOM - newEl: elementType is not "a", options.target will be ignored'
        );
      }
    }

    return elem;
  } else {
    console.error('FSLDOM - newEl: elementType must be a string');
  }
}
