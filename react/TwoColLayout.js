import React from 'react';
import styles from './TwoColLayout.css'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['image1',
                     'image2',
                     'image3',
                     'image4',
                     'imagesWrapper',
                     'firstColParaContainer',
                     'firstColFirstParagraph',
                     'firstColSecondParagraph',
                     'firstColThirdParagraph',
                     'firstColFourthParagraph',
                     'secondColFirstParagraph' ,
                     'secondColSecondParagraph',
                     'firstColThirdParagraph',
                     'secondColFourthParagraph'
                     ]


const TwoColLayout = (props) => {
  const handles = useCssHandles(CSS_HANDLES)
return(
  <div className={styles.layoutContainer}>
  <h2 className={styles.heading}>{props.heading}</h2>
  <h4 className={styles.subHeading}>{props.subHeading}</h4>
<div className={styles.row}>



  <div className={styles.column}>
  {props.imageUrl1 || props.imageUrl2 || props.imageUrl3 ||  props.imageUrl4 ?
  <div className={handles.imagesWrapper}>
  <img src={props.imageUrl1} className={handles.image1}/>
  <img src={props.imageUrl2} className={handles.image2}/>
  <img src={props.imageUrl3} className={handles.image3}/>
  <img src={props.imageUrl4} className={handles.image4}/>
  </div>
  :
  <div className={handles.firstColParaContainer}>
  <p className={handles.firstColFirstParagraph}>
  {props.firstColFirstParagraph}
  </p>
  <p className={handles.firstColSecondParagraph}>
  {props.firstColSecondParagraph}
  </p>
  <p className={handles.firstColThirdParagraph}>
  {props.firstColThirdParagraph}
  </p>
  <p className={handles.firstColFourthParagraph}>
  {props.firstColFourthParagraph}
  </p>
  </div>
  }

  </div>
<div className={styles.column}>
<p className={handles.secondColFirstParagraph}>
{props.secondColFirstParagraph}
</p>
<p className={handles.secondColSecondParagraph}>
{props.secondColSecondParagraph}
</p>
<p className={handles.secondColThirdParagraph}>
{props.secondColThirdParagraph}
</p>
<p className={handles.secondColFourthParagraph}>
{props.secondColFourthParagraph}
</p>
  </div>
</div>
</div>
)
}
export default TwoColLayout
