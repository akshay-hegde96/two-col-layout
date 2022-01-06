<!-- 📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion). -->

# Two-Column-Layout

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

This app can be used as block wherever we need a two column page layout design.

![Media Placeholder](https://user-images.githubusercontent.com/91450011/148222699-dac06c39-d305-41b7-844f-b0d1f31aa7c1.png)

## Configuration 
### Steps to use this block inside store theme:


### step1
Add "echidna.two-col-layout":"0.x" in your store theme dependancies.

### step2
Add "two-col-layout" block, in page where you want to display two column layout.

### step3
Declare the block with props as shown below:
```json
  "two-col-layout":{
      "props":{
        "heading":"This is heading",
        "subHeading":"this is sub heading",
        "imageUrl1":"https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
        "secondColFirstParagraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum,Lorem Ipsum is simply dummy text of the printing and typesetting ",
        "secondColSecondParagraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum,Lorem Ipsum is simply dummy text of the printing and typesetting ",
        "firstColFirstParagraph":"ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum,Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
    },
```
##### Note: This block will render image on first column if there is (imageUrl1,imageUrl2,imageUrl3,imageUrl4) any one of this block is mandatory if you want to display image. If you dont want any images to display then just dont add imageUrl props, and add firstColFirstparagraph props to display texts instead of images.

![image](https://user-images.githubusercontent.com/91450011/148226979-3cd421d1-fd91-4e83-9163-593d703f87bd.png)


### props

| Prop name    | Type            | Description    |                                                                                                                              |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `heading`      | `string`       | Heading for the container, Use this prop only if you want to display heaing.         | 
| `subHeading`      | `string`       | Sub heading for the container.   | 
| `imageUrl1`      | `string`       |  Image will be displayed in first column-first row.         | 
| `imageUrl2`      | `string`       | Image will be displayed in first column-second row.(use this prop only if u want to display more than 1 images)      | 
| `imageUrl3`      | `string`       | ,,             ,,                      third row.     | 
| `imageUrl4`      | `string`       |  ,,             ,,                      fourth row.         | 
| `firstColFirstParagraph`      | `string`       |  Displays texts in first column. (Works only if there is no imageUrl props)         | 
| `firstColSecondParagraph`      | `string`       | Displays texts in first column.  (Works only if there is no imageUrl props)       | 
| `firstColThirdParagraph`      | `string`       | Displays texts in first column.    (Works only if there is no imageUrl props)     | 
| `firstColFourthParagraph`      | `string`       | Displays texts in first column.  (Works only if there is no imageUrl props)       | 
| `secondColFirstParagraph`      | `string`       | Displays texts in second column.         | 
| `secondColSecondParagraph`      | `string`       | Displays texts in second column.           | 
| `secondColThirdParagraph`      | `string`       | Displays texts in second column.           | 
| `secondColFourthParagraph`      | `string`       | Displays texts in second column.           | 




## CSS Handles

| CSS Handles |
| ----------- | 
| `.image1` | 
| `.image2` | 
| `.image3` | 
| `.image4` | 
| `.imagesWrapper` |
| `.firstColParaContainer` |
| `.firstColFirstParagraph` |
| `.firstColSecondParagraph` |
| `.firstColThirdParagraph` |
| `.firstColFourthParagraph` |
| ` .secondColFirstParagraph` |
| `.secondColSecondParagraph` |
| `.firstColThirdParagraph` |
| `.secondColFourthParagraph` |


### css classes:
                    `.layoutContainer`
                    `.row`
                    `.column `
                   ` .heading`
                    `.subHeading`

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [akshay-hegde96 ](https://github.com/akshay-hegde96) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->




