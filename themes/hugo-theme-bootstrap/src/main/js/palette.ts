class PaletteSwitcher {
  key: string;

  run() {
    this.key = 'hbs-palette';
    this.initPalette();
  }

  initPalette() {
    const palette_elements = document.querySelectorAll('.palette');
    //Don't proceed, when palettes = [];
    if (palette_elements.length == 0) {
      localStorage.removeItem(this.key);
      return;
    };
    const palette = this.getPalette();
    if (palette) {
      this.setPalette(palette);
    }
    const selected = this.getPalette();
    const self = this;
    const palettePicker = document.querySelector('#palettePicker');
    if (!palettePicker) {
      return;
    }
    document.querySelector('#btnPalette').addEventListener('click', () => {
      if (palettePicker.classList.contains('visually-hidden')) {
        palettePicker.classList.remove('visually-hidden');
      } else {
        palettePicker.classList.add('visually-hidden');
      }
    });

    palette_elements.forEach((element) => {
      const paletteId = element.getAttribute('id').replace('palette-', '');
      if (paletteId === selected) {
        element.classList.add('active');
      }
      element.addEventListener('click', () => {
        self.setPalette(paletteId);
        document.querySelector('.palette.active').classList.remove('active');
        element.classList.add('active');
        palettePicker.classList.add('visually-hidden');
      });
    });
  }

  getPalette(): string {
    const palette = localStorage.getItem(this.key);
    if (palette) {
      return palette;
    }

    const paletteMeta = document.body.parentElement.getAttribute('data-palette');
    if (paletteMeta) {
      return paletteMeta;
    }

    return '';
  }

  setPalette(palette: string) {
    console.debug(`switch to palette: ${palette}`);
    document.body.parentElement.setAttribute('data-palette', palette);
    localStorage.setItem(this.key, palette);
  }
}

(new PaletteSwitcher()).run();
