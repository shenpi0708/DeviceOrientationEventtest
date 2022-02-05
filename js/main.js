//stop
const mo=function(e){e.preventDefault();};
document.body.style.overflow="hidden";        
document.addEventListener("touchmove",mo,false);//禁止頁面滑動


//URL par
const search_url = new URL(window.location.href);
const params = search_url.searchParams;
var method = {"method":"2"}
for (let pair of params.entries()) {
  console.log(pair[0]);
  method[pair[0]]=pair[1]
} 
console.log(method["method"])


const jsFrame = new JSFrame();

function start(url) {
    const jsFrame = new JSFrame();
    // Create window
    const frame = jsFrame.create({
      title: '範例',
      name:'window1',
      left: 40, top: 60, width: 500, height: 500,
      movable: true,// Enable to be moved  by mouse
      resizable: true,// Enable to be resized by mouse
      url: url
    });

    // Show window
    frame.show();
  }
  function start2(idx,url) {

      const frame = jsFrame.create({
        appearanceName: 'yosemite',
        title: `Window-${idx}`,
        name: `window${idx}`,
        left: 20 + idx * 100, top: 100, width: 520, height: 320,
        movable: true,
        resizable: true,
        url: url
      });
      frame.show();
  }

  function click2(idx,name) {
        if (method["method"]==1){
          const windowName = `window${idx}`;
          const frame = jsFrame.getWindowByName(windowName);
          if (frame){
          console.log(jsFrame);
          frame.requestFocus();
          }
          else{
              start2(idx,"html/"+name+".html");
          }          
        }
        else{
          $("#page1").load("html/"+name+".html");
        }
  }