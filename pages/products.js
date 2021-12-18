import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="KKG Fans"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="/img/nextjs_header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>KKG Fans .</h1>
                <h3 className={classes.subtitle}>
                  A Wide Variety Of Fans Are Created Here.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <SectionCarousel />
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
            
            
            {[1,2,3,4,5,6,7,8,].map((e,i)=><Link key={i} href="/products/1234">
                <a className={classes.link}>
                
                <h4>Rounded Raised</h4>
                <img
                    src="/img/faces/avatar.jpg"
                    alt="..."
                    className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                    }
                />
                
                </a>
            </Link>)}


            </GridItem>
      </div>
      <Footer />
    </div>
  );
}
