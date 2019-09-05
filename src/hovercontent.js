import React from "react"
import styled from "@emotion/styled"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import waterways from './images/waterways-sm.jpg'
import agri from './images/agri-sm.jpg'
import ei from './images/ei-sm.jpg'
import infra from './images/infra-sm.jpg'
import wparte from './images/wparte-sm.jpg'
import dp from './images/dialect-sm.jpg'

export default function (props) {
    const images = { 
        waterways: waterways,
        agri: agri,
        ei: ei,
        infra: infra,
        wparte: wparte,
        dp: dp
    }
    var bgImage = images[props.img]
    const display = props.content === '' ?  'none' : 'flex'
    const Hoverdiv = styled.div`
        z-index: 3;
        // box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12) !important;
        // box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12) !important;
        // box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12) !important;
        -webkit-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 50px 0px rgba(0,0,0,0.75);

        border: 2px solid white;
        border-radius: 8px;
        background-color: rgba(0,0,0,0.65);
        height: 300px;
        width: 200px;
        margin: auto;
        overflow: hidden;
        color: white;
        text-align: left;
        font-family: 'Lato', sans-serif;
        & a {
            color: white;
        }
        display: ${display};
        flex-direction: column;
        & .cardsubtext {
            font-family: 'Lato', sans-serif;
            font-weight: 300i;
        }
        & p {
            margin: 0;
            padding-bottom: 5px;
        }
    `
    const Cardimg = styled.div`
        flex: 200px;
        max-height: 200px;
        margin-bottom: 10px;
    `
    const Cardtext = styled.div`
        margin: auto;
        font-weight: 900;
        font-family: 'Libre Baskerville', serif;
        text-align: center;
        padding: 5px 20px;
        flex: 1;
    `
    return (
        <Hoverdiv>
            <Cardimg>
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                    css={css`
                        height: 100%;
                        width: 100%;
                        background-image: url('${bgImage}')
                    `}
                />
                </Cardimg>
            <Cardtext>
                <p>{props.text[0]}</p>
                <span className="cardsubtext"><em>{props.text[1]}</em></span>
            </Cardtext>
        </Hoverdiv>
    )
}