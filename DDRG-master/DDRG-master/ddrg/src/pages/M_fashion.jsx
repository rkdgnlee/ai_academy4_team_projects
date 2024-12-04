import React, {useState} from 'react';
import Item from '../components/cloth/Item.jsx';
import Explain from '../components/cloth/Explain.jsx';
import imgParts1 from '../img/패션img/parts1.png'
import imgParts2 from '../img/패션img/parts2.png'
import imgParts3 from '../img/패션img/parts3.png'
import imgParts4 from '../img/패션img/parts4.png'
import imgDeco1 from '../img/패션img/img1.png'
import imgDeco2 from '../img/패션img/img2.png'
import imgDeco3 from '../img/패션img/img3.png'
import imgDeco4 from '../img/패션img/shoe.png'

const M_fashion = () => {
  const max_height = window.innerHeight-100
  const piece_height = max_height*0.25

  // Drag 관련 코드
  const [startLeft, setStartLeft] = useState(0);
  let instLeft = [0,0,0,0];
  const [dragging, setDragging] = useState();
  const [dragGo, setDragGo] = useState();
  const [left,setLeft] = useState([0,0,0,0]);
  const [isClick, setIsClick] = useState(false)

  const handleDragStart = (e) =>{
    setDragging(true);
    // console.log('start', e.pageX);

    setStartLeft(e.currentTarget.offsetLeft)
    setDragGo(e.pageX)
  }
  const handleDragMove = (e, num) => {
    if (!dragging) return;

    instLeft = [...left];
    instLeft[num] = startLeft + e.pageX - dragGo
    setLeft(instLeft)
  }
  const handleDragEnd = (e) =>{
    setDragging(false);
    if(Math.abs(e.currentTarget.offsetLeft-startLeft)<10){
      setIsClick(true);
      console.log('click');
    }else{
      setIsClick(false)
      console.log('drag');
    }
  }
  const style1 = {
    height:piece_height,
    left:left[0] + 'px',
  }
  const style2 = {
    height:piece_height,
    left:left[1] + 'px',
  }
  const style3 = {
    height:piece_height,
    left:left[2] + 'px',
  }
  const style4 = {
    height:piece_height,
    left:left[3] + 'px',
  }

  // explain

  const [explain,setExplain] = useState(false);
  const [explainInfo,setExplainInfo] = useState([])

  const explainValue = (value) =>{
    setExplain(true);
    setExplainInfo(value);
  }
  const explainEnd = (boolean) =>{
    setExplain(boolean);
  }

  return (
    <div className='center'>
      <div className=''/>
      <div className='fashion_range' style={{
        height:max_height
        }}>
        <div className='fashion_name fashionN1' style={{
          height:piece_height
        }}>
          <img src={imgParts1}/>
        </div>
        <div className='fashion' style={{
          height:piece_height
        }}>
          <div
          className='fashion_drag'
          style={style1}
          onMouseDown={handleDragStart} 
          onMouseMove={(e) => {handleDragMove(e, 0)}}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          >
            <Item kinds='모자' explainValue={explainValue} isClick={isClick}/>
          </div>
        </div>
        <div className='fashion' style={{
          height:piece_height
        }}>
          <div
          className='fashion_drag'
          style={style2}
          onMouseDown={handleDragStart} 
          onMouseMove={(e) => {handleDragMove(e, 1)}}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          >
            <Item kinds='상의' explainValue={explainValue} isClick={isClick}/>
          </div>
        </div>
        <div className='fashion_name fashionN2' style={{
          height:piece_height
        }}>
          <img src={imgParts2}/>
        </div>
        <div className='fashion_name fashionN3' style={{
          height:piece_height
        }}>
          <img src={imgParts3}/>
        </div>
        <div className='fashion' style={{
          height:piece_height
        }}>
          <div
          className='fashion_drag'
          style={style3}
          onMouseDown={handleDragStart} 
          onMouseMove={(e) => {handleDragMove(e, 2)}}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          >
            <Item kinds='하의' explainValue={explainValue} isClick={isClick}/>
          </div>
        </div>
        <div className='fashion' style={{
          height:piece_height
        }}>
          <div
          className='fashion_drag'
          style={style4}
          onMouseDown={handleDragStart} 
          onMouseMove={(e) => {handleDragMove(e, 3)}}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          >
            <Item kinds='신발' explainValue={explainValue} isClick={isClick}/>
          </div>
        </div>
        <div className='fashion_name fashionN4' style={{
          height:piece_height
        }}>
          <img src={imgParts4}/>
        </div>
        <img src={imgDeco1} className='fashion_deco1'/>
        <img src={imgDeco2} className='fashion_deco2'/>
        <img src={imgDeco3} className='fashion_deco3'/>
        <img src={imgDeco4} className='fashion_deco4'/>
        {explain && <Explain explainInfo={explainInfo} explainEnd={explainEnd}/>}
      </div>
    </div>
  )
}

export default M_fashion