export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMousemove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMousemove);
    },
  };

  function criarTooltipBox(element) {
    const tootipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tootipBox.classList.add('tooltip');
    tootipBox.innerText = text;
    document.body.appendChild(tootipBox);
    return tootipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMousemove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMousemove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
