import React, { useState } from 'react';
import Aux from '../../hoc/Auxiliary';
import WithClass from '../../hoc/WithClass';
import classes from './CreateBlog.css'
const CreateBlog = props =>{

    //States
    const [checkBold,setCheckBold] =useState(false);
    const [checkItalic,setCheckItalic] =useState(false);
    const [checkstrike,setCheckStrike] =useState(false);
    const [checkunderline,setCheckUnderline] =useState(false);

    //Creating Lists
    let bold = [];
    let boldBtns = [];
    let colorItalic=[]
    let colorStrike=[]
    let colorUnderline=[]
    let italic=[];
    let strike=[];
    let underline=[];

    //Functions
    const boldHandler = () =>{
        console.log("Bold button is working");
        const isBold=checkBold;
        setCheckBold(!isBold);
    }

    const italicHandler = () =>{
        console.log("Italic button is working");
        const isItalic=checkItalic;
        setCheckItalic(!isItalic);
    }

    const strikeHandler = () =>{
        console.log("Strike button is working");
        const isStrike=checkstrike;
        setCheckStrike(!isStrike);
    }

    const underlineHandler = () =>{
        console.log("Underline button is working");
        const isUnderline = checkunderline;
        setCheckUnderline(!isUnderline);
    }

    //If Statements
    if(checkBold)
    {
        bold.push(classes.Bold);
        boldBtns.push(classes.btnColor);
    }

    if(checkItalic)
    {
        italic.push(classes.Italic);
        colorItalic.push(classes.colorItalic)
    }

    if(checkunderline===false && checkstrike)
    {
        strike.push(classes.Strike);
        colorStrike.push(classes.colorStrike)
    }

    if(checkunderline && checkstrike===false)
    {
        underline.push(classes.Underline);
        colorUnderline.push(classes.colorUnderline)
    }

    

    
    return(
        <Aux>
            <WithClass>
                <br />
                <br />
                <h3 className={classes.myh1}>Start Writing your Blog</h3>
                <br />
                <textarea className={`${classes.textArea} ${bold.join(' ')} ${italic.join(' ')} ${strike.join(' ')} ${underline.join(' ')}`} name="paragraph_text" cols="150" rows="20"></textarea>
                <button onClick={boldHandler} className={`${classes.boldBtn} ${boldBtns.join(' ')}`}>Bold</button>
                <button onClick={italicHandler} className={`${classes.italicBtn} ${colorItalic.join(' ')}`} >Italic</button>
                <button onClick={strikeHandler} className={`${classes.italicBtn} ${colorStrike.join(' ')}`} >Strikethrough</button>
                <button onClick={underlineHandler} className={`${classes.italicBtn} ${colorUnderline.join(' ')}`}>Underline</button>
                <button  className={`${classes.postBlog}`}>Post Blog</button>
                <br />
                
            </WithClass>
        </Aux>
    )
}

export default CreateBlog;