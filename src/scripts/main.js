"use strict";

class readMore {
  constructor() {
      this.content = '.readmore__content';
      this.buttonToggle = '.readmore__toggle';
  }

  bootstrap() {
      this.setNodes();
      this.init();
      this.addEventListeners();
  }

  setNodes() {
      this.nodes = {
          contentToggle: document.querySelector(this.content)
      };

      this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
  }

  init() {
      const { contentToggle } = this.nodes;

      this.stateContent = contentToggle.innerHTML;

      contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`;
  }

  addEventListeners() {
      this.buttonToggle.addEventListener('click', this.onClick.bind(this))
  }

  onClick(event) {
      const targetEvent = event.currentTarget;
      const { contentToggle } = this.nodes;
      const textBlock = document.getElementById('readmore');

      if (targetEvent.getAttribute('aria-checked') === 'true') {
          targetEvent.setAttribute('aria-checked', 'false')
          contentToggle.innerHTML = this.stateContent;
          targetEvent.classList.add('toggle');
          textBlock.classList.remove('blured');

      } else {
          targetEvent.setAttribute('aria-checked', 'true')
          contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`;
          targetEvent.classList.remove('toggle');
          textBlock.classList.remove('blured');
      }
  }
}

const initReadMore = new readMore();
initReadMore.bootstrap()

const selector = document.getElementsByClassName('category');
const bonuses = document.getElementsByClassName('bonuses_container');
let lastActive = [];
const lastBonuses = [];
const firstActive = document.getElementsByClassName('active');
const firstActiveBonus = document.getElementsByClassName('active_bonuses');

[...selector].forEach(function(category) {
  category.addEventListener('click', function() {
    [...firstActive].forEach(function(active) {
      active.classList.remove('active');
    })
    if (lastActive.length !== 0) {
      lastActive.classList.remove('active');
    }
    lastActive = category;
    category.classList.add('active');
    if (lastActive.classList.contains('fourth')) {
      [...bonuses][3].classList.add('active_bonuses');
      [...bonuses][0].classList.remove('active_bonuses');
      [...bonuses][1].classList.remove('active_bonuses');
      [...bonuses][2].classList.remove('active_bonuses');
    } else if (lastActive.classList.contains('third')) {
      [...bonuses][2].classList.add('active_bonuses');
      [...bonuses][0].classList.remove('active_bonuses');
      [...bonuses][1].classList.remove('active_bonuses');
      [...bonuses][3].classList.remove('active_bonuses');
    } else if (lastActive.classList.contains('second')) {
      [...bonuses][1].classList.add('active_bonuses');
      [...bonuses][0].classList.remove('active_bonuses');
      [...bonuses][2].classList.remove('active_bonuses');
      [...bonuses][3].classList.remove('active_bonuses');
    } else {
      [...bonuses][0].classList.add('active_bonuses');
      [...bonuses][1].classList.remove('active_bonuses');
      [...bonuses][2].classList.remove('active_bonuses');
      [...bonuses][3].classList.remove('active_bonuses');
    }
  });
});

const openFirstWindow = document.querySelector('.openFirst');
const firstWindow = document.querySelector(".firstWindow");

openFirstWindow.addEventListener('click', () => {
    firstWindow.showModal();
});

const openSecondWindow = document.querySelector('.openSecond');
const secondWindow = document.querySelector(".secondWindow");

openSecondWindow.addEventListener('click', () => {
  secondWindow.showModal();
});

const openThirdWindow = document.querySelector('.openThird');
const thirdWindow = document.querySelector(".thirdWindow");

openThirdWindow.addEventListener('click', () => {
  thirdWindow.showModal();
});

const openFourthWindow = document.querySelector('.openFourth');
const fourthWindow = document.querySelector(".fourthWindow");

openFourthWindow.addEventListener('click', () => {
  fourthWindow.showModal();
});

const openFifthWindow = document.querySelector('.openFifth');
const fifthWindow = document.querySelector(".fifthWindow");

openFifthWindow.addEventListener('click', () => {
  fifthWindow.showModal();
});

const openSixthWindow = document.querySelector('.openSixth');
const sixthWindow = document.querySelector(".sixthWindow");

openSixthWindow.addEventListener('click', () => {
  sixthWindow.showModal();
});

const openSeventhWindow = document.querySelector('.openSeventh');
const seventhWindow = document.querySelector(".seventhWindow");

openSeventhWindow.addEventListener('click', () => {
  seventhWindow.showModal();
});

const openEighthWindow = document.querySelector('.openEighth');
const eighthWindow = document.querySelector(".eighthWindow");

openEighthWindow.addEventListener('click', () => {
  eighthWindow.showModal();
});

const openNinthWindow = document.querySelector('.openNinth');
const ninthWindow = document.querySelector(".ninthWindow");

openNinthWindow.addEventListener('click', () => {
  ninthWindow.showModal();
});

const openTenthWindow = document.querySelector('.openTenth');
const tenthWindow = document.querySelector(".tenthWindow");

openTenthWindow.addEventListener('click', () => {
  tenthWindow.showModal();
});
