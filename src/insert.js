export function before(target, newContent) {
  return fDAddContent('beforebegin', target, newContent, 'before');
}

export function prepend(target, newContent) {
  return fDAddContent('afterbegin', target, newContent, 'prepend');
}

export function append(target, newContent) {
  return fDAddContent('beforeend', target, newContent, 'append');
}

export function after(target, newContent) {
  return fDAddContent('afterend', target, newContent, 'after');
}

// Helper function containing shared logic for insertion methods
function fDAddContent(position, target, newContent, methodName) {
  if (!(newContent instanceof HTMLElement) && typeof newContent !== 'string') {
    console.error(
      `FSLDOM - ${methodName}: newContent must be either an HTMLElement or a string`
    );
    return false;
  }

  if (typeof target === 'string') {
    target = document.querySelector(target);
    if (!target) {
      console.error(
        `FSLDOM - ${methodName}: No elements found for target: ${target}`
      );
      return false;
    }
  } else if (!(target instanceof HTMLElement)) {
    console.error(
      `FSLDOM - ${methodName}: target must be either an HTMLElement or a string`
    );
    return false;
  }

  if (typeof newContent === 'string') {
    target.insertAdjacentHTML(position, newContent);
    return true;
  } else {
    return !!target.insertAdjacentElement(position, newContent);
  }
}
