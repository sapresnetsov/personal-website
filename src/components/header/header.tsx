import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import LightDarkSwitch from './lightDarkSwitch';

const wrapperStyle = css({
    display: 'flex',
    jusitifyContent: 'space-between',
    height: '20px',
    maxWidth: '1200px',

    margin: '0 auto',
    padding: '10px',

    borderRadius: '5px',
    boxShadow: '0 0 5px black',
});

const Component: React.FunctionComponent = () => {
    return (
        <div css={{
            width: '100%',
            marginTop: '10px',
        }}>
            <div css={wrapperStyle}>
                <div>
                    <div><p css={{margin: 0}}>Заголовок</p></div>
                </div>
                {/*logo*/}
                <div>
                    <div><LightDarkSwitch /></div>
                </div>
                {/*buttons*/}
                {/*<div></div>*/}
                {/*right side buttons*/}
                {/*<div></div>*/}

            </div>

        </div>
    )
};

export default Component;