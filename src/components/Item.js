import React from 'react';
import Button from './Button.js';
import './Item.css'
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Item = ({title,desc,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,backgroundImg,first}) =>{
    return(
     <div className="item" style={{
         backgroundImage: `url(${backgroundImg})`
     }}>
        <div className="item__container">
            <div className="item__text">
                <p>{title}</p>
                <div className="item__textDesc">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="item_lowerThird">
                <div className="item__buttons">
                    <Button imp='primary' text={leftBtnTxt} link={leftBtnLink}/>
                    {twoButtons && (
                        <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink}/>
                    )}
                </div>
            </div>
        </div>
     </div>   
    );
}

export default Item;