import styled from 'styled-components'

export const StoryWrapper = styled.section`

    padding-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #cccccc;

    &:first-of-type {
        border-top: 0;
    }

    &:last-of-type {
        margin-bottom: 0;
        padding-bottom: 0;
    }
`

export const StoryTitle = styled.h3`

    margin-bottom: 5px;
    font-size: 1em;
    font-weight: normal;
    line-height: 1.8;
    margin:0;
    text-decoration: none;

    a {
        color: #2e2e2c;
        background-color: #f8dc3d;
        text-decoration: none;
    }
`

export const StoryMeta = styled.div`
    font-style: italic;
    color: #828282;
    >span:first-child{
        margin-right:10px;
    }
    >span:not(:first-child):before {
        content: '•'
        margin: 0 7px;
    }
    .story__meta-bold {
        color: #828282;
        font-weight: bold;
    }
`

export const StoryMetaElement = styled.span`
    color: ${props => props.color || 'red'};
`