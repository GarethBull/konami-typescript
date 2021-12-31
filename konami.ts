const Konami = (() => {let SEQUENCE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

  let head = 0;
  let isActive: boolean = false;
  let callback: Function | undefined;

  const start = (cb: Function): void => {
    if (isActive) {
      return;
    }

    window.addEventListener("keydown", onKeyDown);

    callback = cb;
    isActive = true;
  };

  const stop = (): void => {
    if (!isActive) {
      return;
    }

    isActive = false;

    window.removeEventListener("keydown", onKeyDown);
  };

  const onKeyDown = (event: any) => {
    if (event.keyCode === SEQUENCE[head]) {
      head++;

      if (head === SEQUENCE.length) {
        if (callback instanceof Function) {
          callback();
        }
        head = 0;
      }
    } else {
      head = 0;
    }
  };

  return {
    start,
    stop,
  };
})();

export default Konami;
