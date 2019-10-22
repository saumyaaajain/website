import React from 'react';
import logo from './logo.svg';
import './App.css';
import img from './Star+Wars49.jpg'
import { Component } from 'react';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import Countdown from 'react-count-down';
import Iframe from 'react-iframe';
import font from './StarJedi-DGRW.ttf'
import footerImg from './may-the-fourth-be-with-you.jpg';
import bday from './Unknown-3';
import Arrow from './arrow1.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import news1 from './final-trailer-tall-v3-47f-1536x512.jpg'
import news2 from './rise-of-skywalker-theatrical-poster-tall-1536x512.jpg'
import news4 from './203-buckets-list-extra_TALL-1536x512.jpg';
import news3 from './rise-of-skywalker-tickets-tall-1536x512.jpg'

export default class App extends React.PureComponent {

    afterUnmount= () => {
        return(
            <div>
                may the force...
            </div>
        );
    };

    onClick(){
        window.location.href="https://in.bookmyshow.com/jaipur/movies/star-wars-the-rise-of-skywalker/ET00115302";
    }

    render() {

        const OPTIONS = {
            endDate: '12/19/2019 11:59 PM',
        }

        const navbarItems = [{
            label: <img src={img} className="App-logo1" alt="logo"/>,
            target: "item-1"
        }, {
            label: "Tickets",
            target: "item-2"
        }, {
            label: "Videos",
            target: "item-4"
        }, {
            label: "News",
            target: "item-5"
        },{
            label: "",
            target: "item-6"
        },];
        return (
            <div className="App">
                <header className="App-Head">

                </header>
                    <NavBar height={130} backgroundColor={"#22222"} items={navbarItems} offset={-80} duration={500} delay={0}>

                    </NavBar>
                    <div className="container">
                        <ElementsWrapper items={navbarItems}>
                            <div name="item-1" className="App-Head"><img src={img} className="App-logo" alt="logo"/></div>
                            <div name="item-2" className="App-Head">
                                <div>
                                    <Countdown options={OPTIONS} />
                                    <div className="button-comp">
                                        <button className="btn1" onClick={this.onClick}>
                                            <span className="btn-content">Get Tickets &nbsp;</span>
                                            <img src={Arrow} className="image1" alt="arrow" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div name="item-4" className="App-Head">
                                <div className="frames">
                                    <iframe width="500" height="425" src="https://www.youtube.com/embed/8Qn_spdM5Zg"
                                            frameBorder="10"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/>
                                    <div className="divider"/>
                                    <iframe width="500" height="425" src="https://www.youtube.com/embed/adzYW5DZoWs"
                                            frameBorder="10"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/>
                                </div>
                            </div>
                            <div name="item-5" className="new-App-Head">
                                <Tabs>
                                    <TabList>
                                        <Tab>News 1</Tab>
                                        <Tab>News 2</Tab>
                                        <Tab>News 3</Tab>
                                        <Tab>News 4</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <img src={news2} className="App-logo" alt="logo"/><br/>
                                        <a href="https://www.starwars.com/news/star-wars-the-rise-of-skywalker-theatrical-poster">STAR WARS: THE RISE OF SKYWALKER TICKET OFFERS AND GIVEAWAYS</a>
                                        <br/>The visually rich image offers new glimpses of Rey, Kylo Ren, and more.
                                    </TabPanel>
                                    <TabPanel>
                                        <img src={news1} className="App-logo" alt="logo"/>
                                        <br/>
                                            <a name="&amp;lpos=content-box/tiles&amp;lid=content-box/tiles/title/9 Highlights from the Final Star Wars: The Rise of Skywalker Trailer"
                                               href="https://www.starwars.com/news/star-wars-the-rise-of-skywalker-final-trailer"
                                               rel="bookmark"
                                               title="9 Highlights from the Final Star Wars: The Rise of Skywalker Trailer">
                                                9 Highlights from the Final Star Wars: The Rise of Skywalker Trailer

                                            </a>
                                        <br/>
                                        The hopeful Resistance clashes with the evil First Order in the thrilling <br/>final chapter, in theaters December 20.
                                    </TabPanel>
                                    <TabPanel>
                                        <img src={news4} className="App-logo" alt="logo"/><br/>
                                        <a href="https://www.starwars.com/news/buckets-list-extra-7-fun-facts-from-live-fire-star-wars-resistance">BUCKET’S LIST EXTRA: 7 FUN FACTS FROM “LIVE FIRE” – STAR WARS RESISTANCE</a>
                                        <br/>Learn about early concepts of the massive jakoosk creature and more!
                                    </TabPanel>
                                    <TabPanel>
                                        <img src={news3} className="App-logo" alt="logo"/><br/>
                                        <a href="https://www.starwars.com/news/star-wars-the-rise-of-skywalker-tickets"> STAR WARS: THE RISE OF SKYWALKER TICKET OFFERS AND GIVEAWAYS</a>
                                        <br/>You don’t need to use the Force to snag tickets, get details on special events, and more!
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </ElementsWrapper>
                    </div>
                <footer className="foot">
                    <p>
                        May the force be with you...
                    </p>
                    <img src={footerImg} className="foot" alt="logo" height={20} width={500}/>
                </footer>
            </div>
        );
    }
}

