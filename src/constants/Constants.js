export const PAPER_MARGIN = '0%';

// export const PAPER_MARGIN = calcPaperMargin();

//width on MacBookPro 13in = 1440
function calcPaperMargin() {
  const width = window.innerWidth;

  if(width<=500) return '5%';
  else if(width>500 && width<=900) return '10%';
  else return '20%'
}
