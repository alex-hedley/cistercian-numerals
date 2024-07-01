function updateGlyph(strNum,svgID) {
    var theSVG = document.getElementById(svgID);
    intNum = Number(strNum);
    document.querySelector("#" + svgID + " title").innerHTML = intNum;
    theSVG.setAttribute("class", "");
    const x = strNum.padStart(4,"0");
    theSVG.classList.add("z" + x.split("")[0] + "000");
    theSVG.classList.add("z" + x.split("")[1] + "00");
    theSVG.classList.add("z" + x.split("")[2] + "0");
    theSVG.classList.add("z" + x.split("")[3]);
  }
  
  async function countDown(strNum,svgID) {
    intNum = Number(strNum);
    for (let i = intNum; i > 0; i--) {
      const x = i.toString();
      document.getElementById('Number').value = x;
      updateGlyph(x,svgID);
      await sleep(1000);
    }
  }
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }