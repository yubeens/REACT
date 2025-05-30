import './EmotionItem.css'
import React from "react";
const EmotionItem = ({id, img, name, onClick,isSelected}) => {
  // const handleOnClick = () => {
  //     onClick(id)
  // }
    return (
      <div className={["EmotionItem",
          isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`].join(' ')}
          onClick={()=> onClick(id)}>
         <img alt={`emotion${id}`} src={img}/>
          <span>{name}</span>
      </div>
  )
}
export default React.memo(EmotionItem);
//export default  EmotionItem