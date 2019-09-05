import React from "react"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Hovercontent from './hovercontent'

export default class Menu extends React.Component {
    
    mouseEnter(i) {
        const hoverstuff = <Hovercontent img={i[0]} text={i[1]} />
        this.props.callbackFromParent(hoverstuff);
    }
    mouseLeave() {
        this.props.callbackFromParent('');
    }
    render() {
        const menuContent = [
            ['waterways', ['Waterways', 'Let\'s put some text here, why not'],'waterways.jpg'],
            ['agri', ['Agriculture', 'Let\'s put some text here, why not'],'agri.jpg','55% 60%','125%'],
            ['ei', ['Extractive Industry','Let\'s put some text here, why not' ],'ei.jpg',"20% 40%"],
            ['infra', ['Infrastructure', 'Available in the fall of 2019'],'infra.jpg'],
            ['wparte',['WPA Route 66', 'Available in the fall of 2019'],'rte66.jpg','40% 45%','300%'],
            ['dp',['Dialect Patterns', 'Available in the fall of 2019'],'dialect.jpg','15% 67%',"400%"]]
        return (
            <div css={css`text-align: center;`}>
            <ul css={css`
                display: flex;
                width: 80%;
                border-top: 1px solid rgba(0,0,0,0.65);
                list-style-type: none;
                padding: 0;
                margin: 15px auto;
            `}>
                {menuContent.map((item, index) =>
                    <li key={index} href={item[0]} onMouseEnter={() => this.mouseEnter(item)} onMouseLeave={() => this.mouseLeave()} 
                    css={css`
                        border-radius: 0px 0px 10px 10px;
                        -moz-border-radius: 0px 0px 10px 10px;
                        -webkit-border-radius: 0px 0px 10px 10px;
                        border: 2px solid transparent;
                        padding: 15px 5px 5px 5px;
                        display: inline-block;
                        min-height: 33px;
                        overflow: wrap;
                        flex: 1;
                        text-align: center;
                        vertical-align: top; 
                        color: black;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-family: 'Lato', sans-serif;
                            &:hover {
                                -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
                                border-bottom: 2px solid white;
                                border-left: 2px solid white;
                                border-right: 2px solid white;
                                background: rgba(0,0,0,0.65);
                                & a {
                                    color: white;
                                }
                            }
                            & a {
                                color: black;
                            }
                        }
                    `}
                        >
                        <a href={`/${item[0]}.html`}>{item[1][0]}</a>
                    </li>
                )}

            </ul>
        </div>
        )
    }
};