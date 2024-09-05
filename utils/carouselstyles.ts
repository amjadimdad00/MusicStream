export const getCssTransformProperties = (
  offset: number,
  absOffset: number,
  direction: number,
  scale: boolean,
  isActive: boolean
) => `
  rotateY(calc(${offset} * 55deg))
  scaleY(calc(1 + ${absOffset} * -0.5 ))
  translateX(calc(${direction} * -3.5rem))
  translateZ(calc(${absOffset} * -35rem))
  scale(${scale && isActive ? 6.5 : 1})
`;

export const getCssOpacity = (index: number, activeIndex: number) => `
  ${Math.abs(index - activeIndex) >= 3 ? "0" : "1"}
`;

export const getCssDisplay = (index: number, activeIndex: number) => `
  ${Math.abs(index - activeIndex) >= 3 ? "none" : "block"}
`;
