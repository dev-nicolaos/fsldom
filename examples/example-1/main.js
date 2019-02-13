// fD exists as a global object when loaded via <script> tag

const app = {
  init() {
    fD.byClass('blue-back')[0].style.background = 'blue';

    console.log(fD.query('section button[disabled]'));

    this.insertFooter();
  },

  insertFooter() {
    const today = new Date();
    const footer = fD.newEl('footer', {
      id: 'site-footer',
      html: `<span>Today is ${today.toString()}</span>`,
    });

    fD.append(document.body, footer);
  },
};

app.init();
